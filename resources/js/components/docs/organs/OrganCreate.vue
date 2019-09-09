<template>
    <div class="card animated fadeIn">
        <div class="card-body">
            <div class="form-group">
                <router-link :to="{name: 'OrgansIndex'}" class="btn btn-success">Назад</router-link>
            </div>
            <div class="card-header mb-3 font-weight-bold">
                Добавить организацию
            </div>
            <form v-on:submit="saveForm()">
                <input type="hidden" name="_token" :value="csrf">
                <div class="row">

                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Название организации</label>
                            <input v-model="organ.title" type="text" class="form-control" placeholder="" required>
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label>Номер телефона</label>
                            <input v-model="organ.phone" type="text" class="form-control" placeholder="" required>
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label>Индекс</label>
                            <input v-model="organ.index" type="text" class="form-control" placeholder="" required>
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row">

                    <div class="col-md-3">
                        <div class="form-group">
                            <label>Город</label>
                            <input v-model="organ.city" type="text" class="form-control" placeholder="" required>
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label>Улица</label>
                            <input v-model="organ.street" type="text" class="form-control" placeholder="" required>
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label>Дом</label>
                            <input v-model="organ.house" type="text" class="form-control" placeholder="" required>
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label>Офис</label>
                            <input v-model="organ.office" type="text" class="form-control" placeholder="" required>
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row">

                <div class="col-md-3">
                    <div class="form-group">
                        <label>Контактное лицо</label>
                        <input v-model="organ.person" type="text" class="form-control" placeholder="" required>
                        <div class="invalid-feedback">
                            Valid first name is required.
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label>Сайт</label>
                        <input v-model="organ.site" type="text" class="form-control" placeholder="" required>
                        <div class="invalid-feedback">
                            Valid first name is required.
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label>ЕДРПО</label>
                        <input v-model="organ.edrpo" type="text" class="form-control" placeholder="" required>
                        <div class="invalid-feedback">
                            Valid first name is required.
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label>e-mail</label>
                        <input v-model="organ.email" type="text" class="form-control" placeholder="" required>
                        <div class="invalid-feedback">
                            Valid first name is required.
                        </div>
                    </div>
                </div>

            </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Коментарий</label>
                            <textarea v-model="organ.notes" class="form-control" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleFormControlSelect2">Логотип</label>
                            <b-container fluid class="">
                                <b-row>
                                    <b-col v-if="image_preview">
                                        <b-img class="preview" thumbnail fluid :src="image_preview"></b-img>
                                    </b-col>
                                </b-row>
                            </b-container>
                            <div class="form-group">
                                <b-form-file
                                    @change="previewImage"
                                    placeholder="Choose a file or drop it here..."
                                    drop-placeholder="Drop file here..."
                                ></b-form-file>
                            </div>
                            <button class="btn btn-primary btn-lg float-right mt-5">Отправить</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    </div>

</template>
<script>


    export default {
        data: function () {
            return {
                organ: {
                    title: '',
                    city: '',
                    street: '',
                    house: '',
                    office: '',
                    phone: '',
                    person: '',
                    site: '',
                    email: '',
                    index: '',
                    image: '',
                    edrpo: '',
                    notes: ''
                },
                image: '',
                image_preview: '',
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        },

        success : function(data) {
            console.log(data);
        },

        mounted() {

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
                formData.append('organ', JSON.stringify(app.organ));
                formData.append('image', app.image);


                // console.log(formData);

                axios.post('/api/docs/organs', formData, config
                ).then(function(response) {
                    app.$router.push({path: '/organs'});
                }).catch(error => {
                    console.log(error.message);
                });
            },
            previewImage: function(event) {
                // Reference to the DOM input element
                var input = event.target;
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        this.image_preview = e.target.result;
                        this.image = input.files[0];
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            }
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

