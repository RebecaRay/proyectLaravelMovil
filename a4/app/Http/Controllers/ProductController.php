<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use App\Models\Product;
use App\Models\Category;
use App\Models\Supplier;

class ProductController  extends ResponseController
{
    public function getAll()
    {
        $products = Product::all();
        foreach ($products as $prod) {
            $cat = Category::where('id', $prod->category_id)->first();
            $prod->category_name = $cat->name;
        }

        foreach ($products as $prod) {
            $supp = Supplier::where('id', $prod->supplier_id)->first();
            $prod->supplier_name = $supp->name;
        }
        return $this->sendResponse($products, 'Products.');
    }

    public function byId($productid)
    {
        $product = Product::where('id', $productid)->first();
        $cat = Category::where('id', $product->category_id)->first();
        $product->category_name = $cat->name;

        $supp = Supplier::where('id', $product->supplier_id)->first();
        $product->supplier_name = $supp->name;

        return $this->sendResponse($product, 'Product data.');
    }

    public function imageProd($productid)
    {
        $product = Product::where('id', $productid)->first();
        $imageUrl = $product->img;

        return response()->json(['image_url' => $imageUrl]);
    }



    public function update(Request $request)
    {
        $input = $request->all();
        $product = Product::find($request->id);
        $product->name = $request->name;
        $product->price = $request->price;
        $product->description = $request->description;
        $product->stock = $request->stock;
        $product->img = $request->img;

        $cat = Category::where('id', $product->category_id)->first();
        $cat->name = $request->category_name;
        $cat->save();

        $supp = Supplier::where('id', $product->supplier_id)->first();
        $supp->name = $request->supplier_name;
        $supp->save();

        $product->save();
        return $request;
    }

    public function index()
    {
        $products = DB::table('products')->get();

        foreach ($products as $product) {
            $product->stock = $product->stock;
        }

        return response()->json($products);
    }


    public function ofert()
    {
        $products = Product::whereRaw('CAST(price AS SIGNED) < 40')->get();

        return response()->json($products);
    }

    public function create(Request $request)
    {
        $product = Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
            'stock' => $request->stock,
            'category_id' => $request->category_id,
            'supplier_id' => $request->supplier_id,
            'img' => $request->img,
        ]);

        $product->save();
        return $this->sendResponse($product, 'Product register succesfully.');
    }

    public function destroy(string $id)
    {
        $product = Product::where('id', $id)
            ->delete();

        return $this->sendResponse($id, 'Product drop');
    } 
}
