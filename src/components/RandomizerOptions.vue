<script setup lang="ts">
import { ref } from 'vue'
import { Faction } from '@/shared/factions'
import { getRacesForFaction } from '@/shared/races'

const availableFactions = Faction
const availableRaces = ref([])
const selectedFaction = ref('')

interface SelectEvent extends Event {
  target: HTMLSelectElement
}
const factionSelectChange = (e: SelectEvent) => {
  selectedFaction.value = e.target.value;
  availableRaces.value = getRacesForFaction(selectedFaction.value);
}
const greet = () => {
  alert(selectedFaction.value)
}
</script>

<template>
  <div class="options-container">
    <div class="select-container">
      <div class="select-option">
        <label for="faction">Faction</label>
        <select name="faction" @change="factionSelectChange" v-model="selectedFaction">
          <option disabled selected value>Select to decrease dataset</option>
          <option v-for="faction in availableFactions" :value="faction" :key="faction">
              {{ faction }}
          </option>
        </select>
      </div>

      <div class="select-option">
        <label for="tbd">TBD</label>
        <select name="tbd" :disabled="!selectedFaction">
            <option disabled selected value>-- select an option --</option>
          <option v-for="race in availableRaces" :value="race" :key="race">
              {{ race }}
          </option>
        </select>
      </div>

      <div class="select-option">
        <label for="tbd">tbd</label>
        <select name="faction">
          <option disabled selected value>TBD</option>
        </select>
      </div>
    </div>

    <button @click="greet" :disabled="selectedFaction == ''">Randomize</button>
  </div>
</template>

<style scoped>
.options-container {
  display: flex;
  flex-direction: column;
}
.select-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.select-option {
  display: flex;
  flex-direction: column;
}
button {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
}
</style>
