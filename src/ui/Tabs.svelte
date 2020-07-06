<script>
  import { Icon } from './Icon.svelte'
  export let tabs = []
</script>

<template lang='pug'>
  #root.full-w.flex-row
    #tabs.border-blue.full-h
      +each('tabs as tab, i')
        span tab {i}
    #controls.border-red.full-h
      Icon(icon='circle-x')
</template>

<style lang='sass'>
  @import ../theme
  #root
    height: 24px
  #tabs
    overflow-x: scroll
    overflow-y: hidden
    white-space: nowrap
    flex-grow: 0
    flex-shrink: 1
  #controls
    flex-grow: 1
    flex-shrink: 0
</style>