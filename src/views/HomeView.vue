<script setup>
import { onBeforeMount, onMounted } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'

onBeforeMount(() => {
  let s = new Date().getTime()
  let total = 0
  for (let i = 0; i < 10 * 10000 * 10000; i++) {
    total += i
  }
  let e = new Date().getTime()
  console.log(`HomeView: 计算耗时 - ${(e - s) / 1000}s`);
})

onMounted(() => {
  console.log('HomeView: onMounted')
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
