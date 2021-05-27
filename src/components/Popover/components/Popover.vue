<script lang="ts">

import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    active: {
      type: Boolean,
      default: false
    },
  },

  setup(props, { emit }) {
    const popoverIsOpen = computed(() => props.active);

    function closePopover() {
      emit('close');
    }

    return {
      popoverIsOpen,
      closePopover
    };
  },
});

</script>

<template>
  <div v-if="popoverIsOpen" v-click-away="closePopover" class="absolute right-0 z-10 w-56 mt-1 bg-white border border-gray-300-md shadow-xl">
    <div class="p-1">
      <slot />
    </div>
  </div>
</template>
