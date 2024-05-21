<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use App\Models\Supplier;
use App\Models\Product;

class SupplierController extends ResponseController
{
    public function getAll()
    {
        $supplier = Supplier::all();
        return $this->sendResponse($supplier, 'Suppliers.');
    }

    public function create(Request $request)
    {
        $supplier = Supplier::create([
            'name' => $request->name,
            'address' => $request->address,
            'phoneNum' => $request->phoneNum,

        ]);
        $supplier->save();
        return $this->sendResponse($supplier, 'Supplier register succesfully.');
    }

    public function byId($supplierid)
    {
        $supplier = Supplier::find($supplierid);
        if (!$supplier) {
            return $this->sendError('Supplier not found.', [], 404);
        }
        return $this->sendResponse($supplier, 'Supplier data.');
    }

    public function byName($supplierName)
    {
        $supplier = Supplier::where('name', 'LIKE', '%' . $supplierName . '%')->get();
        if ($supplier->isEmpty()) {
            return $this->sendError('No suppliers found with the provided name.', [], 404);
        }
        return $this->sendResponse($supplier, 'Suppliers found by name.');
    }
    public function showSuppliers()
    {
        $suppliers = Supplier::all();
        return $this->sendResponse($suppliers, 'Suppliers.');
    }

    public function showProductsBySupplier($supplierid)
    {
        $products = Product::where('supplier_id', $supplierid)->get();
        return response()->json($products);
    }

    public function update(Request $request)
    {
        $input = $request->all();
        $supplier = Supplier::find($request->id);
        $supplier->name = $request->name;
        $supplier->address = $request->address;
        $supplier->phoneNum = $request->phoneNum;

        $supplier->save();
        return $request;
    }

    public function destroy(string $id)
    {
        $supplier = Supplier::where('id', $id)
            ->delete();
        return $this->sendResponse($id, 'Supplier drop');
    }
}
