/*
 * @Description: 
 * @Author: cooky
 * @Date: 2022-03-25 15:14:34
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-project/',
  plugins: [vue()]
})
