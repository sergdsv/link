<template>
    <div class="card">
        <div class="card-body">
            <div class="card-header mb-3 font-weight-bold">
                Список документов
            </div>
            <form>
            <input type="hidden" name="_token" :value="csrf">
                <b-container fluid class="p-4">
                    <b-row>
                        <b-col v-for="(image, index) in arrayImages" :key="index">
                            <b-img class="preview" thumbnail fluid :src="image"></b-img>
                        </b-col>
                    </b-row>
                </b-container>
                <div class="row">
                    <div class="col-xs-12 form-group">
                        <label for="exampleFormControlFile1">Файл для загрузки</label>
                        <input type="file" class="form-control-file" @change="previewImage">
                    </div>
                </div>
                <button class="btn btn-primary btn-lg float-right">Отправить</button>
            </form>
        </div>
    </div>

</template>
<script>


    export default {
        data: function () {
            return {
                arrayImages: [],
                image: File,
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        },

        success : function(data) {
            console.log(data);
        },

        mounted() {

        },

        methods: {
            saveForm(){
                var app = this;
                event.preventDefault();
                const config = {
                    headers: { 'Content-type': 'multipart/form-data' },
                    onUploadProgress: progressEvent => console.log(Math.round( (progressEvent.loaded * 100) / progressEvent.total ))
                };
                let formData = new FormData();

                formData.append('image', app.image);

                console.log(formData.data);

                axios.post('/api/image', formData, config
                ).then(function(response) {
                    console.log(response.data);
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
                        this.arrayImages.push(e.target.result);
                        // this.arr.push(input.files[0]);
                        this.image = input.files[0];
                    }
                    reader.readAsDataURL(input.files[0]);
                    this.saveForm();
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

