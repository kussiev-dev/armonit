<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useReveal } from '../composables/useReveal'
import PortfolioModal from './PortfolioModal.vue'
import { projects, type Project } from '../data/projects'

const sectionRef = ref<HTMLElement | null>(null)
const visible = useReveal(sectionRef)

const showModal = ref(false)
const selectedProject = ref<Project | null>(null)

const visibleProjects = computed(() => projects.slice(0, 8))

const openModal = (project: Project) => {
	selectedProject.value = project
	showModal.value = true
}
</script>

<template>
	<div id="projects" ref="sectionRef" class="portfolio section-offset" :class="{ 'is-revealed': visible }">
		<div class="container">
			<div class="portfolio-inner">
				<h2 class="portfolio-title title" data-r="up">Кейсы / Проекты</h2>

				<div class="portfolio-content flex flex-col items-center gap-5" data-r="up" style="--d: 0.15s">
					<ul class="portfolio-list w-full grid grid-cols-2 lg:grid-cols-4 gap-5">
						<li
							v-for="project in visibleProjects"
							:key="project.title"
							class="portfolio-item w-full h-32 sm:h-40 lg:h-48 rounded-2xl overflow-hidden transition ease-in-out hover:opacity-70 hover:cursor-pointer"
							@click="openModal(project)"
						>
							<img
								:src="project.thumbnail"
								:alt="project.title"
								class="w-full h-full object-cover"
							/>
						</li>
					</ul>

					<RouterLink to="/projects" class="portfolio-btn btn-primary">
						Посмотреть все проекты
					</RouterLink>
				</div>
			</div>
		</div>
	</div>
	<PortfolioModal
		:show-modal="showModal"
		:project="selectedProject"
		@close="showModal = false"
	/>
</template>

<style scoped lang="scss"></style>
