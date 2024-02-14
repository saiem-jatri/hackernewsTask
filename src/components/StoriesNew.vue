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
<!--    new-->
  <div class="flex justify-center">
    <div class="container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
      <div v-for="(story,index) in visibleStories" :key="index" class="card">
        <div class="face face1">
          <div class="content text-white flex flex-col justify-center items-center group">
            <p class="text-[#23c5f9] font-bold text-2xl">Story: {{story}}</p>
            <img class="h-10 w-10 mt-5 animate-bounce group-hover:animate-none" src="../assets/images/indicate.png" alt="">
            <div class="icon">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <div class="m-4 p-1 rounded-full from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r">
              <router-link class="block text-black px-4 py-2 font-semibold rounded-full bg-white text-center"  :to="{ name: 'story', params: { id: story } }">Details</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<!--    new end-->
    <h2 class="heading-text">Story List's</h2>
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
        <div v-for="(story,index) in visibleStories" :key="index" class="border border-blue-800 mt-8 mb-8 shadow-lg">
          <h5 class="text-3xl font-bold m-3">Story: {{story}}</h5>
          <div class="bg-gray-100 pt-2 pb-2 border">
            <p class="text-blue-700 font-bold text-sm ml-5 mr-5">
              <router-link :to="{ name: 'story', params: { id: story } }">Details</router-link>
            </p>
          </div>
        </div>
      </div>
      <div v-if="totalPages > 0" class="mt-4">
        <div class="flex gap-x-10 items-center justify-center">
          <div v-for="page in totalPages" @click="updatePage(page)"  class="pagination-button">{{page}}</div>
        </div>
      </div>
    </div>
  </div>
  <Loader v-if="loader" />
</template>

<style scoped>

.container {
  position: relative;
}

.container .card {
  position: relative;
  border-radius: 10px;
}

.container .card .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //background: #f00;
  transition: 0.7s;
  z-index: 1;
}

.container .card:nth-child(1) .icon {
  //background: #192b85;
}
.container .card .face {
  width: 300px;
  height: 200px;
  transition: 0.5s;
}

.container .card .face.face1 {
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(100px);
}

.container .card:hover .face.face1{
  transform: translateY(0px);
}

.container .card .face.face1 .content {
  opacity: 1;
  transition: 0.5s;
}

.container .card:hover .face.face1 .content {
  opacity: 1;
}

.container .card .face.face1 .content i{
  max-width: 100px;
}

.container .card:hover .face.face2{
  transform: translateY(0);
}

.container .card .face.face2 .content p {
  margin: 0;
  padding: 0;
  text-align: center;
  color: #414141;
}

</style>