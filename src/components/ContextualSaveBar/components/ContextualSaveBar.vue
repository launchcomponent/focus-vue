<script lang="ts">

import { defineComponent, PropType, ref } from 'vue';
import Button from '../../Button/components/Button.vue';
import ButtonGroup from '../../ButtonGroup/components/ButtonGroup.vue';
import { SaveAction } from '../../types';

export default defineComponent({
  components: { Button, ButtonGroup },

  props: {
    message: {
      type: String,
      default: 'Unsaved changes',
    },

    saveAction: {
      type: Object as PropType<SaveAction>,
    },

    show: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const loading = ref(props.saveAction.loading);

    function handleSaveAction() {
      props.saveAction.onAction();
    }

    return {
      loading,
      handleSaveAction,
    };
  },
});

</script>

<template>
  <transition
    enter-active-class="transition-all"
    leave-active-class="transition-all"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <div v-if="show" class="fixed top-0 left-0 w-full h-14 flex bg-gray-800 border-b border-gray-300 shadow-sm text-gray-200">
      <div class="relative flex-shrink-0 w-80 px-3 py-2">
        <div class="flex items-center px-3 py-2 font-bold text-gray-400">
          <span>LaunchCore</span>
        </div>
      </div>
      <div class="w-full mx-auto max-w-4xl flex items-center justify-between">
        <div class="font-medium">{{ message }}</div>
        <div class="flex space-x-2">
          <Button @click="handleSaveAction" primary :loading="saveAction.loading">
            {{ saveAction.label || 'Save' }}
          </Button>
        </div>
      </div>
    </div>
  </transition>
</template>
