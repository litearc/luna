<script>
  export
  let disabled = false
    , placeholder = ''
    , ref
    , style = ''
    , value = ''
  let clas
  export { clas as class }

  let el
  function keydown(ev){
    if (ev.key == 'Enter')
      el.blur()
  }
</script>

<template lang='pug'>
  input#input(
    {ref}
    bind:this='{el}'
    class='{clas}'
    disabled='{disabled}'
    placeholder='{placeholder}'
    style='{style}'
    type='text'
    bind:value
    on:blur
    on:focus
    on:keydown='{keydown}'
  )
</template>

<style lang='sass'>
  @import ../theme
  input
    @include input
    min-width: 1px
    &[type=number]
      -moz-appearance: textfield
      appearance: textfield
    &[type=number]::-webkit-inner-spin-button, &[type=number]::-webkit-outer-spin-button
      -webkit-appearance: none
</style>