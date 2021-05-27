<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});

</script>

<template>
  <div>
    <h3 class="title block px-3 py-2 text-xs font-medium tracking-wide text-gray-400 uppercase">
      {{ title }}
    </h3>
    <slot />
  </div>
</template>
