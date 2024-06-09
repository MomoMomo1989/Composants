<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\profilController;

Route::get('/',[profilController::class,'Accueil'])->name('Accueil');

