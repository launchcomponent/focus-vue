<script lang="ts">

import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  props: {
    // @ts-ignore
    ...RouterLink.props,
    label: {
      required: true,
      type: String,
    },

    icon: {
      type: String,
    },

    secondary: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, context) {
    const classList = [
      { 'font-medium': !props.secondary },
      { 'pl-10 text-gray-500': props.secondary },
    ];

    return {
      classList,
    };
  },
});

</script>

<template>
  <router-link exact active-class="bg-gray-200 text-blue-600" :to="to" class="flex items-center px-3 py-2 space-x-3 leading-none hover:bg-gray-200" :class="classList">
    <i class="material-icons" v-if="!secondary">
      {{ icon }}
    </i>

    <span class="label">{{ label }}</span>
  </router-link>
</template>
