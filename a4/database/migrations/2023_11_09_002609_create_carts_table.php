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
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->binary('img');
            $table->string('name');
            $table->integer('unities');
            $table->decimal('total', 6, 2);
            $table->string('status');
            $table->integer('stock');
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')
            ->references('id')->on('categories')
            ->onDelete('cascade');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')
            ->references('id')->on('users')
            ->onDelete('cascade');
            $table->unsignedBigInteger('product_id');
            $table->foreign('product_id')
            ->references('id')->on('products')
            ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carts');
    }
};
