<template>
  <Sidebar/>
  <Chat/>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Chat from './components/Chat.vue'


export default {
  name: 'App',
  components: {
    Sidebar,
    Chat
  },
   data() {
    return { chats:{}};
  },
 async created()
  {
   this.$store.dispatch("setChats")

  }
}
</script>

<style>
#app
{
  display: flex;
}
</style>
