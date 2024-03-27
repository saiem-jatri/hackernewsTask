<script setup>
import Header from "./components/Header.vue";
import ButtonComponent from "./components/practice/ButtonComponent.vue";
import PersonComponent from "./components/practice/PersonComponent.vue";
import MultiplleVmodel from "./components/practice/MultiplleVmodel.vue";
import Checkbox from "./components/practice/Checkbox.vue";
import RadioButton from "./components/practice/RadioButton.vue";
import {reactive, ref} from "vue";
const text = ref('hello')
const person = reactive({
  name:'john doe',
  email:'john@mail.com'
})
const fname = ref('shahed')
const lname = ref('Ahamed')
const task = ref(false)

const fruits = ref('apple')
</script>

<template>
  <Header class="sticky top-0 left-0 z-[999]"/>
<!--  <section class="flex">-->
<!--    <main class="w-full min-h-screen p-5">-->
<!--      <router-view></router-view>-->
<!--    </main>-->
<!--  </section>-->
<PersonComponent :person="person"/>
<!--  <ButtonComponent label="click me" v-model="text"/>-->
  <MultiplleVmodel v-model:fname="fname" v-model:lname="lname" />

  <Checkbox label="tast done or not"  v-model="task"/>
  <p>{{fruits}}</p>
  <RadioButton v-model="fruits" label="apple" value="apple"/>
  <RadioButton v-model="fruits" label="orange" value="orange"/>
  <footer></footer>
</template>

<style scoped>
</style>
