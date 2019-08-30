<template>
    <div class="card">
        <div class="card-body">
            <div class="form-group">
                <router-link :to="{name: 'createOrgan'}" class="btn btn-success">Создать организацию</router-link>
            </div>
            <div class="card-header mb-3 font-weight-bold">
                Список документов
            </div>
            <search-component></search-component>

        </div>
    </div>

</template>
<script>

    export default {

        data: function () {
            return {
                locations: [],
                search: '',

            }
        },

        computed : {
            filteredList() {
                if (this.search.length > 1){
                    this.$Progress.start();
                    return this.locations.filter(post => {
                        return post.name.toLowerCase().includes(this.search.toLowerCase())
                    })
                }
                this.$Progress.finish();
            },
        },

        success : function(data) {
            console.log(data);
        },

        mounted() {
            var app = this;
            app.$Progress.start();
            axios.get('api/docs/locations')
                .then(function (resp) {
                    app.locations = resp.data
                    console.log(resp.data)
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load posts");
                });
            app.$Progress.finish();
        },

        methods: {

        },

    }

</script>

<style scoped>

    .preview {
        width: 75px;
        background-color: white;
        border: 1px solid #DDD;
        padding: 5px;
        margin: 15px;
    }
    .fontsize{
        font-size: 12px;
    }

</style>

