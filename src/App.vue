<script setup lang="ts">
import { RouterView } from 'vue-router'
import BackgroundOrbs from './components/BackgroundOrbs.vue'
import ParticleCanvas from './components/ParticleCanvas.vue'
</script>

<template>
	<BackgroundOrbs />
	<ParticleCanvas />
	<RouterView />
</template>
