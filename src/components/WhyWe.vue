<script setup lang="ts">
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'

const sectionRef = ref<HTMLElement | null>(null)
const visible = useReveal(sectionRef)

const whyWheList = [
	{
		num: '01.',
		title: 'Работаем под задачу бизнеса, а не по шаблону'
	},
	{
		num: '02.',
		title: 'Современный стек технологий'
	},
	{
		num: '03.',
		title: 'Прозрачные сроки и этапы'
	},
	{
		num: '04.',
		title: 'Фокус на результат, а не просто дизайн'
	},
	{
		num: '05.',
		title: 'Поддержка после запуска'
	}
]
</script>

<template>
	<div id="about" ref="sectionRef" class="why-we section-offset" :class="{ 'is-revealed': visible }">
		<div class="container">
			<div class="why-we-inner">
				<h2 class="why-we-inner title" data-r="up">Почему armonit?</h2>

				<ul class="why-we-list flex flex-col gap-3 sm:gap-5">
					<li
						class="why-we-item flex gap-3 sm:gap-5"
						v-for="(item, index) in whyWheList"
						:key="index"
						data-r="left"
						:style="`--d: ${0.05 + index * 0.08}s`"
					>
						<div
							class="item-num w-14 sm:w-[95px] shrink-0 text-center py-3 bg-[#393FC5] rounded-2xl text-base sm:text-2xl font-semibold"
						>
							{{ item.num }}
						</div>
						<div
							class="item-title flex-1 bg-[#393FC5] py-3 px-4 sm:px-6 rounded-2xl text-base sm:text-2xl font-medium"
						>
							{{ item.title }}
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
