<script setup lang="ts">
import type { Person } from '~/types';

defineProps<{ people: Person[] }>();
const emit = defineEmits<{ (name: 'select', v: number): void }>();
</script>

<template>
    <header
        class="bg-gradient-to-r flex from-indigo-500 via-purple-500 to-pink-500"
    >
        <div>
            <h1
                class="bg-white rounded-full w-fit p-2 mb-2 ml-4 mt-2 rounded-lg font-bold"
            >
                Contacts
            </h1>
        </div>
    </header>
    <ul
        class="overflow-y-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2"
    >
        <li
            v-for="(person, index) in people"
            :key="index"
            class="cursor-pointer flex bg-slate-100 rounded-xl items-center m-2 transition ease-in-out delay-150 hover:bg-slate-200 duration-300 shadow-lg"
            @click="emit('select', index)"
        >
            <img
                :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
                class="w-20 h-20 rounded-lg basis-1/4 ml-4"
            />
            <div
                class="p-8 text-center text-left space-y-4 basis-3/4 text-black"
            >
                <div class="text-sky-500 dark:text-sky-400">
                    {{ person.name }}
                </div>
                <div>{{ person.role }}</div>
            </div>
        </li>
    </ul>
</template>
