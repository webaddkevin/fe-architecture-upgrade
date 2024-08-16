<template>
  <div class="absolute text-xs bottom-0 right-0 w-full flex justify-center items-center mb-1">
    <span>{{ currentPage }}</span>
    /
    <span>{{ total }}</span>
  </div>
</template>

<script setup lang="ts">
import {useNav } from '@slidev/client'
const {currentPage, total} = useNav()
</script>

<style scoped>

</style>