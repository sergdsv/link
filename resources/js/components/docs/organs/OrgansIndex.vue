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
                    <b-th>Адрес</b-th>
                    <b-th>Телефон</b-th>
                    <b-th>Директор</b-th>
                    <b-th>Сайт</b-th>
                    <b-th>e-mail</b-th>
                    <b-th>Индекс</b-th>
                    <b-th>ЕДРПО</b-th>
                    <b-th>Логотип</b-th>
                    <b-th>Действия</b-th>

                </b-thead>
                <b-tbody class="fontsize">
                    <b-tr v-for="(organ, index) in organs" :key="index">
                        <b-td>{{organ.title}}</b-td>
                        <b-td>{{organ.city}}</b-td>
                        <b-td>{{organ.phone}}</b-td>
                        <b-td>{{organ.person}}</b-td>
                        <b-td>{{organ.site}}</b-td>
                        <b-td>{{organ.email}}</b-td>
                        <b-td>{{organ.index}}</b-td>
                        <b-td>{{organ.edrpo}}</b-td>
                        <b-td>{{organ.image}}</b-td>
                        <b-td>
                            <router-link :to="{name: 'showPost', params: {id: organ.id}}" class="btn btn-outline-info btn-sm">
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
                organs: [],

            }
        },

        success : function(data) {
            console.log(data);
        },

        mounted() {
            var app = this;
            axios.get('api/docs/organs')
                .then(function (resp) {
                    app.organs = resp.data.organs
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

