<script lang="ts">

import { defineComponent, ref } from 'vue';
import { ActionList } from '../../ActionList';
import { Popover } from '../../Popover';

export default defineComponent({
  components: { ActionList, Popover },

  props: {
    name: {
      type: String,
    },
  },

  setup() {
    const userMenuOpen = ref(false);

    const openUserMenu = () => userMenuOpen.value = true;
    const closeUserMenu = () => userMenuOpen.value = false;

    function logOutAction() {
      console.log('log aar uit');
    }

    return {
      userMenuOpen,
      openUserMenu,
      closeUserMenu,
      logOutAction,
    };
  },
});

</script>

<template>
  <div class="relative">

    <button class="flex items-center space-x-2 px-3 py-2 hover:bg-gray-200 focus:outline-none" @click="openUserMenu">
      <span class="material-icons">person</span>
      <span>{{ name }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ml-2 -mr-1">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>

    <Popover :active="userMenuOpen" @close="closeUserMenu">
      <ActionList :items="[{
        content: 'Manage account',
        to: { name: 'account' }
      }, {
        content: 'Log out',
        onAction: logOutAction
      }]" />
    </Popover>
  </div>
</template>
