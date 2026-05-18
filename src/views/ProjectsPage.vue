<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Header from '../components/Header.vue'
import PortfolioModal from '../components/PortfolioModal.vue'
import { projects, type Project } from '../data/projects'

const showModal = ref(false)
const selectedProject = ref<Project | null>(null)

const openModal = (project: Project) => {
	selectedProject.value = project
	showModal.value = true
}
</script>

<template>
	<Header />
	<div class="projects-page">
		<div class="container">
			<div class="projects-nav">
				<RouterLink to="/" class="projects-back">
					<i class="pi pi-arrow-left"></i>
					На главную
				</RouterLink>
			</div>

			<h1 class="projects-title title">Все проекты</h1>

			<ul class="projects-list">
				<li
					v-for="project in projects"
					:key="project.title"
					class="projects-item"
					@click="openModal(project)"
				>
					<img
						:src="project.thumbnail"
						:alt="project.title"
						class="projects-item-img"
					/>
					<div class="projects-item-info">
						<span class="projects-item-title">{{ project.title }}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>

	<PortfolioModal
		:show-modal="showModal"
		:project="selectedProject"
		@close="showModal = false"
	/>
</template>

<style scoped lang="scss">
.projects-page {
	min-height: 100vh;
	padding: 140px 0 80px;
}

.projects-nav {
	margin-bottom: 2rem;
}

.projects-back {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	color: rgba(255, 255, 255, 0.6);
	font-size: 1rem;
	transition: color 0.2s ease;

	&:hover {
		color: #fff;
	}
}

.projects-list {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.25rem;
	list-style: none;
	padding: 0;
}

.projects-item {
	position: relative;
	border-radius: 1rem;
	overflow: hidden;
	aspect-ratio: 16 / 9;
	cursor: pointer;
	transition: opacity 0.2s ease;

	&:hover {
		opacity: 0.75;
	}

	&:hover .projects-item-info {
		opacity: 1;
	}
}

.projects-item-img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.projects-item-info {
	position: absolute;
	inset: 0;
	background: rgba(2, 6, 41, 0.6);
	display: flex;
	align-items: flex-end;
	padding: 1rem;
	opacity: 0;
	transition: opacity 0.2s ease;
}

.projects-item-title {
	font-size: 1rem;
	font-weight: 600;
	color: #fff;
}
</style>
