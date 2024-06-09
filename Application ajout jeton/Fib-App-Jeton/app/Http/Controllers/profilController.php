<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class profilController extends Controller
{
    //
    public function Accueil(Request $request) {
       return view('Accueil');
    }
}
