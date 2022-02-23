<template>
  <div class="star-field-component">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
// Based on
// https://codesandbox.io/s/lucid-fast-0v7ch?from-embed=&file=/index.html:278-2326

import { onMounted, ref } from 'vue';

const canvas = ref<HTMLCanvasElement>(null);

function setupStarfield() {
  const c = canvas.value.getContext('2d');

  let w: number;
  let h: number;

  const setCanvasExtents = () => {
    w = canvas.value.clientWidth;
    h = canvas.value.clientHeight;
    canvas.value.width = w;
    canvas.value.height = h;
  };

  setCanvasExtents();

  window.onresize = () => {
    setCanvasExtents();
  };

  const makeStars = (count: number) => {
    const out = [];
    for (let i = 0; i < count; i++) {
      const s = {
        x: Math.random() * 1600 - 800,
        y: Math.random() * 900 - 450,
        z: Math.random() * 1000,
      };
      out.push(s);
    }
    return out;
  };

  const stars = makeStars(10000);

  const clear = () => {
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.value.width, canvas.value.height);
  };

  const putPixel = (x: number, y: number, brightness: number) => {
    const intensity = brightness * 255;
    const rgb = 'rgb(' + intensity + ',' + intensity + ',' + intensity + ')';
    c.fillStyle = rgb;
    c.fillRect(x, y, 1, 1);
  };

  const moveStars = (distance: number) => {
    const count = stars.length;
    for (let i = 0; i < count; i++) {
      const s = stars[i];
      s.z -= distance;
      while (s.z <= 1) {
        s.z += 1000;
      }
    }
  };

  let prevTime: number;

  const tick = (time: number) => {
    const elapsed = time - prevTime;
    prevTime = time;

    moveStars(elapsed * 0.1);

    clear();

    const cx = w / 2;
    const cy = h / 2;

    const count = stars.length;
    for (let i = 0; i < count; i++) {
      const star = stars[i];

      const x = cx + star.x / (star.z * 0.001);
      const y = cy + star.y / (star.z * 0.001);

      if (x < 0 || x >= w || y < 0 || y >= h) {
        continue;
      }

      const d = star.z / 1000.0;
      const b = 1 - d * d;

      putPixel(x, y, b);
    }

    requestAnimationFrame(tick);
  };

  const init = (time: number) => {
    prevTime = time;
    requestAnimationFrame(tick);
  };

  requestAnimationFrame(init);
}

onMounted(() => {
  const starField = setupStarfield();
});
</script>

<style lang="scss" scoped>
.star-field-component {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // height: 100vh;
  // width: 100vw;
  overflow: hidden;
  z-index: -3;

  transform: translateZ(0);
  backface-visibility: hidden;
  pointer-events: none;
}

canvas {
  height: 100%;
  width: 100%;
}
</style>
