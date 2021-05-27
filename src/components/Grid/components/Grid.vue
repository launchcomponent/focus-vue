<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  // ...
});

</script>

<template>
  <div class="grid grid-cols-8 gap-4">
    <slot />
  </div>
</template>
