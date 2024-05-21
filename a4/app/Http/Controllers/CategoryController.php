<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class CategoryController extends ResponseController
{
    public function getAll()
    {
        $category = Category::all();
        return $this->sendResponse($category, 'Categories.');
    }

    public function index()
    {
        $category = DB::table('categories')->get();
        return $category;
    }

    public function create(Request $request)
    {
        $category = Category::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);
        $category->save();
        return $this->sendResponse($category, 'Category register succesfully.');
    }

    public function showCategories()
    {
        $categories = Category::all();
        return response()->json($categories);
    }

    public function showProductsByCategory($categoryId)
    {
        $products = Product::where('category_id', $categoryId)->get();
        return response()->json($products);
    }

    public function byId($categoryid)
    {
        $category = Category::where('id', $categoryid)->first();
        return $this->sendResponse($category, 'Category data.');
    }

    public function update(Request $request)
    {
        $input = $request->all();
        $category = Category::find($request->id);
        $category->name = $request->name;
        $category->description = $request->description;

        $category->save();
        return $request;
    }

    public function destroy(string $id)
    {
        $category = Category::where('id', $id)
            ->delete();
        return $this->sendResponse($id, 'Category drop');
    }
}
