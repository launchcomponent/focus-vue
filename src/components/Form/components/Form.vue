<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['submit'],

  setup(_, { emit }) {
    return {
      handleSubmit: () => emit('submit'),
    };
  },
});

</script>

<template>
  <form @submit.prevent="handleSubmit" method="post">
    <slot />
  </form>
</template>
