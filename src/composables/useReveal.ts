import { onMounted, onUnmounted, ref, type Ref } from 'vue'

export function useReveal(el: Ref<HTMLElement | null>, threshold = 0.15) {
	const visible = ref(false)
	let observer: IntersectionObserver | null = null

	onMounted(() => {
		if (!el.value) return
		if (window.matchMedia('(max-width: 767px)').matches) {
			visible.value = true
			return
		}
		observer = new IntersectionObserver(
			([entry]) => {
				visible.value = entry.isIntersecting
			},
			{ threshold }
		)
		observer.observe(el.value)
	})

	onUnmounted(() => observer?.disconnect())

	return visible
}
