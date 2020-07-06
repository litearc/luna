<script>
  import { it, tab } from '../js/store'
  import NewTileset from './NewTileset.svelte'
  import Select from '../ui/Select.svelte'
  
  let ieditor = 0
    , fpath = ''
  let inputOpts = {
    placeholder: '-',
    ref: 'num-input',
    style: 'text-align: right;',
    type: 'number',
  }

  let getTilesetData
  function createTab(){
    $tab[0] = getTilesetData()
    console.log($tab[0])
  }
</script>

<template lang='pug'>
  div
    #select.mb-8px
      span.mr-8px Type
      Select(
        bind:index='{ieditor}'
        items!="{['Sprite', 'Anim', 'Tileset', 'Map']}"
        ref='select'
        style='width: 200px;'
      )
    +if('ieditor == 0')
      div Sprite
    +if('ieditor == 1')
      div Anim
    +if('ieditor == 2')
      NewTileset(
        bind:data='{getTilesetData}'
      )
    +if('ieditor == 3')
      div Map
    .flex-row.align-bl.spaced-8px.mt-16px
      .expand
      button() Cancel
      button.highlighted(on:mousedown='{createTab}') Create
</template>

<style lang='sass'>
  @import ../theme
</style>