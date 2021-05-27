<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({

});

</script>

<template>
  <div class="flex items-center justify-center my-10 text-gray-500">
    <div class="flex items-center space-x-2">
      <span class="material-icons">help_outline</span>
      <div class="text-sm">
        <slot />
      </div>
    </div>
  </div>
</template>
