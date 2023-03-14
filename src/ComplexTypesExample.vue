<script setup lang="ts">

import { usePageProps } from "./types";

const { auth } = usePageProps<'Welcome'>()

console.log(auth.value.user.name);

</script>

<template>
  <div>
      <span>{{ auth }}</span>
  </div>
</template>
