<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $category = new Category();
        $category->id = '1';
        $category->name = 'Aceites, semillas, sopas y conservas';
        $category->description = 'Productos indispensables para la cocina';
        $category->save();

        $category2 = new Category();
        $category2->id = '2';
        $category2->name = 'Bebidas';
        $category2->description = 'Para curar cualquier tipo de sed';
        $category2->save();

        $category3 = new Category();
        $category3->id = '3';
        $category3->name = 'Cuidado e higiene personal';
        $category3->description = 'Todo lo relacionado con el aseo personal';
        $category3->save();

        $category4 = new Category();
        $category4->id = '4';
        $category4->name = 'Dulces, galletas y botana';
        $category4->description = 'Para disfrutar con familia, amigos y con uno mismo';
        $category4->save();

        $category5 = new Category();
        $category5->id = '5';
        $category5->name = 'Fiesta y desechables';
        $category5->description = 'Para que se arme el pachangon';
        $category5->save();

        $category6 = new Category();
        $category6->id = '6';
        $category6->name = 'Mascotas';
        $category6->description = 'Para consentir a los reyes del hogar';
        $category6->save();

        $category7 = new Category();
        $category7->id = '7';
        $category7->name = 'Abarrotes para el desayuno';
        $category7->description = 'Para empezar el dia con toda la actitud';
        $category7->save();
    }
}
