<template>
	<div class="bg-canvas" aria-hidden="true">
		<div class="orb orb-1"></div>
		<div class="orb orb-2"></div>
		<div class="orb orb-3"></div>
		<div class="orb orb-4"></div>
		<div class="orb orb-5"></div>
		<div class="stars"></div>
	</div>
</template>

<style scoped lang="scss">
.bg-canvas {
	position: fixed;
	inset: 0;
	z-index: 0;
	pointer-events: none;
	overflow: hidden;
}

.orb {
	position: absolute;
	border-radius: 50%;
	opacity: 0.28;
}

.orb-1 {
	width: 700px;
	height: 700px;
	background: radial-gradient(circle at 40% 40%, #393fc5 0%, transparent 70%);
	filter: blur(90px);
	top: -220px;
	left: -180px;
	animation: drift1 8s ease-in-out infinite;
}

.orb-2 {
	width: 550px;
	height: 550px;
	background: radial-gradient(circle at 60% 50%, #7c3aed 0%, transparent 70%);
	filter: blur(80px);
	top: 25%;
	right: -160px;
	animation: drift2 10s ease-in-out infinite;
}

.orb-3 {
	width: 420px;
	height: 420px;
	background: radial-gradient(circle at 50% 50%, #0ea5e9 0%, transparent 70%);
	filter: blur(70px);
	bottom: 5%;
	left: 15%;
	animation: drift3 7s ease-in-out infinite;
}

.orb-4 {
	width: 320px;
	height: 320px;
	background: radial-gradient(circle at 50% 50%, #6d28d9 0%, transparent 70%);
	filter: blur(60px);
	top: 55%;
	right: 20%;
	animation: drift4 9s ease-in-out infinite;
	opacity: 0.3;
}

.orb-5 {
	width: 280px;
	height: 280px;
	background: radial-gradient(circle at 50% 50%, #06b6d4 0%, transparent 70%);
	filter: blur(55px);
	top: 40%;
	left: 40%;
	animation: drift5 6s ease-in-out infinite;
	opacity: 0.25;
}

.stars {
	position: absolute;
	inset: 0;
	background-image:
		radial-gradient(1.5px 1.5px at 10% 15%, rgba(255,255,255,0.55) 0%, transparent 100%),
		radial-gradient(1px 1px at 25% 60%, rgba(255,255,255,0.4) 0%, transparent 100%),
		radial-gradient(1.5px 1.5px at 40% 30%, rgba(255,255,255,0.5) 0%, transparent 100%),
		radial-gradient(1px 1px at 55% 80%, rgba(255,255,255,0.35) 0%, transparent 100%),
		radial-gradient(1.5px 1.5px at 70% 20%, rgba(255,255,255,0.5) 0%, transparent 100%),
		radial-gradient(1px 1px at 80% 55%, rgba(255,255,255,0.4) 0%, transparent 100%),
		radial-gradient(1px 1px at 90% 75%, rgba(255,255,255,0.3) 0%, transparent 100%),
		radial-gradient(1.5px 1.5px at 15% 85%, rgba(255,255,255,0.45) 0%, transparent 100%),
		radial-gradient(1px 1px at 60% 45%, rgba(255,255,255,0.35) 0%, transparent 100%),
		radial-gradient(1px 1px at 35% 10%, rgba(255,255,255,0.5) 0%, transparent 100%),
		radial-gradient(1.5px 1.5px at 50% 95%, rgba(255,255,255,0.4) 0%, transparent 100%),
		radial-gradient(1px 1px at 75% 40%, rgba(255,255,255,0.3) 0%, transparent 100%);
	animation: twinkle 2.5s ease-in-out infinite alternate;
}

@keyframes drift1 {
	0%, 100% { transform: translate(0, 0) scale(1);        opacity: 0.28; }
	33%       { transform: translate(120px, 140px) scale(1.15); opacity: 0.4; }
	66%       { transform: translate(-80px, 70px) scale(0.9);  opacity: 0.2; }
}

@keyframes drift2 {
	0%, 100% { transform: translate(0, 0) scale(1);         opacity: 0.28; }
	40%       { transform: translate(-140px, -110px) scale(1.12); opacity: 0.38; }
	70%       { transform: translate(70px, 90px) scale(0.88);    opacity: 0.2; }
}

@keyframes drift3 {
	0%, 100% { transform: translate(0, 0) scale(1);         opacity: 0.28; }
	30%       { transform: translate(100px, -130px) scale(1.18); opacity: 0.42; }
	65%       { transform: translate(-110px, 55px) scale(0.9);   opacity: 0.18; }
}

@keyframes drift4 {
	0%, 100% { transform: translate(0, 0) scale(1);          opacity: 0.3; }
	50%       { transform: translate(-100px, -100px) scale(1.2); opacity: 0.45; }
}

@keyframes drift5 {
	0%, 100% { transform: translate(0, 0) scale(1);        opacity: 0.25; }
	25%       { transform: translate(90px, -90px) scale(1.15); opacity: 0.4; }
	75%       { transform: translate(-80px, 100px) scale(0.88); opacity: 0.15; }
}

@keyframes twinkle {
	0%   { opacity: 0.5; }
	100% { opacity: 1; }
}
</style>
