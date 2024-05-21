<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = new User();
        $user->name = 'Ivan';
        $user->lastnameF = 'Montoya';
        $user->lastnameM = 'Macias';
        $user->address = 'Sixto #545';
        $user->email = 'ivan@ivan.com';
        $user->password = bcrypt('disabled');
        $user->c_password = bcrypt('disabled');
        $user->phoneNum = '4493930129';
        $user->payMeth = 'Efectivo';
        $user->role = '1';
        $user->save();
        $user = $user->createToken('MyApp')->accessToken;

        $user2 = new user();
        $user2->name = 'Rebeca';
        $user2->lastnameF = 'Raygoza';
        $user2->lastnameM = 'Romo';
        $user2->address = 'El puertecito';
        $user2->email = 'rebe@rebe.com';
        $user2->password = bcrypt('disabled');
        $user2->c_password = bcrypt('disabled');
        $user2->phoneNum = '4493930129';
        $user2->payMeth = 'Efectivo';
        $user2->role = '0';
        $user2->save();
        $user2 = $user2->createToken('MyApp')->accessToken;
    }
}
