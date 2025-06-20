<template>
  <div style="max-width: 800px; margin: auto; padding: 20px; font-family: sans-serif">
    <h1>Museum Admin Panel</h1>

    <h2>Create Visitor</h2>
    <input v-model="visitor.firstname" placeholder="Firstname" />
    <input v-model="visitor.lastname" placeholder="Lastname" />
    <button @click="createVisitor">Create Visitor</button>

    <h2>Create Exhibit</h2>
    <input v-model="exhibit.name" placeholder="Exhibit Name" />
    <input v-model="exhibit.description" placeholder="Description" />
    <button @click="createExhibit">Create Exhibit</button>

    <h2>Create Visit</h2>
    <input v-model.number="visit.visitorId" placeholder="Visitor ID" />
    <input v-model.number="visit.exhibitId" placeholder="Exhibit ID" />
    <input v-model="visit.date" type="date" />
    <button @click="createVisit">Create Visit</button>

    <h2>All Visits</h2>
    <button @click="loadVisits">Load Visits</button>
    <ul>
      <li v-for="v in visits" :key="v.id">
        Visitor #{{ v.visitorId }} visited Exhibit #{{ v.exhibitId }} on {{ v.date }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const api = '/api' // Použití relativní cesty pro proxy ve Vite

const visitor = ref({ firstname: '', lastname: '' })
const exhibit = ref({ name: '', description: '' })
const visit = ref({ visitorId: '', exhibitId: '', date: '' })
const visits = ref([])

async function createVisitor() {
  try {
    const response = await axios.post(`${api}/visitors`, visitor.value)
    console.log('Visitor created:', response.data)
    visitor.value = { firstname: '', lastname: '' }
  } catch (error) {
    console.error('Error creating visitor:', error)
  }
}

async function createExhibit() {
  try {
    const response = await axios.post(`${api}/exhibits`, exhibit.value)
    console.log('Exhibit created:', response.data)
    exhibit.value = { name: '', description: '' }
  } catch (error) {
    console.error('Error creating exhibit:', error)
  }
}

async function createVisit() {
  try {
    const response = await axios.post(`${api}/visits`, visit.value)
    console.log('Visit created:', response.data)
    visit.value = { visitorId: '', exhibitId: '', date: '' }
    loadVisits()
  } catch (error) {
    console.error('Error creating visit:', error)
  }
}

async function loadVisits() {
  try {
    const response = await axios.get(`${api}/visits`)
    visits.value = response.data
  } catch (error) {
    console.error('Error loading visits:', error)
  }
}

onMounted(() => {
  loadVisits()
})
</script>

<style scoped>
input {
  display: block;
  margin-bottom: 10px;
  padding: 6px;
  width: 100%;
  max-width: 300px;
}
button {
  padding: 6px 12px;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
