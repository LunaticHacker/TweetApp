<template>
  <div class="header">
      <div class="nav">
          <img class="dp" :src="info.dp">
          <div class="name">{{info.name}}</div>
      </div>
      
  </div>
</template>

<script>
export default {
    computed:
    {
        info(){return this.$store.getters.getInfo},
    },
}
</script>

<style scoped>
.header
{
    width:100%;
    height:4em;
    position: sticky;
    top: 0;
    background:#075E54;
}
.name
{
    color: white;
    font-family: Helvetica, sans-serif;
    font-size: 1.5em;
    align-self: center;
}
.nav
{
    display: flex;
}
.dp
{
    border-radius: 50%;
    width:50px;
    height:50px;
    margin-right: 1em;
    margin-left: 1em;
}

</style>