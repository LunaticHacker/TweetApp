<template>
  <div class="card">
      <div><img class="pfimg" :src="dp" :alt="name"></div>
      <div class="name">{{name}}</div>
  </div>
</template>

<script>
export default {
    props:
    {
        name:String,
        dp:String,
    }

}
</script>

<style scoped>
.card {
  display: flex;
}
.card:hover
{
    color: gray;
    cursor: pointer;
}
.pfimg
{
    width: 64px;
    height: 64px;
    border-radius: 50%;
    padding: 0.5em;
}
.name
{
    font-size: 16px;
    font-weight: normal;
    font-family: Helvetica, sans-serif;
    padding: 1em;
}
</style>