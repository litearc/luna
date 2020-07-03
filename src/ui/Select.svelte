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

  for (let i = 0; i < 40; i++)
    items.push('A')

  let show = 'hidden'
  function toggle(){ show = (show == 'visible') ? 'hidden' : 'visible' }
  function hide(ev){
    let { node, target } = ev.detail
    // If clicked on the dropdown menu, don't close.
    let dd = document.getElementById('dropdown')
    if (dd.contains(target))
      return
    show = 'hidden'
  }

  let dropdownH, dropdownY
  onMount(() => {
    let sel = document.getElementById('select')
      , dd = document.getElementById('dropdown')
    let rect = sel.getBoundingClientRect()
    let winH = window.innerHeight
      , selH = sel.offsetHeight
      , selY = rect.top
      , ddH = dd.scrollHeight
    
    // By default, place dropdown menu under the select box - if it doesn't fit,
    // choose whichever direction (top or bottom) has more space.
    let dir = (selY+selH+ddH > winH && selY > winH-selY-selH) ? 'top' : 'bottom'
    let availableH = (dir == 'top') ? selY : winH-selY-selH
    dropdownH = Math.min(ddH, availableH)
    dropdownY = (dir == 'top') ? -dropdownH : selH
    // console.log(`dir: ${dir}, ddH: ${dropdownH}, selY: ${selY}`)
  })
</script>

<template lang='pug'>
  #root.pos-relative
    #select(use:clickOutside on:click='{toggle}' on:clickoutside='{hide}')
      span Select
      .expand
      Icon(icon='caret-down')
    #dropdown(style='visibility: {show}; height: {dropdownH}px; top: {dropdownY}px')
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
    overflow-y: auto
    
  .item
    margin-top: 2px
    margin-bottom: 2px
    &:hover
      color: $c-text-hl
</style>