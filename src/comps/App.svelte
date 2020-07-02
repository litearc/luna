<script>
  import Intro from './Intro.svelte'
</script>

<template lang='pug'>
  main
    #app.center
      Intro()
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