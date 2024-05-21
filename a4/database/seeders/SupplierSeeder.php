<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Supplier;

class SupplierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $supplier = new Supplier();
        $supplier->id = '1';
        $supplier->name = 'Productos Verde Valle, S.A. De C.V.';
        $supplier->address = 'Arroz #453';
        $supplier->phoneNum = '4493826362';
        $supplier->save();

        $supplier2 = new Supplier();
        $supplier2->id = '2';
        $supplier2->name = 'Maruchan';
        $supplier2->address = 'Ave. Insurgentes Sur número 688, piso 3, colonia Del Valle, código postal 03100, en México, Ciudad de Mexico';
        $supplier2->phoneNum = '5513924649';
        $supplier2->save();

        $supplier3 = new Supplier();
        $supplier3->id = '3';
        $supplier3->name = 'Ragasa';
        $supplier3->address = 'Via a Tampico 501.5, La Condesa, 67120 Guadalupe, N.L.';
        $supplier3->phoneNum = '8181960100';
        $supplier3->save();

        $supplier4 = new Supplier();
        $supplier4->id = '4';
        $supplier4->name = 'Grupo Lala';
        $supplier4->address = 'Julio Díaz Torre 102, Cd Industrial, 20290 Aguascalientes, Ags';
        $supplier4->phoneNum = '4499104800';
        $supplier4->save();

        $supplier5 = new Supplier();
        $supplier5->id = '5';
        $supplier5->name = 'Regio';
        $supplier5->address = 'Av. Javier Barros Sierra 555, Santa Fe, Zedec Sta Fé 01219 
        Ciudad de México, México';
        $supplier5->phoneNum = '8005225050';
        $supplier5->save();

        $supplier6 = new Supplier();
        $supplier6->id = '6';
        $supplier6->name = 'Dove';
        $supplier6->address = 'Sierra de Tepoztlan 105 A, Bosques del Prado Sur, 20130 Aguascalientes, Ags.';
        $supplier6->phoneNum = '4491993117';
        $supplier6->save();

        $supplier7 = new Supplier();
        $supplier7->id = '7';
        $supplier7->name = 'FEMSA';
        $supplier7->address = 'Mario Pani #100, Col. Santa Fe Cuajimalpa, Deleg. Cuajimalpa, C.P. 05348, México D.F.';
        $supplier7->phoneNum = '5515195000';
        $supplier7->save();

        $supplier8 = new Supplier();
        $supplier8->id = '8';
        $supplier8->name = 'Sabritas';
        $supplier8->address = 'Julio Díaz Torre 203, Cd Industrial, 20290 Aguascalientes, Ags';
        $supplier8->phoneNum = '8009019500';
        $supplier8->save();

        $supplier9 = new Supplier();
        $supplier9->id = '9';
        $supplier9->name = 'Marinela';
        $supplier9->address = 'Av el Colli 2892, Colli CTM, 45050 Zapopan, Jal.';
        $supplier9->phoneNum = '8009102030';
        $supplier9->save();

        $supplier10 = new Supplier();
        $supplier10->id = '10';
        $supplier10->name = 'Colgate';
        $supplier10->address = 'Av. Ejército Nacional Mexicano 843 B, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX';
        $supplier10->phoneNum = '5591267000';
        $supplier10->save();
    }
}
