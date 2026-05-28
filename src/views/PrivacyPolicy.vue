<script setup lang="ts"></script>

<template>
	<div class="privacy">
		<div class="container">
			<div class="privacy-inner max-w-3xl mx-auto flex flex-col gap-8">
				<h1 class="title">Политика обработки персональных данных</h1>

				<section class="flex flex-col gap-3">
					<h2 class="text-2xl font-semibold">1. Общие положения</h2>
					<p class="opacity-80 leading-relaxed">
						Настоящая политика обработки персональных данных (далее — Политика)
						составлена в соответствии с требованиями Федерального закона от
						27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок
						обработки персональных данных, которые armonit (далее — Оператор)
						получает от пользователей сайта.
					</p>
				</section>

				<section class="flex flex-col gap-3">
					<h2 class="text-2xl font-semibold">2. Какие данные мы собираем</h2>
					<p class="opacity-80 leading-relaxed">
						При заполнении формы обратной связи мы собираем следующие данные:
					</p>
					<ul
						class="list-disc list-inside opacity-80 leading-relaxed flex flex-col gap-1"
					>
						<li>Имя (или псевдоним) пользователя</li>
						<li>Номер телефона для обратной связи</li>
					</ul>
					<p class="opacity-80 leading-relaxed">
						Иные данные (IP-адрес, cookies, данные браузера) могут
						обрабатываться в обезличенном виде исключительно в статистических
						целях.
					</p>
				</section>

				<section class="flex flex-col gap-3">
					<h2 class="text-2xl font-semibold">3. Цели обработки данных</h2>
					<p class="opacity-80 leading-relaxed">
						Собранные данные используются исключительно для:
					</p>
					<ul
						class="list-disc list-inside opacity-80 leading-relaxed flex flex-col gap-1"
					>
						<li>Обратной связи с пользователем по его запросу</li>
						<li>Обсуждения условий сотрудничества</li>
						<li>Ответа на вопросы, направленные через форму сайта</li>
					</ul>
					<p class="opacity-80 leading-relaxed">
						Мы не передаём ваши данные третьим лицам, не используем их в
						рекламных целях и не продаём.
					</p>
				</section>

				<section class="flex flex-col gap-3">
					<h2 class="text-2xl font-semibold">
						4. Правовое основание обработки
					</h2>
					<p class="opacity-80 leading-relaxed">
						Обработка персональных данных осуществляется на основании
						свободного, осознанного и однозначного согласия субъекта
						персональных данных, выраженного путём нажатия на кнопку «Отправить
						заявку».
					</p>
				</section>

				<section class="flex flex-col gap-3">
					<h2 class="text-2xl font-semibold">5. Хранение и защита данных</h2>
					<p class="opacity-80 leading-relaxed">
						Данные, полученные через форму, передаются непосредственно в
						мессенджер Telegram и не хранятся на серверах сайта. Оператор
						принимает необходимые технические и организационные меры для защиты
						персональных данных от несанкционированного доступа, изменения,
						раскрытия или уничтожения.
					</p>
				</section>

				<section class="flex flex-col gap-3">
					<h2 class="text-2xl font-semibold">6. Права субъекта данных</h2>
					<p class="opacity-80 leading-relaxed">
						Вы вправе в любой момент отозвать согласие на обработку персональных
						данных, а также запросить их удаление. Для этого свяжитесь с нами
						через Telegram: <a href="https://t.me/marcus_gin" target="_blank" rel="noopener noreferrer" class="font-semibold hover:opacity-80 transition-opacity">@marcus_gin</a> или
						по телефону: <a href="tel:+79162543198" class="font-semibold hover:opacity-80 transition-opacity">+7 (916) 254-31-98</a>.
					</p>
				</section>

				<section class="flex flex-col gap-3">
					<h2 class="text-2xl font-semibold">7. Изменения политики</h2>
					<p class="opacity-80 leading-relaxed">
						Оператор оставляет за собой право вносить изменения в настоящую
						Политику. Актуальная версия всегда доступна на данной странице.
					</p>
				</section>

				<RouterLink
					to="/"
					class="inline-flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
				>
					<i class="pi pi-arrow-left"></i>
					Вернуться на главную
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
