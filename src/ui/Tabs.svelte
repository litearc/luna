<script>
  import Icon from './Icon.svelte'
  export
  let tabs = []
    , itab = null
</script>

<template lang='pug'>
  #root.full-w.flex-row.align-bl
    #tabs.full-h
      +each('tabs as tab, i')
        .tab.inline-block(
          class:active='{i == itab}'
          on:mousedown!='{ () => itab = i }'
        )
          .flex-row
            .name {tab.name}
            Icon.xicon.ml-8px.hover-hl(icon='x')
    #controls.full-h
      Icon.hover-hl.mr-4px(icon='plus')
      Icon.hover-hl(icon='folder')
</template>

<style lang='sass'>
  @import ../theme
  #root
    height: 24px
    background-color: $cB
  
  #tabs
    overflow-x: auto
    overflow-y: hidden
    white-space: nowrap
    flex-grow: 0
    flex-shrink: 1

  .tab
    width: 140px
    height: 100%
    padding-top: 4px
    padding-left: 8px
    padding-right: 8px
    background-color: $cD
    border-radius: 6px 6px 0 0
    .name
      flex-grow: 1
      flex-shrink: 1
      overflow: hidden
    .xicon
      flex-grow: 0
      flex-shrink: 0
    &.active
      background-color:$cE

  #controls
    height: 100%
    flex-grow: 1
    flex-shrink: 0
    padding-top: 4px
    padding-left: 6px
    padding-right: 6px
</style>