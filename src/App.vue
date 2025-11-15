<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';

import Space from './components/Space.vue';
import { KeyboardControls, Stats } from '@tresjs/cientos';
</script>

<template>
  <div id="canvas">
    <TresCanvas clear-color="#000000" window-size>
      <TresPerspectiveCamera :position="[0.2, 0.2, 0.2]" :look-at="[0, 0, 0]" :near="0.0001" />

      <KeyboardControls :moveSpeed="0.01" />
      <Space />
      <Stats />
    </TresCanvas>
  </div>
</template>
