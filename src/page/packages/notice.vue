<template>
  <div>
    <m-title mtitle="使用须知" mins="通过阅读使用须知，我们希望你明白mzl ui的优势以及使用它的理由！"></m-title>
    <c-title ctitle="mzl-ui的诞生" ctips="你，我生命中一个重要的过客，之所以是过客，因为你未曾为我停留！"></c-title>
    <p class="context">
      如今UI框架可谓数不胜数，随着vue3版本被推出，再加上vite的加持，可谓前途一片光明，习惯了Element-ui的使用却不能顺利迭代到vue3.0的版本，纵然已有element-plus，却发现在使用习惯、调试适配的问题上折磨了程序猿多少个日夜！为此mzl-ui诞生了，它秉着专为vue3版本服务的宗旨，简单配置，快速的响应，配合vue3的composition API完成更强的拓展性，我们想把几乎所有的权限都交给使用者，为所欲为。我们等着你为mzl-ui添上浓厚的一笔！
    </p>
    <c-title ctitle="更小的体积" ctips=""></c-title>
    <p class="context">
      整个库的大小不足1M,涵盖109个常用组件
    </p>
    <c-title ctitle="更快的响应" ctips=""></c-title>
    <p class="context">
      配合vue3的composition API
    </p>
    <c-title ctitle="更强的拓展性" ctips=""></c-title>
    <p class="context">
      给开发者几乎所欲的权限来自定义组件，满足一切项目使用场景
    </p>
    <c-title ctitle="更完美的支持" ctips=""></c-title>
    <p class="context">
      专为vue3版本开发
    </p>
    <c-title ctitle="更友好的渲染" ctips=""></c-title>
    <p class="context">
      极少的代码量，极简配置项
    </p>
  </div>
</template>

<script setup>
import mTitle from '@/components/mtitle.vue'
import cTitle from '@/components/ctitle.vue'
import block from '@/components/block.vue'
</script>

<style lang="scss" scoped>
.context{
  margin-top:0;
  color:#000000d9;
  font-size:14px;
}
</style>