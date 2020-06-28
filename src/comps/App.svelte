<script>
  const app = require("electron").remote.app
  const os = require("os")
</script>

<template lang='pug'>
  main
    p hello
</template>

<!-- global style for entire app -->
<style lang='sass' global>
@font-face
  font-family: main
  src: url(./regular.ttf)
p
  color: red
  font-family: main
</style>
