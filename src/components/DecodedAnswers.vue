<template>
  <div class="decoded-answers-component">
    <div class="final-virtue">
      <h2>
        Final Virtue<br><small>{{ lastAnswer.chosen }}</small>
      </h2>
      <h3>
        Chosen over<br><small>{{ lastAnswer.rejected }}</small>
      </h3>
    </div>

    <div class="answer" v-for="(answer, i) of answers" :key="i">
      <h4 class="question-choice">{{ answer.question.firstVirtue }} vs {{ answer.question.secondVirtue }}</h4>
      <div class="question">{{ answer.question.origPrompt }}</div>
      <div class="choices">
        <div class="choice" :class="{ 'active': answer.chosen === answer.question.firstVirtue }">
          <h5 class="choice-virtue">{{ answer.question.firstVirtue }}</h5>
          <div class="choice-text">{{ answer.question.origFirst }}</div>
        </div>
        <div class="choice" :class="{ 'active': answer.chosen === answer.question.secondVirtue }">
          <h5 class="choice-virtue">{{ answer.question.secondVirtue }}</h5>
          <div class="choice-text">{{ answer.question.origSecond }}</div>
        </div>
      </div>
      <p class="consequence">
        Consequences: TBD consequence
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { Answer } from '../models/answer';

const props = defineProps({
  answers: { type: Array as PropType<Answer[]>, required: true },
});

const lastAnswer = computed(() => props.answers[props.answers.length - 1]);
</script>

<style lang="scss" scoped>
@import '../assets/css/variables';

.final-virtue {
  text-align: center;
}

.answer {
  margin: 3rem 0;
}

.choices {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  $gap: 1.5rem;
  gap: $gap;
  margin: 2rem;

  .choice {
    padding: 1rem;

    color: $yellow;
    background-color: transparent;

    border: 3px solid $yellow;

    &.active {
      background-color: $yellow;
      color: $black;
    }
  }
}

.choice-virtue {
  margin-top: 0;
  margin-bottom: 1rem;
}
</style>
