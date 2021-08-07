<template>
  <section class="min-h-screen flex flex-col justify-center items-center text-base-content bg-base-100">
    <Auth />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Auth from '../components/Auth/Index.vue';

export default defineComponent({
  components: {
    Auth,
  },
  setup() {
    const index = ref(true);
    return {
      index,
    };
  },
});
</script>
