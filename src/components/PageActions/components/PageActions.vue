<script lang="ts">

import { defineComponent, PropType } from 'vue';
import Button from '../../Button/components/Button.vue';
import { PageAction } from '../../types';

export default defineComponent({
  components: { Button },

  props: {
    /** The primary action for the page. */
    primaryAction: {
      type: Object as PropType<PageAction>,
      required: true,
    },

    /** The secondary actions for the page. */
    secondaryActions: {
      type: Array as PropType<PageAction[]>,
    },
  },
});

</script>

<template>
  <div class="flex items-center justify-between mt-4 mb-4">
    <div>
      <div v-for="action in secondaryActions">
        <Button secondary v-bind="{ ...action }">
          {{ action.content }}
        </Button>
      </div>
    </div>

    <Button type="submit" primary v-if="primaryAction" v-bind="{ ...primaryAction }">
      {{ primaryAction.content }}
    </Button>
  </div>
</template>
