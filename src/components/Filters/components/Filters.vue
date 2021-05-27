<script lang="ts">

import { defineComponent } from 'vue';
import { debounce } from 'lodash';
import ButtonGroup from '../../ButtonGroup/components/ButtonGroup.vue';
import SearchInput from '../../SearchInput/components/SearchInput.vue';

export default defineComponent({
  components: { ButtonGroup, SearchInput },

  props: {
    queryPlaceholder: {
      type: String,
    },

    queryValue: {
      type: String,
    },

    debounceTime: {
      type: Number,
      default: 250,
    },
  },

  setup(props, { emit, slots }) {
    const hasSlot = slots.default !== undefined;

    const handleQueryChange = debounce((e: InputEvent) => {
      emit('query-change', e);
    }, props.debounceTime);

    return {
      hasSlot,
      handleQueryChange,
    };
  },
});

</script>

<template>
  <div class="flex mb-4 space-x-2">

    <div class="relative flex-1 min-w-0">
      <SearchInput :value="queryValue" @input="handleQueryChange" :placeholder="queryPlaceholder" />
    </div>

    <ButtonGroup v-if="hasSlot">
      <slot />
    </ButtonGroup>

  </div>
</template>
