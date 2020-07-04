<script>
  import Intro from './Intro.svelte'
  import NewFile from './NewFile.svelte'
  let pick
</script>

<template lang='pug'>
  main
    #app
      +if('pick == null')
        .center
          Intro(bind:option='{pick}')
        +else()
          .center.flex-col
            NewFile()
</template>

<!-- global style for entire app -->
<style lang='sass'>
  @import ../theme

  :global(*)
    box-sizing: border-box
    user-select: none

  #app
    width: 100vw
    height: 100vh
    background-color: #222

    // for some reason, `position: relative` (along with `overflow: hidden`)
    // is needed to prevent the tooltip from expanding the div
    position: relative // allows absolute position of subelements
    overflow: hidden

    @include font
</style>