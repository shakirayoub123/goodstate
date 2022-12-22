<template>
  <Header />
  <h1> {{name}} Welcome to the update Restaurant page.</h1>
  <form id="box">
    <input type="text" placeholder="Enter Name"  v-model="restaurant.name" name="name">
    <input type="text" placeholder="Enter Address" v-model="restaurant.address" name="address">
    <input type="number" placeholder="Enter Contact" v-model="restaurant.contact" name="contact">
    <button type="button" @click="updateData()">Update Restaurant</button>
  </form>
</template>

<script>
import axios from 'axios'
import Header from "@/components/Header.vue";
export default {
  name: 'update',
  components:{
    Header,
  },
  methods: {
   async updateData() {
      const result=await axios.put('http://localhost:3000/restaurant/'+ this.$route.params.id,{
        name:this.restaurant.name,
        address:this.restaurant.address,
        contact: this.restaurant.contact
      });
      if(result.status==201)
      {
        this.$router.push({name:"Home"})
      }
      alert('Updated Data')
     this.$router.push({name:'home'})
     //console.warn('updated data', this.restaurant)
    }
  },
  data() {
    return {
      restaurant: {
        name: '',
        address: '',
        contact: ''
      }
    }
    },
     async mounted() {
        let user = localStorage.getItem("user-info");
        this.name=JSON.parse(user).name;
        if (!user) {
          this.$router.push({name: 'signup'})
        }
        const result=await axios.get("http://localhost:3000/restaurant/" + this.$route.params.id)
        // console.warn(this.$route.params.id)
        console.warn(result.data);
        this.restaurant=result.data
      }

    }
</script>
<style scoped>
#box{
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width:450px;
  height:300px;
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
</style>