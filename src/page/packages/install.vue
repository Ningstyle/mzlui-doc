<template>
	<div v-highlight>
    <install-md></install-md>
  </div>
</template>
<script setup>
import mTitle from '@/components/mtitle.vue'
import cTitle from '@/components/ctitle.vue'
import block from '@/components/block.vue'
import { VueComponent as installMd } from '@/page/md/install/install.md'
</script>
<style scoped lang="scss">
.installBox{
	font-family: Consolas, Monaco, monospace;
}

</style>