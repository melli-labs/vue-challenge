<template>
    <nav class="flex justify-around items-center space-x-4 h-12">
        <div
            class="i-heroicons-outline:home w-8 h-8 cursor-pointer transition ease-in-out delay-150 hover:bg-indigo-500 duration-300"
        />
        <div
            class="i-heroicons-outline:phone w-8 h-8 cursor-pointer transition ease-in-out delay-150 hover:bg-indigo-500 duration-300"
        />
        <div
            class="i-heroicons-outline:calendar w-8 h-8 cursor-pointer transition ease-in-out delay-150 hover:bg-indigo-500 duration-300"
        />
        <div
            class="i-heroicons-outline:user w-8 h-8 text-primary-600 cursor-pointer transition ease-in-out delay-150 hover:bg-indigo-500 duration-300"
        />
        <router-link to="/end">
            <div
                class="i-heroicons-outline:check-circle w-8 h-8 cursor-pointer transition ease-in-out delay-150 hover:bg-indigo-500 duration-300"
            />
        </router-link>
    </nav>
</template>
