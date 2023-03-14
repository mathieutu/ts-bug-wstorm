<script setup lang="ts">
import { useWelcomePage } from "./types";

const welcome = $(useWelcomePage())

console.log(welcome.auth.user.email);
</script>

<template>
  <div>
      <span>{{welcome.auth.user.name}}</span>
  </div>
</template>
