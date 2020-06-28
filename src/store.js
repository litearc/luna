import { writable } from 'svelte/store'

export const test = writable('hello')

module.exports = { test }
