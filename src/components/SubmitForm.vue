<template>
  <article>
    <form @submit.prevent>
    <input type="checkbox" v-model="botOrNot" class="bot-or-not">
    <div class="form-group-inline">
      <div class="form-group">
        <label for="name">Name</label>
        <input id="Name" v-model="Name" placeholder="Your name" type="text" />
      </div>
      <div class="form-group email-address">
        <label for="email">Email</label>
        <input id="EmailAddress" v-model="EmailAddress" placeholder="Your email" type="email" />
      </div>
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="Message" 
        v-model="Message" placeholder="Enter your message here please.">
      </textarea>
    </div>
    <button @click="handleSubmit">Send It</button>
  </form>
  </article>
</template>

<script setup>
import { ref } from "vue";
import { submitData } from "../js/submit";

let Name = ref();
let EmailAddress = ref();
let Message = ref();
let botOrNot = ref(false)
let response;

const handleSubmit = async () => {

  if (botOrNot.value === true) { return }

  const formBody =
  {
    "Name": Name.value,
    "EmailAddress": EmailAddress.value,
    "Message": Message.value,
    "ContactMethod": "web"
  }

  response = submitData(formBody)
  return response

}

</script>

<style>
.form-group-inline {
  display: flex;
}
.form-group{
  min-width: 46%;
}
.email-address{
  margin-left: 2%;
}
.bot-or-not{
  display: none;
}
</style>