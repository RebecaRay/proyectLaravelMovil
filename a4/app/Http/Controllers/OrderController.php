<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function store(Request $request)
    {

        try {

            foreach ($request->productos as $producto) {

                Order::create([
                    'user_id' => $producto['user_id'],
                    'name' => $producto['name'],
                    'price' => $producto['price'],
                    'total' => $producto['total'],
                ]);

                $product = Product::find($producto['id']);
                if ($product) {
                    $product->stock -= 1;
                    $product->save();
                }
            }
            return response()->json(['message' => 'Compra realizada con éxito']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getUserOrders()
    {
        try {
            $user_id = Auth::id();
            $orders = Order::where('user_id', $user_id)->get();

            return response()->json(['orders' => $orders]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function index()
    {
        $orders = DB::table('orders')->get();
        return $orders;
    }
}
