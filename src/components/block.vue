<template>
  <div class="componentsBlock">
    <slot/>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.componentsBlock{
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding:20px;
  box-sizing: border-box;
  border:1px solid rgb(243, 243, 243);
  border-radius: 4px
}
</style>