<script lang="ts" setup></script>

<template>
  <h1 v-if="$route.params.slug">Category: {{ $route.params.slug }} </h1>
</template>

<style scoped></style>
