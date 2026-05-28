<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { useReveal } from '../composables/useReveal'

const sectionRef = ref<HTMLElement | null>(null)
const visible = useReveal(sectionRef)

const name = ref('')
const phone = ref('')
const phoneEl = ref<HTMLInputElement>()
const phoneFocused = ref(false)
const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')

const toast = ref<{ visible: boolean; message: string }>({
	visible: false,
	message: ''
})
let toastTimer: ReturnType<typeof setTimeout> | null = null

function showToast(message: string) {
	if (toastTimer) clearTimeout(toastTimer)
	toast.value = { visible: true, message }
	toastTimer = setTimeout(() => (toast.value.visible = false), 3500)
}

const BOT_TOKEN = import.meta.env.VITE_TG_BOT_TOKEN
const CHAT_ID = import.meta.env.VITE_TG_CHAT_ID

function formatPhone(digits: string): string {
	if (!digits) return ''
	let r = '+7 (' + digits.slice(0, Math.min(3, digits.length))
	if (digits.length < 3) return r
	r += ') ' + digits.slice(3, Math.min(6, digits.length))
	if (digits.length < 6) return r
	r += '-' + digits.slice(6, Math.min(8, digits.length))
	if (digits.length < 8) return r
	return r + '-' + digits.slice(8, 10)
}

function moveCursorToEnd() {
	nextTick(() => {
		const len = phoneEl.value?.value.length ?? 0
		phoneEl.value?.setSelectionRange(len, len)
	})
}

function onPhoneInput(e: Event) {
	const el = e.target as HTMLInputElement
	const raw = el.value.replace(/\D/g, '')
	const digits = (
		raw.startsWith('7') || raw.startsWith('8') ? raw.slice(1) : raw
	).slice(0, 10)
	const formatted = formatPhone(digits)
	phone.value = formatted
	el.value = formatted
	moveCursorToEnd()
}

function onFocus() {
	phoneFocused.value = true
	nextTick(() => moveCursorToEnd())
}

function onBlur() {
	phoneFocused.value = false
}

function onPhoneKeydown(e: KeyboardEvent) {
	if (e.key !== 'Backspace') return
	e.preventDefault()
	if (!phone.value) return
	const raw = phone.value.replace(/\D/g, '')
	const digits = raw.startsWith('7') ? raw.slice(1) : raw
	phone.value = formatPhone(digits.slice(0, -1))
	moveCursorToEnd()
}

const isPhoneValid = () => phone.value.replace(/\D/g, '').length === 11

async function submit() {
	if (!name.value.trim()) {
		showToast('Пожалуйста, введите ваше имя')
		return
	}
	if (!phone.value) {
		showToast('Пожалуйста, введите номер телефона')
		return
	}
	if (!isPhoneValid()) {
		showToast('Введите номер телефона полностью')
		return
	}

	status.value = 'loading'

	const text =
		`<b>Новая заявка с сайта armonit</b>\n\n` +
		`👤 Имя: ${name.value}\n` +
		`📞 Телефон: ${phone.value}`

	try {
		const res = await fetch(
			`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' })
			}
		)

		if (!res.ok) throw new Error()

		status.value = 'success'
		name.value = ''
		phone.value = ''
	} catch {
		status.value = 'error'
	}
}
</script>

<template>
	<footer id="contacts" ref="sectionRef" class="footer section-offset" :class="{ 'is-revealed': visible }">
		<div class="container">
			<div class="footer-inner">
				<h2 class="footer-title title" data-r="up">Связаться с нами</h2>

				<form
					class="w-full flex flex-col gap-5 text-center mb-10 sm:mb-28"
					data-r="up"
					style="--d: 0.15s"
					@submit.prevent="submit"
				>
					<div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
						<input
							v-model="name"
							class="py-2 px-4 sm:px-6 border-[3px] border-[#393fc5] rounded-2xl font-medium text-base sm:text-2xl text-white placeholder:opacity-80 placeholder:text-white"
							type="text"
							placeholder="Имя"
						/>
						<input
							ref="phoneEl"
							:value="phone || (phoneFocused ? '+7 (' : '')"
							@input="onPhoneInput"
							@keydown="onPhoneKeydown"
							@focus="onFocus"
							@blur="onBlur"
							class="py-2 px-4 sm:px-6 border-[3px] border-[#393fc5] rounded-2xl font-medium text-base sm:text-2xl text-white placeholder:opacity-80 placeholder:text-white"
							type="tel"
							placeholder="Номер телефона"
							inputmode="numeric"
						/>
					</div>

					<button
						class="btn-primary"
						type="submit"
						:disabled="status === 'loading'"
					>
						{{ status === 'loading' ? 'Отправляем...' : 'Отправить заявку' }}
					</button>

					<span v-if="status === 'success'" class="text-green-400 font-medium">
						Заявка отправлена! Свяжемся с вами в ближайшее время.
					</span>
					<span v-else-if="status === 'error'" class="text-red-400 font-medium">
						Ошибка при отправке. Попробуйте позже или напишите напрямую.
					</span>
					<span v-else>
						Нажимая кнопку, вы соглашаетесь с
						<RouterLink
							to="/privacy"
							class="underline underline-offset-2 hover:opacity-80 transition-opacity"
						>
							политикой обработки персональных данных</RouterLink
						>.
					</span>
				</form>

				<div class="footer-contacts" data-r="up" style="--d: 0.3s">
					<h2 class="contacts-title title">Контакты</h2>
					<div
						class="flex flex-col gap-2 items-center sm:items-start sm:flex-row sm:justify-between font-bold text-2xl sm:text-3xl lg:text-5xl"
					>
						<a href="https://t.me/marcus_gin" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity">@marcus_gin</a>
						<a href="tel:+79162543198" class="hover:opacity-80 transition-opacity">+7 (916) 254-31-98</a>
					</div>
				</div>
			</div>
		</div>
	</footer>

	<Transition name="toast">
		<div v-if="toast.visible" class="toast">
			<i class="pi pi-exclamation-circle text-lg"></i>
			{{ toast.message }}
		</div>
	</Transition>
</template>

<style scoped lang="scss">
.toast {
	position: fixed;
	bottom: 32px;
	left: 50%;
	transform: translateX(-50%);
	background: #2a2a3d;
	border: 1.5px solid #393fc5;
	color: #fff;
	padding: 14px 24px;
	border-radius: 14px;
	font-size: 1rem;
	font-weight: 500;
	display: flex;
	align-items: center;
	gap: 10px;
	white-space: nowrap;
	z-index: 9999;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.toast-enter-active,
.toast-leave-active {
	transition:
		opacity 0.25s ease,
		transform 0.25s ease;
}

.toast-enter-from,
.toast-leave-to {
	opacity: 0;
	transform: translateX(-50%) translateY(12px);
}
</style>
