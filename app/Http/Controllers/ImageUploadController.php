<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Storage;
use Intervention\Image;
use Illuminate\Http\File;

class ImageUploadController extends Controller
{
    public function upload(Request $request){
        $image = $request->image;
        $filename = str_random(10) . '.' . $image->extension();
        $store = Storage::putFile('uploads', new File($image));

        return $store;
    }
}

