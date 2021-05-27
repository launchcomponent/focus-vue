<script lang="ts">

import { computed, defineComponent } from 'vue';
import moment from 'moment';

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },

    format: {
      type: String,
      default: 'dddd, MMM Do YYYY h:mm a',
    }
  },

  setup(props) {
    const computedValue = computed(() => moment(props.value).format(props.format));

    return {
      computedValue,
    };
  },
});

</script>

<template>
  <span>
    {{ computedValue }}
  </span>
</template>
