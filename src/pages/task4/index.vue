<script setup lang="ts">
export interface Person {
  name: string
  role: string
  imageUrl: string
}

const people: Array<Person> = [
  {
    name: 'Stefan Buchkremer',
    imageUrl: 'https://meetap-it.gitlab.io/emilia/assets/team/stefan-buchkremer.webp',
    role: 'Co-Founder / CEO',
  },
  {
    name: 'Matthias Weber',
    imageUrl: 'https://meetap-it.gitlab.io/emilia/assets/team/matthias-weber.webp',
    role: 'Co-Founder / CPO',
  },
  {
    name: 'Hans Ganter',
    imageUrl: 'https://meetap-it.gitlab.io/emilia/assets/team/hans-ganter.webp',
    role: 'Co-Founder / CTO',
  },
  {
    name: 'Benjamin Mollier',
    imageUrl: 'https://meetap-it.gitlab.io/emilia/assets/team/benjamin-mollier.webp',
    role: 'Co-Founder / Lead Developer',
  },
  {
    name: 'Franziska Lerch',
    imageUrl: 'https://meetap-it.gitlab.io/emilia/assets/team/franziska-lerch.webp',
    role: 'B2C Marketing',
  },
  {
    name: 'Philip Krech',
    imageUrl: 'https://meetap-it.gitlab.io/emilia/assets/team/philip-krech.webp',
    role: 'Product Manager',
  },
  {
    name: 'Sahar Zoheidi',
    imageUrl: 'https://meetap-it.gitlab.io/emilia/assets/icons/placeholder-avatar.svg',
    role: 'Organizational Development',
  },
  {
    name: 'Johanna Döller',
    imageUrl: 'https://meetap-it.gitlab.io/emilia/assets/team/johanna-doeller.webp',
    role: 'Research & Development',
  },
  {
    name: 'Leonie Krumbholz',
    imageUrl: 'https://meetap-it.gitlab.io/emilia/assets/icons/placeholder-avatar.svg',
    role: 'Recruiting',
  },
  {
    name: 'Felix Andreas',
    imageUrl: 'https://meetap-it.gitlab.io/emilia/assets/team/felix-andreas.webp',
    role: 'Software Engineer',
  },
]
</script>

<template>
  <h1>Contacts</h1>
  <div class="overflow-y-auto">
    <div v-for="(person, index) in people" :key="index">
      <img :src="person.imageUrl" class="w-10 h-10 rounded-full">
      <div>{{ person.name }}</div>
      <div>{{ person.role }}</div>
    </div>
  </div>
</template>
