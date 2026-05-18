<script setup lang="ts">
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'
import { scrollToSection } from '../utils/scrollTo'

const sectionRef = ref<HTMLElement | null>(null)
const visible = useReveal(sectionRef)
</script>

<template>
	<div id="hero" ref="sectionRef" class="hero section-offset sm:text-center" :class="{ 'is-revealed': visible }">
		<div class="container">
			<div class="hero-inner">
				<h1 class="hero-title text-4xl sm:text-5xl lg:text-7xl font-bold mb-5 sm:mb-8" data-r="up">
					armonit - технологии,
					<br class="hidden sm:block" />
					которые приносят прибыль
				</h1>
				<div data-r="up" style="--d: 0.12s">
					<p class="hero-description text-base sm:text-xl font-bold mb-5 sm:mb-8 opacity-80">
						Сайты, мобильные приложения, CRM, системы автоматизации и
						стартап-решения под ключ
					</p>
				</div>
				<div class="buttons flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6" data-r="up" style="--d: 0.24s">
					<a class="hero-btn btn-primary w-full sm:w-auto text-center cursor-pointer" @click="scrollToSection('contacts')">Обсудить проект</a>
					<a class="hero-btn btn-outline w-full sm:w-auto text-center cursor-pointer" @click="scrollToSection('projects')">Посмотреть кейсы</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
