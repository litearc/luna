<script>
  import { it, tab } from '../js/store'
  import Splitter from '../ui/Splitter.svelte'
  import Tabs from '../ui/Tabs.svelte'
  import NewFile from './NewFile.svelte'
</script>

<template lang='pug'>
  Splitter(
    min2='400px'
    max2='600px'
  )
    div(slot='a')
      Tabs(
        bind:tabs='{$tab}'
        bind:itab='{$it}'
      )
    .sidebar(slot='b')
</template>

<style lang='sass'>
  @import ../theme
  .sidebar
    border: 1px solid $c-blue
    height: 100%
</style>