<script lang="ts">

import { computed, defineComponent } from 'vue';

export default defineComponent({
  inheritAttrs: false,

  props: {
    to: {},

    /** A unique identifier for the button. */
    id: {
      type: String,
    },

    /** Provides an extra visual weight and identifies the primary action in a set of buttons. */
    primary: {
      type: Boolean,
      default: false
    },

    /** Provides an extra visual weight and identifies secondary actions in a set of buttons. */
    secondary: {
      type: Boolean,
      default: false,
    },

    /** Indicates a dangerous or potentially negative action. */
    destructive: {
      type: Boolean,
      default: false,
    },

    /** Replaces the button text with a spinner.*/
    loading: {
      type: Boolean,
      default: false,
    },

    type: {
      type: String,
      default: 'button',
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const buttonDisabled = computed(() => props.disabled || props.loading);

    const classList = computed(() => {
      return [
        { 'bg-gray-50 border border-gray-300 hover:bg-white shadow-sm': props.secondary },
        { 'text-white border border-red-700 bg-red-600 hover:bg-red-700 focus:ring-red-500': props.destructive },
        { 'text-white border border-blue-700 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500': props.primary },
        { 'opacity-50 cursor-default pointer-events-none': buttonDisabled.value }
      ];
    });

    const componentType = props.to
      ? 'router-link'
      : 'button';

    return {
      classList,
      buttonDisabled,
      componentType,
    };
  },
});

</script>

<template>
  <div class="relative">
    <component
      :is="componentType"
      :class="classList"
      :disabled="buttonDisabled"
      :to="to"
      :type="type"
      v-bind="$attrs"
      class="flex items-center justify-center px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style="min-width: 6rem;">
      <span :class="{ 'invisible': loading }" class="flex items-center justify-center space-x-2 ">
        <slot />
      </span>
    </component>

    <div v-if="loading" class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
  </div>
</template>
