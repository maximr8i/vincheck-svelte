/* eslint-disable import/no-extraneous-dependencies */
import adapter from '@sveltejs/adapter-node'
// eslint-disable-next-line import/no-unresolved
import { vitePreprocess } from '@sveltejs/kit/vite'

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      precompress: true
    })
  }
}
