<template>
  <div class="card shadow">
    <div class="card-body grid grid-cols-1 divide-y divide-green-500">
      <h1 class="card-title">
        login / register
      </h1>
      <div class="form-control">
        <div class="grid grid-col-3 gap-4">
          <label class="label">
            <span class="label-text">phone number</span>
          </label>
          <input
            type="text"
            class="input input-error input-bordered"
          >
        </div>
        <div>
          <label class="label">
            <span class="label-text-alt text-red-600">error</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {

  },
});
</script>
