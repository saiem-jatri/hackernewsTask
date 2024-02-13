<script setup>
import { useRoute } from 'vue-router';
import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'
const route = useRoute()
const id = route.params.id
const story = reactive({})
const comments = ref([])
onBeforeMount(() => {

    axios.get(import.meta.env.VITE_API_BASE_URL +`/item/${id}.json/`)
      .then(res => {
        console.log("response",res.data)
        res.data.kids.map((data)=>{
          axios.get(import.meta.env.VITE_API_BASE_URL +`/item/${data}.json/`)
              .then((res)=>{
                comments.value.push(res)
              })
        })
        Object.assign(story,res.data)
        console.log(story)
      })

  // axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json/`)
  //     .then(res => {
  //       console.log("comments",res.data)
  //     })
})
</script>
<template>
  Hello this is a story
  {{story}}
  <br>
  {{comments.length}}
  <router-link v-for="(comment,index) in comments" :key="index" class="text-xs relative flex justify-center border-2 cursor-pointer border-gray-300 rounded-xl p-6 bg-gray-100" :to="{ name: 'comments', params: { id: comment.data.id } }">
    {{comment.data.text}}
  </router-link>
</template>

<style></style>