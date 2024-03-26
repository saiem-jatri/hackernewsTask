<script setup>
import ButtonComponent from "./ButtonComponent.vue";
const props = defineProps(['fname','lname'])

const emit = defineEmits(['update:fname', 'update:lname'])
</script>
<template>
  <div>
   <div>
     <p>First name</p>
     {{fname}}
     <input :value="fname" @input="$emit('update:fname', $event.target.value)"/>
   </div>
    <br>
    <div>
      <p>Last Name</p>
      {{lname}}
      <input :value="lname" @input="$emit('update:lname', $event.target.value)" />
    </div>
  </div>
</template>