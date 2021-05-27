<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    term: {
      type: String,
      required: true,
    },
  },
});

</script>

<template>
  <div class="py-2 space-y-1">
    <dt class="text-opacity-75 font-medium text-white">
      {{ term }}
    </dt>
    <dd>
      <slot />
    </dd>
  </div>
</template>
