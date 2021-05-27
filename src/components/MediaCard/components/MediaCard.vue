<script lang="ts">

import { defineComponent } from 'vue';
import Card from '../../Card/components/Card.vue';
import CardSection from '../../Card/components/CardSection.vue';

export default defineComponent({
  components: { Card, CardSection },

  props: {
    title: {
      type: String,
    },
  },
});

</script>

<template>
  <Card>
    <div class="relative bg-gray-100">
      <slot />
    </div>

    <CardSection v-if="title">
      <p class="group-hover:text-blue-600">
        {{ title }}
      </p>
    </CardSection>
  </Card>
</template>
