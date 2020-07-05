<script>
  import Intro from './Intro.svelte'
  import NewFile from './NewFile.svelte'
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
            NewFile()
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