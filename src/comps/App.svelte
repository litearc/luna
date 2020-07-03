<script>
  import Intro from './Intro.svelte'
  import Select from '../ui/Select.svelte'
  let pick
</script>

<template lang='pug'>
  main
    #app
      +if('pick == null')
        .center
          Intro(bind:option='{pick}')
        +else()
          .center
            Select()
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

  #shifter
    height: 200px
    border: 1px solid $c-green
</style>