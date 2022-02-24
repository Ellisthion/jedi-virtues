<template>
  <transition name="fade-delay" appear>
    <div class="virtues-quiz-component">
      <h1>Test of Virtues</h1>

      <div class="decoded-answers" v-if="decodedAnswers != null">
        <DecodedAnswers :answers="decodedAnswers" />
      </div>

      <transition name="fade" mode="out-in" appear v-else>
        <div class="question" :key="currentQuestion.firstVirtue + ' vs ' + currentQuestion.secondVirtue" v-if="currentQuestion">
          <label>{{ currentQuestion.origPrompt }}</label>

          <p>Debug: {{ currentQuestion.firstVirtue }} vs {{ currentQuestion.secondVirtue }}</p>

          <div class="choice-container" :class="{ 'chosen': currentChosen != null }">
            <button type="button" class="choice" :class="{ 'active': currentChosen === currentQuestion.firstVirtue }" @click="answerChosen(currentQuestion.firstVirtue, currentQuestion.secondVirtue)">
              {{ currentQuestion.origFirst }}
            </button>

            <button type="button" class="choice" :class="{ 'active': currentChosen === currentQuestion.secondVirtue }" @click="answerChosen(currentQuestion.secondVirtue, currentQuestion.firstVirtue)">
              {{ currentQuestion.origSecond }}
            </button>
          </div>

          <transition name="fade-delay" appear>
            <div class="after-choice" v-if="currentChosen">
              <div>Debug: You have chosen {{ currentChosen }}</div>

              <transition name="fade-slow" appear>
                <button type="button" @click="nextQuestion()">Next</button>
              </transition>
            </div>
          </transition>
        </div>

        <div class="judgement" v-else>
          <label>You have been judged. Send this code to your gamemaster.</label>

          <p class="code-result">{{ resultCode }}</p>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import arrayShuffle from 'array-shuffle';
import {
  questions, virtues, Question, Virtue,
} from '../models/virtues';
import { Answer } from '../models/answer';
import { compactAnswers, expandAnswers } from '../utils/answer-compactor';
import queryString from 'query-string';
import DecodedAnswers from './DecodedAnswers.vue';

// Check for decode query string
const decodedAnswers = ref<Answer[]>(null);
const queryParams = queryString.parse(window.location.search);
if (queryParams.decode && !Array.isArray(queryParams.decode)) {
  try {
    decodedAnswers.value = expandAnswers(queryParams.decode);
    console.dir(decodedAnswers.value);
  } catch (error) {
    // Decode failed, query string must be invalid
    console.error(error);
  }
}

// Otherwise...

let remainingVirtues = virtues.slice();
let remainingQuestions = questions.slice();

const upcomingQuestions: Question[] = [];
const chosenAnswers: Answer[] = [];

const currentQuestion = ref<Question>(null);
const currentChosen = ref<Virtue>(null);

const resultCode = ref<string>();

function selectUpcomingQuestions() {
  if (remainingVirtues.length === 0) {
    throw new Error('Cannot select upcoming when no virtues remaining');
  }

  if (remainingVirtues.length % 2 !== 0) {
    throw new Error('Should not have odd number of virtues remaining');
  }

  const virtueOptions = arrayShuffle(remainingVirtues);

  const questionsToSelect = virtueOptions.length / 2;

  for (let i = 0; i < questionsToSelect; ++i) {
    const virtue1 = virtueOptions.pop();
    const virtue2 = virtueOptions.pop();

    const matchingQuestionIndex = remainingQuestions.findIndex(q => (q.firstVirtue === virtue1 && q.secondVirtue === virtue2) || (q.firstVirtue === virtue2 && q.secondVirtue === virtue1));
    if (matchingQuestionIndex === -1) {
      throw new Error('Could not find remaining question matching chosen virtues');
    }

    const matchingQuestion = remainingQuestions[matchingQuestionIndex];
    remainingQuestions.splice(matchingQuestionIndex, 1);

    upcomingQuestions.push(matchingQuestion);
  }
}

function answerChosen(chosenVirtue: Virtue, rejectedVirtue: Virtue) {
  if (currentChosen.value != null) {
    return;
  }

  currentChosen.value = chosenVirtue;

  chosenAnswers.push({
    question: currentQuestion.value,
    chosen: chosenVirtue,
    rejected: rejectedVirtue,
  });

  remainingVirtues = remainingVirtues.filter(v => v !== rejectedVirtue);
  remainingQuestions = remainingQuestions.filter(q => q.firstVirtue !== rejectedVirtue && q.secondVirtue !== rejectedVirtue);
}

function nextQuestion() {
  currentChosen.value = null;

  if (remainingVirtues.length > 1) {
    if (upcomingQuestions.length === 0) {
      selectUpcomingQuestions();
    }

    currentQuestion.value = upcomingQuestions.pop();
  } else {
    // Done, go to results
    // TODO
    // alert(remainingVirtues[0]);
    currentQuestion.value = null;

    resultCode.value = compactAnswers(chosenAnswers);
  }
}

nextQuestion();
</script>

<style lang="scss" scoped>
@import '../assets/css/variables';

.virtues-quiz-component {
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;
}

.question {
  label {
    margin-bottom: 0.5rem;
  }
}

.choice-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  $gap: 1.5rem;
  gap: $gap;
  margin: 2rem;

  &.chosen {
    .choice.active {
      &:first-child {
        transform: translateX(calc(50% + $gap / 2));
      }

      &:last-child {
        transform: translateX(calc((50% + $gap / 2) * -1));
      }
    }

    .choice:not(.active) {
      opacity: 0;
    }
  }
}

.after-choice {
  button {
    display: block;
    margin: 2rem auto;
  }
}

.choice {
  padding: 1rem;
}

.judgement {
  text-align: center;
  margin-top: 4rem;
}

.code-result {
  font-size: 2rem;
}

.fade {
  &-enter-active {
    transition: opacity 0.3s ease-out;
  }

  &-leave-active {
    transition: opacity 0.3s ease-in;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}

.fade-delay {
  &-enter-active {
    transition: opacity 0.3s 0.5s ease-out, visibility 0s 0.5s;
  }

  &-leave-active {
    transition: opacity 0.3s ease-in;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    visibility: hidden;
  }
}

.fade-slow {
  &-enter-active {
    transition: opacity 1s 1.5s ease-out, visibility 0s 0.5s;
  }

  &-leave-active {
    transition: opacity 0.3s ease-in;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
