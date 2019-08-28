<?php

namespace App\Http\Controllers\Docs;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Post;
use App\Image;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::with('organization_in')->with('organization_out')->get();

        return response()->json(['posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $post_request = json_decode($request->post);
        $images_request = json_decode($request->images);

        $post = new Post;
        $post->title = $post_request->title;
        $post->number_doc = $post_request->number_doc;
        $post->date_doc = $post_request->date_doc;
        $post->org_id_in = $post_request->org_id_in;
        $post->org_id_out = $post_request->org_id_out;
        $post->date_receiving = $post_request->date_receiving;
        $post->type_of_receipt = $post_request->type_of_receipt;
        $post->need_an_answer = $post_request->need_an_answer;
        $post->date_an_answer = $post_request->date_an_answer;
        $post->signature_on_receipt = $post_request->signature_on_receipt;
        $post->comment = $post_request->comment;
        $post->in_or_out = $post_request->in_or_out;
        $post->user_id = $post_request->user_id;
        $post->save();

        if ($images_request != "null") {
            foreach ($images_request as $image) {
                Image::create([
                    'image' => $image,
                    'post_id' => $post->id
                ]);
            }
        }
        return $post;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::with('images')->with('organization_in')->with('organization_out')->find($id);

        return response()->json($post);
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
