<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({});

</script>

<template>
  <teleport to="#modal-target">
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
      <slot />
    </div>
  </teleport>
</template>
