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
        $store = Storage::putFile('uploads', new File($image));

        return $store;
    }
    public function delete(Request $request){

        $arr = json_decode($request->image);
        Storage::delete("$arr");
        return $arr;
    }
}

