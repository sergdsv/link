<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

Route::get('/docs/search', 'Docs\LocationsController@search', function ($keywords){})->name('locations.search');

Route::group(['prefix'=>'docs', 'namespace'=>'Docs'], function(){
    Route::resource('/posts', 'PostsController');
    Route::resource('/organs', 'OrganizationsController');
    Route::resource('/locations', 'LocationsController');
});


Route::post('image', 'ImageUploadController@upload');
Route::post('image/delete/', 'ImageUploadController@delete');

