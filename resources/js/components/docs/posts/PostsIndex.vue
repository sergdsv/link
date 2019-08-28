<template>
    <div class="card">
        <div class="card-body">
            <div class="form-group">
                <router-link :to="{name: 'createPost'}" class="btn btn-success">Создать документ</router-link>
                <router-link :to="{name: 'indexOrgans'}" class="btn btn-success">Список организаций</router-link>
            </div>
            <div class="card-header mb-3 font-weight-bold">
                Список документов
            </div>

            <b-table-simple striped hover>
                <b-thead>
                    <b-th>Название</b-th>
                    <b-th>Номер документа</b-th>
                    <b-th>Дата документа</b-th>
                    <b-th>Вход/Исход</b-th>
                    <b-th>Дата получения</b-th>
                    <b-th>От организации</b-th>
                    <b-th>На организацию</b-th>
                    <b-th>Ответ</b-th>
                    <b-th>Дата ответа</b-th>
                    <b-th>Действия</b-th>

                </b-thead>
                <b-tbody class="fontsize">
                    <b-tr v-for="(post, index) in posts" :key="index">
                        <b-td>{{post.title}}</b-td>
                        <b-td>{{post.number_doc}}</b-td>
                        <b-td>{{post.date_doc}}</b-td>
                        <b-td>{{post.in_or_out ? "Входящее" : "Исходящее"}}</b-td>
                        <b-td>{{post.date_receiving}}</b-td>
                        <b-td>{{post.organization_in.title}}</b-td>
                        <b-td>{{post.organization_out.title}}</b-td>
                        <b-td>{{post.need_an_answer ? "Да" :  'Нет'}}</b-td>
                        <b-td>{{post.date_an_answer}}</b-td>
                        <b-td>
                                <router-link :to="{name: 'showPost', params: {id: post.id}}" class="btn btn-outline-info btn-sm">
                                    Подробнее
                                </router-link>
                        </b-td>

                    </b-tr>
                </b-tbody>

            </b-table-simple>


        </div>
    </div>

</template>
<script>


    export default {

        data: function () {
            return {
                posts: '',

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

