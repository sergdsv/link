<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePosts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->integer("number_doc");
            $table->date('date_doc');
            $table->integer('org_id_in');
            $table->integer('org_id_out');
            $table->date('date_receiving');
            $table->integer('type_of_receipt');
            $table->integer('need_an_answer');
            $table->date('date_an_answer');
            $table->integer('signature_on_receipt');
            $table->text('comment')->nullable();
            $table->integer('in_or_out');
            $table->integer('user_id');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
