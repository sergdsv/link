<?php

namespace App\Http\Controllers\Docs;

use App\Organization;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Storage;
use Intervention\Image;

class OrganizationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $organs = Organization::all();
        return response()->json(['organs'=>$organs]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $organs = Organization::all();
        return response()->json(['organs'=>$organs]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $organ_request = json_decode($request->organ);

        $image = $request->image;
        $store = Storage::putFile('uploads/organizations', new File($image));

        $organ = new Organization;
        $organ->title = $organ_request->title;
        $organ->city = $organ_request->city;
        $organ->street = $organ_request->street;
        $organ->house = $organ_request->house;
        $organ->office = $organ_request->office;
        $organ->phone = $organ_request->phone;
        $organ->person = $organ_request->person;
        $organ->email = $organ_request->email;
        $organ->index = $organ_request->index;
        $organ->image = $store;
        $organ->edrpo = $organ_request->edrpo;
        $organ->notes = $organ_request->notes;
        $organ->save();

        return $organ;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
