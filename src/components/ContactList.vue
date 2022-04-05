<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ people: Person[] }>()
const emit = defineEmits<{ (name: 'select', v: number): void }>()
</script>

<template>
  <div class="bg-slate-100 px-8 pt-4">
		<header>
			<h1 class="text-center text-2xl font-bold mb-3">Contacts</h1>
		</header>
		<ul class="h-630px overflow-y-auto -mx-8">
			<li
				v-for="(person, index) in people"
				:key="index"
				class="cursor-pointer flex mb-2 border-2  shadow-inner p-3 bg-gray-50 border-2  border-x-white border-y-gray-200 px-8 "
				@click="emit('select', index)"
			>
				<img
				:src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
				class="w-12 h-12 rounded-full"
				>
				<div class="ml-4">
				<div>{{ person.name }}</div>
				<div>{{ person.role }}</div>
				</div>
			</li>
		</ul>
  </div>
</template>
