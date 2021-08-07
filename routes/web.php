<?php

use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// auth
Route::inertia('/login', 'Login');

// pwa
Route::get('/offline', function () {
    return view('vendor.laravelpwa.offline');
});

// route for vite
Route::fallback(function (string $path) {
    if (! App::environment('local') || ! str_starts_with($path, 'resources')) {
        throw new NotFoundHttpException();
    }
    return Redirect::to(config('vite.dev_url') . '/' . $path);
});
