@extends('layouts.app')

@section('content_auth')
    <div class="container">
       <router-view name="indexPosts"></router-view>

        <div class="form-group">
            <router-link :to="{name: 'indexPosts'}" class="btn btn-success">Список документов</router-link>
            <router-link :to="{name: 'indexOrgans'}" class="btn btn-success">Список организаций</router-link>
            <router-link :to="{name: 'indexLocations'}" class="btn btn-success">Список адресов</router-link>
        </div>
        <router-view></router-view>
        <vue-progress-bar></vue-progress-bar>
    </div>
@endsection
