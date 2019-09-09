<template>
<div class="app-main-layout animated fadeIn">
  <Navbar />
  <!-- <Sidebar v-model="isOpen" /> -->
    <main>
        <div class="app-page">
            <router-view />
        </div>
    </main>

    </div>
</div>
</template>

<script>
import Navbar from '../components/app/Navbar'
// import Sidebar from '@/components/app/Sidebar'

export default {
  name: 'main-layout',
  components:{
    Navbar: Navbar,
    // Sidebar: Sidebar
  },
  data: () => ({
    isOpen: true
  })
}
</script>