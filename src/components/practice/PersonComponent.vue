<script setup>
import ButtonComponent from "./ButtonComponent.vue";
const props = defineProps(['person'])
</script>

<template>
  <div>
    this is person component
    {{person.name}}
    <ButtonComponent label="hover me" v-model="person.name" />
  </div>
</template>