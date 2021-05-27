<script lang="ts">

import { computed, defineComponent, h } from 'vue';
import CardSection from './CardSection.vue';

export default defineComponent({
  components: { CardSection },

  props: {
    /**
     * Indicates that the card is interactive.
     */
    interactive: {
      type: Boolean,
      default: false,
    },

    /**
     * Auto-wrap content in a section.
     */
    sectioned: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    const classList = computed(() => {
      return [
        'overflow-hidden bg-white border border-gray-300 shadow-sm',
      ];
    });

    return {
      classList,
    };
  },
});

</script>

<template>
  <div :class="classList" class="divide-y">
    <CardSection v-if="sectioned">
      <slot />
    </CardSection>
    <slot v-if="!sectioned" />
  </div>
</template>
