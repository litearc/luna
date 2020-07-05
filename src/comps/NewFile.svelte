<script>
  let path = require('path')
  let { dialog } = require('electron').remote
  import Icon from '../ui/Icon.svelte'
  import Input from '../ui/Input.svelte'
  import Select from '../ui/Select.svelte'
  let ieditor = 0
    , fpath = ''
    
  function openFile(){
    dialog.showOpenDialog({
      filters: [{
        name: 'Image',
        extensions: ['png'], // only support png for now
      }],
      properties: ['openFile'],
    }).then( async ({canceled, filePaths}) => {
      fpath = path.basename(filePaths[0])
    })
  }
</script>

<template lang='pug'>
  div.border-red
    #select.mb-8px
      span.mr-8px Type
      Select(
        bind:index='{ieditor}'
        items!="{['Sprite', 'Anim', 'Tileset', 'Map']}"
        ref='select'
      )
    
    // Sprite ..................................................................
    +if('ieditor == 0')
      .flex-row.align-bl.mr-8px
        span.mr-8px File
        Input(
          bind:value='{fpath}'
          ref='input'
          disabled='true'
        )
        Icon(
          ref='icon'
          icon='folder'
          on:mousedown='{openFile}'
        )
      .grid.col-2.hgap-20px.mt-8px
        .g11.bold Image
        .g21
          .flex-row.align-bl.spaced-8px
            span Width
            .expand
            Input(
              disabled='true'
              placeholder='-'
              ref='num-input'
              style='text-align: right'
              type='number'
            )
            span px
        .g31
          .flex-row.align-bl.spaced-8px
            span Height
            .expand
            Input(
              disabled='true'
              placeholder='-'
              ref='num-input'
              style='text-align: right'
              type='number'
            )
            span px
        .g12.bold Sprite
        .g22
          .flex-row.align-bl.spaced-8px
            span Width
            .expand
            Input(
              placeholder='-'
              ref='num-input'
              style='text-align: right'
              type='number'
            )
            span px
        .g32
          .flex-row.align-bl.spaced-8px
            span Height
            .expand
            Input(
              placeholder='-'
              ref='num-input'
              style='text-align: right'
              type='number'
            )
            span px

    // Anim ....................................................................
    +if('ieditor == 1')
      div Anim
    
    // Tileset .................................................................
    +if('ieditor == 2')
      div Tileset
    
    // Map .....................................................................
    +if('ieditor == 3')
      div Map
</template>

<style lang='sass'>
  @import ../theme
  
  :global([ref='select'])
    width: 200px

  :global([ref='input'])
    margin-right: 8px
    flex-grow: 1
  
  :global([ref='num-input'])
    width: 100px

  :global([ref='icon'])
    &:hover
      color: $c-text-hl
</style>