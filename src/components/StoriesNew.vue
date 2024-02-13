<script setup>
import {ref, onBeforeMount} from 'vue'
import axios from "axios";
// import Loader from '../components/Loader.vue'
const pageSize = ref(10)
const allStories = ref([])
const visibleStories = ref([])
const currentPage = ref(0)
const totalPages = ref(0)
const loader = ref(false)
const fetchApiData = async () => {
  loader.value = true
  await axios.get(import.meta.env.VITE_API_BASE_URL+'/topstories.json')
      .then(res => {
        allStories.value = res.data.slice(0,40)
        totalPages.value = Math.ceil(allStories.value.length / pageSize.value)
      }).catch((err)=>{
        console.log(err)
      }).finally(()=>{
        loader.value = false
      })
}


const paginatedListData = () => {
  visibleStories.value = allStories.value.slice(currentPage.value * pageSize.value, (currentPage.value * pageSize.value) + pageSize.value)
}

const updatePage = (pageNumber)=>{
  if(totalPages.value <= pageNumber){
    currentPage.value = totalPages.value - 1;
  } else {
    currentPage.value = pageNumber -1;
  }

  paginatedListData();
}

onBeforeMount(async () => {
  await fetchApiData();
  paginatedListData();
})

</script>
<template>
  <div>
    <h2 class="heading-text">Story List's</h2>
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
        <div v-for="(story,index) in visibleStories" :key="index" class="border border-l-8 border-blue-800 shadow rounded-lg mt-8 mb-8">
          <h5 class="text-3xl font-bold m-3">Story: {{story}}</h5>
          <div class="bg-gray-100 pt-2 pb-2 border">
            <p class="text-blue-700 font-bold text-sm ml-5 mr-5">
              <router-link :to="{ name: 'story', params: { id: story } }">Details</router-link>
            </p>
          </div>
        </div>
      </div>
      <div v-if="totalPages > 0" class="mt-4">
        <div class="flex gap-x-4 items-center justify-center">
          <div v-for="page in totalPages" @click="updatePage(page)"  class="pagination-button">{{page}}</div>
        </div>
      </div>
    </div>
  </div>
  <Loader v-if="loader" />
</template>

<style></style>