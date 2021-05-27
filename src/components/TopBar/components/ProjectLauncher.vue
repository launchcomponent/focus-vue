<script lang="ts">

import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },

  setup() {
    const projectLauncherOpen = ref(false);

    const openProjectLauncher = () => projectLauncherOpen.value = true;
    const closeProjectLauncher = () => projectLauncherOpen.value = false;

    return {
      projectLauncherOpen,
      openProjectLauncher,
      closeProjectLauncher,
    };
  },
});

</script>

<template>
  <div class="relative flex-shrink-0 w-64 px-3 py-2">
    <button class="flex items-center px-3 py-2 font-bold hover:bg-gray-200" @click="openProjectLauncher">
      <span>Launch Component</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ml-2 -mr-1">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>

    <div class="absolute z-10 w-64 mt-1 bg-white border border-gray-300-md shadow-xl" v-if="projectLauncherOpen" v-click-away="closeProjectLauncher">
      <div class="p-1">
        <button class="block w-full text-left px-3 py-2 hover:bg-gray-200" v-for="project in projects">
          {{ project.name }}
        </button>
      </div>
    </div>
  </div>
</template>
