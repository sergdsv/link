<template>
    <div class="container">
        <div class="row justify-content-center align-items-center" style="height:100vh">
            <div class="col-6">
                <div :class="{'animated shake': card_error}">
                <div class="card animated fadeIn">
                    <div class="card-header">
                        <h4>Войти</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="submitHandler">
                            <input type="hidden" name="_token" :value="csrf">
                            <div class="form-group">
                                <i class="fa fa-envelope"></i>
                                <label for="email">E-mail</label>
                                <input id="email" type="text" class="form-control" v-model="email"
                                :class="{'is-invalid': ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
                                >
                                    <small class="text-danger"
                                    v-if="$v.email.$dirty && !$v.email.required"
                                    >Поле email не должно быть пустым</small>
                                    <small class="text-danger"
                                    v-else-if="$v.email.$dirty && !$v.email.email"
                                    >Введите коректный email</small>
                            </div>

                            <div class="form-group">
                                <i class="fa fa-lock"></i>
                                <label for="password">Password</label>
                                <input id="password" type="password" class="form-control" v-model="password"
                                :class="{'is-invalid': ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLentgh)}"
                                >
                                <small class="text-danger"
                                v-if="$v.password.$dirty && !$v.password.required"
                                >Введите пароль</small>
                                <small class="text-danger"
                                v-else-if="$v.password.$dirty && !$v.password.minLentgh"
                                >Пароль должен быть не меньше {{$v.password.$params.minLentgh.min}} символов. Сейчас Вы ввели {{password.length}}</small>
                            </div>

                            <button type="submit" class="btn btn-primary">Login</button>
                            <router-link :to="{ name: 'register' }">Register</router-link>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
// import messages from '@/utils/messages'
import store from '../../store'
export default {
    name: 'login',
    data: () => ({
        email: '',
        password: '',
        csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        card_error: false
    }),
    mounted(){
        // if (messages[this.$route.query.message]){
        //     this.$message(messages[this.$route.query.message])
        // }
    },
    validations: {
        email: {email, required},
        password: {required, minLentgh: minLength(6)}
    },
    methods: {
        submitHandler(){
            if (this.$v.$invalid){
                this.$v.$touch()
                this.card_error = true
                return
            }

            const formData = {
                email: this.email,
                password: this.password
            }
            var app = this;
                const config = {
                    // headers: { 'Content-type': 'multipart/form-data' }
                }


                axios.post('/api/auth/login', formData, config
                ).then(function(response) {
                    store.commit('loginUser')
                    localStorage.setItem('token', response.data.access_token)
                    app.$router.push({ name: 'dashboard' })
                }).catch(error => {
                    console.log(error.message);
                });
        }
    }
}
</script>

<style scoped>
form i.fa {
    position: absolute;
    top: 38px;
    left: 10px;
    color: blue;
    font-size: 22px;
    z-index: 9999;
    color: #ccc;
}

.form-group {
    position: relative;

}

input {
    padding-left: 40px;
}
</style>