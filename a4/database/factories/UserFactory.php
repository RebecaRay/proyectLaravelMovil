<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $password = fake()->password;

        return [
            'name' => fake()->firstName($gender = 'male' | 'female'),
            'lastnameF' => fake()->lastName(),
            'lastnameM' => fake()->lastName(),
            'address' => fake()->streetAddress(),
            'email' => fake()->unique()->safeEmail(),
            'password' => '1234',
            'c_password' => '1234',
            'phoneNum' => fake()->phoneNumber(),
            'payMeth' => 'Efectivo',
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
