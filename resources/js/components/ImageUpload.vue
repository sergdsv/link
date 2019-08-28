<template>
    <div>
            <form>
            <input type="hidden" name="_token" :value="csrf">
                <b-container fluid class="p-4">
                    <b-row>
                        <b-col v-for="(image, index) in arrayImages" :key="index">
                            <b-img class="preview" thumbnail fluid :src="image"></b-img>
                                <button type="button" class="btn btn-danger" @click="deleteImage(index)">X</button>
                        </b-col>
                    </b-row>
                </b-container>
                    <div class="form-group">
                        <b-form-file
                            @input="previewImage"
                            placeholder="Choose a file or drop it here..."
                            drop-placeholder="Drop file here..."
                        ></b-form-file>
                    </div>
            </form>
    </div>

</template>
<script>


    export default {
        data: function () {
            return {
                arrayImages: [],
                arrayUploadedImage: [],
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
            deleteImage(id){

                console.log(this.arrayUploadedImage[id]);

                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    event.preventDefault();
                    const config = {
                        headers: { 'Content-type': 'multipart/form-data' },
                        onUploadProgress: progressEvent => console.log(Math.round( (progressEvent.loaded * 100) / progressEvent.total ))
                    };
                    let formData = new FormData();

                    formData.append('image', JSON.stringify(this.arrayUploadedImage[id]));

                    axios.post('/api/image/delete', formData, config
                    ).then(function(response) {
                        console.log(response.data);
                        // app.arrayUploadedImage.push(response.data);
                        app.arrayImages.splice(id, 1);
                        app.arrayUploadedImage.splice(id, 1);
                    }).catch(error => {
                        console.log(error.message);
                    });
                }

            },
            saveForm($img){
                var app = this;
                event.preventDefault();
                const config = {
                    headers: { 'Content-type': 'multipart/form-data' },
                    onUploadProgress: progressEvent => console.log(Math.round( (progressEvent.loaded * 100) / progressEvent.total ))
                };
                let formData = new FormData();

                formData.append('image', $img);

                axios.post('/api/image', formData, config
                ).then(function(response) {
                    console.log(response.data);
                    app.arrayUploadedImage.push(response.data);
                    console.log(app.arrayUploadedImage.length);
                    app.$emit('arrayUploadedImage', app.arrayUploadedImage);
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
                    var img = input.files[0];
                    this.saveForm(img);
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

