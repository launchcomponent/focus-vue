<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
});

</script>

<template>
  <label class="block cursor-pointer" :for="id">
    <slot />
  </label>
</template>
