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
  <div class="flex justify-center items-center mb-5">
    <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-2 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Details of {{id}}
        </h3>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Title
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ story.title }}
            </dd>
          </div>
          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Author
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ story.by }}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Score
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{story.score}}
            </dd>
          </div>
          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Time
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ new Date(story.time * 1000).toString().split(" ").slice(0,5).join(' ') }}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
             No of Comments
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{comments.length}}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
  <Comments :comments="comments"/>
  <Loader v-if="loader" />
</template>

<style></style>