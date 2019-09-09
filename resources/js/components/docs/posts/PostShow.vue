<template>
    <div class="card animated fadeIn">
        <div class="card-body">
            <div class="form-group">
                <router-link :to="{name: 'PostsIndex'}" class="btn btn-success">Все документы</router-link>
            </div>
            <div class="card-header mb-3 font-weight-bold">
                <h3>{{post.title}}</h3>
            </div>
            <div class="row">
                <div class="col-md-2">
                    <span>Номер документа:</span>
                    <span>{{post.number_doc}}</span>
                </div>
                <div class="col-md-3">
                    <span>Дата документа:</span>
                    <span>{{post.date_doc}}</span>
                </div>
                <div class="col-md-3">
                    <span>Дата получения:</span>
                    <span>{{post.date_receiving}}</span>
                </div>
                <div class="col-md-4">
                    <span>Дата создания:</span>
                    <span>{{post.created_at}}</span>
                </div>
            </div>
            <hr>
            <div class="row mt-3">
                <div class="col-md-6">
                    <span class="bold">От организации:</span>
                    <span v-text="post.organization_in.title"></span>
                </div>
                <div class="col-md-6">
                    <span>Для организации:</span>
                    <span>{{post.organization_out['title']}}</span>
                </div>
            </div>
            <hr>
            <div class="row mt-6">
                <div class="col-md-6">
                    <span class="bold">Подпись о получении:</span>
                    <span>{{post.signature_on_receipt ? "Да" : "Нет"}}</span>
                </div>
                <div class="col-md-3">
                    <span>Требует/нетребует ответа:</span>
                    <span>{{post.need_an_answer ? "Да" : "Нет"}}</span>
                </div>
                <div class="col-md-3">
                    <span>Конечная дата ответа:</span>
                    <span>{{post.date_an_answer}}</span>
                </div>
            </div>
            <hr>
            <div class="row mt-3">
                <div class="col-md-6">
                    <span class="bold">Подпись о получении:</span>
                    <span>{{post.signature_on_receipt ? "Да" : "Нет"}}</span>
                </div>
                <div class="col-md-6">
                    <span>Требует/нетребует ответа:</span>
                    <span>{{post.need_an_answer ? "Да" : "Нет"}}</span>
                </div>
            </div>
            <hr>
            <div class="row mt-3">
                <div class="col-md-12">
                    <span>Коментарий:</span>
                    <span>{{post.comment}}</span>
                </div>
            </div>
            <hr>
            <div>
                <span>Изображения:</span>
                <b-container fluid class="p-4">
                    <b-row>
                        <b-col v-for="(image, index) in post.images" :key="index">
                            <b-img class="preview" thumbnail fluid :src="image.image"></b-img>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </div>
    </div>
</template>
<script>


    export default {

        data: function () {
            return {
                post: {
                    organization_in : {},
                    organization_out : {},
                },

            }
        },

        success : function(data) {
            console.log(data);
        },

        mounted() {
            var app = this;
            axios.get('/api/docs/posts/' + app.$route.params.id)
                .then(function (resp) {
                    app.post = resp.data
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

<style scope>

    .preview {
        width: 200px;
        background-color: white;
        border: 1px solid #DDD;
        padding: 5px;
        margin: 15px;
    }
    .fontsize{
        font-size: 12px;
    }

</style>

