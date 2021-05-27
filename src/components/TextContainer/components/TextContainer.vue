<script lang="ts">

import { defineComponent, PropType } from 'vue';

type TextContainerSpacing = 'tight' | 'loose';

export default defineComponent({
  props: {
    spacing: {
      type: String as PropType<TextContainerSpacing>
    },
  },

  setup(props) {
    const classList = props.spacing === 'tight' ? 'space-y-2' : 'space-y-4';

    return {
      classList,
    };
  },
});

</script>

<template>
  <div :class="classList">
    <slot />
  </div>
</template>
