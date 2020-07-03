// Dispatch event on click outside of node
// taken from: https://svelte.dev/repl/0ace7a508bd843b798ae599940a91783?version=3.16.7

export default function clickOutside(node) {
  
  const handleClick = event => {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      node.dispatchEvent(
        new CustomEvent('clickoutside', node)
      )
    }
  }

	document.addEventListener('click', handleClick, true)
  
  return {
    destroy() {
      document.removeEventListener('click', handleClick, true)
    }
	}
}

// example usage:
/*
<script>
	import {clickOutside} from './clickOutside.js';
	let name = 'world';
	
	function handleClickOutside(event) {
		alert('Click outside!');
	}
	
</script>

<h1>Hello {name}!</h1>
<div use:clickOutside on:clickoutside={handleClickOutside}>
	Click outside me!
</div>

<style>
	div {
		height: 100px;
		color: white;
		background-color: steelblue;
		border-radius: 4px;
		display: flex;
		align-items:center;
		justify-content: center;
	}
</style>
*/