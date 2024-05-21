<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    public function handle($request, Closure $next)
    {
        $user = Auth::user();


        if ($user && $user->role == 1) {
            return $next($request);
            //return response("You're admin");
        }

        return response("No eres un administrador", 403);
    }
}
