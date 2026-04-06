<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\IhadirController;
use App\Http\Controllers\Api\AssessHubController;
use App\Http\Controllers\Api\NutritionController;

// General API status route
Route::get('/status', function () {
    return response()->json([
        "status" => "API is working",
        "app" => "Central API Gateway"
    ]);
});

// Specific system routes
Route::get('/ihadir/status', [IhadirController::class, 'status']);
Route::get('/assesshub/status', [AssessHubController::class, 'status']);
Route::get('/nutrition/status', [NutritionController::class, 'status']);
