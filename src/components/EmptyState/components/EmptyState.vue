<script lang="ts">

import { defineComponent } from 'vue';
import { Heading } from '../../Heading';
import { TextStyle } from '../../TextStyle';
import { TextContainer } from '../../TextContainer';

export default defineComponent({
  components: { Heading, TextStyle, TextContainer },

  props: {
    /**
     * The empty state heading
     */
    heading: {
      type: String,
    },
  },
});

</script>

<template>
  <div class="text-center">
    <TextContainer>
      <Heading>{{ heading }}</Heading>

      <TextStyle variant="subdued">
        <slot />
      </TextStyle>
    </TextContainer>
  </div>
</template>
