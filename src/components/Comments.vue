<script setup>
import SubComments from "./SubComments.vue";
const props = defineProps(['comments'])
</script>
<template>
  <div class="flex flex-col w-full justify-between gap-2">
    <div v-for="comment in props.comments" :key="comment" class="border rounded-md gap-6">

      <div class="p-3">
        <div class="flex gap-3 items-center">
          <img src="../assets/images/main-user.jpg"
               class="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400">
          <h3 class="font-bold flex flex-col gap-1">
            {{comment?.data?.by}}
            <small class="text-xs font-normal">{{new Date(comment.data.time * 1000).toString().split(" ").slice(0,5).join(' ')}}</small>
          </h3>
        </div>
        <p class="text-gray-600 mt-2">
         {{comment?.data?.text}}
        </p>
        <button class="text-right text-blue-500">Reply</button>
        <SubComments :sub-comments="comment"/>
      </div>


    </div>
  </div>
</template>