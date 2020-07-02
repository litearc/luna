<script>
  import Icon from '../ui/Icon.svelte'
  function setItem(v){
    console.log(v)
  }
  const test = v => () => console.log('test ' + v)
</script>

<template lang='pug'>
  #root
    .item(on:mousedown!="{()=>setItem('A')}")
      Icon(ref='icon' icon='file-plus')
      span New File
    .item(on:mousedown!="{test('33')}")
      Icon(ref='icon' icon='folder')
      span New Project
    .item
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