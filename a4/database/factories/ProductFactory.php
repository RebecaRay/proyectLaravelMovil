<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;
use App\Models\Supplier;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => fake()->word(),
            "price" => fake()->randomFloat(2),
            "description" => fake()->paragraph($nbSentences = 3),
            "stock" => fake()->randomDigit(),
            "category_id" => Category::all()->random()->id,
            "supplier_id" => Supplier::all()->random()->id,
            "img" => fake()->imageUrl(640, 480, 'animals', true),
        ];
    }
}
