<script setup>
import { useRoute } from 'vue-router';
import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'
const route = useRoute()
const id = route.params.id
const story = reactive({})
// const comments = ref([])
onBeforeMount(() => {

    axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json/`)
      .then(res => {
        console.log("my res",res.data)
        story.title = res.data.title
        story.author = res.data.author
        story.score = res.data.score
        story.time = res.data.time
        story.comments = res.data.descendants
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
</template>

<style></style>