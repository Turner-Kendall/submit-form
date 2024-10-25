<template>
  <FormInfo />

    <SubmitForm />

  <article>
    &copy; {{ year }} <a href="https://turnerkendall.com">Turner Kendall</a> all rights reserved.
  </article>
</template>

<script setup>
import { ref } from 'vue'
import SubmitForm from './SubmitForm.vue'
import FormInfo from './FormInfo.vue';
const year = ref(new Date().getFullYear() )
const intro = ref(
)
defineProps({
  msg: String,
})
</script>
