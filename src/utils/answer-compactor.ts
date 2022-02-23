import { Answer } from '../models/answer';
import { questions, Question, Virtue } from '../models/virtues';

const shortVirtues = ['h', 'c', 'v', 'j', 's', 'o', 'p', 'y'] as const;
type ShortVirtue = typeof shortVirtues[number];

const shortToLong: { [key in ShortVirtue]: Virtue } = {
  h: 'Honesty',
  c: 'Compassion',
  v: 'Valour',
  j: 'Justice',
  s: 'Sacrifice',
  o: 'Honour',
  p: 'Spirituality',
  y: 'Humility',
};

const longToShort: { [key in Virtue]: ShortVirtue } = {} as never;
for (const short of shortVirtues) {
  const long = shortToLong[short];
  longToShort[long] = short;
}

export function compactAnswers(answers: Answer[]): string {
  const compactedAnswers = answers.map(compactAnswer);
  const str = compactedAnswers.join('');
  return encode(str);
}

function compactAnswer(answer: Answer): string {
  // Format is two characters for a question
  // eg: Hs
  // eg: sY
  // Short forms as above
  // The capital letter represents the chosen answer

  const v1 = answer.question.firstVirtue;
  const v2 = answer.question.secondVirtue;

  const s1 = longToShort[v1];
  const s2 = longToShort[v2];

  if (s1 == null) {
    throw new Error('Could not match long virtue: ' + v1);
  }

  if (s2 == null) {
    throw new Error('Could not match long virtue: ' + v2);
  }

  if (answer.chosen === v1) {
    return s1.toUpperCase() + s2;
  }
  return s1 + s2.toUpperCase();
}

export function expandAnswers(compacted: string): Answer[] {
  if (compacted.length % 2 !== 0) {
    throw new Error('Expected compacted string of even length');
  }

  const decoded = decode(compacted);

  const parts = decoded.match(/.{2}/g);
  const answers = parts.map(expandAnswer);
  return answers;
}

function expandAnswer(compacted: string): Answer {
  if (compacted.length !== 2) {
    throw new Error('Wrong compacted question length');
  }

  const char1 = compacted[0];
  const char2 = compacted[1];

  const firstSelected = isUpperCase(char1);
  const secondSelected = isUpperCase(char2);

  // If both or neither are upper case (ie chosen)
  if (firstSelected === secondSelected) {
    throw new Error('Neither answer marked as selected');
  }

  const virtue1 = shortToLong[char1.toLowerCase() as ShortVirtue];
  const virtue2 = shortToLong[char2.toLowerCase() as ShortVirtue];

  if (virtue1 == null) {
    throw new Error('Could not match short virtue: ' + char1);
  }

  if (virtue2 == null) {
    throw new Error('Could not match short virtue: ' + char2);
  }

  const question = questions.find(q => q.firstVirtue === virtue1 && q.secondVirtue === virtue2);

  if (question == null) {
    throw new Error('Could not decode question');
  }

  return {
    question: question,
    chosen: firstSelected ? virtue1 : virtue2,
    rejected: firstSelected ? virtue2 : virtue1,
  };
}

function isUpperCase(character: string): boolean {
  if (character.length !== 1) {
    throw new Error(`Only one character please, got: '${character}'`);
  }

  return character === character.toUpperCase();
}

function encode(input: string): string {
  return btoa(input).replace(/=+$/, '');
}

function decode(input: string): string {
  return atob(input);
}
