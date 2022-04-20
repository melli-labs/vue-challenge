<script setup lang="ts">
import type { Person } from '~/types';

defineProps<{ person: Person }>();
const emit = defineEmits<{ (name: 'back'): void }>();
</script>

<template>
    <div
        class="flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-171 items-center"
    >
        <header class="w-full">
            <button
                class="flex gap-1 items-center content-center bg-white p-2 ml-4 mt-2 rounded-lg transition ease-in-out delay-150 hover:bg-slate-200 duration-300 shadow-lg"
                @click="emit('back')"
            >
                <div class="i-heroicons-outline:chevron-left" />
                <div class="font-bold">Contacts</div>
            </button>
        </header>
        <div class="mt-16 w-70 bg-white shadow-xl rounded-lg text-gray-900">
            <div
                class="mx-auto w-32 h-32 relative border-4 border-white rounded-full overflow-hidden"
            >
                <img
                    :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
                    class="object-cover object-center h-32"
                />
            </div>

            <div class="text-center mt-2">
                <div class="font-semibold">{{ person.name }}</div>
                <div class="font-semibold">{{ person.role }}</div>

                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >@{{ person.handle }}</span
                >
            </div>

            <ul
                class="py-4 mt-2 text-gray-700 flex items-center justify-around"
            >
                <li
                    class="flex flex-col items-center justify-around cursor-pointer"
                >
                    <div class="w-6 h-6 i-heroicons-outline:annotation" />

                    <div>Message</div>
                </li>
                <li
                    class="flex flex-col items-center justify-between cursor-pointer"
                >
                    <div class="w-6 h-6 i-heroicons-outline:phone" />

                    <div>Call</div>
                </li>
                <li
                    class="flex flex-col items-center justify-around cursor-pointer"
                >
                    <div class="w-6 h-6 i-heroicons-outline:video-camera" />

                    <div>Video</div>
                </li>
                <li
                    class="flex flex-col items-center justify-around cursor-pointer"
                >
                    <div class="w-6 h-6 i-heroicons-outline:mail" />

                    <div>Mail</div>
                </li>
            </ul>
        </div>
    </div>
</template>
