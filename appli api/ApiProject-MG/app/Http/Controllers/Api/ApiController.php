<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\user;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ApiController extends Controller
{
    //
    public function register(Request $request){
        
        $validateurUser = Validator::make($request->all(),[
           'name' => 'required',
           'email' => 'required|email',
           'password' => 'required',
        ]);
        if ($validateurUser->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Erreur de validation',
                'errors' => $validateurUser->errors()
            ],401);
        }
        $user = user::create([
            'name' => $request->name,
           'email' => $request->email,
           'password' => $request->password,
        ]);
        return response()->json([
            'status' => True,
            'message' => 'Ajout avec succes',
            'token' => $user->createToken('API TOKEN')->plainTextToken
        ],200);
    }

    public function login(Request $request){

        $validateurUser = Validator::make($request->all(),[
            'email' => 'required|email',
            'password' => 'required',
         ]);

         if ($validateurUser->fails()) {
             return response()->json([
                 'status' => false,
                 'message' => 'Erreur de validation',
                 'errors' => $validateurUser->errors()
             ],401);
            }
        if(!Auth::attempt($request->only(['email','password']))){
            return response()->json([
                'status' => false,
                'message' => 'Email ou mot de passe incorrect',
            ],401);
        }
    }

    public function index(Request $request){
        echo"Controller de registration";
    }
}
