<script>
  import {
    beforeUpdate,
    createEventDispatcher,
    onDestroy,
    onMount,
    tick
  } from 'svelte'

  import clickOutside from './clickOutside'
  import Icon from './Icon.svelte'

  export let
    items = ['itemA', 'itemB', 'itemC', 'itemD', 'itemE', 'itemF'] // list of string or array (of list) types

  let show = 'hidden'
  function toggle(){ show = (show == 'visible') ? 'hidden' : 'visible' }
  function hide(){ show = 'hidden' }
</script>

<template lang='pug'>
  #root.pos-relative
    #select(use:clickOutside on:click='{toggle}' on:clickoutside='{hide}')
      span Select
      .expand
      Icon(icon='caret-down')
    #dropdown(style='visibility: {show}')
      +each('items as item, i')
        .item {item}
</template>

<style lang='sass'>
  @import ../theme

  #select
    width: 100%
    min-width: 200px
    padding-top: 4px
    padding-bottom: 4px
    align-items: baseline
    border: 1px solid $c-red
    display: flex

  #dropdown
    z-index: 100
    width: 100%
    border: 1px solid $c-blue
    display: block
    position: absolute
    max-height: 50px
    overflow-y: scroll
    
  .item
    margin-top: 2px
    margin-bottom: 2px
    &:hover
      color: $c-text-hl
</style>