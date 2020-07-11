<script>
  import { it, tab } from '../js/store'
  import { onMount } from 'svelte'
  import Splitter from '../ui/Splitter.svelte'
  import Tabs from '../ui/Tabs.svelte'
  import NewFile from './NewFile.svelte'

  onMount(() => {
    console.log('tab: ' + $tab)
    console.log('tab type: ' + $tab.type)
    console.log('it: ' + $it)
  })
</script>

<template lang='pug'>
  Tabs(
    bind:tabs='{$tab}'
    bind:itab='{$it}'
  )
    +if('$tab[$it].type == "new"')
      div.border-red AAA
      +else()
        Splitter(
          min2='400px'
          max2='600px'
        )
          div.border-blue(slot='a')
          div.border-green(slot='b')
</template>

<style lang='sass'>
  @import ../theme
  .sidebar
    border: 1px solid $c-blue
    height: 100%
</style>