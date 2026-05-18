<script setup lang="ts">
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'
import HowWeWorkModal from './HowWeWorkModal.vue'

const sectionRef = ref<HTMLElement | null>(null)
const visible = useReveal(sectionRef)

interface WorkStep {
	title: string
	icon: string
	color: string
	duration: string
	description: string
	details: string[]
}

const howWeWorkList: WorkStep[] = [
	{
		title: 'Анализ задачи',
		icon: 'pi-search',
		color: '#6C72FF',
		duration: '1–3 дня',
		description:
			'Глубоко погружаемся в ваш бизнес: изучаем цели, целевую аудиторию, конкурентов и ожидаемые результаты. Именно на этом этапе формируется вся стратегия проекта.',
		details: [
			'Встреча-брифинг с заказчиком и формулировка целей',
			'Анализ конкурентов и рынка',
			'Изучение целевой аудитории и пользовательских сценариев',
			'Определение ключевых метрик успеха (KPI)',
			'Составление технического задания'
		]
	},
	{
		title: 'Прототипирование',
		icon: 'pi-objects-column',
		color: '#39C5A0',
		duration: '3–7 дней',
		description:
			'Создаём каркасные схемы (wireframes) всех ключевых экранов, чтобы согласовать структуру и пользовательский путь ещё до старта дизайна. Это экономит время и бюджет.',
		details: [
			'Разработка структуры сайта и карты разделов',
			'Wireframe-прототипы всех ключевых страниц',
			'Проектирование пользовательских сценариев (UX)',
			'Согласование навигации и логики переходов',
			'Интерактивный кликабельный прототип для демонстрации'
		]
	},
	{
		title: 'Дизайн',
		icon: 'pi-palette',
		color: '#F062A4',
		duration: '5–14 дней',
		description:
			'Разрабатываем уникальный визуальный стиль, который отражает идентичность бренда и привлекает пользователей. Каждый пиксель продуман с точки зрения эстетики и удобства.',
		details: [
			'Разработка дизайн-системы и UI-кита',
			'Создание главной страницы и ключевых экранов',
			'Адаптация под мобильные устройства и планшеты',
			'Подбор типографики, цветовой палитры и иконок',
			'Согласование и правки до финального утверждения'
		]
	},
	{
		title: 'Разработка',
		icon: 'pi-code',
		color: '#F0A830',
		duration: '7–30 дней',
		description:
			'Переводим дизайн в чистый, масштабируемый код с использованием современных технологий. Пишем так, чтобы проект легко развивался и поддерживался в будущем.',
		details: [
			'Вёрстка pixel-perfect по утверждённому дизайну',
			'Frontend-разработка на Vue / React',
			'Backend и интеграция с CMS или API',
			'Подключение форм, анимаций и интерактивных элементов',
			'Оптимизация производительности и скорости загрузки'
		]
	},
	{
		title: 'Тестирование',
		icon: 'pi-verified',
		color: '#3BC5C5',
		duration: '2–5 дней',
		description:
			'Тщательно проверяем проект на всех устройствах и браузерах перед запуском. Выявляем и устраняем баги, проверяем корректность отображения и логику работы.',
		details: [
			'Кросс-браузерное и кросс-платформенное тестирование',
			'Проверка на мобильных устройствах разных размеров',
			'Тестирование всех форм, ссылок и интерактивных элементов',
			'Аудит скорости и Core Web Vitals',
			'Финальная правка и устранение замечаний'
		]
	},
	{
		title: 'Запуск и поддержка',
		icon: 'pi-send',
		color: '#9B59F5',
		duration: 'Постоянно',
		description:
			'Публикуем проект и берём на себя техническую поддержку. Следим за стабильностью, вносим обновления и помогаем развивать продукт после старта.',
		details: [
			'Деплой на хостинг или сервер заказчика',
			'Настройка доменного имени и SSL-сертификата',
			'Базовое SEO и аналитика (GA4, Яндекс.Метрика)',
			'Техническая поддержка и исправление ошибок',
			'Плановые обновления и развитие функционала'
		]
	}
]

const activeStep = ref<WorkStep | null>(null)
const showModal = ref(false)

function openModal(step: WorkStep) {
	activeStep.value = step
	showModal.value = true
}

function closeModal() {
	showModal.value = false
}
</script>

<template>
	<div id="process" ref="sectionRef" class="how-we-work section-offset" :class="{ 'is-revealed': visible }">
		<div class="container">
			<div class="how-we-work-inner">
				<h2 class="how-we-work-inner title" data-r="up">Как мы работаем?</h2>

				<ul class="how-we-work-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
					<li
						class="how-we-work-item border-[3px] border-[#393FC5] rounded-2xl p-5 sm:p-8 min-h-36 sm:min-h-48 flex flex-col justify-between cursor-pointer hover:border-transparent hover:bg-[#393FC5] transition-all ease-in-out duration-500 group"
						v-for="(item, index) in howWeWorkList"
						:key="index"
						data-r="scale"
						:style="`--d: ${index * 0.07}s`"
						@click="openModal(item)"
					>
						<div class="flex justify-between items-start">
							<div
								class="step-number text-4xl sm:text-5xl font-black leading-none opacity-15 group-hover:opacity-25 transition-opacity duration-500"
							>
								{{ String(index + 1).padStart(2, '0') }}
							</div>
							<i
								:class="['pi', item.icon]"
								class="text-xl sm:text-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"
							></i>
						</div>
						<div class="flex justify-between items-end">
							<div class="item-title text-xl sm:text-2xl font-bold">{{ item.title }}</div>
							<i
								class="pi pi-arrow-up-right text-base sm:text-lg opacity-20 group-hover:opacity-100 transition-opacity duration-300"
							></i>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<HowWeWorkModal
		:show-modal="showModal"
		:step="activeStep"
		@close="closeModal"
	/>
</template>

<style scoped lang="scss"></style>
