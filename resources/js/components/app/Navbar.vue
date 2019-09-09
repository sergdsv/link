<template>

<nav class="navbar navbar-expand-lg mb-4">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/dashboard">Home
          <span class="sr-only">(current)</span>
        </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto nav-flex-icons">
      <li class="nav-item avatar">
        <a class="nav-link p-0" href="#">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="rounded-circle z-depth-0"
            alt="avatar image" height="35">
                    <router-link :to="{ name: 'logout' }">Logout</router-link>

        </a>
      </li>
    </ul>
  </div>
</nav>



<!--/.Navbar -->
</template>

<script>
import { setInterval, clearInterval } from 'timers';
export default {
  data: () => ({
    date: new Date(),
    interval: null,
  }),

  mounted(){
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000) 
  },
  methods: {
    logout() {
      console.log('Logout')
      this.$router.push('/login?message=logout')
    }
  },
  beforeDestroy() {
      clearInterval(this.interval)
      }
}
</script>

<style scoped>
  .navbar{
    background-color: #ffa726;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);
  }

  nav .a {
    color: #000;
  }

</style>