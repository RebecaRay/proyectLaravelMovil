<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('price');
            $table->string('description');
            $table->string('stock');
            

            $table->unsignedBigInteger('category_id')->nullable();
            $table->foreign('category_id')
            ->references('id')->on('categories')
            ->onDelete('cascade');

            $table->unsignedBigInteger('supplier_id')->nullable();
            $table->foreign('supplier_id')
            ->references('id')->on('suppliers')
            ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products',function(Blueprint $table){
            $table->dropForeign('products_category_id_foreign');
            $table->dropColumn('category_id');
            $table->dropForeign('products_supplier_id_foreign');
            $table->dropColumn('supplier_id');
        });
    }
};
