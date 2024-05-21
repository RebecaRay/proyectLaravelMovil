<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'price', 'description', 'stock', 'category_id', 'supplier_id', 'img'];

    public function category(): BelongsTo
    {
        return $this->BelongsTo(Category::class);
    }

    public function supplier(): BelongsTo
    {
        return $this->BelongsTo(Supplier::class);
    }

    public function cart(): HasMany
    {
        return $this->hasMany(Cart::class);
    }
}
