<template>
  <div class="card">
    <div><img class="pfimg" :src="dp" :alt="name"></div>
    <div class="name">{{name}}</div>
    <button class="badge">{{len}}</button>
      
  </div>
</template>

<script>
export default {
    props:
    {
        name:String,
        dp:String,
        len:Number,
    }

}
</script>

<style scoped>
.card {
  display: flex;
  border-bottom: 1px solid black;
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
.badge{
    border-radius: 50%;
    background-color: #25D366;
    color: white;
    height:2.5em;
    width:2.5em;
    margin-top: 2em;
    margin-left:2em;
    border: none;
}
</style>