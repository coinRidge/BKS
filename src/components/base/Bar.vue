<template>
  <div class="bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Bar',
  data () {
    return {}
  }
}
</script>
<style>
.bar {
  color: #337ab7;
  border: 1px solid rgb(221, 220, 220);
  background-color: whitesmoke;
  width: 100%;
  height: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 5px;
  margin-top: 10px;
}
.bar div {
  padding: 0 20px;
  border-right: 1px solid black;
  cursor: pointer;
}
</style>
