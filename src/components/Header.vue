<template>
  <div id="nav">
    <router-link to="/home">Home</router-link>
    <router-link to="/add">Add Restaurent</router-link>
<!--    <router-link to="/update">Update Restaurent</router-link>-->
    <a @click="logOut" href="#">Logout</a>

  </div>
</template>

<script>
export default {
  name:'Header',
  methods:{
    logOut(){
      localStorage.clear();
      this.$router.push({name:'login'})
      // console.log('local storage clear')

    }
  }


}
</script>

<style scoped>

#nav{
  background-color: black;
  overflow: hidden;

}
#nav a{
  float: left;
  margin-right: 4px;
  padding: 15px;
  color:white;
  text-decoration: none;
}
body{
  margin:0;
  padding: 0;
}
#nav a:hover{
  background-color: floralwhite;
  border: 1px solid;
  color:#222;
  height: auto;
  display: block;
}
</style>