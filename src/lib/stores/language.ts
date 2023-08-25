import { writable } from 'svelte/store'
import type localization from '$lib/data/localization'

export type Languages = keyof typeof localization

export const language = writable<Languages>('ru')
