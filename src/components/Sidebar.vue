<template>
  <div class="sidebar">
    
    <Card v-for="(chat,name) in chats" :key="name" :name="name" :dp="chat.dp"/>
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