<script setup lang="ts">
import { watch, onUnmounted } from 'vue'

interface Project {
	title: string
	description: string
	link: string
	thumbnail: string
	image: string
}

const props = defineProps<{ showModal: boolean; project: Project | null }>()
defineEmits(['close'])

const getWrapper = () => document.querySelector<HTMLElement>('.wrapper')

watch(
	() => props.showModal,
	(val) => {
		const wrapper = getWrapper()
		if (wrapper) wrapper.style.overflowY = val ? 'hidden' : 'scroll'
	}
)

onUnmounted(() => {
	const wrapper = getWrapper()
	if (wrapper) wrapper.style.overflowY = 'scroll'
})
</script>

<template>
	<Teleport to="body">
		<Transition name="slide-up">
			<div
				v-if="showModal && project"
				class="modal-overlay"
				@click.self="$emit('close')"
			>
				<div class="modal-inner">
					<div class="modal-header">
						<h2 class="modal-title">{{ project.title }}</h2>
						<button class="modal-close" @click="$emit('close')">
							<i class="pi pi-times"></i>
						</button>
					</div>

					<img :src="project.image" :alt="project.title" class="modal-image" />

					<p class="modal-description">{{ project.description }}</p>

					<a
						:href="project.link"
						target="_blank"
						rel="noopener noreferrer"
						class="modal-link"
					>
						Перейти на сайт
						<i class="pi pi-arrow-up-right"></i>
					</a>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<style scoped lang="scss">
.modal-overlay {
	position: fixed;
	inset: 0;
	background: rgba(2, 6, 41, 0.75);
	backdrop-filter: blur(6px);
	z-index: 50;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem 40px;

	@media (max-width: 767px) {
		padding: 0;
		align-items: flex-end;
	}
}

.modal-inner {
	width: 100%;
	max-width: 1440px;
	max-height: 85vh;
	border-radius: 2rem;
	background: #0d1247;
	border: 1px solid rgba(57, 63, 197, 0.35);
	padding: 2.5rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	overflow-y: auto;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 767px) {
		max-height: 92svh;
		border-radius: 1.5rem 1.5rem 0 0;
		padding: 1.5rem;
	}
}

.modal-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-shrink: 0;
}

.modal-title {
	font-size: 2rem;
	font-weight: 700;
	color: #ffffff;
}

.modal-close {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.75rem;
	height: 2.75rem;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.08);
	border: 1px solid rgba(255, 255, 255, 0.12);
	color: #fff;
	font-size: 1.1rem;
	cursor: pointer;
	transition: background 0.2s ease;
	flex-shrink: 0;

	&:hover {
		background: rgba(255, 255, 255, 0.15);
	}
}

.modal-image {
	width: 100%;
	border-radius: 1.25rem;
	object-fit: cover;
	border: 1px solid rgba(255, 255, 255, 0.07);
}

.modal-description {
	font-size: 1rem;
	color: rgba(255, 255, 255, 0.65);
	line-height: 1.7;
}

.modal-link {
	align-self: flex-start;
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.65rem 1.6rem;
	border-radius: 16px;
	background: #393fc5;
	border: 3px solid #393fc5;
	color: #fff;
	font-size: 1rem;
	font-weight: 500;
	text-decoration: none;
	transition: all 0.2s ease;

	&:hover {
		background: #4a51d9;
		border-color: #4a51d9;
		transform: translateY(-2px);
	}
}

.slide-up-enter-active,
.slide-up-leave-active {
	transition: opacity 0.35s ease;

	.modal-inner {
		transition: transform 0.45s ease;
	}
}

.slide-up-enter-from,
.slide-up-leave-to {
	opacity: 0;

	.modal-inner {
		transform: translateY(100vh);
	}
}
</style>
