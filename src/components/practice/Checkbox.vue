<script setup>
const props = defineProps(['label','modelValue'])

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label>{{label}}</label>
    <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue',!modelValue)">
  </div>
</template>