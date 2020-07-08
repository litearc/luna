<script>
  import { createEventDispatcher } from 'svelte'
  import Icon from '../ui/Icon.svelte'
  const dispatch = createEventDispatcher()

  export let option = null
  function setOption(i){
    option = i
    dispatch('optionpicked', i)
  }
</script>

<template lang='pug'>
  #root
    .item.mb-4px(on:mousedown!='{ () => setOption(1) }')
      Icon(ref='icon' icon='file-plus')
      span.ml-4px New File
    .item.mb-4px(on:mousedown!='{ () => setOption(2) }')
      Icon(ref='icon' icon='folder')
      span.ml-4px New Project
    .item(on:mousedown!='{ () => setOption(3) }')
      Icon(ref='icon' icon='folder-plus')
      span.ml-4px Open File / Project
</template>

<style lang='sass'>
  @import ../theme
  .item:hover
    color: $c-text-hl
</style>