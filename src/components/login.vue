<template>
  <div id="box">
    <img class= "logo" src="../assets/good.png">
    <h1>Login</h1>
    <input type="text" placeholder="Enter Email" v-model="email">
    <input type="password" placeholder="Enter Password" v-model="password">
    <button @click="login">Login</button>
    <p>
      <router-link to="/signup">Signup</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'login',
  data(){
    return{
      email:'',
      password:'',
    }
  },
methods:{
  async login(){
    // console.warn('inside func', this.email, this.password)
    let result = await axios.get(

        // http://localhost:3000/user?email=jack@test.com&password=jack123
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`
    );
    if (result.status == 200 && result.data.length>0) {
      localStorage.setItem('user-info', JSON.stringify(result.data[0]))
      this.$router.push({name: 'Home'})
    }
  }

},
  mounted(){
    let user=localStorage.getItem("user-info");
    if(user){
      this.$router.push({name: 'Home'})
    }
    console.warn('mounted')

  }
}
</script>

<style scoped>
#box{
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width:450px;
  height:580px;
  border-radius: 20px;
  padding-top: 20px;
  margin:auto;
}
#box input{
  display: block;
  border: 1px solid;
  padding-left: 20px;
  height:40px;
  width:300px;
  margin-bottom: 20px;
  margin-left: auto;
  border-radius: 5px;
  margin-right: auto ;
}
button{
  height:40px;
  width:320px;
  color:white;
  background-color: deepskyblue;
  border: none;
  border-radius: 10px;
  cursor: pointer;

}
p a{
  text-decoration: none;
}
p a:hover{
  color:dodgerblue;
}
.logo{
  height:180px;
  width:230px;
  margin: auto;
}
</style>