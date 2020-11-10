<template>
  <div class="chat">
    <div class="message" v-for="chat in currentChat" :key="chat" v-html="chat.text">
    </div>
    
  </div>
</template>

<script>
export default {
  computed:
  {
    currentChat(){return this.$store.getters.getCurrentChats}
  }
 

}
</script>

<style>
.chat
{
    display: flex;
    flex-direction: column;
    flex:0.7;
    background-image: url(../assets/bg.png);
}
.message
{
  margin: 1rem 1rem 1rem auto;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  border-radius: 1.125rem 1.125rem 0 1.125rem;
  background:#dcf8c6;
  color:black;
  height: max-content;
  width:20rem;
  font-family: Helvetica, sans-serif;
}
.message img
{
  width:300px
}

</style>