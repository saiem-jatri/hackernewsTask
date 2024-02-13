<script setup>
import {ref, onBeforeMount} from 'vue'
import axios from "axios";

const pageSize = ref(4)
const allStories = ref([])
const visibleStories = ref([])
const currentPage = ref(0)
const totalPages = ref(0)

const fetchApiData = async () => {
  await axios.get(import.meta.env.VITE_API_BASE_URL+'/topstories.json')
      .then(res => {
        allStories.value = res.data.slice(0,10)
        totalPages.value = Math.ceil(allStories.value.length / pageSize.value)
      }).catch((err)=>{
        console.log(err)
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
    <h2>Response</h2>
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <router-link v-for="(story,index) in visibleStories" :key="index" class="text-xs relative flex justify-center border-2 cursor-pointer border-gray-300 rounded-xl p-6 bg-gray-100" :to="{ name: 'story', params: { id: story } }">
          {{story}}
          <span class="absolute right-2 top-1">{{index + 1}}</span>
        </router-link>
      </div>
      <!--        <pagination v-model="page" :records="stories.value" :per-page="pageSize" @paginate="myCallback"/>-->
      <!--      </div>-->
      <div v-if="totalPages > 0" >
        <div style="display: flex; justify-content: center;">
          <div v-for="page in totalPages" @click="updatePage(page)" style="padding: 5px; background: #ddd; margin-right: 2px; cursor: pointer;">{{page}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>