<script setup>
import { useRoute } from 'vue-router';
import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'
import SubComments from './SubComments.vue'
import Comments from './Comments.vue'
const route = useRoute()
const id = route.params.id
const story = reactive({})
const comments = ref([])
const reply = ref([])
const loader = ref(false)
const fetchApiData = async () => {
  loader.value = true
  await axios.get(import.meta.env.VITE_API_BASE_URL +`/item/${id}.json/`)
      .then(res => {
        res.data.kids.map(async (data)=>{
          await axios.get(import.meta.env.VITE_API_BASE_URL +`/item/${data}.json/`)
              .then((res)=>{
                comments.value.push(res)
              })
        })
        Object.assign(story,res.data)
      }).catch((err)=>{
        console.log(err)
      }).finally(()=>{
        loader.value = false
      })
}
onBeforeMount(() => {
  fetchApiData()
})
</script>
<template>
  <p class="heading-text">Details</p>
  <div class="border border-l-8 border-blue-800 shadow rounded-lg mt-8 mb-8">
    <h5 class="text-3xl font-bold m-5">Details of {{id}}</h5>
    <div class="p-2">
      <p class="text-gray-700 font-medium ml-5 mt-3 text-xl">Title : <span class="text-lg font-bold">{{ story.title }}</span></p>
      <p class="text-gray-700 font-medium ml-5 mt-3 text-xl">Author : <span class="text-lg font-bold">{{ story.by }}</span></p>
      <p class="text-gray-700 font-medium ml-5 mt-3 text-xl">Score : <span class="text-lg font-bold">{{ story.score }}</span></p>
      <p class="text-gray-700 font-medium ml-5 mt-3 text-xl">Time : <span class="text-lg font-bold">{{ new Date(story.time * 1000).toString().split(" ").slice(0,5).join(' ') }}</span></p>
      <p class="text-gray-700 font-medium ml-5 mt-3 text-xl">Number of comments : <span class="text-lg font-bold">{{ comments.length }}</span></p>
    </div>
    <div class="bg-gray-100 pt-5 pb-5 border">
      <p class="text-gray-700 text-bold text-sm ml-5 mr-5">
        Footer content goes here
      </p>
    </div>
  </div>
  <Comments :comments="comments"/>
  <Loader v-if="loader" />
</template>

<style></style>