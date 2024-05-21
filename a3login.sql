-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-11-2023 a las 04:05:11
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `a3login`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `carts`
--

INSERT INTO `carts` (`id`, `user_id`, `product_id`, `name`, `price`, `total`, `quantity`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '1k Arroz Verde Valle', '30', '30', 1, '2023-11-14 08:51:03', '2023-11-14 08:51:03'),
(2, 2, 5, 'Pack 6 Rollos Papel Higienico Regio Just 1', '110', '110', 1, '2023-11-14 08:51:23', '2023-11-14 08:51:23'),
(3, 1, 1, '1k Arroz Verde Valle', '30', '120', 4, '2023-11-14 08:53:09', '2023-11-14 08:53:09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Aceites, semillas, sopas y conservas', 'Productos indispensables para la cocina', '2023-11-14 08:49:46', '2023-11-14 08:49:46'),
(2, 'Bebidas', 'Para curar cualquier tipo de sed', '2023-11-14 08:49:46', '2023-11-14 08:49:46'),
(3, 'Cuidado e higiene personal', 'Todo lo relacionado con el aseo personal', '2023-11-14 08:49:46', '2023-11-14 08:49:46'),
(4, 'Dulces, galletas y botana', 'Para disfrutar con familia, amigos y con uno mismo', '2023-11-14 08:49:46', '2023-11-14 08:49:46'),
(5, 'Fiesta y desechables', 'Para que se arme el pachangon', '2023-11-14 08:49:46', '2023-11-14 08:49:46'),
(6, 'Mascotas', 'Para consentir a los reyes del hogar', '2023-11-14 08:49:46', '2023-11-14 08:49:46'),
(7, 'Abarrotes para el desayuno', 'Para empezar el dia con toda la actitud', '2023-11-14 08:49:46', '2023-11-14 08:49:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2019_08_19_000000_create_failed_jobs_table', 1),
(9, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(10, '2023_10_29_022433_create_categories_table', 1),
(11, '2023_10_29_024052_create_suppliers_table', 1),
(12, '2023_10_29_025258_create_products_table', 1),
(13, '2023_10_29_033411_update_products_table', 1),
(14, '2023_10_29_034528_corregir_tabla_productos', 1),
(15, '2023_10_29_034912_drop_products_table', 1),
(16, '2023_10_29_035022_crear_products_table', 1),
(17, '2023_11_02_191633_actu_products_table', 1),
(18, '2023_11_09_002609_create_carts_table', 1),
(19, '2023_11_09_004517_delete_carts', 1),
(20, '2023_11_09_004600_crear_carts', 1),
(21, '2023_11_11_045213_create_orders_table', 1),
(22, '2023_11_14_012713_borrar_carts', 1),
(23, '2023_11_14_012811_new_carts', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('1a762fff1957894563ec2ed73e8b86548020b10b0dc9ed3f27802d3a4c1eef5930f9eb4cd4b0007b', 1, 1, 'MyApp', '[]', 1, '2023-11-14 08:53:40', '2023-11-14 08:53:51', '2024-11-14 02:53:40'),
('25ae6c5561941ae19af5971a4b8045d81a57c4018feef1ca654d26d35e32604dd85afdbfec4321bd', 1, 1, 'MyApp', '[]', 1, '2023-11-14 08:51:35', '2023-11-14 08:52:06', '2024-11-14 02:51:35'),
('37314469368e952a7b4226c3d93d34579867e283b33cdfcfc937f4409885b623c7ae8f09657c0b28', 2, 1, 'MyApp', '[]', 0, '2023-11-14 08:50:36', '2023-11-14 08:50:36', '2024-11-14 02:50:36'),
('52df8fe2b2a54b67411b3170b31ebd732dc2efb400918a5af5cfdb8ab595c008a5834b8a77f1b55c', 1, 1, 'MyApp', '[]', 1, '2023-11-14 08:53:00', '2023-11-14 08:53:21', '2024-11-14 02:53:00'),
('5606663ed4738774ca2bb95263cbfad3b5b1d7d40707b9c8ee8d3d3024b4dc4b3bc1a4a9db899fa3', 1, 1, 'MyApp', '[]', 0, '2023-11-14 08:49:46', '2023-11-14 08:49:46', '2024-11-14 02:49:46'),
('616414b80305d9b116cd0c25ec4fe6c620c9814ae59464293b1b3426d0cc8be2447cf27c0f4c120d', 1, 1, 'MyApp', '[]', 1, '2023-11-14 08:50:06', '2023-11-14 08:50:16', '2024-11-14 02:50:06'),
('7a83d52730ac2544dfab16253786a4d0637444636651566244c5ebe3e1952486f800ff6b5b425216', 1, 1, 'MyApp', '[]', 1, '2023-11-14 08:50:50', '2023-11-14 08:51:11', '2024-11-14 02:50:50'),
('895bf8bff314a9ba631b872b8f08292866b5d870e5b2a987438ca05d45b0482bfcea353226563b82', 2, 1, 'MyApp', '[]', 1, '2023-11-14 08:53:30', '2023-11-14 08:53:36', '2024-11-14 02:53:30'),
('ea7121442c3b8100c866e8748c2b924a353fd165b92bd7080649e1b7d7388d44eb5c3dcf27300133', 2, 1, 'MyApp', '[]', 1, '2023-11-14 08:51:16', '2023-11-14 08:51:32', '2024-11-14 02:51:16'),
('f04ef60bb9d2551f524f174776fc2cc2396b26c77e90545dc7702774cc78d7d78a45d376e504ad70', 2, 1, 'MyApp', '[]', 1, '2023-11-14 08:50:40', '2023-11-14 08:50:46', '2024-11-14 02:50:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'H7VqoZfGG2ReS4gkjjB4wIzcfQO4pOKyfFJNvGJy', NULL, 'http://localhost', 1, 0, 0, '2023-10-28 05:56:57', '2023-10-28 05:56:57'),
(2, NULL, 'Laravel Password Grant Client', 'ZmD1skLjeRmymtJhrws1i1vOewNruqcO7ZG7J8kB', 'users', 'http://localhost', 0, 1, 0, '2023-10-28 05:56:57', '2023-10-28 05:56:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2023-10-28 05:56:57', '2023-10-28 05:56:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stock` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint(20) UNSIGNED DEFAULT NULL,
  `supplier_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `stock`, `category_id`, `supplier_id`, `created_at`, `updated_at`, `img`) VALUES
(1, '1k Arroz Verde Valle', '30', 'Un básico en tu despensa. Ideal para preparar de diversas maneras. Acompañante perfecto para tus guisados.', '0', 1, 1, '2023-11-14 08:49:46', '2023-11-14 08:53:09', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRNZoZihUXVp0CfdvpxDhkvumq34swTS6ruu2gjNHlOdHK9U25VTEc9iK3Qohpl51iQpVgI2A33XuVFu6MDtddbPE-rnIfPj63jIIv5wmOd5syEN5Xwq3-YYohQr45_FMMzuMgoD10DtA&usqp=CAc'),
(2, 'Sopa Maruchan Camarón', '14', 'Consiente a familia y amigos con su sabor,Ideal para esos días en los que no tienes tiempo de pasar horas en la cocina.', '8', 1, 2, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2PCQ8B4bDL8C5b2Oz0uUnbZzvjr-_lnWlow&usqp=CAU'),
(3, 'Aceite Nutroli 946ml', '54', 'Disfruta de una cocina saludable con Nutrioli de 946 ml, un aceite \n        ideal para tus creaciones culinarias diarias.', '10', 1, 3, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtid_CjBeEl__XBs1mNoMK0YwX6iz_HVMB6NghXMcTWg_XHEDmV0zupbRiucpiEL7U6Uo&usqp=CAU'),
(4, 'Leche Lala Ligth 1L', '31.50', 'Si buscas reducir la cantidad de grasa en tu alimentación y seguir disfrutando del delicioso sabor de la leche, la leche Lala light baja en grasa te aportará todos sus beneficios.', '10', 2, 4, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://res.cloudinary.com/walmart-labs/image/upload/c_pad,h_500,w_500,q_auto:best/v1698954589631/gr/images/product-images/img_large/00750102056594L.jpg'),
(5, 'Pack 6 Rollos Papel Higienico Regio Just 1', '110', 'Regio Just 1 Odor Control, brinda a tu familia una experiencia superior. Con la nueva tecnología Odor Control ya no te preocuparás de los malos olores.', '9', 3, 5, '2023-11-14 08:49:46', '2023-11-14 08:51:23', 'https://res.cloudinary.com/walmart-labs/image/upload/c_pad,h_500,w_500,q_auto:best/v1698954668083/gr/images/product-images/img_large/00750103662245L.jpg'),
(6, 'Jabón en barra Dove 135g', '30', 'Jabón que deja una piel suave y libre de asperezas, con un delicado aroma.', '10', 3, 6, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://res.cloudinary.com/walmart-labs/image/upload/c_pad,h_500,w_500,q_auto:best/v1698954668083/gr/images/product-images/img_large/00006723889119L.jpg'),
(7, 'Coca-Cola 2L', '34', 'Refrescante y con el inconfundible sabor tradicional de siempre.', '10', 2, 7, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://res.cloudinary.com/walmart-labs/image/upload/c_pad,h_500,w_500,q_auto:best/v1698954668083/gr/images/product-images/img_large/00750105530292L.jpg'),
(8, 'Papas Sabritas Original 45g', '16', 'Con su toque exacto de sal y papas naturales, ofrecen un sabor clásico que nunca pasa de moda.', '10', 4, 8, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://res.cloudinary.com/walmart-labs/image/upload/c_pad,h_500,w_500,q_auto:best/v1698954668083/gr/images/product-images/img_large/00750101110145L.jpg'),
(9, 'Pastelito Marinela Gansito 50 g', '15', 'Ingredientes seleccionados cuidadosamente. Disfruta del sabor. Comparte en familia.', '10', 4, 9, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://res.cloudinary.com/walmart-labs/image/upload/c_pad,h_500,w_500,q_auto:best/v1698954668083/gr/images/product-images/img_large/00750100015310L.jpg'),
(10, 'Crema dental Colgate Triple Acción menta original 150 ml', '60', 'Pasta dental Colgate Triple Acción 150 ml, menta original, limpieza profunda. Ideal para tu limpieza bucal. Uso personal, uso diario.', '10', 3, 10, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://res.cloudinary.com/walmart-labs/image/upload/c_pad,h_500,w_500,q_auto:best/v1698954668083/gr/images/product-images/img_large/00750954600034L.jpg'),
(11, 'Aceite de Coco Virgen 500ml', '35', 'Aceite de coco virgen, ideal para cocinar, freír y como hidratante para la piel. Botella de 500 ml.', '15', 1, 2, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/71Cj36xN6gL.__AC_SX300_SY300_QL70_ML2_.jpg'),
(12, 'Semillas de Chía 150g', '18', 'Semillas de chía, ricas en omega-3 y fibra. Añade a tus batidos, yogures y más. Bolsa de 150 gramos.', '20', 1, 1, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/61SanBLydpL._AC_UL320_.jpg'),
(13, 'Sopa de Tomate en Lata 400g', '15', 'Sopa de tomate enlatada, lista para calentar y disfrutar. Lata de 400 gramos.', '20', 1, 5, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/71tvrYz19ML._AC_UL320_.jpg'),
(14, 'Conserva de Pimientos Asados 200g', '15', 'Conserva de pimientos asados, perfecta para ensaladas y acompañamientos. Frasco de 200 gramos.', '15', 1, 3, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/61C9xuoYvWL._AC_UL320_.jpg'),
(15, 'Aceitunas Verdes Rellenas de Queso 200g', '12', 'Aceitunas verdes rellenas de queso, aperitivo delicioso y listo para servir. Bolsa de 200 gramos.', '18', 1, 4, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/6156LAC1p3L._AC_UL320_.jpg'),
(16, 'Sopa de Lentejas en Lata 400g', '16', 'Sopa de lentejas enlatada, nutritiva y lista para consumir. Lata de 400 gramos.', '12', 1, 2, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/61VLjeKtYYL._AC_UL320_.jpg'),
(17, 'Aceite de Oliva con Hierbas 150ml', '20', 'Aceite de oliva con hierbas, ideal para aderezar ensaladas y platillos gourmet. Botella de 150 ml.', '15', 1, 1, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/51dkK6X76kL._AC_UL320_.jpg'),
(18, 'Sopa de Pollo y Verduras en Lata 400g', '17', 'Sopa de pollo y verduras enlatada, reconfortante y lista para calentar. Lata de 400 gramos.', '20', 1, 5, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/618Q7AGecqL._AC_UL320_.jpg'),
(19, 'Conserva de Champiñones 200g', '18', 'Conserva de champiñones, versátil para ensaladas, pastas y guisos. Frasco de 200 gramos.', '15', 1, 3, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/614ByrXaerL._AC_UL320_.jpg'),
(20, 'Aceitunas Negras Deshuesadas 150g', '20', 'Aceitunas negras deshuesadas, perfectas para ensaladas y aperitivos. Bolsa de 150 gramos.', '15', 1, 4, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/41YYSz4mU2L._AC_UL320_.jpg'),
(21, 'Agua Mineral Natural 1.5L', '10', 'Agua mineral natural embotellada, refrescante y sin gas. Botella de 1.5 litros.', '30', 2, 1, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/31DNF0LOFtS._AC_UL320_.jpg'),
(22, 'Jugo de Naranja Fresco 1L', '15', 'Jugo de naranja fresco, sin conservantes ni azúcares añadidos. Botella de 1 litro.', '30', 2, 2, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/61uFbf0YffL._AC_UL320_.jpg'),
(24, 'Café soluble 200g', '25', 'Café soluble, práctico y listo para preparar. Frasco de 200 gramos.', '20', 2, 4, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/6175vmnh8sL._AC_UL320_.jpg'),
(25, 'Té Verde Orgánico 50 bolsitas', '18', 'Té verde orgánico, antioxidante y saludable. Caja con 50 bolsitas individuales.', '15', 2, 5, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/61iPHchtvcL._AC_UL320_.jpg'),
(26, 'Leche de Almendras 1L', '20', 'Leche de almendras, alternativa vegetal y nutritiva. Envase de 1 litro.', '18', 2, 1, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/618w3rDYWGL._AC_UL320_.jpg'),
(28, 'Energizante Bebida Energética 250ml', '18', 'Bebida energética para mejorar la concentración y el rendimiento. Lata de 250 ml.', '20', 2, 3, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/81kf70OxkyL._AC_UL320_.jpg'),
(29, 'Agua de Coco Natural 500ml', '15', 'Agua de coco natural, hidratante y refrescante. Botella de 500 ml.', '25', 2, 4, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/51GX9nDMA5L._AC_UL320_.jpg'),
(30, 'Cerveza Modelo Pack 12', '309', 'Cerveza Modelo Pack 12', '15', 2, 5, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/81rXDas00sS._AC_UL320_.jpg'),
(31, 'Jabón en Barra Antibacterial 3 unidades', '12', 'Jabón en barra antibacterial, protección para la piel. Paquete con 3 unidades.', '30', 3, 1, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/51QvxPXxaHL._AC_UL320_.jpg'),
(32, 'Shampoo y Acondicionador 2 en 1 400ml', '15', 'Shampoo y acondicionador 2 en 1, para cabello suave y fácil de peinar. Botella de 400 ml.', '25', 3, 2, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/61kVDY4C49L._AC_UL320_.jpg'),
(33, 'Desodorante Roll-On Frescura Duradera', '8', 'Desodorante roll-on con frescura duradera, protección contra el mal olor. Envase de 40 ml.', '40', 3, 3, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/51Ss1xZwajL._AC_UL320_.jpg'),
(34, 'Cepillo de Dientes Suave Pack de 3', '10', 'Cepillo de dientes suave, pack económico con 3 unidades. Cuida tu salud bucal.', '35', 3, 4, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/71Xvi2EgtGL._AC_UL320_.jpg'),
(36, 'Cremas Hidratantes para Manos Pack de 2', '14', 'Cremas hidratantes para manos, pack con dos unidades. Nutrición y suavidad para la piel.', '28', 3, 1, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/81Jhjo3EwtL._AC_UL320_.jpg'),
(37, 'Enjuague Bucal Fresh Mint 400ml', '12', 'Enjuague bucal con sabor a menta fresca, para una boca limpia y fresca. Botella de 400 ml.', '25', 3, 2, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/51D1O5bKKfL._AC_UL320_.jpg'),
(38, 'Toallas Húmedas para Bebés Pack de 80', '15', 'Toallas húmedas para bebés, pack con 80 unidades. Suaves y delicadas para la piel.', '20', 3, 3, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/61KRrvqjoWL._AC_UL320_.jpg'),
(39, 'Gel de Ducha Aromaterapia Lavanda 250ml', '12', 'Gel de ducha con aromaterapia de lavanda, relajante y revitalizante. Botella de 240 ml.', '22', 3, 4, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/71kE9QQTi8L._AC_UL320_.jpg'),
(40, 'Cuchillas de Afeitar Desechables Pack de 10', '8', 'Cuchillas de afeitar desechables, pack con 10 unidades. Suavidad y precisión al afeitar.', '30', 3, 5, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/61JFKaC39DL._AC_UL320_.jpg'),
(41, 'Chocolates Variados Pack de 6', '15', 'Chocolates variados en pack de 6 unidades. Deliciosos sabores para satisfacer tus antojos.', '25', 4, 1, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/71qUZGfDUOL._AC_UL320_.jpg'),
(42, 'Galletas de Avena con Pasas 300g', '10', 'Galletas de avena con pasas, una opción saludable y deliciosa. Envase de 300 gramos.', '30', 4, 2, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/61XrGb4gg4L._AC_UL320_.jpg'),
(44, 'Dulce de Leche en Tarro 400g', '18', 'Dulce de leche en tarro, suave y delicioso. Envase de 400 gramos.', '20', 4, 4, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/71CMomIt0iL._AC_UL320_.jpg'),
(45, 'Chicles de Menta sin Azúcar Pack de 5', '8', 'Chicles de menta sin azúcar, pack con 5 unidades. Refresca tu aliento en cualquier momento.', '35', 4, 5, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/71zOFe66TgL._AC_UL320_.jpg'),
(46, 'Almendras Saladas y Tostadas 200g', '22', 'Almendras saladas y tostadas, snack saludable y delicioso. Bolsa de 200 gramos.', '18', 4, 1, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/81r9X2GSjLL._AC_UL320_.jpg'),
(47, 'Malvaviscos de Colores 250g', '10', 'Malvaviscos de colores, dulces y suaves. Bolsa de 250 gramos.', '40', 4, 2, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/71BUA5WUHKL._AC_UL320_.jpg'),
(48, 'Palomitas de Maíz Naturales Pack de 3', '15', 'Palomitas de maíz naturales, pack con 3 bolsas. Ideal para tus noches de película.', '30', 4, 3, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/81nyXcFmtsL._AC_UL320_.jpg'),
(49, 'Caramelos de Frutas Variadas 150g', '8', 'Caramelos de frutas variadas, sabores refrescantes en cada caramelo. Bolsa de 150 gramos.', '25', 4, 4, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/71wNvO4bSjL._AC_UL320_.jpg'),
(50, 'Barritas de Granola con Chocolate Pack de 4', '12', 'Barritas de granola con chocolate, pack con 4 unidades. Energía y sabor en cada bocado.', '20', 4, 5, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/71Ms6dRCUkL._AC_UL320_.jpg'),
(51, 'Platos Desechables de Colores Pack de 20', '10', 'Platos desechables de colores, pack con 20 unidades. Perfectos para fiestas y eventos.', '30', 5, 1, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/41eirKaGC6L._AC_UL320_.jpg'),
(52, 'Vasos de Plástico Transparentes Pack de 50', '15', 'Vasos de plástico transparentes, pack con 50 unidades. Ideales para bebidas frías.', '25', 5, 2, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/81Rv3lpMUzL._AC_UL320_.jpg'),
(53, 'Servilletas de Papel Estampadas Pack de 200', '8', 'Servilletas de papel estampadas, pack con 200 unidades. Añade un toque decorativo a tus eventos.', '40', 5, 3, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/610oyysZcbL._AC_UL320_.jpg'),
(54, 'Globos de Fiesta Variados Pack de 30', '12', 'Globos de fiesta variados, pack con 30 unidades. Perfectos para decorar cualquier celebración.', '35', 5, 4, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/61aJnoA9-7L._AC_UL320_.jpg'),
(56, 'Cubiertos de Plástico Resistentes Pack de 50', '10', 'Cubiertos de plástico resistentes, pack con 50 unidades. Ideales para comidas en eventos.', '28', 5, 1, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/71yldse3lzL._AC_UL320_.jpg'),
(57, 'Banderines Decorativos Variados', '12', 'Banderines decorativos variados, perfectos para ambientar cualquier fiesta. Incluye 10 unidades.', '20', 5, 2, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/61yLYoDIzPL._AC_UL320_.jpg'),
(60, 'Velas de Cumpleaños Variadas Pack de 12', '8', 'Velas de cumpleaños variadas, pack con 12 unidades. Haz que cada celebración sea especial.', '30', 5, 5, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/81k4SqNpQrL._AC_UL320_.jpg'),
(61, 'Comida para Perros Adultos Bolsa de 2kg', '25', 'Comida balanceada para perros adultos, enriquecida con nutrientes esenciales. Bolsa de 2 kg.', '15', 6, 1, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/71U+j7MrRqL._AC_UL320_.jpg'),
(62, 'Arena para Gatos Aglomerante Bolsa de 5kg', '18', 'Arena aglomerante para gatos, controla los olores y facilita la limpieza. Bolsa de 5 kg.', '20', 6, 2, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/81tMfXbtuuL._AC_UL320_.jpg'),
(63, 'Juguete para Perros Pelota de Goma', '10', 'Juguete para perros, pelota de goma resistente. Ideal para juegos de lanzar y morder.', '30', 6, 3, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/71qd2-tnLiL._AC_UL320_.jpg'),
(65, 'Snacks para Perros Sabor a Pollo Pack de 50', '12', 'Snacks para perros con sabor a pollo, pack con 50 unidades. Premia a tu mascota.', '25', 6, 5, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/514pyMCwU-L._AC_UL320_.jpg'),
(66, 'Collar para Gatos Ajustable con Cascabel', '8', 'Collar para gatos ajustable con cascabel. Añade estilo y seguridad a tu gato.', '35', 6, 1, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/51CQiW90ixL._AC_UL320_.jpg'),
(67, 'Cepillo para Perros y Gatos', '15', 'Cepillo para perros y gatos, elimina el pelo suelto y mantiene su pelaje saludable.', '28', 6, 2, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/61N4sKB3arL._AC_UL320_.jpg'),
(68, 'Comedero para Mascotas Antideslizante', '12', 'Comedero para mascotas antideslizante, evita derrames durante la comida. Tamaño mediano.', '22', 6, 3, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/61H0QBfDp8L._AC_UL320_.jpg'),
(69, 'Juguete para Gatos Caña con Plumas', '10', 'Juguete para gatos, caña con plumas que estimula el instinto de caza. Horas de diversión garantizadas.', '20', 6, 4, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/71rXv9QqoZL._AC_UL320_.jpg'),
(70, 'Correa para Perros Extensible 3 metros', '18', 'Correa para perros extensible de 3 metros, ideal para paseos cómodos y seguros.', '18', 6, 5, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/61-v6hlYe6L._AC_UL320_.jpg'),
(71, 'Cereal Integral con Frutas 500g', '15', 'Cereal integral con frutas, fuente de fibra y energía para un desayuno saludable. Envase de 500 gramos.', '20', 7, 1, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/81k5BO5bXZS._AC_UL320_.jpg'),
(74, 'Mermelada de Fresa 300g', '12', 'Mermelada de fresa, dulce y deliciosa. Tarro de 300 gramos.', '35', 7, 4, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/712wqUTy4xL._AC_UL320_.jpg'),
(75, 'Pan Integral Multicereales', '8', 'Pan integral multicereales, fuente de fibra y nutrientes. Pack con 6 unidades.', '40', 7, 5, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/71YUPjVDmtL._AC_UL320_.jpg'),
(76, 'Yogurt Natural sin Azúcar 200g', '6', 'Yogur natural sin azúcar, fuente de probióticos. Envase individual de 200 gramos.', '45', 7, 1, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/71xEp5of+bS._AC_UL320_.jpg'),
(77, 'Miel Pura de Abeja 250g', '14', 'Miel pura de abeja, endulza tus desayunos de manera natural. Tarro de 250 gramos.', '18', 7, 2, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/41Xm510YZ5L._AC_UL320_.jpg'),
(78, 'Té Negro English Breakfast Pack de 20 bolsitas', '10', 'Té negro English Breakfast, vigorizante y de sabor intenso. Pack con 20 bolsitas individuales.', '22', 7, 3, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/61+vRwhuFkL._AC_UL320_.jpg'),
(79, 'Cereal Barra de Granola con Frutas Pack de 8', '12', 'Barra de granola con frutas, ideal como snack o complemento para el desayuno. Pack con 8 unidades.', '28', 7, 4, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/61IWWgaKAkL._AC_UL320_.jpg'),
(80, 'Jugo de Naranja Natural 1L', '16', 'Jugo de naranja natural, sin aditivos ni conservantes. Botella de 1 litro.', '15', 7, 5, '2023-11-14 08:49:46', '2023-11-14 08:49:46', 'https://m.media-amazon.com/images/I/61uFbf0YffL._AC_UL320_.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suppliers`
--

CREATE TABLE `suppliers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phoneNum` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `suppliers`
--

INSERT INTO `suppliers` (`id`, `name`, `address`, `phoneNum`, `created_at`, `updated_at`) VALUES
(1, 'Productos Verde Valle, S.A. De C.V.', 'Arroz #453', '4493826362', '2023-11-14 08:49:46', '2023-11-14 08:49:46'),
(2, 'Maruchan', 'Ave. Insurgentes Sur número 688, piso 3, colonia Del Valle, código postal 03100, en México, Ciudad de Mexico', '5513924649', '2023-11-14 08:49:46', '2023-11-14 08:49:46'),
(3, 'Ragasa', 'Via a Tampico 501.5, La Condesa, 67120 Guadalupe, N.L.', '8181960100', '2023-11-14 08:49:46', '2023-11-14 08:49:46'),
(4, 'Grupo Lala', 'Julio Díaz Torre 102, Cd Industrial, 20290 Aguascalientes, Ags', '4499104800', '2023-11-14 08:49:46', '2023-11-14 08:49:46'),
(5, 'Regio', 'Av. Javier Barros Sierra 555, Santa Fe, Zedec Sta Fé 01219 \n        Ciudad de México, México', '8005225050', '2023-11-14 08:49:46', '2023-11-14 08:49:46'),
(6, 'Dove', 'Sierra de Tepoztlan 105 A, Bosques del Prado Sur, 20130 Aguascalientes, Ags.', '4491993117', '2023-11-14 08:49:46', '2023-11-14 08:49:46'),
(7, 'FEMSA', 'Mario Pani #100, Col. Santa Fe Cuajimalpa, Deleg. Cuajimalpa, C.P. 05348, México D.F.', '5515195000', '2023-11-14 08:49:46', '2023-11-14 08:49:46'),
(8, 'Sabritas', 'Julio Díaz Torre 203, Cd Industrial, 20290 Aguascalientes, Ags', '8009019500', '2023-11-14 08:49:46', '2023-11-14 08:49:46'),
(9, 'Marinela', 'Av el Colli 2892, Colli CTM, 45050 Zapopan, Jal.', '8009102030', '2023-11-14 08:49:46', '2023-11-14 08:49:46'),
(10, 'Colgate', 'Av. Ejército Nacional Mexicano 843 B, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX', '5591267000', '2023-11-14 08:49:46', '2023-11-14 08:49:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastnameF` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastnameM` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `c_password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phoneNum` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payMeth` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` tinyint(4) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastnameF`, `lastnameM`, `address`, `email`, `password`, `c_password`, `phoneNum`, `payMeth`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Ivan', 'Montoya', 'Macias', 'Sixto #545', 'ivan@ivan.com', '$2y$10$PaTv7GUfnGN3vnxZYTLvkeZAzf.fXqU8hUg49FySCZLfwhXLj81aW', '$2y$10$eOxKnpfECcQCu8fdLo9nWu/htTPVPR5IcFgFQDl1MQgH6Bec67fCi', '4493930129', 'Efectivo', 1, NULL, '2023-11-14 08:49:46', '2023-11-14 08:49:46'),
(2, 'Rebe', 'sjj', 'jsjjs', 'jjsj', 'rebe@rebe.com', '$2y$10$QhdpMj0b12xMHH3m1Nht5.J5T/5YN/hwz/PydMruJs6HkeiNDFZdy', '$2y$10$kw0CD7iekvZvauI0rw4FrOHma/MU1ZougQxtmkxnTZEIPk522lygK', '3333333333', 'Efectivo', 0, NULL, '2023-11-14 08:50:36', '2023-11-14 08:50:36');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carts_user_id_foreign` (`user_id`),
  ADD KEY `carts_product_id_foreign` (`product_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indices de la tabla `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indices de la tabla `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indices de la tabla `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_user_id_foreign` (`user_id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`),
  ADD KEY `products_supplier_id_foreign` (`supplier_id`);

--
-- Indices de la tabla `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT de la tabla `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_supplier_id_foreign` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
