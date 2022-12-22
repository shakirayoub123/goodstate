<template>
  <div>

    <Header />
    <h1>Hey {{name}}, Welcome to Home Page</h1>
    <table border="1">
      <tr id="bold">
        <td>Id</td>
        <td>Name</td>
        <td>Address</td>
        <td>Contact</td>
        <td>Actions</td>

      </tr>
      <tr v-for="item in restaurants" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.address}}</td>
        <td>{{item.contact}}</td>
        <td id="update"><router-link :to="'/update/'+item.id">Update</router-link></td>
        <button id= "btn" @click="deleteRest(item.id)">Delete</button>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
export default {
  name: 'Home',
  data(){
    return{
      name:'',
      restaurants:[],
    }
  },
  components:{
    Header,
  },
  methods:{
    async deleteRest(id){
      // console.warn(id)
      let result= await axios.delete("http://localhost:3000/restaurant/"+ id)
      if (result.status===200)
      {
      this.loadData()
        alert("Deleted Successfully")
      }
    },
    async loadData()
    {
      let user=localStorage.getItem("user-info");
      this.name=JSON.parse(user).name;
      if(!user){
        this.$router.push({name: 'signup'})
      }
      // console.warn('mounted')
      let result= await axios.get("http://localhost:3000/restaurant")
      // console.warn(result.data)
      this.restaurants=result.data
    }
  },
  mounted()
  {
    this.loadData()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
td{
  width:200px;
  height:40px;

}
table{
  margin-left: auto;
  margin-right: auto;
}
#bold{
  font-weight: bold;
}
#update{
  color: dodgerblue;
}
#btn{
  color:white;
  background-color: dodgerblue;
  border-radius: 3px;
  border: none;
  height :25px;
  margin-top: 12px;
  cursor: pointer;
}
#btn:hover{
  background-color: orangered;
}
</style>
