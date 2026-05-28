<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useReveal } from '../composables/useReveal'

const heroRef = ref<HTMLElement | null>(null)
const sectionsRef = ref<HTMLElement | null>(null)
const heroVisible = useReveal(heroRef)
const sectionsVisible = useReveal(sectionsRef)

const baseUrl = import.meta.env.BASE_URL

const sections = [
	{
		num: '01.',
		title: 'Общие положения',
		text: 'Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных, которые armonit (далее — Оператор) получает от пользователей сайта.',
	},
	{
		num: '02.',
		title: 'Какие данные мы собираем',
		text: 'При заполнении формы обратной связи мы собираем: имя (или псевдоним) пользователя и номер телефона для обратной связи. Иные данные (IP-адрес, cookies, данные браузера) могут обрабатываться в обезличенном виде исключительно в статистических целях.',
	},
	{
		num: '03.',
		title: 'Цели обработки данных',
		text: 'Собранные данные используются исключительно для обратной связи с пользователем по его запросу, обсуждения условий сотрудничества и ответа на вопросы, направленные через форму сайта. Мы не передаём ваши данные третьим лицам, не используем их в рекламных целях и не продаём.',
	},
	{
		num: '04.',
		title: 'Правовое основание обработки',
		text: 'Обработка персональных данных осуществляется на основании свободного, осознанного и однозначного согласия субъекта персональных данных, выраженного путём нажатия на кнопку «Отправить заявку».',
	},
	{
		num: '05.',
		title: 'Хранение и защита данных',
		text: 'Данные, полученные через форму, передаются непосредственно в мессенджер Telegram и не хранятся на серверах сайта. Оператор принимает необходимые технические и организационные меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.',
	},
	{
		num: '06.',
		title: 'Права субъекта данных',
		text: null,
	},
	{
		num: '07.',
		title: 'Изменения политики',
		text: 'Оператор оставляет за собой право вносить изменения в настоящую Политику. Актуальная версия всегда доступна на данной странице.',
	},
]
</script>

<template>
	<div class="privacy">

		<!-- top bar -->
		<div class="privacy-topbar">
			<div class="container">
				<div class="flex items-center justify-between py-5">
					<RouterLink to="/">
						<img :src="`${baseUrl}images/logo.svg`" class="h-7 sm:h-8" alt="armonit" />
					</RouterLink>
					<RouterLink
						to="/"
						class="back-btn flex items-center gap-2 text-sm sm:text-base font-medium opacity-60 hover:opacity-100 transition-opacity"
					>
						<i class="pi pi-arrow-left text-xs"></i>
						На главную
					</RouterLink>
				</div>
			</div>
		</div>

		<!-- hero -->
		<div
			ref="heroRef"
			class="privacy-hero"
			:class="{ 'is-revealed': heroVisible }"
		>
			<div class="container">
				<div class="flex flex-col items-center text-center gap-4 py-16 sm:py-24">
					<div class="badge" data-r="up">Юридический документ</div>
					<h1
						class="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight"
						data-r="up"
						style="--d: 0.1s"
					>
						Политика обработки<br class="hidden sm:block" />
						персональных данных
					</h1>
					<p
						class="text-base sm:text-lg opacity-60 max-w-xl"
						data-r="up"
						style="--d: 0.2s"
					>
						Мы уважаем вашу приватность и прозрачно рассказываем, как
						обрабатываем данные
					</p>
				</div>
			</div>
		</div>

		<!-- sections -->
		<div
			ref="sectionsRef"
			class="privacy-sections"
			:class="{ 'is-revealed': sectionsVisible }"
		>
			<div class="container">
				<div class="max-w-3xl mx-auto flex flex-col gap-4 pb-8">

					<div
						v-for="(s, i) in sections"
						:key="i"
						class="section-card flex gap-4 sm:gap-6"
						data-r="up"
						:style="`--d: ${0.05 + i * 0.07}s`"
					>
						<div class="section-num">{{ s.num }}</div>
						<div class="section-body">
							<h2 class="section-title">{{ s.title }}</h2>

							<p v-if="s.text" class="section-text">{{ s.text }}</p>

							<!-- section 6 special: contact links -->
							<p v-if="s.num === '06.'" class="section-text">
								Вы вправе в любой момент отозвать согласие на обработку
								персональных данных, а также запросить их удаление. Для этого
								свяжитесь с нами:
							</p>
							<div v-if="s.num === '06.'" class="contact-links">
								<a
									href="https://t.me/marcus_gin"
									target="_blank"
									rel="noopener noreferrer"
									class="contact-link"
								>
									<i class="pi pi-telegram"></i>
									@marcus_gin
								</a>
								<a href="tel:+79162543198" class="contact-link">
									<i class="pi pi-phone"></i>
									+7 (916) 254-31-98
								</a>
							</div>
						</div>
					</div>

					<!-- back link -->
					<RouterLink
						to="/"
						class="back-bottom flex items-center gap-2 mt-8 self-start"
						data-r="up"
						:style="`--d: ${0.05 + sections.length * 0.07}s`"
					>
						<i class="pi pi-arrow-left"></i>
						Вернуться на главную
					</RouterLink>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.privacy {
	min-height: 100vh;
}

.privacy-topbar {
	position: sticky;
	top: 0;
	z-index: 50;
	backdrop-filter: blur(16px);
	-webkit-backdrop-filter: blur(16px);
	border-bottom: 1px solid rgba(57, 63, 197, 0.2);
	background: rgba(2, 6, 41, 0.6);
}

.privacy-hero {
	border-bottom: 1px solid rgba(57, 63, 197, 0.15);
}

.badge {
	display: inline-flex;
	align-items: center;
	padding: 6px 16px;
	border: 1.5px solid rgba(57, 63, 197, 0.6);
	border-radius: 999px;
	font-size: 0.8rem;
	font-weight: 500;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.7);
}

.privacy-sections {
	padding: 48px 0 80px;
}

.section-card {
	background: rgba(57, 63, 197, 0.08);
	border: 1px solid rgba(57, 63, 197, 0.2);
	border-radius: 20px;
	padding: 20px;
	transition: border-color 0.25s ease, background 0.25s ease;

	@media (min-width: 640px) {
		padding: 28px 32px;
	}

	&:hover {
		border-color: rgba(57, 63, 197, 0.5);
		background: rgba(57, 63, 197, 0.13);
	}
}

.section-num {
	flex-shrink: 0;
	width: 52px;
	height: 52px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #393fc5;
	border-radius: 14px;
	font-size: 1rem;
	font-weight: 700;

	@media (min-width: 640px) {
		width: 60px;
		height: 60px;
		font-size: 1.1rem;
		border-radius: 16px;
	}
}

.section-body {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: center;
}

.section-title {
	font-size: 1.1rem;
	font-weight: 600;

	@media (min-width: 640px) {
		font-size: 1.25rem;
	}
}

.section-text {
	font-size: 0.9rem;
	line-height: 1.7;
	opacity: 0.72;

	@media (min-width: 640px) {
		font-size: 1rem;
	}
}

.contact-links {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 4px;
}

.contact-link {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 8px 18px;
	background: rgba(57, 63, 197, 0.25);
	border: 1.5px solid rgba(57, 63, 197, 0.5);
	border-radius: 12px;
	font-size: 0.95rem;
	font-weight: 600;
	transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

	&:hover {
		background: rgba(57, 63, 197, 0.45);
		border-color: #393fc5;
		transform: translateY(-2px);
	}
}

.back-bottom {
	font-size: 0.95rem;
	font-weight: 500;
	opacity: 0.5;
	transition: opacity 0.2s ease;

	&:hover { opacity: 1; }
}
</style>
