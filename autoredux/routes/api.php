<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', [AuthController::class,'login']);
    Route::post('register', [AuthController::class,'register']);
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', [AuthController::class,'me']);
    Route::patch('uPdate', [AuthController::class,'uPdate']);



    Route::get('posts', [PostController::class,'index']);
    Route::post('posts', [PostController::class,'store']);
    Route::get('post/{id}', [PostController::class,'show']);
    Route::get('post/{id}/edit', [PostController::class,'edit']);
    Route::patch('post/{id}', [PostController::class,'update']);
    Route::delete('post/{id}', [PostController::class, 'delete']);

});
