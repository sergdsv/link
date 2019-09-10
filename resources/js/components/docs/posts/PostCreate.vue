<template>
    <div class="container">
        <div class="card animated fadeIn">
            <div class="card-body">
                <div class="form-group">
                    <router-link :to="{name: 'PostsIndex'}" class="btn btn-success">Назад</router-link>
                </div>
                <div class="card-header mb-3 font-weight-bold">
                    Добавить документ
                </div>
                <form v-on:submit="saveForm()">
                    <input type="hidden" name="_token" :value="csrf">
                    <div class="row">

                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Название документа</label>
                                <input v-model="post.title" type="text" class="form-control" placeholder="" required>
                                <div class="invalid-feedback">
                                    Valid first name is required.
                            </div>
                        </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Номер документа</label>
                                <input v-model="post.number_doc" type="text" class="form-control" placeholder="" required>
                                <div class="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Дата документа</label>
                                <date-picker v-model="post.date_doc" lang="ru" valueType="format" :input-attr="{required: true}"></date-picker>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Входящий/Исходящий</label>
                                <select v-model="post.in_or_out" class="form-control" required>
                                    <option value="1">Входящий</option>
                                    <option value="2">Исходящий</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Кто получил</label>
                                <select class="form-control" required>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <label>Дата получения</label>
                            <date-picker v-model="post.date_receiving" lang="ru" valueType="format" :input-attr="{required: true}"></date-picker>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Вид письма</label>
                                <select class="form-control" required>
                                    <option>Информационное</option>
                                    <option>Предупреждение</option>
                                    <option>Требование</option>
                                    <option>Претензия</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="exampleFormControlSelect2">От организации</label>
                                <select class="form-control" v-model="post.org_id_in" id="exampleFormControlSelect2">
                                    <option v-for="(organ, index) in organs" :key="index" :value="organ.id">{{ organ.title }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="exampleFormControlSelect2">К организации</label>
                                <select class="form-control" v-model="post.org_id_out" id="exampleFormControlSelect2">
                                    <option v-for="(organ, index) in organs" :key="index" :value="organ.id">{{ organ.title }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <span>Требует/нетребует ответа</span>
                            <div class="form-check">
                                <input class="form-check-input" v-model="post.need_an_answer" type="radio" name="need_an_answer" id="need_an_answer1" :value="1" checked>
                                <label class="form-check-label" for="need_an_answer1">
                                    Не требует
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" v-model="post.need_an_answer" type="radio" name="need_an_answer" id="need_an_answer2" :value="0">
                                <label class="form-check-label" for="need_an_answer2">
                                    Требует
                                </label>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <label>Конечная дата ответа</label>
                            <date-picker v-model="post.date_an_answer" lang="ru" valueType="format" :input-attr="{required: true}"></date-picker>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Вид получения</label>
                                <select v-model="post.type_of_receipt" class="form-control" required>
                                    <option value="1">Простое</option>
                                    <option value="2">Заказное</option>
                                    <option value="3">Курьер</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <span>Подпись о получении</span>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="signature_on_receipt" id="signature_on_receipt1" :value="1" v-model="post.signature_on_receipt" checked>
                                <label class="form-check-label" for="signature_on_receipt1">
                                    Да
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="signature_on_receipt" id="signature_on_receipt2" :value="0" v-model="post.signature_on_receipt">
                                <label class="form-check-label" for="signature_on_receipt2">
                                    Нет
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Коментарий</label>
                                <textarea v-model="post.comment" class="form-control" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="exampleFormControlSelect2">Какому отделу/отделам адресовано</label>
                                <select multiple class="form-control" id="exampleFormControlSelect2">
                                    <option value="1">Абонотдел</option>
                                    <option value="2">Юротдел</option>
                                    <option value="3">Общее</option>
                                    <option value="4">Бухгалтерия</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <image-upload @arrayUploadedImage="images = $event"></image-upload>
                    <button class="btn btn-primary btn-lg float-right">Отправить</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>


    export default {
        data: function () {
            return {
                organs: [],
                post: {
                    title: '',
                    number_doc: '',
                    date_doc: '',
                    org_id_in: '',
                    org_id_out: '',
                    date_receiving: '',
                    type_of_receipt: '',
                    need_an_answer: '',
                    date_an_answer: '',
                    signature_on_receipt: '',
                    comment: '',
                    in_or_out: '',
                    user_id: '1'
                },
                images: [],
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        },

        success : function(data) {
           console.log(data);
        },

        mounted() {
            var app = this;
            axios.get('/api/docs/organs/create')
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
            saveForm() {
                var app = this;
                event.preventDefault();
                const config = {
                    headers: { 'Content-type': 'multipart/form-data' },
                    onUploadProgress: progressEvent => console.log(Math.round( (progressEvent.loaded * 100) / progressEvent.total ))
                };
                let formData = new FormData();
                formData.append('post', JSON.stringify(app.post));
                formData.append('images', JSON.stringify(app.images));


                // console.log(formData);

                axios.post('/api/docs/posts', formData, config
                ).then(function(response) {
                    app.$router.push({path: '/'});
                }).catch(error => {
                    console.log(error.message);
                });
            },


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

