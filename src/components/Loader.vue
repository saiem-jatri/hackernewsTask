<script setup lang="ts">

</script>

<template>
  <div class='fixed inset-0 bg-white overflow-hidden' style='background: #e4e4e4bd; z-index: 99999'>
    <div class='flex flex-col justify-center items-center h-screen'>
      <div class=loader-container>
        <div class="loader"></div>
        <h5 class='loading-text'>Please wait...</h5>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  /* border: 8px solid #f3f3f3; */
  border-radius: 50%;
  border-top: 4px solid #223c9a;
  width: 100px;
  height: 100px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader-container {
  position: absolute;
  left: 50%;
  top: 50%;
  display: block;
  transform: translate(-50%, -50%);
}

.loader-container img {
  position: absolute;
  left: 23%;
  top: 18%;
  width: 55px;
  height: 55px;
}

.loading-text {
  font-size: 21px;
  margin-top: 10px;
  color: #232323;
  font-family: sans-serif;
}

#breathing-button {
  animation: breathing 1s ease-out infinite normal;
  -webkit-font-smoothing: antialiased;
}

@keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  50% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1.1);
  }

  100% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
}
</style>>
