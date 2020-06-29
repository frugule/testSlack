<template>
  <div>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <div>

    <Footer></Footer>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Footer from './components/Footer'
export default {
  components:{
    NavBar,
    Footer
  }
}
</script>
