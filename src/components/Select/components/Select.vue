<script lang="ts">

import { defineComponent } from 'vue';
import Label from '../../Label/components/Label.vue';
import { useUniqueId } from '../../../composables/useUniqueId';

export default defineComponent({
  components: { Label },

  emits: ['update:modelValue'],

  props: {
    modelValue: String,

    options: {
      type: Array,
      default: () => ([]),
    },

    label: {
      type: String,
    },
  },

  setup(_, { emit }) {
    const id = useUniqueId();

    return {
      id,
      onChanged: (e) => emit('update:modelValue', e.currentTarget.value),
    };
  }
});

</script>

<template>
  <div class="space-y-1">
    <Label :id="id">{{ label }}</Label>

    <select :id="id" class="w-full px-3 py-2 bg-white border border-gray-300 appearance-none" @change="onChanged" :value="modelValue">
      <option :value="option.value" v-for="option in options">{{ option.label }}</option>
    </select>
  </div>
</template>
