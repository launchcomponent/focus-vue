<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  // ...
});

</script>

<template>
  <div class="bg-black text-white text-xs uppercase font-medium px-1 py-0.5 bg-opacity-50">
    <slot />
  </div>
</template>
