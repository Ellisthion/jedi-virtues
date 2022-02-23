<template>
  <div class="virtues-quiz-component">
    <h1>Test of Virtues</h1>
  </div>
</template>

<script setup lang="ts">
import { questions, virtues } from '../config/virtues';
</script>

<style lang="scss" scoped>
.virtues-quiz-component {
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;
}
</style>
