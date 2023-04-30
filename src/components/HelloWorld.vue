<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})
</script>

<template>
  <h1 class="text-center p-11">{{ msg }}</h1>
</template>
