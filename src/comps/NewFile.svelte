<script>
  let { dialog } = require('electron').remote
  import Icon from '../ui/Icon.svelte'
  import Input from '../ui/Input.svelte'
  import Select from '../ui/Select.svelte'
  let ieditor = 0

  function openFile(){
    dialog.showOpenDialog({
      filters: [{
        name: 'Image',
        extensions: ['png'], // only support png for now
      }],
      properties: ['openFile'],
    }).then( ({canceled, filePaths}) => { console.log('test') } )
  }
</script>

<template lang='pug'>
  div.border-red
    #select.mb-8px
      span.mr-8px Type
      Select(ref='select' bind:index='{ieditor}' items!="{['Sprite', 'Anim', 'Tileset', 'Map']}")
    +if('ieditor == 0')
      .flex-row.align-bl
        span.mr-8px File
        Input(ref='input')
        Icon(ref='icon' icon='folder' on:mousedown='{openFile}')
    +if('ieditor == 1')
      div Anim
    +if('ieditor == 2')
      div Tileset
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

  :global([ref='icon'])
    &:hover
      color: $c-text-hl
</style>