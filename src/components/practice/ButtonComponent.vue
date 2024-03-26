<script setup>
const props = defineProps(['label','modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <div class="w-40 h-10 rounded-xl  text-black">
      {{modelValue}}
      <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    </div>
  </div>
</template>