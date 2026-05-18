<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen = ref(false)

function closeMenu() {
	menuOpen.value = false
}

function scrollToSection(id: string) {
	const el = document.getElementById(id)
	const wrapper = document.querySelector<HTMLElement>('.wrapper')
	if (!el || !wrapper) return
	const top =
		el.getBoundingClientRect().top -
		wrapper.getBoundingClientRect().top +
		wrapper.scrollTop
	wrapper.scrollTo({ top, behavior: 'smooth' })
	closeMenu()
}
</script>

<template>
	<header class="header w-full fixed top-0 left-0 z-50 bg-[#020629]">
		<div class="container">
			<div class="header-inner flex justify-between items-center py-4 lg:py-10">
				<RouterLink to="/" class="header-logo" @click="closeMenu">
					<img src="/images/logo.svg" class="header-logo-icon" />
				</RouterLink>

				<nav class="header-nav">
					<ul class="nav-list list-reset flex items-center gap-6">
						<li class="nav-item">
							<a
								class="nav-link cursor-pointer"
								@click="scrollToSection('services')"
								>Услуги</a
							>
						</li>
						<li class="nav-item">
							<a
								class="nav-link cursor-pointer"
								@click="scrollToSection('projects')"
								>Проекты</a
							>
						</li>
						<li class="nav-item">
							<a
								class="nav-link cursor-pointer"
								@click="scrollToSection('process')"
								>Процесс</a
							>
						</li>
						<li class="nav-item">
							<a
								class="nav-link cursor-pointer"
								@click="scrollToSection('about')"
								>О нас</a
							>
						</li>
						<li class="nav-item">
							<a
								class="nav-link cursor-pointer"
								@click="scrollToSection('contacts')"
								>Контакты</a
							>
						</li>
					</ul>
				</nav>

				<a
					class="header-cta btn-primary cursor-pointer"
					@click="scrollToSection('contacts')"
				>
					Обсудить проект
				</a>

				<button
					class="header-hamburger flex flex-col justify-center gap-[5px] w-9 h-9 p-1"
					@click="menuOpen = !menuOpen"
					aria-label="Меню"
				>
					<span
						class="ham-line"
						:class="{ open: menuOpen }"
						data-pos="top"
					></span>
					<span
						class="ham-line"
						:class="{ open: menuOpen }"
						data-pos="mid"
					></span>
					<span
						class="ham-line"
						:class="{ open: menuOpen }"
						data-pos="bot"
					></span>
				</button>
			</div>
		</div>

		<Transition name="mobile-menu">
			<div
				v-if="menuOpen"
				class="header-mobile-menu border-t border-[#393FC5]/30"
			>
				<div class="container">
					<div class="menu-content flex flex-col gap-4">
						<ul class="list-none flex flex-col gap-3">
							<li>
								<a
									class="nav-link text-lg cursor-pointer"
									@click="scrollToSection('services')"
									>Услуги</a
								>
							</li>
							<li>
								<a
									class="nav-link text-lg cursor-pointer"
									@click="scrollToSection('projects')"
									>Проекты</a
								>
							</li>
							<li>
								<a
									class="nav-link text-lg cursor-pointer"
									@click="scrollToSection('process')"
									>Процесс</a
								>
							</li>
							<li>
								<a
									class="nav-link text-lg cursor-pointer"
									@click="scrollToSection('about')"
									>О нас</a
								>
							</li>
							<li>
								<a
									class="nav-link text-lg cursor-pointer"
									@click="scrollToSection('contacts')"
									>Контакты</a
								>
							</li>
						</ul>
						<a
							class="btn-primary text-center cursor-pointer"
							@click="scrollToSection('contacts')"
						>
							Обсудить проект
						</a>
					</div>
				</div>
			</div>
		</Transition>
	</header>
</template>

<style scoped lang="scss">
.header-logo-icon {
	height: 2rem;

	@media (min-width: 1024px) {
		height: 2.5rem;
	}
}

.header-nav {
	display: none;

	@media (min-width: 1024px) {
		display: block;
	}
}

.header-cta {
	display: none !important;

	@media (min-width: 1024px) {
		display: inline-block !important;
	}
}

.header-hamburger {
	@media (min-width: 1024px) {
		display: none;
	}
}

.header-mobile-menu {
	@media (min-width: 1024px) {
		display: none;
	}
}

.ham-line {
	display: block;
	height: 2px;
	width: 100%;
	background: #fff;
	border-radius: 2px;
	transition:
		transform 0.3s ease,
		opacity 0.3s ease;
	transform-origin: center;

	&[data-pos='top'].open {
		transform: translateY(7px) rotate(45deg);
	}

	&[data-pos='mid'].open {
		opacity: 0;
		transform: scaleX(0);
	}

	&[data-pos='bot'].open {
		transform: translateY(-7px) rotate(-45deg);
	}
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
	transition:
		opacity 0.25s ease,
		transform 0.25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
	opacity: 0;
	transform: translateY(-8px);
}
</style>
