<script lang="ts">

import { defineComponent, ref } from 'vue';
import Button from '../../Button/components/Button.vue';

export default defineComponent({
  components: { Button },

  props: {
    label: {
      type: String,
    },
  },

  setup() {
    const filterOpen = ref(false);

    const toggleFilter = () => filterOpen.value = !filterOpen.value;
    const closeFilter = () => filterOpen.value = false;

    return {
      filterOpen,
      toggleFilter,
      closeFilter,
    };
  },
});

</script>

<template>
  <div class="relative">
    <Button @click.stop="toggleFilter">
      <span>{{ label }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ml-2 -mr-1">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </Button>

    <div class="absolute right-0 z-10 w-56 mt-1 bg-white border border-gray-300 shadow-xl" v-show="filterOpen" v-click-away="closeFilter">
      <div class="p-1">
        <slot />
      </div>
    </div>
  </div>
</template>
