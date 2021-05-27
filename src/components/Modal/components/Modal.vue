<script lang="ts">

import { defineComponent, PropType } from 'vue';
import { ModalAction } from '../../types';
import Button from '@shared/focus-ui/src/components/Button/components/Button.vue';
import ModalBackdrop from './ModalBackdrop.vue';

export default defineComponent({
  components: { Button, ModalBackdrop },

  props: {
    /** Whether the modal is open or not. */
    open: {
      type: Boolean,
      default: false,
    },

    /** Primary action */
    primaryAction: {
      type: Object as PropType<ModalAction>,
    },

    /** Collection of secondary actions. */
    secondaryActions: {
      type: Array as PropType<ModalAction[]>,
    },

    /** The content for the title of the modal. */
    title: {
      type: String,
      required: true,
    },
  },
});

</script>

<template>
  <ModalBackdrop v-if="open">
    <div class="max-w-xl w-full bg-white shadow-sm">

      <div class="px-3 py-4 border-b">
        <h3 class="text-xl font-medium text-gray-900 truncate">{{ title }}</h3>
      </div>

      <div class="px-3 py-4">
        <slot />
      </div>

      <div class="px-3 py-4 border-b flex border-t space-x-2 justify-end">
        <div v-for="action in secondaryActions">
          <Button v-bind="{ ...action }">{{ action.content }}</Button>
        </div>

        <Button v-if="primaryAction" v-bind="{ ...primaryAction }">
          {{ primaryAction.content }}
        </Button>
      </div>

    </div>
  </ModalBackdrop>
</template>
