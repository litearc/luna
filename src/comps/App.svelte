<script>
  import Main from './Main.svelte'
  import Intro from './Intro.svelte'
  let option = null
</script>

<template lang='pug'>
  main
    #app
      +if('option == null')
        .center
          Intro(bind:option)
        +else()
          .center.flex-col
            Main()
</template>

<style lang='sass'>
  @import ../theme
  :global(*)
    box-sizing: border-box
    user-select: none
    
  #app
    width: 100vw
    height: 100vh
    background-color: #222
    // For some reason, `position: relative` (along with `overflow: hidden`)
    // is needed to prevent the tooltip from expanding the div.
    position: relative // allows absolute position of subelements
    overflow: hidden
    @include font
</style>