<script setup lang="ts">
defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{ (name: 'update:modelValue', v: boolean): void }>()
</script>

<template>
  <div
    class="grid w-32 rounded-full border-2 border-gray-200 cursor-pointer"
    :class="modelValue ? 'bg-primary-300 border-primary-400 ' : 'bg-gray-100 border-primary-00'"
    @click.prevent="emit('update:modelValue', !modelValue)"
  >
    <span
      class="w-16 h-16 bg-white rounded-full shadow transition-transform"
      :class="{ 'translate-x-15': modelValue }"
    />
  </div>
</template>
