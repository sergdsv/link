<template>
    <div>
       <div class="container animated fadeIn">
        <div class="row">
        <div class="form-group">
            <b-button :to="{name: 'PostsIndex'}"><i class="fa fa-file fa-lg"></i>  Список документов</b-button>
            <b-button :to="{name: 'OrgansIndex'}"><i class="fa fa-building fa-lg"></i>  Список организаций</b-button>
            <b-button :to="{name: 'LocationsIndex'}"><i class="fa fa-map-marker fa-lg"></i>  Список адресов</b-button>
            </div>
        </div>
        <vue-progress-bar></vue-progress-bar>
        </div>
            </div>
</template>

<script>
    export default {
        data() {
            return {
                data: 'nothing'
            }
        },
    }
</script>