<script lang="ts">

import { uniqueId } from 'lodash';
import { computed, defineComponent } from 'vue';
import { getTargetValue, parseValueWithUnit } from '../utils';
import { Label } from '../../index';

export default defineComponent({
  components: {
    Label,
  },

  emits: ['update'],

  props: {
    /** The unique id of the input element */
    id: {
      type: String,
    },

    /** The input value */
    value: {
      required: true,
      default: 0,
    },

    /** The input label */
    label: {
      type: String,
    },

    /** Visually hide the label */
    labelHidden: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const elementId = props.id || `unit-input_${uniqueId()}`;

    const value = computed(() => parseValueWithUnit(props.value).value);
    const unit = computed(() => parseValueWithUnit(props.value).unit);

    function onValueChange(e: InputEvent): void {
      const targetValue = getTargetValue(e);

      let computedValue;
      let computedUnit;

      if (targetValue === 'auto') {
        return emit('update', 'auto');
      }

      const parsedValue = parseInt(targetValue) || 0;
      const parsedUnit = String(targetValue).replace(String(parsedValue), '');

      computedValue = parsedValue;
      computedUnit = parsedUnit || (unit.value || 'px');

      emit('update', computedValue + computedUnit);
    }

    function onUnitChange(e: InputEvent): void {
      const targetValue = getTargetValue(e);

      if (targetValue === 'auto') {
        return emit('update', 'auto');
      }

      emit('update', value.value + targetValue);
    }

    return {
      elementId,
      internalValue: value,
      internalUnit: unit,
      onValueChange,
      onUnitChange,
    };
  },
});

</script>

<template>

  <div class="flex items-center">
    <Label :id="elementId" v-if="label && !labelHidden" class="flex-shrink-0 w-16">
      {{ label }}
    </Label>

    <div class="flex focus-within:ring-2 focus-within:outline-none focus-within:border-blue-500 border bg-white overflow-hidden">
      <input
        :id="id"
        :value="internalValue"
        class="focus:outline-none w-full py-1 px-2 appearance-none"
        type="text"
        @change="onValueChange($event)">

      <select :value="internalUnit" @change="onUnitChange" class="cursor-pointer uppercase text-xs bg-white appearance-none rounded-none" v-if="internalValue !== 'auto'" style="text-align-last: center;">
        <option value="px">PX</option>
        <option value="%">%</option>
        <option value="auto">Auto</option>
      </select>
    </div>
  </div>
</template>
