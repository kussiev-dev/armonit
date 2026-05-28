<script setup lang="ts">
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'

const sectionRef = ref<HTMLElement | null>(null)
const visible = useReveal(sectionRef)

const questions = [
	{
		num: '01.',
		question: 'Сколько стоит разработка?',
		answer:
			'Стоимость зависит от сложности и объёма проекта. Лендинг начинается от 20 000 ₽, многостраничный сайт — от 40 000 ₽, веб-приложение — от 100 000 ₽. Точную цену называем после обсуждения задачи — напишите нам, и мы подготовим расчёт.'
	},
	{
		num: '02.',
		question: 'Сроки?',
		answer:
			'Лендинг делаем за 5–10 рабочих дней, корпоративный сайт — за 2–4 недели, сложные веб-приложения — по согласованному плану. Сроки фиксируем в договоре и соблюдаем их.'
	},
	{
		num: '03.',
		question: 'Работаете ли с ТЗ или без?',
		answer:
			'Работаем в обоих случаях. Если у вас есть готовое ТЗ — отлично, работаем по нему. Если нет — поможем сформулировать требования: проведём бриф, опишем функционал и согласуем с вами перед стартом.'
	},
	{
		num: '04.',
		question: 'Есть ли поддержка?',
		answer:
			'Да. После сдачи проекта мы предоставляем бесплатную поддержку на 6 месяцев — исправляем баги и отвечаем на вопросы. Дальнейшее сопровождение оформляется отдельным договором.'
	},
	{
		num: '05.',
		question: 'Можно ли доработать существующий проект?',
		answer:
			'Да, берёмся за доработку сторонних проектов. Сначала изучаем кодовую базу, оцениваем трудозатраты и согласуем план. Если проект написан качественно — приступаем без лишних затрат на рефакторинг.'
	}
]

const activeIndex = ref<number | null>(null)

function toggle(index: number) {
	activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
	<div ref="sectionRef" class="faq section-offset" :class="{ 'is-revealed': visible }">
		<div class="container">
			<div class="faq-inner">
				<h2 class="faq-inner title" data-r="up">Частые вопросы (FAQ)</h2>

				<ul class="faq-list flex flex-col gap-3 sm:gap-5">
					<li
						class="faq-item flex gap-3 sm:gap-5 cursor-pointer"
						v-for="(item, index) in questions"
						:key="index"
						data-r="up"
						:style="`--d: ${0.05 + index * 0.09}s`"
						@click="toggle(index)"
					>
						<div
							class="item-num w-14 sm:w-[95px] shrink-0 text-center py-3 bg-[#393FC5] rounded-xl sm:rounded-2xl text-base sm:text-2xl font-semibold"
						>
							{{ item.num }}
						</div>
						<div
							class="item-title flex-1 bg-[#393FC5] py-3 px-4 sm:px-6 rounded-xl sm:rounded-2xl text-base sm:text-2xl font-medium"
						>
							<div class="flex justify-between items-center">
								<span>{{ item.question }}</span>
								<i
									class="pi pi-arrow-circle-right transition-transform duration-300"
									:class="{ 'rotate-90': activeIndex === index }"
								></i>
							</div>
							<div class="faq-answer" :class="{ open: activeIndex === index }">
								<div>
									<p class="pt-3 pb-1 text-base font-normal opacity-80">
										{{ item.answer }}
									</p>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.faq-answer {
	display: grid;
	grid-template-rows: 0fr;
	transition: grid-template-rows 0.35s ease;

	> div {
		overflow: hidden;
	}

	&.open {
		grid-template-rows: 1fr;
	}
}
</style>
