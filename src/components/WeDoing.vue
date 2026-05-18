<script setup lang="ts">
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'
import { scrollToSection } from '../utils/scrollTo'

const sectionRef = ref<HTMLElement | null>(null)
const visible = useReveal(sectionRef)

const weDoingList = [
	{
		title: 'Веб-разработка',
		items: ['Сайты', 'Платформы', 'Маркетплейсы', 'Личные кабинеты']
	},
	{
		title: 'Мобильные приложения',
		items: ['IOS', 'Android']
	},
	{
		title: 'Бизнес-системы',
		items: ['CRM', 'Админ-панели', 'Интеграции', 'Автоматизации']
	},
	{
		title: 'Стартапы',
		items: ['От идеи до MVP и запуска']
	}
]
</script>

<template>
	<div id="services" ref="sectionRef" class="we-doing section-offset" :class="{ 'is-revealed': visible }">
		<div class="container">
			<div class="we-doing-inner">
				<h2 class="we-doing-title title" data-r="up">Чем мы занимаемся?</h2>

				<ul class="we-doing-list grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
					<li
						class="we-doing-item border-[3px] border-[#393FC5] rounded-2xl p-5 sm:p-8 flex flex-col justify-between min-h-64 sm:min-h-96"
						v-for="(item, index) in weDoingList"
						:key="index"
						data-r="up"
						:style="`--d: ${0.1 + index * 0.1}s`"
					>
						<div>
							<h4 class="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 sm:h-[76px]">
								{{ item.title }}
							</h4>

							<ul class="list-disc pl-6 sm:pl-8">
								<li
									v-for="(i, index) in item.items"
									:key="index"
									class="text-base sm:text-xl"
								>
									{{ i }}
								</li>
							</ul>
						</div>

						<a class="we-doing-btn btn-primary mt-4 sm:mt-0 cursor-pointer" @click="scrollToSection('contacts')">Обсудить проект</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
