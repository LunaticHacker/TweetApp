<template>
  <div class="sidebar">
    
    <Card v-for="(chat,name) in chats" :key="name" :name="name" :dp="chat.dp" @click="setChat(name)"/>
  </div>
</template>

<script>
import Card from "./Card"
export default {
  components:
  {
    Card
  },
  computed:
  {
    chats(){return this.$store.getters.getChats}
  },
   methods:{
    setChat(name)
    {
      this.$store.commit("setCurrentName",name)
    }
  }
 

}
</script>

<style>
.sidebar
{
  display: flex;
  flex-direction: column;
  flex: 0.3;
  height: 100vh;
}
</style>