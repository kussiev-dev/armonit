<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animId = 0
const mouse = { x: -9999, y: -9999 }

const COLORS = [
	'180, 190, 255',
	'255, 255, 255',
	'140, 100, 255',
	'80, 200, 240',
	'100, 130, 255',
]

interface Particle {
	x: number; y: number
	vx: number; vy: number
	baseVx: number; baseVy: number
	r: number
	col: string
	op: number
	phase: number
}

function setup(canvas: HTMLCanvasElement) {
	const ctx = canvas.getContext('2d')!
	let W = (canvas.width = window.innerWidth)
	let H = (canvas.height = window.innerHeight)

	const COUNT = Math.min(120, Math.floor((W * H) / 9000))

	const pts: Particle[] = Array.from({ length: COUNT }, () => {
		const speed = Math.random() * 0.45 + 0.1
		const angle = Math.random() * Math.PI * 2
		const vx = Math.cos(angle) * speed
		const vy = Math.sin(angle) * speed
		return {
			x: Math.random() * W,
			y: Math.random() * H,
			vx, vy, baseVx: vx, baseVy: vy,
			r: Math.random() * 1.6 + 0.8,
			col: COLORS[Math.floor(Math.random() * COLORS.length)],
			op: Math.random() * 0.5 + 0.3,
			phase: Math.random() * Math.PI * 2,
		}
	})

	const LINK = 160
	const REPEL = 150
	let t = 0

	function frame() {
		t += 0.012
		ctx.clearRect(0, 0, W, H)

		for (const p of pts) {
			// mouse repulsion
			const dx = p.x - mouse.x
			const dy = p.y - mouse.y
			const d2 = dx * dx + dy * dy
			if (d2 < REPEL * REPEL && d2 > 1) {
				const d = Math.sqrt(d2)
				const f = ((REPEL - d) / REPEL) * 0.6
				p.vx += (dx / d) * f
				p.vy += (dy / d) * f
			}

			// speed cap + ease back to base velocity
			const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
			if (spd > 4) { p.vx = (p.vx / spd) * 4; p.vy = (p.vy / spd) * 4 }
			p.vx += (p.baseVx - p.vx) * 0.018
			p.vy += (p.baseVy - p.vy) * 0.018

			p.x += p.vx
			p.y += p.vy

			if (p.x < -20) p.x = W + 20
			if (p.x > W + 20) p.x = -20
			if (p.y < -20) p.y = H + 20
			if (p.y > H + 20) p.y = -20
		}

		// gradient connecting lines
		for (let i = 0; i < pts.length; i++) {
			for (let j = i + 1; j < pts.length; j++) {
				const dx = pts[i].x - pts[j].x
				const dy = pts[i].y - pts[j].y
				const d = Math.sqrt(dx * dx + dy * dy)
				if (d < LINK) {
					const alpha = ((1 - d / LINK) * 0.45).toFixed(3)
					const grad = ctx.createLinearGradient(pts[i].x, pts[i].y, pts[j].x, pts[j].y)
					grad.addColorStop(0, `rgba(${pts[i].col},${alpha})`)
					grad.addColorStop(1, `rgba(${pts[j].col},${alpha})`)
					ctx.beginPath()
					ctx.strokeStyle = grad
					ctx.lineWidth = 0.9
					ctx.moveTo(pts[i].x, pts[i].y)
					ctx.lineTo(pts[j].x, pts[j].y)
					ctx.stroke()
				}
			}
		}

		// glow + core dots
		for (const p of pts) {
			const pulse = 1 + Math.sin(t + p.phase) * 0.25

			// outer glow
			const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6 * pulse)
			glow.addColorStop(0, `rgba(${p.col},${(p.op * 0.3).toFixed(3)})`)
			glow.addColorStop(1, `rgba(${p.col},0)`)
			ctx.beginPath()
			ctx.arc(p.x, p.y, p.r * 6 * pulse, 0, Math.PI * 2)
			ctx.fillStyle = glow
			ctx.fill()

			// core
			ctx.beginPath()
			ctx.arc(p.x, p.y, p.r * pulse, 0, Math.PI * 2)
			ctx.fillStyle = `rgba(${p.col},${p.op})`
			ctx.fill()
		}

		animId = requestAnimationFrame(frame)
	}

	frame()

	const onResize = () => {
		W = canvas.width = window.innerWidth
		H = canvas.height = window.innerHeight
	}
	window.addEventListener('resize', onResize)
	return onResize
}

onMounted(() => {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

	const onResize = setup(canvasRef.value!)
	const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY }
	const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }

	window.addEventListener('mousemove', onMove)
	window.addEventListener('mouseleave', onLeave)

	onUnmounted(() => {
		cancelAnimationFrame(animId)
		window.removeEventListener('mousemove', onMove)
		window.removeEventListener('mouseleave', onLeave)
		window.removeEventListener('resize', onResize)
	})
})
</script>

<template>
	<canvas ref="canvasRef" class="particle-canvas" />
</template>

<style scoped>
.particle-canvas {
	position: fixed;
	inset: 0;
	z-index: 0;
	pointer-events: none;
}
</style>
