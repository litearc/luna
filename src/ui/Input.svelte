<script>
  import { createEventDispatcher, onMount } from 'svelte'
  export let ref

  function keydown(ev){
    if (ev.key == 'Enter')
      document.getElementById('input').blur()
  }
</script>

<template lang='pug'>
  input#input({ref} type='text' on:focus on:blur on:keydown='{keydown}')
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