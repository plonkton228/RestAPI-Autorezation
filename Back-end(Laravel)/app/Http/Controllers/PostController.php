<?php

namespace App\Http\Controllers;

use App\Models\Post;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Event\ResponseEvent;

class PostController extends Controller
{
    public function index(Post $post)
    {
       $posts =  $post->all();
       return response(["posts"=> $posts]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'=>'',
            'description'=>'',
        ]);
        Post::create($data);
       return response(http_response_code(200));
    }

    public function show($id)
    {
        
       return response()->json(Post::whereId($id)->first());
    }


    public function edit($id)
    {
       return response()->json(Post::whereId($id)->first());
    }

    public function update(Request $request, $id)
    {
        $post = Post::whereId($id)->first();

        $post->update([
            'title'=>$request->title,
            'description'=>$request->description,
        ]);
        return response()->json('success update');
    }


    public function delete ($id){
        $post = Post::whereId($id)->first();
        $post->delete();
        return response()->sjon('seccess delete');
    }
}
