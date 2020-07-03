<script>
  import Icon from '../ui/Icon.svelte'
  export let option = null
</script>

<template lang='pug'>
  #root
    .item(on:mousedown!="{ () => option = 1 }")
      Icon(ref='icon' icon='file-plus')
      span New File
    .item(on:mousedown!="{ () => option = 2 }")
      Icon(ref='icon' icon='folder')
      span New Project
    .item(on:mousedown!="{ () => option = 3 }")
      Icon(ref='icon' icon='folder-plus')
      span Open File / Project
</template>

<style lang='sass'>
  @import ../theme

  span
    margin-left: $icon-text-space

  .item:hover
    color: $c-text-hl
</style>