<script>
  /* import FontMetrics from 'fontmetrics' */
  /* const WebFont = require('webfontloader') */
  /* WebFont.load({ */
  /*   google: { */
  /*     families: ['Nunito Sans'] */
  /*   } */
  /* }); */
  /* const metrics = FontMetrics({ */
  /*   fontFamily: 'Nunito Sans', */
  /*   // Optional (defaults) */
  /*   fontWeight: 'normal', */
  /*   fontSize: 200, */
  /*   origin: 'baseline' */
  /* }) */
  /* console.log(metrics) */

  import Intro from './Intro.svelte'
  const app = require("electron").remote.app
  const os = require("os")
  let x = 0
  function inc(){ x++ }
</script>

<template lang='pug'>
  main
    #app.center
      +if('x == 0')
        span(on:mousedown='{inc}') hello {x}
        Intro()
        +else()
          span world {x}
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
