<template>
    <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Tienda 32 Bits</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/juegos" class="nav-link">Juegos</router-link>
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>

</template>

<script>
export default{
    name: "NavBar",
    data(){
        return{

        }
    }
}

</script>

<style scoped lang="scss" >
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>