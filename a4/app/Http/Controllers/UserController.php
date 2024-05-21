<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends ResponseController
{

    public function getAuthenticatedUser()
    {
        $user = auth()->user();
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $this->sendResponse($user, 'Authenticated User Data.');
    }


    public function update(Request $request)
    {
        $authenticatedUser = Auth::user();
        if (!$authenticatedUser) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $userId = $authenticatedUser->id;
        if ($authenticatedUser->id != $userId) {
            return response()->json(['error' => 'No tiene permiso para actualizar estos datos'], 403);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|regex:/^[\pL\s\-]+$/u|max:30',
            'lastnameF' => 'required|regex:/^[\pL\s\-]+$/u|max:30',
            'lastnameM' => 'required|regex:/^[\pL\s\-]+$/u|max:30',
            'address' => 'required|max:50|',
            'email' => 'required|email|max:50|regex:/^.+@.+\..+$/',
            'password' => 'required|min:8|max:20',
            'c_password' => 'required|same:password',
            'phoneNum' => 'required|regex:/^[0-9]+$/|max:10',
            'payMeth' => 'required',
            'role' => 'nullable',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error', $validator->errors());
        }

        $user = User::find($userId);

        if (!$user) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }

        $user->fill($request->except('password', 'c_password'));

        if ($request->filled('password') && $request->password !== $user->password) {
            $user->password = Hash::make($request->password);
        }

        if ($request->filled('c_password') && $request->c_password !== $user->c_password) {
            $user->c_password = Hash::make($request->c_password);
        }

        $user->phoneNum = $request->phoneNum;
        $user->payMeth = $request->payMeth;
        $user->role = $request->role;

        try {
            $user->save();
            return response()->json(['message' => 'Usuario actualizado con éxito', 'data' => $user], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error al actualizar el usuario', 'message' => $e->getMessage()], 500);
        }
    }


    public function destroy()
    {
        $authenticatedUser = Auth::user();
        if (!$authenticatedUser) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $userId = $authenticatedUser->id;
        if ($authenticatedUser->id != $userId) {
            return response()->json(['error' => 'No tiene permiso para actualizar estos datos'], 403);
        }

        $user = User::find($userId);

        if (!$user) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }

        $user->delete();

        return $this->sendResponse($userId, 'Cuenta eliminada exitosamente');
    }
}
