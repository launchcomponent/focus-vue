<script lang="ts">

import { defineComponent, onBeforeMount, onMounted, provide, reactive, VNode, toRefs } from 'vue';

export default defineComponent({
  setup(props, { slots }) {
    const state = reactive({
      selectedIndex: 0,
      tabs: [] as VNode[],
      count: 0,
    });

    provide('TabsProvider', state);

    const selectTab = (i: number) => {
      state.selectedIndex = i;
    };

    onBeforeMount(() => {
      if (slots.default) {
        state.tabs = slots.default().filter((child) => {
          return child.type.name === 'Tab'
        });
      }
    });

    onMounted(() => {
      selectTab(0);
    });

    return {
      ...toRefs(state),
      selectTab,
    };
  },
});

</script>

<template>
  <div>
    <ul class="flex items-center border-b border-gray-300 bg-white shadow-sm">
      <li v-for="(tab, tabIndex) in tabs" class="cursor-pointer px-3 py-2 hover:bg-gray-300" :class="{ 'bg-gray-200 text-blue-600': tabIndex === selectedIndex }" :key="tabIndex" @click="selectTab(tabIndex)">
        {{ tab.props.title }}
      </li>
    </ul>
    <slot />
  </div>
</template>
