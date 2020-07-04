<script>
  import { createEventDispatcher, onMount } from 'svelte'
  import clickOutside from './clickOutside'
  import Icon from './Icon.svelte'

  const dispatch = createEventDispatcher()
  export let items // list of String
  export let index // current index in list
  export let ref

  let show = 'hidden'
  function toggle(){
    show = (show == 'visible') ? 'hidden' : 'visible'
    calcDropHY()
  }
  function hide(ev){
    let { node, target } = ev.detail
    // If clicked on the dropdown menu, don't close.
    let dd = document.getElementById('dropdown')
    if (dd.contains(target))
      return
    show = 'hidden'
  }

  let dropdownH, dropdownY
  function calcDropHY(){
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
    dropdownH = Math.min(ddH, availableH) + 2
    dropdownY = (dir == 'top') ? -dropdownH : selH
  }
  onMount(() => { calcDropHY() })

  $: text = items[index]
  function clickItem(i){    
    index = i
    show = 'hidden'
    dispatch('selected', i)
  }
</script>

<template lang='pug'>
  #root.inline-block.pos-relative({ref})
    #select(use:clickOutside on:click='{toggle}' on:clickoutside='{hide}')
      span {text}
      .expand
      Icon(icon='caret-down')
    #dropdown(style='visibility: {show}; height: {dropdownH}px; top: {dropdownY}px')
      +each('items as item, i')
        .item(on:click!="{ () => clickItem(i) }") {item}
</template>

<style lang='sass'>
  @import ../theme

  #select
    width: 100%
    border-radius: 4px
    padding: 4px 8px 4px 12px
    align-items: baseline
    display: inline-flex
    background-color: $cB
    &:hover
      background-color: $cE

  #dropdown
    z-index: 100
    width: 100%
    border-radius: 4px
    background-color: $cH
    border: 1px solid $c-border
    padding: 4px 12px 4px 12px
    display: block
    position: absolute
    overflow-y: auto
    
  .item
    padding-top: 2px
    padding-bottom: 2px
    &:hover
      color: $c-text-hl
</style>