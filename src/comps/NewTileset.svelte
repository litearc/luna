<script>
  let path = require('path')
  let { dialog } = require('electron').remote
  import { createEventDispatcher } from 'svelte'
  import { loadImage } from '../js/image'
  import { i8ToF32 } from '../js/util'
  import Icon from '../ui/Icon.svelte'
  import Input from '../ui/Input.svelte'
  const dispatch = createEventDispatcher()

  export let tabData
  let fname = '' // file.png
    , fpath = '' // path/to/file.png
    , imW = ''   // image width, height
    , imH = ''
    , imData     // pixel values
    , tileW = '' // tile width, height
    , tileH = ''

  function openFile(){
    dialog.showOpenDialog({
      filters: [{
        name: 'Image',
        extensions: ['png'], // only support png for now
      }],
      properties: ['openFile'],
    }).then( async ({canceled, filePaths}) => {
      fpath = filePaths[0]
      fname = path.basename(fpath)
      let {w, h, data} = await loadImage(fpath)
      imW = w, imH = h, imData = i8ToF32(data)
    })
  }

  export function data(){
    return {imW, imH, tileW, tileH, imData}
  }
</script>

<template lang='pug'>
  .flex-row.align-bl.mb-8px
    span.mr-8px File
    Input.mr-8px.expand(
      bind:value='{fname}'
      disabled='true'
    )
    Icon.hover-hl(
      icon='folder'
      on:mousedown='{openFile}'
    )
  .grid.col-2.hgap-20px
    .g11.bold Image
    .g21
      .input-root.flex-row.align-bl.spaced-8px
        span Width
        .expand
        Input.input(
          disabled='true'
          type='number'
          placeholder='-'
          bind:value='{imW}'
        )
        span px
    .g31
      .input-root.flex-row.align-bl.spaced-8px
        span Height
        .expand
        Input.input(
          disabled='true'
          type='number'
          placeholder='-'
          bind:value='{imH}'
        )
        span px
    .g12.bold Tile
    .g22
      .input-root.flex-row.align-bl.spaced-8px
        span Width
        .expand
        Input.input(
          type='number'
          placeholder='-'
          bind:value='{tileW}'
        )
        span px
    .g32
      .input-root.flex-row.align-bl.spaced-8px
        span Height
        .expand
        Input.input(
          type='number'
          placeholder='-'
          bind:value='{tileH}'
        )
        span px
</template>

<style lang='sass'>
  @import ../theme
  .input-root > :global(.input)
    width: 60px
    text-align: right
</style>