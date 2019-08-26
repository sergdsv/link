<template>
    <div class="card">
        <div class="card-body">
            <div class="card-header mb-3 font-weight-bold">
                Список документов
            </div>

        </div>
    </div>

</template>
<script>


    export default {
        data: function () {
            return {

            }
        },

        success : function(data) {
           console.log(data);
        },

        mounted() {
            var app = this;
            axios.get('/api/docs')
                .then(function (resp) {
                    app.posts = resp.data.posts
                    console.log(resp.data)
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load posts");
                });
        },

        methods: {

        },

    }

</script>

<style>

.preview {
    width: 200px;
    background-color: white;
    border: 1px solid #DDD;
    padding: 5px;
    margin: 15px;
}

</style>

