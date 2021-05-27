<script lang="ts">

import { defineComponent, PropType } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  props: {
    // @ts-ignore
    // ...RouterLink.props,
    to: {
      type: Object as PropType<RouterLink>,
    },
  },

  setup() {
    return {
      // ...
    };
  },
});

</script>

<template>
  <router-link v-if="to" :to="to" class="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer">
    <slot />
  </router-link>
  <div v-else class="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer">
    <slot />
  </div>
</template>
