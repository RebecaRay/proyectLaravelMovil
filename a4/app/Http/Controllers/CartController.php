<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function store(Request $request)
    {
        try {
            foreach ($request->productos as $producto) {

                Cart::create([
                    'user_id' => $producto['user_id'],
                    'product_id' => $producto['product_id'],
                    'name' => $producto['name'],
                    'price' => $producto['price'],
                    'total' => $producto['total'],
                    'quantity' => $producto['quantity'],
                ]);

                $product = Product::find($producto['product_id']);
                if ($product) {
                    $product->stock -= $producto['quantity'];
                    $product->save();
                }
            }

            return response()->json(['message' => 'Compra realizada con éxito']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getUserCarts()
    {
        try {
            $user_id = Auth::id();
            $carts = Cart::where('user_id', $user_id)->get();

            $carts->transform(function ($cart) {
                $cart->setAttribute('img', $cart->product->img);
                return $cart;
            });

            return response()->json(['carts' => $carts]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function index()
    {
        $orders = DB::table('carts')->get();
        return $orders;
    }
}
