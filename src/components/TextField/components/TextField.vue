<script lang="ts">

import { defineComponent } from 'vue';
import Label from '../../Label/components/Label.vue';
import { useUniqueId } from '../../../composables/useUniqueId';

export default defineComponent({
  components: { Label },

  props: {
    value: {
      required: true,
    },

    label: {
      type: String,
    },

    error: {
      type: String,
    },

    type: {
      type: String,
      default: 'text',
    },

    multiline: {
      type: [Number, Boolean],
      default: false,
    },
  },

  setup(_, { emit }) {
    const id = useUniqueId();

    return {
      id,
      onChanged: (e) => emit('update', e),
    };
  },
});

</script>

<template>
  <div class="space-y-1">
    <Label :id="id" :class="{'text-red-600': error}">{{ label }}</Label>

    <input
      v-if="multiline === false"
      :id="id"
      :value="value"
      class="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 appearance-none focus:ring-2 focus:outline-none focus:border-blue-500"
      :class="{'border-red-600 text-red-600': error}"
      :type="type"
      @input="onChanged">

    <textarea
      v-if="multiline"
      :id="id"
      :class="{'border-red-600 text-red-600': error}"
      :rows="multiline"
      class="w-full px-3 py-2 bbg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 appearance-none focus:ring-2 focus:outline-none focus:border-blue-500"
      @input="onChanged">{{ value }}</textarea>

    <span v-if="error" class="text-red-600">
      {{ error }}
    </span>
  </div>
</template>
