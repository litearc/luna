<script>
  import Icon from '../ui/Icon.svelte'
  export let option = null
</script>

<template lang='pug'>
  #root
    .item(on:mousedown!='{ () => option = 1 }')
      Icon(ref='icon' icon='file-plus')
      span.ml-4px New File
    .item(on:mousedown!='{ () => option = 2 }')
      Icon(ref='icon' icon='folder')
      span.ml-4px New Project
    .item(on:mousedown!='{ () => option = 3 }')
      Icon(ref='icon' icon='folder-plus')
      span.ml-4px Open File / Project
</template>

<style lang='sass'>
  @import ../theme
  .item:hover
    color: $c-text-hl
</style>