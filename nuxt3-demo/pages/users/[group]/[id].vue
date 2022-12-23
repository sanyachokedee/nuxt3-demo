<script lang="ts" setup>
const route = useRoute()

console.log(route.params.group)
console.log(route.params.id)

const a = route.params.group
const b = route.params.id
  

</script>

<template>
  <div>
   <h1>Users Page</h1>
   <h2>Hello Group : {{ $route.params.group }}</h2>
   <h2>Hello id : {{ $route.params.id }}</h2>

   <h2>Js Group : {{  a  }}</h2>
   <h2>Js Id : {{ b  }}</h2>
  </div>
</template>

<style scoped></style>
