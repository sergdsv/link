<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class House extends Model
{
    public function street()
    {
        return $this->belongsTo(Street::class, );
    }
}
