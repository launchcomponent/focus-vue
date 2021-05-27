<script lang="ts">

import { defineComponent, ref } from 'vue';
import Collapsible from '../../Collapsible/components/Collapsible.vue';
import TextStyle from '../../TextStyle/components/TextStyle.vue';

export default defineComponent({
  components: { Collapsible, TextStyle },

  props: {
    title: {
      type: String,
      required: true,
    },

    open: {
      type: Boolean,
      default: true,
    },
  },

  setup(props) {
    const isOpen = ref(props.open);

    function toggle() {
      isOpen.value = !isOpen.value;
    }

    return {
      isOpen,
      toggle,
    };
  },
});

</script>

<template>
  <div>

    <div class="flex items-center justify-between py-2 px-3 hover:bg-gray-100 cursor-pointer" @click="toggle">
      <TextStyle variant="strong">{{ title }}</TextStyle>
      <div>
        <i class="material-icons" v-if="!open">expand_more</i>
        <i class="material-icons" v-if="open">expand_less</i>
      </div>
    </div>

    <Collapsible :open="isOpen">
      <div class="py-2 px-3">
        <slot />
      </div>
    </Collapsible>
  </div>
</template>
