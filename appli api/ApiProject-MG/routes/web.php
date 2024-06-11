<?php
use App\Http\Controllers\Api\ApiController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('index',[ApiController::class,'index'])->name('index');