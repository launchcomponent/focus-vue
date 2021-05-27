<script lang="ts">

import { computed, defineComponent, PropType } from 'vue';

type ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type DisplayTextSize = 'small' | 'medium' | 'large' | 'extraLarge';

export default defineComponent({
  props: {
    /** Name of the element to use for text. */
    element: {
      type: String as PropType<ElementType>,
      default: 'p',
    },

    /** Size of the text. */
    size: {
      type: String as PropType<DisplayTextSize>,
      required: true,
    },
  },

  setup(props) {
    const classList = computed(() => {
      switch (props.size) {
        case 'small':
          return 'text-lg';

        case 'medium':
          return 'text-xl';

        case 'large':
          return 'text-2xl font-medium';

        case 'extraLarge':
          return 'text-3xl font-medium';
      }
    });

    return {
      classList,
    };
  },
});

</script>

<template>
  <component :is="element" class="leading-6" :class="classList">
    <slot />
  </component>
</template>
