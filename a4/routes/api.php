<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SupplierController;


// Public
Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [RegisterController::class, 'login']);
Route::get('/product_index', [ProductController::class, 'index']);
Route::get('/category', [CategoryController::class, 'showCategories']);
Route::get('/category/{categoryId}', [CategoryController::class, 'showProductsByCategory']);
Route::get('/products/id/img/{productid}', [ProductController::class, 'imageProd']);
Route::get('/user/{userId}', [UserController::class, 'getUserById']);
Route::get('/supplier', [SupplierController::class, 'showSuppliers']);
Route::get('/supplier/{supplierId}', [SupplierController::class, 'showProductsBySupplier']);


// Routes accessible to authenticated users
Route::middleware(['auth:api'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('logout', [RegisterController::class, 'logout']);
    Route::get('/user/{userId}/carts', [CartController::class, 'getUserCarts']);
    Route::post('/cart', [CartController::class, 'store']);
    Route::get('user/id', [UserController::class, 'getAuthenticatedUser']);
    Route::put('user/{userId}', [UserController::class, 'update']);
    Route::delete('user/delete/{userId}', [UserController::class, 'destroy']);


    // Routes accessible only to administrators
    Route::middleware(['admin'])->group(function () {
    });
});
