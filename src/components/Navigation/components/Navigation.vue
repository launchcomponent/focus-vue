<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    flush: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const classList = [
      { 'px-3 py-4': !props.flush },
    ];

    return {
      classList,
    };
  },
});

</script>

<template>
  <div class="bg-gray-100 flex-shrink-0 w-80 max-h-full overflow-y-auto space-y-6 border-r" :class="classList">
    <slot />
  </div>
</template>
