<script lang="ts">

import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    items: {
      type: Object,
      required: true,
    },

    /**
     * Overlays item list with a spinner while a background action is being performed.
     */
    loading: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const classList = computed(() => {
      return [
        { 'h-80': props.loading }
      ];
    });

    return {
      classList,
    };
  },
});

</script>

<template>
  <div class="relative divide-y" :class="classList">
    <div v-if="loading" class="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-white bg-opacity-70">
      <div>loading</div>
    </div>

    <div v-for="item in items">
      <slot name="resource-item" v-bind="{ ...item }" />
    </div>
  </div>
</template>
