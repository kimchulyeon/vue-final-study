<template>
  <header class="w-full text-sm bg-slate-500">
    <h3>main nav</h3>
    <div>{{ company }}</div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const company = ref("plea");
</script>
