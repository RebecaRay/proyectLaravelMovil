<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $product = new Product();
        $product->id = '1';
        $product->name = '1k Arroz Verde Valle';
        $product->price = '30';
        $product->description = 'Un básico en tu despensa. Ideal para preparar de diversas maneras. Acompañante perfecto para tus guisados.';
        $product->stock = '5';
        $product->category_id = 1;
        $product->supplier_id = 1;
        $product->img = 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRNZoZihUXVp0CfdvpxDhkvumq34swTS6ruu2gjNHlOdHK9U25VTEc9iK3Qohpl51iQpVgI2A33XuVFu6MDtddbPE-rnIfPj63jIIv5wmOd5syEN5Xwq3-YYohQr45_FMMzuMgoD10DtA&usqp=CAc';
        $product->save();

        $product2 = new Product();
        $product2->id = '2';
        $product2->name = 'Sopa Maruchan Camarón';
        $product2->price = '14';
        $product2->description = 'Consiente a familia y amigos con su sabor,Ideal para esos días en los que no tienes tiempo de pasar horas en la cocina.';
        $product2->stock = '8';
        $product2->category_id = 1;
        $product2->supplier_id = 2;
        $product2->img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2PCQ8B4bDL8C5b2Oz0uUnbZzvjr-_lnWlow&usqp=CAU';
        $product2->save();

        $product3 = new Product();
        $product3->id = '3';
        $product3->name = 'Aceite Nutroli 946ml';
        $product3->price = '54';
        $product3->description = 'Disfruta de una cocina saludable con Nutrioli de 946 ml, un aceite 
        ideal para tus creaciones culinarias diarias.';
        $product3->stock = '10';
        $product3->category_id = 1;
        $product3->supplier_id = 3;
        $product3->img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtid_CjBeEl__XBs1mNoMK0YwX6iz_HVMB6NghXMcTWg_XHEDmV0zupbRiucpiEL7U6Uo&usqp=CAU';
        $product3->save();

        $product4 = new Product();
        $product4->id = '4';
        $product4->name = 'Leche Lala Ligth 1L';
        $product4->price = '31.50';
        $product4->description = 'Si buscas reducir la cantidad de grasa en tu alimentación y seguir disfrutando del delicioso sabor de la leche, la leche Lala light baja en grasa te aportará todos sus beneficios.';
        $product4->stock = '10';
        $product4->category_id = 2;
        $product4->supplier_id = 4;
        $product4->img = 'https://res.cloudinary.com/walmart-labs/image/upload/c_pad,h_500,w_500,q_auto:best/v1698954589631/gr/images/product-images/img_large/00750102056594L.jpg';
        $product4->save();

        $product5 = new Product();
        $product5->id = '5';
        $product5->name = 'Pack 6 Rollos Papel Higienico Regio Just 1';
        $product5->price = '110';
        $product5->description = 'Regio Just 1 Odor Control, brinda a tu familia una experiencia superior. Con la nueva tecnología Odor Control ya no te preocuparás de los malos olores.';
        $product5->stock = '10';
        $product5->category_id = 3;
        $product5->supplier_id = 5;
        $product5->img = 'https://res.cloudinary.com/walmart-labs/image/upload/c_pad,h_500,w_500,q_auto:best/v1698954668083/gr/images/product-images/img_large/00750103662245L.jpg';
        $product5->save();

        $product6 = new Product();
        $product6->id = '6';
        $product6->name = 'Jabón en barra Dove 135g';
        $product6->price = '30';
        $product6->description = 'Jabón que deja una piel suave y libre de asperezas, con un delicado aroma.';
        $product6->stock = '10';
        $product6->category_id = 3;
        $product6->supplier_id = 6;
        $product6->img = 'https://res.cloudinary.com/walmart-labs/image/upload/c_pad,h_500,w_500,q_auto:best/v1698954668083/gr/images/product-images/img_large/00006723889119L.jpg';
        $product6->save();

        $product7 = new Product();
        $product7->id = '7';
        $product7->name = 'Coca-Cola 2L';
        $product7->price = '34';
        $product7->description = 'Refrescante y con el inconfundible sabor tradicional de siempre.';
        $product7->stock = '10';
        $product7->category_id = 2;
        $product7->supplier_id = 7;
        $product7->img = 'https://res.cloudinary.com/walmart-labs/image/upload/c_pad,h_500,w_500,q_auto:best/v1698954668083/gr/images/product-images/img_large/00750105530292L.jpg';
        $product7->save();

        $product8 = new Product();
        $product8->id = '8';
        $product8->name = 'Papas Sabritas Original 45g';
        $product8->price = '16';
        $product8->description = 'Con su toque exacto de sal y papas naturales, ofrecen un sabor clásico que nunca pasa de moda.';
        $product8->stock = '10';
        $product8->category_id = 4;
        $product8->supplier_id = 8;
        $product8->img = 'https://res.cloudinary.com/walmart-labs/image/upload/c_pad,h_500,w_500,q_auto:best/v1698954668083/gr/images/product-images/img_large/00750101110145L.jpg';
        $product8->save();

        $product9 = new Product();
        $product9->id = '9';
        $product9->name = 'Pastelito Marinela Gansito 50 g';
        $product9->price = '15';
        $product9->description = 'Ingredientes seleccionados cuidadosamente. Disfruta del sabor. Comparte en familia.';
        $product9->stock = '10';
        $product9->category_id = 4;
        $product9->supplier_id = 9;
        $product9->img = 'https://res.cloudinary.com/walmart-labs/image/upload/c_pad,h_500,w_500,q_auto:best/v1698954668083/gr/images/product-images/img_large/00750100015310L.jpg';
        $product9->save();

        $product10 = new Product();
        $product10->id = '10';
        $product10->name = 'Crema dental Colgate Triple Acción menta original 150 ml';
        $product10->price = '60';
        $product10->description = 'Pasta dental Colgate Triple Acción 150 ml, menta original, limpieza profunda. Ideal para tu limpieza bucal. Uso personal, uso diario.';
        $product10->stock = '10';
        $product10->category_id = 3;
        $product10->supplier_id = 10;
        $product10->img = 'https://res.cloudinary.com/walmart-labs/image/upload/c_pad,h_500,w_500,q_auto:best/v1698954668083/gr/images/product-images/img_large/00750954600034L.jpg';
        $product10->save();

        $product11 = new Product();
        $product11->id = '11';
        $product11->name = 'Aceite de Coco Virgen 500ml';
        $product11->price = '35';
        $product11->description = 'Aceite de coco virgen, ideal para cocinar, freír y como hidratante para la piel. Botella de 500 ml.';
        $product11->stock = '15';
        $product11->category_id = 1;
        $product11->supplier_id = 2;
        $product11->img = 'https://m.media-amazon.com/images/I/71Cj36xN6gL.__AC_SX300_SY300_QL70_ML2_.jpg';
        $product11->save();

        // Producto 12
        $product12 = new Product();
        $product12->id = '12';
        $product12->name = 'Semillas de Chía 150g';
        $product12->price = '18';
        $product12->description = 'Semillas de chía, ricas en omega-3 y fibra. Añade a tus batidos, yogures y más. Bolsa de 150 gramos.';
        $product12->stock = '20';
        $product12->category_id = 1;
        $product12->supplier_id = 1;
        $product12->img = 'https://m.media-amazon.com/images/I/61SanBLydpL._AC_UL320_.jpg';
        $product12->save();

        // Producto 13
        $product13 = new Product();
        $product13->id = '13';
        $product13->name = 'Sopa de Tomate en Lata 400g';
        $product13->price = '15';
        $product13->description = 'Sopa de tomate enlatada, lista para calentar y disfrutar. Lata de 400 gramos.';
        $product13->stock = '20';
        $product13->category_id = 1;
        $product13->supplier_id = 5;
        $product13->img = 'https://m.media-amazon.com/images/I/71tvrYz19ML._AC_UL320_.jpg';
        $product13->save();

        // Producto 14
        $product14 = new Product();
        $product14->id = '14';
        $product14->name = 'Conserva de Pimientos Asados 200g';
        $product14->price = '15';
        $product14->description = 'Conserva de pimientos asados, perfecta para ensaladas y acompañamientos. Frasco de 200 gramos.';
        $product14->stock = '15';
        $product14->category_id = 1;
        $product14->supplier_id = 3;
        $product14->img = 'https://m.media-amazon.com/images/I/61C9xuoYvWL._AC_UL320_.jpg';
        $product14->save();

        // Producto 15
        $product15 = new Product();
        $product15->id = '15';
        $product15->name = 'Aceitunas Verdes Rellenas de Queso 200g';
        $product15->price = '12';
        $product15->description = 'Aceitunas verdes rellenas de queso, aperitivo delicioso y listo para servir. Bolsa de 200 gramos.';
        $product15->stock = '18';
        $product15->category_id = 1;
        $product15->supplier_id = 4;
        $product15->img = 'https://m.media-amazon.com/images/I/6156LAC1p3L._AC_UL320_.jpg';
        $product15->save();

        // Producto 16
        $product16 = new Product();
        $product16->id = '16';
        $product16->name = 'Sopa de Lentejas en Lata 400g';
        $product16->price = '16';
        $product16->description = 'Sopa de lentejas enlatada, nutritiva y lista para consumir. Lata de 400 gramos.';
        $product16->stock = '12';
        $product16->category_id = 1;
        $product16->supplier_id = 2;
        $product16->img = 'https://m.media-amazon.com/images/I/61VLjeKtYYL._AC_UL320_.jpg';
        $product16->save();

        // Producto 17
        $product17 = new Product();
        $product17->id = '17';
        $product17->name = 'Aceite de Oliva con Hierbas 150ml';
        $product17->price = '20';
        $product17->description = 'Aceite de oliva con hierbas, ideal para aderezar ensaladas y platillos gourmet. Botella de 150 ml.';
        $product17->stock = '15';
        $product17->category_id = 1;
        $product17->supplier_id = 1;
        $product17->img = 'https://m.media-amazon.com/images/I/51dkK6X76kL._AC_UL320_.jpg';
        $product17->save();

        // Producto 18
        $product18 = new Product();
        $product18->id = '18';
        $product18->name = 'Sopa de Pollo y Verduras en Lata 400g';
        $product18->price = '17';
        $product18->description = 'Sopa de pollo y verduras enlatada, reconfortante y lista para calentar. Lata de 400 gramos.';
        $product18->stock = '20';
        $product18->category_id = 1;
        $product18->supplier_id = 5;
        $product18->img = 'https://m.media-amazon.com/images/I/618Q7AGecqL._AC_UL320_.jpg';
        $product18->save();

        // Producto 19
        $product19 = new Product();
        $product19->id = '19';
        $product19->name = 'Conserva de Champiñones 200g';
        $product19->price = '18';
        $product19->description = 'Conserva de champiñones, versátil para ensaladas, pastas y guisos. Frasco de 200 gramos.';
        $product19->stock = '15';
        $product19->category_id = 1;
        $product19->supplier_id = 3;
        $product19->img = 'https://m.media-amazon.com/images/I/614ByrXaerL._AC_UL320_.jpg';
        $product19->save();

        // Producto 20
        $product20 = new Product();
        $product20->id = '20';
        $product20->name = 'Aceitunas Negras Deshuesadas 150g';
        $product20->price = '20';
        $product20->description = 'Aceitunas negras deshuesadas, perfectas para ensaladas y aperitivos. Bolsa de 150 gramos.';
        $product20->stock = '15';
        $product20->category_id = 1;
        $product20->supplier_id = 4;
        $product20->img = 'https://m.media-amazon.com/images/I/41YYSz4mU2L._AC_UL320_.jpg';
        $product20->save();

        // Producto 21
        $product21 = new Product();
        $product21->id = '21';
        $product21->name = 'Agua Mineral Natural 1.5L';
        $product21->price = '10';
        $product21->description = 'Agua mineral natural embotellada, refrescante y sin gas. Botella de 1.5 litros.';
        $product21->stock = '30';
        $product21->category_id = 2;
        $product21->supplier_id = 1;
        $product21->img = 'https://m.media-amazon.com/images/I/31DNF0LOFtS._AC_UL320_.jpg';
        $product21->save();

        // Producto 22
        $product22 = new Product();
        $product22->id = '22';
        $product22->name = 'Jugo de Naranja Fresco 1L';
        $product22->price = '15';
        $product22->description = 'Jugo de naranja fresco, sin conservantes ni azúcares añadidos. Botella de 1 litro.';
        $product22->stock = '30';
        $product22->category_id = 2;
        $product22->supplier_id = 2;
        $product22->img = 'https://m.media-amazon.com/images/I/61uFbf0YffL._AC_UL320_.jpg';
        $product22->save();

        // Producto 24
        $product24 = new Product();
        $product24->id = '24';
        $product24->name = 'Café soluble 200g';
        $product24->price = '25';
        $product24->description = 'Café soluble, práctico y listo para preparar. Frasco de 200 gramos.';
        $product24->stock = '20';
        $product24->category_id = 2;
        $product24->supplier_id = 4;
        $product24->img = 'https://m.media-amazon.com/images/I/6175vmnh8sL._AC_UL320_.jpg';
        $product24->save();

        // Producto 25
        $product25 = new Product();
        $product25->id = '25';
        $product25->name = 'Té Verde Orgánico 50 bolsitas';
        $product25->price = '18';
        $product25->description = 'Té verde orgánico, antioxidante y saludable. Caja con 50 bolsitas individuales.';
        $product25->stock = '15';
        $product25->category_id = 2;
        $product25->supplier_id = 5;
        $product25->img = 'https://m.media-amazon.com/images/I/61iPHchtvcL._AC_UL320_.jpg';
        $product25->save();

        // Producto 26
        $product26 = new Product();
        $product26->id = '26';
        $product26->name = 'Leche de Almendras 1L';
        $product26->price = '20';
        $product26->description = 'Leche de almendras, alternativa vegetal y nutritiva. Envase de 1 litro.';
        $product26->stock = '18';
        $product26->category_id = 2;
        $product26->supplier_id = 1;
        $product26->img = 'https://m.media-amazon.com/images/I/618w3rDYWGL._AC_UL320_.jpg';
        $product26->save();

        // Producto 28
        $product28 = new Product();
        $product28->id = '28';
        $product28->name = 'Energizante Bebida Energética 250ml';
        $product28->price = '18';
        $product28->description = 'Bebida energética para mejorar la concentración y el rendimiento. Lata de 250 ml.';
        $product28->stock = '20';
        $product28->category_id = 2;
        $product28->supplier_id = 3;
        $product28->img = 'https://m.media-amazon.com/images/I/81kf70OxkyL._AC_UL320_.jpg';
        $product28->save();

        // Producto 29
        $product29 = new Product();
        $product29->id = '29';
        $product29->name = 'Agua de Coco Natural 500ml';
        $product29->price = '15';
        $product29->description = 'Agua de coco natural, hidratante y refrescante. Botella de 500 ml.';
        $product29->stock = '25';
        $product29->category_id = 2;
        $product29->supplier_id = 4;
        $product29->img = 'https://m.media-amazon.com/images/I/51GX9nDMA5L._AC_UL320_.jpg';
        $product29->save();

        // Producto 30
        $product30 = new Product();
        $product30->id = '30';
        $product30->name = 'Cerveza Modelo Pack 12';
        $product30->price = '309';
        $product30->description = 'Cerveza Modelo Pack 12';
        $product30->stock = '15';
        $product30->category_id = 2;
        $product30->supplier_id = 5;
        $product30->img = 'https://m.media-amazon.com/images/I/81rXDas00sS._AC_UL320_.jpg';
        $product30->save();

        // Producto 31
        $product31 = new Product();
        $product31->id = '31';
        $product31->name = 'Jabón en Barra Antibacterial 3 unidades';
        $product31->price = '12';
        $product31->description = 'Jabón en barra antibacterial, protección para la piel. Paquete con 3 unidades.';
        $product31->stock = '30';
        $product31->category_id = 3;
        $product31->supplier_id = 1;
        $product31->img = 'https://m.media-amazon.com/images/I/51QvxPXxaHL._AC_UL320_.jpg';
        $product31->save();

        // Producto 32
        $product32 = new Product();
        $product32->id = '32';
        $product32->name = 'Shampoo y Acondicionador 2 en 1 400ml';
        $product32->price = '15';
        $product32->description = 'Shampoo y acondicionador 2 en 1, para cabello suave y fácil de peinar. Botella de 400 ml.';
        $product32->stock = '25';
        $product32->category_id = 3;
        $product32->supplier_id = 2;
        $product32->img = 'https://m.media-amazon.com/images/I/61kVDY4C49L._AC_UL320_.jpg';
        $product32->save();

        // Producto 33
        $product33 = new Product();
        $product33->id = '33';
        $product33->name = 'Desodorante Roll-On Frescura Duradera';
        $product33->price = '8';
        $product33->description = 'Desodorante roll-on con frescura duradera, protección contra el mal olor. Envase de 40 ml.';
        $product33->stock = '40';
        $product33->category_id = 3;
        $product33->supplier_id = 3;
        $product33->img = 'https://m.media-amazon.com/images/I/51Ss1xZwajL._AC_UL320_.jpg';
        $product33->save();

        // Producto 34
        $product34 = new Product();
        $product34->id = '34';
        $product34->name = 'Cepillo de Dientes Suave Pack de 3';
        $product34->price = '10';
        $product34->description = 'Cepillo de dientes suave, pack económico con 3 unidades. Cuida tu salud bucal.';
        $product34->stock = '35';
        $product34->category_id = 3;
        $product34->supplier_id = 4;
        $product34->img = 'https://m.media-amazon.com/images/I/71Xvi2EgtGL._AC_UL320_.jpg';
        $product34->save();

        // Producto 36
        $product36 = new Product();
        $product36->id = '36';
        $product36->name = 'Cremas Hidratantes para Manos Pack de 2';
        $product36->price = '14';
        $product36->description = 'Cremas hidratantes para manos, pack con dos unidades. Nutrición y suavidad para la piel.';
        $product36->stock = '28';
        $product36->category_id = 3;
        $product36->supplier_id = 1;
        $product36->img = 'https://m.media-amazon.com/images/I/81Jhjo3EwtL._AC_UL320_.jpg';
        $product36->save();

        // Producto 37
        $product37 = new Product();
        $product37->id = '37';
        $product37->name = 'Enjuague Bucal Fresh Mint 400ml';
        $product37->price = '12';
        $product37->description = 'Enjuague bucal con sabor a menta fresca, para una boca limpia y fresca. Botella de 400 ml.';
        $product37->stock = '25';
        $product37->category_id = 3;
        $product37->supplier_id = 2;
        $product37->img = 'https://m.media-amazon.com/images/I/51D1O5bKKfL._AC_UL320_.jpg';
        $product37->save();

        // Producto 38
        $product38 = new Product();
        $product38->id = '38';
        $product38->name = 'Toallas Húmedas para Bebés Pack de 80';
        $product38->price = '15';
        $product38->description = 'Toallas húmedas para bebés, pack con 80 unidades. Suaves y delicadas para la piel.';
        $product38->stock = '20';
        $product38->category_id = 3;
        $product38->supplier_id = 3;
        $product38->img = 'https://m.media-amazon.com/images/I/61KRrvqjoWL._AC_UL320_.jpg';
        $product38->save();

        // Producto 39
        $product39 = new Product();
        $product39->id = '39';
        $product39->name = 'Gel de Ducha Aromaterapia Lavanda 250ml';
        $product39->price = '12';
        $product39->description = 'Gel de ducha con aromaterapia de lavanda, relajante y revitalizante. Botella de 240 ml.';
        $product39->stock = '22';
        $product39->category_id = 3;
        $product39->supplier_id = 4;
        $product39->img = 'https://m.media-amazon.com/images/I/71kE9QQTi8L._AC_UL320_.jpg';
        $product39->save();

        // Producto 40
        $product40 = new Product();
        $product40->id = '40';
        $product40->name = 'Cuchillas de Afeitar Desechables Pack de 10';
        $product40->price = '8';
        $product40->description = 'Cuchillas de afeitar desechables, pack con 10 unidades. Suavidad y precisión al afeitar.';
        $product40->stock = '30';
        $product40->category_id = 3;
        $product40->supplier_id = 5;
        $product40->img = 'https://m.media-amazon.com/images/I/61JFKaC39DL._AC_UL320_.jpg';
        $product40->save();

        // Producto 41
        $product41 = new Product();
        $product41->id = '41';
        $product41->name = 'Chocolates Variados Pack de 6';
        $product41->price = '15';
        $product41->description = 'Chocolates variados en pack de 6 unidades. Deliciosos sabores para satisfacer tus antojos.';
        $product41->stock = '25';
        $product41->category_id = 4;
        $product41->supplier_id = 1;
        $product41->img = 'https://m.media-amazon.com/images/I/71qUZGfDUOL._AC_UL320_.jpg';
        $product41->save();

        // Producto 42
        $product42 = new Product();
        $product42->id = '42';
        $product42->name = 'Galletas de Avena con Pasas 300g';
        $product42->price = '10';
        $product42->description = 'Galletas de avena con pasas, una opción saludable y deliciosa. Envase de 300 gramos.';
        $product42->stock = '30';
        $product42->category_id = 4;
        $product42->supplier_id = 2;
        $product42->img = 'https://m.media-amazon.com/images/I/61XrGb4gg4L._AC_UL320_.jpg';
        $product42->save();

        // Producto 44
        $product44 = new Product();
        $product44->id = '44';
        $product44->name = 'Dulce de Leche en Tarro 400g';
        $product44->price = '18';
        $product44->description = 'Dulce de leche en tarro, suave y delicioso. Envase de 400 gramos.';
        $product44->stock = '20';
        $product44->category_id = 4;
        $product44->supplier_id = 4;
        $product44->img = 'https://m.media-amazon.com/images/I/71CMomIt0iL._AC_UL320_.jpg';
        $product44->save();

        // Producto 45
        $product45 = new Product();
        $product45->id = '45';
        $product45->name = 'Chicles de Menta sin Azúcar Pack de 5';
        $product45->price = '8';
        $product45->description = 'Chicles de menta sin azúcar, pack con 5 unidades. Refresca tu aliento en cualquier momento.';
        $product45->stock = '35';
        $product45->category_id = 4;
        $product45->supplier_id = 5;
        $product45->img = 'https://m.media-amazon.com/images/I/71zOFe66TgL._AC_UL320_.jpg';
        $product45->save();

        // Producto 46
        $product46 = new Product();
        $product46->id = '46';
        $product46->name = 'Almendras Saladas y Tostadas 200g';
        $product46->price = '22';
        $product46->description = 'Almendras saladas y tostadas, snack saludable y delicioso. Bolsa de 200 gramos.';
        $product46->stock = '18';
        $product46->category_id = 4;
        $product46->supplier_id = 1;
        $product46->img = 'https://m.media-amazon.com/images/I/81r9X2GSjLL._AC_UL320_.jpg';
        $product46->save();

        // Producto 47
        $product47 = new Product();
        $product47->id = '47';
        $product47->name = 'Malvaviscos de Colores 250g';
        $product47->price = '10';
        $product47->description = 'Malvaviscos de colores, dulces y suaves. Bolsa de 250 gramos.';
        $product47->stock = '40';
        $product47->category_id = 4;
        $product47->supplier_id = 2;
        $product47->img = 'https://m.media-amazon.com/images/I/71BUA5WUHKL._AC_UL320_.jpg';
        $product47->save();

        // Producto 48
        $product48 = new Product();
        $product48->id = '48';
        $product48->name = 'Palomitas de Maíz Naturales Pack de 3';
        $product48->price = '15';
        $product48->description = 'Palomitas de maíz naturales, pack con 3 bolsas. Ideal para tus noches de película.';
        $product48->stock = '30';
        $product48->category_id = 4;
        $product48->supplier_id = 3;
        $product48->img = 'https://m.media-amazon.com/images/I/81nyXcFmtsL._AC_UL320_.jpg';
        $product48->save();

        // Producto 49
        $product49 = new Product();
        $product49->id = '49';
        $product49->name = 'Caramelos de Frutas Variadas 150g';
        $product49->price = '8';
        $product49->description = 'Caramelos de frutas variadas, sabores refrescantes en cada caramelo. Bolsa de 150 gramos.';
        $product49->stock = '25';
        $product49->category_id = 4;
        $product49->supplier_id = 4;
        $product49->img = 'https://m.media-amazon.com/images/I/71wNvO4bSjL._AC_UL320_.jpg';
        $product49->save();

        // Producto 50
        $product50 = new Product();
        $product50->id = '50';
        $product50->name = 'Barritas de Granola con Chocolate Pack de 4';
        $product50->price = '12';
        $product50->description = 'Barritas de granola con chocolate, pack con 4 unidades. Energía y sabor en cada bocado.';
        $product50->stock = '20';
        $product50->category_id = 4;
        $product50->supplier_id = 5;
        $product50->img = 'https://m.media-amazon.com/images/I/71Ms6dRCUkL._AC_UL320_.jpg';
        $product50->save();

        // Producto 51
        $product51 = new Product();
        $product51->id = '51';
        $product51->name = 'Platos Desechables de Colores Pack de 20';
        $product51->price = '10';
        $product51->description = 'Platos desechables de colores, pack con 20 unidades. Perfectos para fiestas y eventos.';
        $product51->stock = '30';
        $product51->category_id = 5;
        $product51->supplier_id = 1;
        $product51->img = 'https://m.media-amazon.com/images/I/41eirKaGC6L._AC_UL320_.jpg';
        $product51->save();

        // Producto 52
        $product52 = new Product();
        $product52->id = '52';
        $product52->name = 'Vasos de Plástico Transparentes Pack de 50';
        $product52->price = '15';
        $product52->description = 'Vasos de plástico transparentes, pack con 50 unidades. Ideales para bebidas frías.';
        $product52->stock = '25';
        $product52->category_id = 5;
        $product52->supplier_id = 2;
        $product52->img = 'https://m.media-amazon.com/images/I/81Rv3lpMUzL._AC_UL320_.jpg';
        $product52->save();

        // Producto 53
        $product53 = new Product();
        $product53->id = '53';
        $product53->name = 'Servilletas de Papel Estampadas Pack de 200';
        $product53->price = '8';
        $product53->description = 'Servilletas de papel estampadas, pack con 200 unidades. Añade un toque decorativo a tus eventos.';
        $product53->stock = '40';
        $product53->category_id = 5;
        $product53->supplier_id = 3;
        $product53->img = 'https://m.media-amazon.com/images/I/610oyysZcbL._AC_UL320_.jpg';
        $product53->save();

        // Producto 54
        $product54 = new Product();
        $product54->id = '54';
        $product54->name = 'Globos de Fiesta Variados Pack de 30';
        $product54->price = '12';
        $product54->description = 'Globos de fiesta variados, pack con 30 unidades. Perfectos para decorar cualquier celebración.';
        $product54->stock = '35';
        $product54->category_id = 5;
        $product54->supplier_id = 4;
        $product54->img = 'https://m.media-amazon.com/images/I/61aJnoA9-7L._AC_UL320_.jpg';
        $product54->save();

        // Producto 56
        $product56 = new Product();
        $product56->id = '56';
        $product56->name = 'Cubiertos de Plástico Resistentes Pack de 50';
        $product56->price = '10';
        $product56->description = 'Cubiertos de plástico resistentes, pack con 50 unidades. Ideales para comidas en eventos.';
        $product56->stock = '28';
        $product56->category_id = 5;
        $product56->supplier_id = 1;
        $product56->img = 'https://m.media-amazon.com/images/I/71yldse3lzL._AC_UL320_.jpg';
        $product56->save();

        // Producto 57
        $product57 = new Product();
        $product57->id = '57';
        $product57->name = 'Banderines Decorativos Variados';
        $product57->price = '12';
        $product57->description = 'Banderines decorativos variados, perfectos para ambientar cualquier fiesta. Incluye 10 unidades.';
        $product57->stock = '20';
        $product57->category_id = 5;
        $product57->supplier_id = 2;
        $product57->img = 'https://m.media-amazon.com/images/I/61yLYoDIzPL._AC_UL320_.jpg';
        $product57->save();

        // Producto 60
        $product60 = new Product();
        $product60->id = '60';
        $product60->name = 'Velas de Cumpleaños Variadas Pack de 12';
        $product60->price = '8';
        $product60->description = 'Velas de cumpleaños variadas, pack con 12 unidades. Haz que cada celebración sea especial.';
        $product60->stock = '30';
        $product60->category_id = 5;
        $product60->supplier_id = 5;
        $product60->img = 'https://m.media-amazon.com/images/I/81k4SqNpQrL._AC_UL320_.jpg';
        $product60->save();

        // Producto 61
        $product61 = new Product();
        $product61->id = '61';
        $product61->name = 'Comida para Perros Adultos Bolsa de 2kg';
        $product61->price = '25';
        $product61->description = 'Comida balanceada para perros adultos, enriquecida con nutrientes esenciales. Bolsa de 2 kg.';
        $product61->stock = '15';
        $product61->category_id = 6;
        $product61->supplier_id = 1;
        $product61->img = 'https://m.media-amazon.com/images/I/71U+j7MrRqL._AC_UL320_.jpg';
        $product61->save();

        // Producto 62
        $product62 = new Product();
        $product62->id = '62';
        $product62->name = 'Arena para Gatos Aglomerante Bolsa de 5kg';
        $product62->price = '18';
        $product62->description = 'Arena aglomerante para gatos, controla los olores y facilita la limpieza. Bolsa de 5 kg.';
        $product62->stock = '20';
        $product62->category_id = 6;
        $product62->supplier_id = 2;
        $product62->img = 'https://m.media-amazon.com/images/I/81tMfXbtuuL._AC_UL320_.jpg';
        $product62->save();

        // Producto 63
        $product63 = new Product();
        $product63->id = '63';
        $product63->name = 'Juguete para Perros Pelota de Goma';
        $product63->price = '10';
        $product63->description = 'Juguete para perros, pelota de goma resistente. Ideal para juegos de lanzar y morder.';
        $product63->stock = '30';
        $product63->category_id = 6;
        $product63->supplier_id = 3;
        $product63->img = 'https://m.media-amazon.com/images/I/71qd2-tnLiL._AC_UL320_.jpg';
        $product63->save();

        // Producto 65
        $product65 = new Product();
        $product65->id = '65';
        $product65->name = 'Snacks para Perros Sabor a Pollo Pack de 50';
        $product65->price = '12';
        $product65->description = 'Snacks para perros con sabor a pollo, pack con 50 unidades. Premia a tu mascota.';
        $product65->stock = '25';
        $product65->category_id = 6;
        $product65->supplier_id = 5;
        $product65->img = 'https://m.media-amazon.com/images/I/514pyMCwU-L._AC_UL320_.jpg';
        $product65->save();

        // Producto 66
        $product66 = new Product();
        $product66->id = '66';
        $product66->name = 'Collar para Gatos Ajustable con Cascabel';
        $product66->price = '8';
        $product66->description = 'Collar para gatos ajustable con cascabel. Añade estilo y seguridad a tu gato.';
        $product66->stock = '35';
        $product66->category_id = 6;
        $product66->supplier_id = 1;
        $product66->img = 'https://m.media-amazon.com/images/I/51CQiW90ixL._AC_UL320_.jpg';
        $product66->save();

        // Producto 67
        $product67 = new Product();
        $product67->id = '67';
        $product67->name = 'Cepillo para Perros y Gatos';
        $product67->price = '15';
        $product67->description = 'Cepillo para perros y gatos, elimina el pelo suelto y mantiene su pelaje saludable.';
        $product67->stock = '28';
        $product67->category_id = 6;
        $product67->supplier_id = 2;
        $product67->img = 'https://m.media-amazon.com/images/I/61N4sKB3arL._AC_UL320_.jpg';
        $product67->save();

        // Producto 68
        $product68 = new Product();
        $product68->id = '68';
        $product68->name = 'Comedero para Mascotas Antideslizante';
        $product68->price = '12';
        $product68->description = 'Comedero para mascotas antideslizante, evita derrames durante la comida. Tamaño mediano.';
        $product68->stock = '22';
        $product68->category_id = 6;
        $product68->supplier_id = 3;
        $product68->img = 'https://m.media-amazon.com/images/I/61H0QBfDp8L._AC_UL320_.jpg';
        $product68->save();

        // Producto 69
        $product69 = new Product();
        $product69->id = '69';
        $product69->name = 'Juguete para Gatos Caña con Plumas';
        $product69->price = '10';
        $product69->description = 'Juguete para gatos, caña con plumas que estimula el instinto de caza. Horas de diversión garantizadas.';
        $product69->stock = '20';
        $product69->category_id = 6;
        $product69->supplier_id = 4;
        $product69->img = 'https://m.media-amazon.com/images/I/71rXv9QqoZL._AC_UL320_.jpg';
        $product69->save();

        // Producto 70
        $product70 = new Product();
        $product70->id = '70';
        $product70->name = 'Correa para Perros Extensible 3 metros';
        $product70->price = '18';
        $product70->description = 'Correa para perros extensible de 3 metros, ideal para paseos cómodos y seguros.';
        $product70->stock = '18';
        $product70->category_id = 6;
        $product70->supplier_id = 5;
        $product70->img = 'https://m.media-amazon.com/images/I/61-v6hlYe6L._AC_UL320_.jpg';
        $product70->save();

        // Producto 71
        $product71 = new Product();
        $product71->id = '71';
        $product71->name = 'Cereal Integral con Frutas 500g';
        $product71->price = '15';
        $product71->description = 'Cereal integral con frutas, fuente de fibra y energía para un desayuno saludable. Envase de 500 gramos.';
        $product71->stock = '20';
        $product71->category_id = 7;
        $product71->supplier_id = 1;
        $product71->img = 'https://m.media-amazon.com/images/I/81k5BO5bXZS._AC_UL320_.jpg';
        $product71->save();

        // Producto 74
        $product74 = new Product();
        $product74->id = '74';
        $product74->name = 'Mermelada de Fresa 300g';
        $product74->price = '12';
        $product74->description = 'Mermelada de fresa, dulce y deliciosa. Tarro de 300 gramos.';
        $product74->stock = '35';
        $product74->category_id = 7;
        $product74->supplier_id = 4;
        $product74->img = 'https://m.media-amazon.com/images/I/712wqUTy4xL._AC_UL320_.jpg';
        $product74->save();

        // Producto 75
        $product75 = new Product();
        $product75->id = '75';
        $product75->name = 'Pan Integral Multicereales';
        $product75->price = '8';
        $product75->description = 'Pan integral multicereales, fuente de fibra y nutrientes. Pack con 6 unidades.';
        $product75->stock = '40';
        $product75->category_id = 7;
        $product75->supplier_id = 5;
        $product75->img = 'https://m.media-amazon.com/images/I/71YUPjVDmtL._AC_UL320_.jpg';
        $product75->save();

        // Producto 76
        $product76 = new Product();
        $product76->id = '76';
        $product76->name = 'Yogurt Natural sin Azúcar 200g';
        $product76->price = '6';
        $product76->description = 'Yogur natural sin azúcar, fuente de probióticos. Envase individual de 200 gramos.';
        $product76->stock = '45';
        $product76->category_id = 7;
        $product76->supplier_id = 1;
        $product76->img = 'https://m.media-amazon.com/images/I/71xEp5of+bS._AC_UL320_.jpg';
        $product76->save();

        // Producto 77
        $product77 = new Product();
        $product77->id = '77';
        $product77->name = 'Miel Pura de Abeja 250g';
        $product77->price = '14';
        $product77->description = 'Miel pura de abeja, endulza tus desayunos de manera natural. Tarro de 250 gramos.';
        $product77->stock = '18';
        $product77->category_id = 7;
        $product77->supplier_id = 2;
        $product77->img = 'https://m.media-amazon.com/images/I/41Xm510YZ5L._AC_UL320_.jpg';
        $product77->save();

        // Producto 78
        $product78 = new Product();
        $product78->id = '78';
        $product78->name = 'Té Negro English Breakfast Pack de 20 bolsitas';
        $product78->price = '10';
        $product78->description = 'Té negro English Breakfast, vigorizante y de sabor intenso. Pack con 20 bolsitas individuales.';
        $product78->stock = '22';
        $product78->category_id = 7;
        $product78->supplier_id = 3;
        $product78->img = 'https://m.media-amazon.com/images/I/61+vRwhuFkL._AC_UL320_.jpg';
        $product78->save();

        // Producto 79
        $product79 = new Product();
        $product79->id = '79';
        $product79->name = 'Cereal Barra de Granola con Frutas Pack de 8';
        $product79->price = '12';
        $product79->description = 'Barra de granola con frutas, ideal como snack o complemento para el desayuno. Pack con 8 unidades.';
        $product79->stock = '28';
        $product79->category_id = 7;
        $product79->supplier_id = 4;
        $product79->img = 'https://m.media-amazon.com/images/I/61IWWgaKAkL._AC_UL320_.jpg';
        $product79->save();

        // Producto 80
        $product80 = new Product();
        $product80->id = '80';
        $product80->name = 'Jugo de Naranja Natural 1L';
        $product80->price = '16';
        $product80->description = 'Jugo de naranja natural, sin aditivos ni conservantes. Botella de 1 litro.';
        $product80->stock = '15';
        $product80->category_id = 7;
        $product80->supplier_id = 5;
        $product80->img = 'https://m.media-amazon.com/images/I/61uFbf0YffL._AC_UL320_.jpg';
        $product80->save();
    }
}
