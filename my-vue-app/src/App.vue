<template>
  <div class="vh-100 d-flex flex-column">
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg text-white shadow border-bottom border-secondary" style="background-color: #333333">
      <div class="container-fluid">
        <a class="text-white text-decoration-none fw-bold fs-5" href="/"><span class="text-success">Jo</span><span class="text-info">Bo</span>Sandbox</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link text-white" aria-current="page" href="#">Page1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" aria-current="page" href="#">Page2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" aria-current="page" href="#">Page3</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    <!-- Main Section -->
    <main class="container-fluid flex-grow-1" style="">
        <div class="row h-100">
            <div class="col-6 border-end border-secondary" style="height: 200vh">
              <h1 class="display-1 fw-bold text-success">Jo</h1>
              <span style="opacity: 0.6">Payton Macdonald</span>
            </div>
            <div class="col-6 border-end border-secondary">
              <h1 class="display-1 fw-bold text-info" style="">Bo</h1>
              <span style="opacity: 0.6">Josh Coleman</span>
            </div>
        </div>
    </main>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
};
</script>

<style>

body {
  background-color: #ccc !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
