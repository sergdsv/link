<template>
    <div>
       <div class="container animated fadeIn">
        <div class="row">
        <div class="form-group">
            <b-button :to="{name: 'PostsIndex'}"><i class="fa fa-file fa-lg"></i>  Список документов</b-button>
            <b-button :to="{name: 'OrgansIndex'}"><i class="fa fa-building fa-lg"></i>  Список организаций</b-button>
            <b-button :to="{name: 'LocationsIndex'}"><i class="fa fa-map-marker fa-lg"></i>  Список адресов</b-button>
            </div>
        </div>
        <vue-progress-bar></vue-progress-bar>
        </div>
            </div>
</template>

<script>
    import store from '../store'
    export default {
        data() {
            return {
                data: 'nothing'
            }
        },
         created() {
            if(localStorage.token) {
                axios.get('/api/user', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                },
                ).then(response => {
                    store.commit('loginUser')
                }).catch(error => {
                    if (error.response.status === 401 || error.response.status === 403) {
                        store.commit('logoutUser')
                        localStorage.setItem('token', '')
                        this.$router.push({name: 'login'})
                    }

                });
            }

        }
    }
</script>