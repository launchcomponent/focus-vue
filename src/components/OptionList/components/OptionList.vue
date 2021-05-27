<script lang="ts">

import { defineComponent, PropType, ref, watch } from 'vue';
import { OptionListItem } from '../../types';

export default defineComponent({
  props: {
    options: {
      type: Array as PropType<OptionListItem[]>,
    },
  },

  emits: ['update'],

  setup(_, { emit }) {
    const checkbox = ref([]);

    watch(checkbox, (curr) => {
      emit('update', [...curr]);
    })

    return {
      checkbox,
    };
  },
});

</script>

<template>
  <label v-for="option in options" class="flex items-center block px-3 py-2 space-x-2 cursor-pointer hover:bg-gray-200">
    <input type="checkbox" :value="option.value" v-model="checkbox" />
    <span>{{ option.label }}</span>
  </label>
</template>
