<script lang="ts">

import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    external: {
      type: Boolean,
      default: false,
    },

    url: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const target = computed(() => props.external ? '_blank' : '_self');

    return {
      target,
    };
  },
});

</script>

<template>
  <a :href="url" class="text-blue-600 inline-flex items-center" :target="target">
    <span class="underline mr-1">
      <slot />
    </span>
    <span class="material-icons" v-if="external">open_in_new</span>
  </a>
</template>
