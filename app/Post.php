<?php

namespace App;

use foo\bar;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function images()
    {
        return $this->hasMany(Image::class);
    }

    public function organization_in()
    {
        return $this->belongsTo(Organization::class, 'org_id_in', 'id');
    }

    public function organization_out()
    {
        return $this->belongsTo(Organization::class, 'org_id_out', 'id');
    }

}
