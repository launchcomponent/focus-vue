<script lang="ts">

import { computed, defineComponent, PropType } from 'vue';
import { TextStyleVariant } from '../../types';

export default defineComponent({
  props: {
    variant: {
      type: String as PropType<TextStyleVariant>,
      required: true,
    },
  },

  setup(props) {
    const classList = computed(() => {
      switch (props.variant) {
        case 'positive':
          return 'text-green-600';

        case 'negative':
          return 'text-red-600';

        case 'strong':
          return 'font-medium';

        case 'subdued':
          return 'text-gray-600';
      }
    });

    return {
      classList,
    };
  },
});

</script>

<template>
  <span class="inline-block" :class="classList">
    <slot />
  </span>
</template>
