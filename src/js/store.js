import { writable } from 'svelte/store'

// Index of currently active tab.
export const it = writable(0)

// Array of objects that contain tab data.
export const tab = writable([])