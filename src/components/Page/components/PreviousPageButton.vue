<script lang="ts">

import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  props: {
    // @ts-ignore
    ...RouterLink.props,
  },
});

</script>

<template>
  <router-link
    :to="to"
    class="flex items-center justify-center px-3 py-2 border border-gray-300 hover:bg-white shadow-sm">
    <i class="material-icons">arrow_back</i>
  </router-link>
</template>
