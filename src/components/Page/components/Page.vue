<script lang="ts">

import { defineComponent, PropType } from 'vue';
import { PageAction } from '../../types';
import Button from '../../Button/components/Button.vue';
import PreviousPageButton from './PreviousPageButton.vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  components: { Button, PreviousPageButton },

  props: {
    /** The page title, in large type. */
    title: {
      type: String,
      required: true,
    },

    /** Visually hide the title. */
    titleHidden: {
      type: Boolean,
      default: false,
    },

    /** Remove for normal max-width on the page. */
    fullWidth: {
      type: Boolean,
      default: false,
    },

    /** Primary page-level action. */
    primaryAction: {
      type: Object as PropType<PageAction>,
    },

    /** Collection of secondary page-level actions. */
    secondaryActions: {
      type: Array as PropType<PageAction[]>,
    },

    /** Route to the previous page, if available. */
    previousPage: {
      // @ts-ignore
      ...RouterLink.props,
    },
  },

  setup(props) {
    const classList = [
      'mx-auto',
      [props.fullWidth ? 'max-w-full' : 'max-w-4xl'],
    ];

    return {
      classList,
    };
  },
});

</script>

<template>
  <div :class="classList">

    <div class="py-4">
      <div class="mb-8 flex items-center justify-between" v-if="!titleHidden">
        <div class="flex items-center max-w-full space-x-4">
          <PreviousPageButton v-if="previousPage" v-bind="{...previousPage}" />
          <h3 class="text-2xl font-medium text-gray-900 truncate">{{ title }}</h3>
        </div>

        <div class="flex items-center space-x-1">
          <div v-for="action in secondaryActions">
            <Button secondary>{{ action.content }}</Button>
          </div>

          <Button primary v-if="primaryAction" v-bind="{ ...primaryAction }">
            {{ primaryAction.content }}
          </Button>
        </div>
      </div>

      <slot />

    </div>
  </div>
</template>
