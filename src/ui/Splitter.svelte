<script>import { set_style } from 'svelte/internal';

  import { onMount } from 'svelte'

  export
  let orient = 'vertical'
    , limits = [0, 100]
    , min1 = null
    , max1 = null
    , min2 = null
    , max2 = null
    , mode = 'resizeBoth' // 'resizeA', 'resizeB', 'resizeBoth'

  let near = false
    , resizing = false
    , pane1Size = '1fr'
    , pane2Size = '1fr'
    , x = null
    , y = null
  const dist = 5 // # pixels, activate splitter
  let splitter, pane1, pane2

  $: mclass = {
    horizontal: orient == 'horizontal',
    vertical: orient == 'vertical',
  }

  function setStyle(){
    mstyle = (orient == 'horizontal') ? `
      display: grid;
      grid-template-rows: ${pane1Size} 0px ${pane2Size};
      cursor: ${(resizing) ? 'grabbing' : (near) ? 'ns-resize' : 'default'};
    ` : `
      display: grid;
      grid-template-columns: ${pane1Size} 0px ${pane2Size};
      cursor: ${(resizing) ? 'grabbing' : (near) ? 'ew-resize' : 'default'};
    `
  }
  $: near, resizing, pane1Size, pane2Size, setStyle()
  let mstyle
  setStyle()

  // Converts a (possibly percent) unit to pixel units.
  const toPx = (s, w) => (s[s.length-1] === 'x') ? parseFloat(s) : parseFloat(s)*w

  function okRange(){
    let el = splitter
    let w = (orient == 'horizontal') ? el.offsetHeight : el.offsetWidth
    let l1 = (min1 == null) ? 0   : toPx(min1, w)
      , u1 = (max1 == null) ? w-1 : toPx(max1, w)
      , l2 = (min2 == null) ? 0   : w-toPx(max2, w)
      , u2 = (max2 == null) ? w-1 : w-toPx(min2, w)
    let min = Math.max(l1, l2)
    let max = Math.min(u1, u2)
    if (max < min){ // no acceptable position for splitter
      console.log('Splitter: no acceptable position for splitter found!');
      return null
    }
    // for 'resizeA' mode, where slot2 is fixed size, need to adjust size.
    if (mode == 'resizeA'){
      let tmp = min
      min = w-max
      max = w-tmp
    }
    return [min, max]
  }

  function setPaneSizes(pos, totSize, r){
    if (pos < r[0]) pos = r[0]
    if (pos > r[1]) pos = r[1]
    switch (mode){
      case 'resizeA':
        pane1Size = `${pos}px`
        pane2Size = `1fr`
        break
      case 'resizeB':
        pane1Size = `1fr`
        pane2Size = `${totSize-pos}`
        break
      case 'resizeBoth':
        pane1Size = `${pos/totSize}fr`
        pane2Size = `${1-pos/totSize}fr`
        break
    }
  }

  function onMousemove(e){
    let r = okRange()
    let el = splitter
    let hor = orient == 'horizontal'
    let totSize = (hor) ? el.offsetHeight : el.offsetWidth
    let pos = el.getBoundingClientRect()
    let mousePos = (hor) ?  e.y-pos.top : e.x-pos.left
    let splitPos = (hor) ? pane1.offsetHeight : pane1.offsetWidth
    near = Math.abs(mousePos-splitPos) < dist
    if (r == null || !resizing) return
    setPaneSizes(mousePos, totSize, r)
  }

  function onMousedown(e){
    if (!near) return
    resizing = true
    document.documentElement.style.cursor = 'grabbing'
    document.body.classList.add('no-pointer-events')
    document.body.classList.add('non-selectable')
  }

  function onMouseup(e){
    resizing = false
    document.documentElement.style.cursor = ''
    document.body.classList.remove('no-pointer-events')
    document.body.classList.remove('non-selectable')
  }

  onMount(() => {
    document.addEventListener('mousemove', onMousemove)
    document.addEventListener('mousedown', onMousedown)
    document.addEventListener('mouseup', onMouseup)

    let r = okRange()
    if (r == null) return
    let el = splitter
    let hor = orient == 'horizontal'
    let totSize = (hor) ? el.offsetHeight : el.offsetWidth
    let splitPos = (hor) ? pane1.offsetHeight : pane1.offsetWidth
    setPaneSizes(splitPos, totSize, r)
  })
</script>

<template lang='pug'>
  #root.full(
    bind:this='{splitter}'
    class='{mclass}'
    style='{mstyle}'
  )
    #pane1(bind:this='{pane1}')
      slot.full(name='a')
    #splitter
    #pane2(bind:this='{pane2}')
      slot.full(name='b')
</template>

<style lang='sass'>
  @import ../theme
  #pane1, #pane2
    overflow: hidden
</style>
