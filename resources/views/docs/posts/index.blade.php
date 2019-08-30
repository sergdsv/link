@extends('layouts.app')

@section('content_auth')
    <div class="container">
       <router-view name="indexPosts"></router-view>

        <div class="form-group">
            <b-button variant="warning" :to="{name: 'indexPosts'}"> Список документов</b-button>
            <b-button variant="warning" :to="{name: 'indexOrgans'}"> Список организаций</b-button>
            <b-button variant="warning" :to="{name: 'indexLocations'}"> Список адресов</b-button>
        </div>
        <router-view></router-view>
        <vue-progress-bar></vue-progress-bar>
    </div>
@endsection
