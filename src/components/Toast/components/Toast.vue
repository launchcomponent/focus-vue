<script lang="ts">

import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    /**
     * The content that should appear in the toast message.
     */
    content: {
      type: String,
    },

    /**
     * The length of time in milliseconds the toast message should persist.
     */
    duration: {
      type: Number,
      default: 2500,
    },
  },

  setup(props) {
    const root = ref(null);

    setTimeout(() => {
      root.value.remove();
    }, props.duration);

    return {
      root
    };
  },
});

</script>

<template>
  <teleport to="#toast-target">
    <div class="bg-gray-800 px-3 py-2 text-white" ref="root">
      {{ content }}
    </div>
  </teleport>
</template>
