<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    open: {
      type: Boolean,
      default: true,
    },
  },
});

</script>

<template>
  <div v-if="open">
    <slot />
  </div>
</template>
