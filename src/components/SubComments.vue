<script setup>
import axios from "axios";
import {ref} from "vue";

const props = defineProps(['subComments'])
const replies = ref([])
const fetchData =  ()=>{
    props.subComments?.data?.kids?.map(async(subCommentsId)=>{
      await axios.get(import.meta.env.VITE_API_BASE_URL +`/item/${subCommentsId}.json/`).then((response)=>{
        replies.value.push(response.data)
      })
    })
}
fetchData()
</script>

<template>
      <div  v-for="reply in replies" :key="reply" class="p-3">
        <div class="flex gap-3 items-center">
          <img src="../assets/images/child.png"
               class="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400">
          <h3 class="font-bold flex flex-col gap-1">
            {{reply?.by}}
            <small class="text-xs font-normal">{{new Date(reply.time * 1000).toString().split(" ").slice(0,5).join(' ')}}</small>
          </h3>
        </div>
        <p class="text-gray-600 mt-2 break-words">
         {{reply.text}}
        </p>
      </div>
</template>