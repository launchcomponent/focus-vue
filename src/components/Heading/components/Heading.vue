<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    element: {
      type: String,
      default: 'h2',
    },
  },
});

</script>

<template>
  <component :is="element" class="text-lg font-medium">
    <slot />
  </component>
</template>
