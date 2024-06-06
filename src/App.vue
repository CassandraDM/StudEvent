<script setup>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

const events = ref([]);

let title = ref("");
let name = ref("");
let date = ref("");
let image = ref("");
let description = ref("");
let category = ref("");

const handleSubmit = (e) => {
  events.value.push({
    title: title.value,
    name: name.value,
    date: date.value,
    image: image.value,
    description: description.value,
    category: category.value,
  });
  title.value = "";
  name.value = "";
  description.value = "";
  date.value = "";
  category.value = "";
  image.value = "";
};
</script>

<template>
  <div class="container">
    <form @submit.prevent="handleSubmit" class="form">
      <div class="row">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter title"
          v-model="title"
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          v-model="name"
        />
      </div>
      <div class="row">
        <input
          type="text"
          name="date"
          id="date"
          placeholder="Enter date"
          v-model="date"
        />
        <input
          type="text"
          name="image"
          id="image"
          placeholder="Enter image Url"
          v-model="image"
        />
      </div>
      <div class="row">
        <textarea
          name="description"
          id="description"
          placeholder="Enter description"
          v-model="description"
        ></textarea>
      </div>
      <div class="row">
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Enter category"
          class="input-category"
          v-model="category"
        />
      </div>
      <input type="submit" value="Submit" />
    </form>

    <div class="events">
      <div v-for="(event, index) in events">
        <div class="card-event">
          <div>
            <img :src="event.image" alt="event image" />
          </div>
          <div>
            <div>
              <p>{{ event.date }}</p>
              <p>{{ event.category }}</p>
            </div>
            <div>
              <h2>{{ event.title }}</h2>
              <p>{{ event.description }}</p>
            </div>
            <div>
              <button>Show Event</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
