export function scrollToSection(id: string) {
	const target = document.getElementById(id)
	const wrapper = document.querySelector<HTMLElement>('.wrapper')
	if (!target || !wrapper) return
	const top =
		target.getBoundingClientRect().top -
		wrapper.getBoundingClientRect().top +
		wrapper.scrollTop
	wrapper.scrollTo({ top, behavior: 'smooth' })
}
