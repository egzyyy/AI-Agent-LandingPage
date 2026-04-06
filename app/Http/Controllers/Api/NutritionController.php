<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NutritionController extends Controller
{
    public function status()
    {
        return response()->json([
            "status" => "API is working",
            "app" => "Nutrition System"
        ]);
    }
}
