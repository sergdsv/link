<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Street extends Model
{
    public function houses()
    {
        return $this->hasMany(House::class, 'str_id');
    }

}
