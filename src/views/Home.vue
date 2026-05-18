<script setup lang="ts">
import Faq from '../components/Faq.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import HowWeWork from '../components/HowWeWork.vue'
import Portfolio from '../components/Portfolio.vue'
import WeDoing from '../components/WeDoing.vue'
import WhyWe from '../components/WhyWe.vue'
</script>

<template>
	<Header />
	<div class="wrapper">
		<Hero />
		<WeDoing />
		<WhyWe />
		<HowWeWork />
		<Portfolio />
		<Faq />
		<Footer />
	</div>
</template>
