<script lang="ts">

import { defineComponent, inject, onBeforeMount, ref, watch } from 'vue';

export default defineComponent({
  name: 'Tab',

  setup() {
    const index = ref(0);
    const isActive = ref(false);

    const tabs = inject('TabsProvider');

    watch(
      () => tabs.selectedIndex,
      () => {
        isActive.value = index.value === tabs.selectedIndex;
      }
    );

    onBeforeMount(() => {
      index.value = tabs.count;
      tabs.count++;
      isActive.value = index.value === tabs.selectedIndex;
    });

    return { index, isActive };
  },
});

</script>

<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>
