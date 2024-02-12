<script setup>
import {ref, onBeforeMount, computed} from 'vue'
import Pagination from 'v-pagination-3';
import axios from 'axios'
const stories = ref([])
const pageSize = ref(4)
const visibleStories = ref([])
const currentPage = ref(0)
onBeforeMount(async () => {
 await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => {
         stories.value = res.data.slice(0,10)
        localStorage.setItem('stories', JSON.stringify(stories.value));
      }).catch((err)=>{
    console.log(err)
  })
})

const updatePage = (pageNumber)=>{
  currentPage.value = pageNumber;
  updateVisibleStories();
}
const updateVisibleStories = ()=>{
  const allStories = JSON.parse(localStorage.getItem('stories'));
  let initialSortingTodos = allStories.slice(currentPage.value * pageSize.value, (currentPage.value * pageSize.value) + pageSize.value)
  visibleStories.value = initialSortingTodos
  if(visibleStories.value.length == 0 && currentPage.value > 0){
    updatePage(currentPage.value - 1);
  }
}
updateVisibleStories()
console.log("visible stories", visibleStories.value)
const totalPages = computed(()=>{
  return Math.ceil(visibleStories.value.length / pageSize.value)
})
console.log("total page",totalPages.value)

const showpreviousLink = computed(()=>{
  return currentPage.value == 0 ? false : true
})
const showNextLink = computed(()=>{
  return currentPage.value == (totalPages.value - 1 ) ? false : true
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
          <button v-if="showpreviousLink" @click="updatePage(currentPage - 1)">previous</button>
          <div v-for="page in totalPages" @click="updatePage(page)" style="padding: 5px; background: #ddd; margin-right: 2px; cursor: pointer;">{{page}}</div>
          <button  @click="updatePage(currentPage + 1)">Next</button>
        </div>
      </div>
    </div>
    </div>
</template>

<style></style>