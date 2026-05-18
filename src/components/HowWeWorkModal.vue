<script setup lang="ts">
import { watch, onUnmounted } from 'vue'

interface WorkStep {
	title: string
	icon: string
	color: string
	duration: string
	description: string
	details: string[]
}

const props = defineProps<{ showModal: boolean; step: WorkStep | null }>()
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
		<Transition name="fade">
			<div
				v-if="showModal && step"
				class="modal-overlay"
				@click.self="$emit('close')"
			>
				<Transition name="slide-up" appear>
					<div class="modal-inner">
						<button class="modal-close" @click="$emit('close')">
							<i class="pi pi-times"></i>
						</button>

						<div class="modal-hero" :style="{ '--accent': step.color }">
							<div class="modal-icon-wrap">
								<i :class="['pi', step.icon, 'modal-icon']"></i>
							</div>
							<div class="modal-meta">
								<span class="modal-duration">
									<i class="pi pi-clock"></i>
									{{ step.duration }}
								</span>
							</div>
						</div>

						<div class="modal-body">
							<h2 class="modal-title">{{ step.title }}</h2>
							<p class="modal-description">{{ step.description }}</p>

							<div class="modal-details">
								<h3 class="details-heading">Что входит в этот этап:</h3>
								<ul class="details-list">
									<li
										v-for="(detail, i) in step.details"
										:key="i"
										class="details-item"
									>
										<span class="details-dot" :style="{ background: step.color }"></span>
										{{ detail }}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</Transition>
			</div>
		</Transition>
	</Teleport>
</template>

<style scoped lang="scss">
.modal-overlay {
	position: fixed;
	inset: 0;
	background: rgba(2, 6, 41, 0.8);
	backdrop-filter: blur(8px);
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
	position: relative;
	width: 100%;
	max-width: 640px;
	max-height: 88vh;
	border-radius: 2rem;
	background: #0d1247;
	border: 1px solid rgba(57, 63, 197, 0.35);
	overflow-y: auto;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 767px) {
		max-height: 92svh;
		border-radius: 1.5rem 1.5rem 0 0;
	}
}

.modal-close {
	position: absolute;
	top: 1.25rem;
	right: 1.25rem;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.08);
	border: 1px solid rgba(255, 255, 255, 0.12);
	color: #fff;
	font-size: 1rem;
	cursor: pointer;
	transition: background 0.2s ease;

	&:hover {
		background: rgba(255, 255, 255, 0.18);
	}
}

.modal-hero {
	--accent: #393fc5;
	padding: 3rem 2.5rem 2rem;
	background: linear-gradient(135deg, rgba(57, 63, 197, 0.15) 0%, rgba(2, 6, 41, 0) 70%);
	border-bottom: 1px solid rgba(255, 255, 255, 0.06);
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	gap: 1rem;
}

.modal-icon-wrap {
	width: 5rem;
	height: 5rem;
	border-radius: 1.25rem;
	background: rgba(57, 63, 197, 0.18);
	border: 1.5px solid var(--accent);
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 0 32px rgba(57, 63, 197, 0.25);
}

.modal-icon {
	font-size: 2rem;
	color: var(--accent);
}

.modal-meta {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 0.5rem;
}

.modal-duration {
	display: inline-flex;
	align-items: center;
	gap: 0.4rem;
	font-size: 0.85rem;
	color: rgba(255, 255, 255, 0.5);
	background: rgba(255, 255, 255, 0.06);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 100px;
	padding: 0.35rem 0.85rem;

	.pi {
		font-size: 0.8rem;
	}
}

.modal-body {
	padding: 2rem 2.5rem 2.5rem;
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
}

.modal-title {
	font-size: 1.75rem;
	font-weight: 700;
	color: #ffffff;
	line-height: 1.2;
}

.modal-description {
	font-size: 1rem;
	color: rgba(255, 255, 255, 0.6);
	line-height: 1.75;
}

.modal-details {
	margin-top: 0.25rem;
}

.details-heading {
	font-size: 0.8rem;
	font-weight: 600;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.35);
	margin-bottom: 1rem;
}

.details-list {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.details-item {
	display: flex;
	align-items: center;
	gap: 0.75rem;
	font-size: 0.95rem;
	color: rgba(255, 255, 255, 0.8);
	line-height: 1.5;
}

.details-dot {
	flex-shrink: 0;
	width: 7px;
	height: 7px;
	border-radius: 50%;
	opacity: 0.85;
}

/* Overlay fade */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

/* Card slide-up */
.slide-up-enter-active {
	transition: opacity 0.35s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.slide-up-leave-active {
	transition: opacity 0.25s ease, transform 0.3s ease;
}
.slide-up-enter-from {
	opacity: 0;
	transform: translateY(40px);
}
.slide-up-leave-to {
	opacity: 0;
	transform: translateY(20px);
}
</style>
