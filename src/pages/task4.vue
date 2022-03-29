<script setup lang="ts">
import type { Person } from '~/types'

const people: Array<Person> = [
  {
    handle: 'stefan-buchkremer',
    name: 'Stefan Buchkremer',
    role: 'Co-Founder / CEO',
  },
  {
    handle: 'matthias-weber',
    name: 'Matthias Weber',
    role: 'Co-Founder / CPO',
  },
  {
    handle: 'hans-ganter',
    name: 'Hans Ganter',
    role: 'Co-Founder / CTO',
  },
  {
    handle: 'benjamin-mollier',
    name: 'Benjamin Mollier',
    role: 'Co-Founder / Lead Developer',
  },
  {
    handle: 'franziska-lerch',
    name: 'Franziska Lerch',
    role: 'B2C Marketing',
  },
  {
    handle: 'philip-krech',
    name: 'Philip Krech',
    role: 'Product Manager',
  },
  {
    handle: 'sahar-zoheidi',
    name: 'Sahar Zoheidi',
    role: 'Organizational Development',
  },
  {
    handle: 'johanna-doeller',
    name: 'Johanna Döller',
    role: 'Research & Development',
  },
  {
    handle: 'leonie-krumbholz',
    name: 'Leonie Krumbholz',
    role: 'Recruiting',
  },
  {
    handle: 'felix-andreas',
    name: 'Felix Andreas',
    role: 'Software Engineer',
  },
]
const selectedPerson = ref<Person | null>(null)
</script>

<template>
  <Emilia />

  <div class="min-h-screen p-4 bg-primary-50 grid place-items-center">
    <Phone>
      <div class="h-full grid">
        <NavBar class="mt-auto" />
        <ContactDetail
          v-if="selectedPerson"
          :person="selectedPerson"
          @back="selectedPerson = null"
        />
        <ContactList v-else :people="people" @select="(i) => selectedPerson = people[i]" />
      </div>
    </Phone>
  </div>
</template>
