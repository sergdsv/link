<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrganizations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organizations', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->nullable();
            $table->string('city')->nullable();
            $table->string('street')->nullable();
            $table->string('house')->nullable();
            $table->integer('office')->nullable();
            $table->integer('phone')->nullable();
            $table->string('person')->nullable();
            $table->string('site')->nullable();
            $table->string('email')->nullable();
            $table->integer('index')->nullable();
            $table->string('image')->nullable();
            $table->string('edrpo')->nullable();
            $table->text('notes')->nullable();
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
        Schema::dropIfExists('organizations');
    }
}
