<script lang="ts">

import { defineComponent } from 'vue';
import Heading from '../../Heading/components/Heading.vue';
import TextStyle from '../../TextStyle/components/TextStyle.vue';

export default defineComponent({
  components: { Heading, TextStyle },

  props: {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },
  },
});

</script>

<template>
  <div class="grid md:grid-cols-3 md:gap-6">
    <div class="col-span-1">
      <Heading element="h3" class="mb-2">{{ title }}</Heading>
      <TextStyle v-if="description" variant="subdued">{{ description }}</TextStyle>
    </div>

    <div class="col-span-2">
      <slot />
    </div>
  </div>
</template>
