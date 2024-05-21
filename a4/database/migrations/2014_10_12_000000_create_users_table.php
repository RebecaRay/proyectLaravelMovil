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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('lastnameF');
            $table->string('lastnameM');
            $table->string('address');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('c_password');
            $table->string('phoneNum');
            $table->string('payMeth');
            //user= 0, admin= 1
            $table->tinyInteger('role')->default(0);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
