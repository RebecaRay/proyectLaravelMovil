<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PersonalAccessClient;

class PersonalAccessClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $PersonalAccessClient1=new PersonalAccessClient();
        $PersonalAccessClient1->id=1;
        $PersonalAccessClient1->client_id=1;
        $PersonalAccessClient1->created_at= '2023-10-27 23:56:57';
        $PersonalAccessClient1->updated_at= '2023-10-27 23:56:57';
        $PersonalAccessClient1->save();
    }
}
