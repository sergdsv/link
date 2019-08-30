@extends('layouts.app')

{{--@section('content_auth')--}}
{{--<div class="container">--}}
{{--    <div class="row justify-content-center">--}}
{{--        <div class="col-md-12">--}}
{{--            <div class="card">--}}
{{--                <div class="card-header">Dashboard</div>--}}

{{--                <div class="card-body">--}}
{{--                    @if (session('status'))--}}
{{--                        <div class="alert alert-success" role="alert">--}}
{{--                            {{ session('status') }}--}}
{{--                        </div>--}}
{{--                    @endif--}}

{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </div>--}}
{{--</div>--}}
{{--@endsection--}}

{{--@section('content_auth')--}}
{{--    <div class="container">--}}
{{--        <router-view name="indexPosts"></router-view>--}}

{{--        <div class="form-group">--}}
{{--            <router-link :to="{name: 'indexPosts'}" class="btn btn-success">Список документов</router-link>--}}
{{--            <router-link :to="{name: 'indexOrgans'}" class="btn btn-success">Список организаций</router-link>--}}
{{--            <router-link :to="{name: 'indexLocations'}" class="btn btn-success">Список адресов</router-link>--}}
{{--        </div>--}}
{{--        <router-view></router-view>--}}
{{--        <vue-progress-bar></vue-progress-bar>--}}
{{--    </div>--}}
{{--@endsection--}}
{{--@extends('layouts.app')--}}

@section('content_auth')
    <div class="container">
        <router-view name="indexPosts"></router-view>

        <div class="form-group">
            <b-button :to="{name: 'indexPosts'}"><i class="fa fa-file fa-lg"></i>  Список документов</b-button>
            <b-button :to="{name: 'indexOrgans'}"><i class="fa fa-building fa-lg"></i>  Список организаций</b-button>
            <b-button :to="{name: 'indexLocations'}"><i class="fa fa-map-marker fa-lg"></i>  Список адресов</b-button>
        </div>
        <router-view></router-view>
        <vue-progress-bar></vue-progress-bar>
    </div>
@endsection
