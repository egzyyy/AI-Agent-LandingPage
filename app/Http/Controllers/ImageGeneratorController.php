<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Http;

class ImageGeneratorController extends Controller
{
    public function generate(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'prompt' => 'required|string|max:500',
        ]);

        $apiKey = config('services.gemini.key');

        if (empty($apiKey)) {
            return response()->json(['error' => 'GEMINI_API_KEY is not set in your .env file.'], 500);
        }

        $response = Http::timeout(60)->post(
            "https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key={$apiKey}",
            [
                'instances' => [
                    ['prompt' => $validated['prompt']],
                ],
                'parameters' => [
                    'sampleCount'  => 1,
                    'aspectRatio'  => '16:9',
                    'outputOptions' => ['mimeType' => 'image/jpeg'],
                ],
            ]
        );

        if ($response->failed()) {
            $error = $response->json('error.message', 'Unknown error from Gemini API.');
            return response()->json(['error' => $error], 500);
        }

        $b64 = $response->json('predictions.0.bytesBase64Encoded');

        if (!$b64) {
            return response()->json(['error' => 'No image returned from Gemini.'], 500);
        }

        return response()->json([
            'image' => 'data:image/jpeg;base64,' . $b64,
        ]);
    }
}
