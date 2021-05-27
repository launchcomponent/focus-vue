<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    // ...
  },
});

</script>

<template>
  <div :class="$style.TopBar" class="h-14 border-b bg-white">

    <slot name="project-launcher" />

    <div class="flex justify-end items-center w-full px-3">
      <slot name="user-menu" />
    </div>

  </div>
</template>

<style module>

.TopBar {
  display: flex;
  position: relative;
}

</style>
