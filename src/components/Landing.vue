<template>
	<div class="container navigation">
		<div class="navbar center">
			<router-link to="/"><h5>HOME</h5></router-link>
			<img src="https://www.dropbox.com/s/lqxhvz32aw2mx2w/innovation.png?raw=1" alt="innovation">
			<router-link to="/about"><h5>ABOUT</h5></router-link>
		</div>
		<div v-for="link in links" :key="link.section" class="tabs">
			<router-link :to="{name: 'portfolio', params: {section: link.section}}">
				<div class="item center interior">
					<div class="move center">
						<img 
						:src="link.img" 
						:alt="link.section" 
						:class="[isActive ? 'heartBeat' : '']">
						<h1>
							{{link.section}}
						</h1>
					</div>
				</div>
			</router-link>
		</div>
	</div>

<!-- Icons made by flaticon authors icongeek26 Freepik Kiranshastry Good Ware -->
</template>

<script>
	export default {
		created() {
			this.interval = setInterval(this.setClass, 3000)
		},
		destoyed() {
			clearInterval(this.interval)
		},
		data() {
			return {
				isActive: true,
				interval: '',
				links: [{img: 'https://www.dropbox.com/s/621k2icquo7osq5/armchair.png?raw=1', section: 'interior'}, {img: 'https://www.dropbox.com/s/6xawqnw0b8ot6ok/ux.png?raw=1', section: 'uxui'}, {img: 'https://www.dropbox.com/s/sj1if9o1movbius/web-programming.png?raw=1',section: 'code'}, {img: 'https://www.dropbox.com/s/mq6jsurs6t93qoa/painting-brush.png?raw=1', section: 'graphic'}]
			}
		},
		methods: {
			setClass: function() {
				this.isActive = !this.isActive;
			}
		}
	}
</script>

<style scoped>
	@import url(https://fonts.googleapis.com/css?family=Bebas+Neue|Montserrat|Rock+Salt);

.navigation {
  font-size: calc(0.8em + 1vmin);
/*   background: url("https://source.unsplash.com/35bE_njbG9E/1600x900/") center center no-repeat fixed / cover;  */
  background: url("https://drive.google.com/uc?id=15WYdEfRUM9jjoYYwYT0vtVkmH_ujFISY");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
/*   Photo by Augustine Wong on Unsplash */
  display: flex;
  justify-content: center;
  align-items: center;
/*   for align items to work, height should be applied to the container */
  height: 100vh;
}
.center {
	justify-content: center;
	align-items: center;
}
.item {
	/* Center the contents of the grid items. Making each grid item a Flex Container */
	display: flex;
	flex-direction: column;
	/* Horizontal and Vertical centering */
	font-family: sans-serif;
	font-weight: bold;
	/*   do not use opacity for setting the background as it will affect text */
	background: rgba(0, 0, 0, 0.5);
	color: white;
	/*padding-top: 130px;*/
	height: 100vh;
}
.tabs:nth-child(odd){
	background: rgba(0, 0, 0, 0.2);
}
/*CSS Grid styles */
.container {
	width: 100vw;
	height: 100vh;
	position: relative;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto;
	grid-template-areas:
		"interior ux code graphic";
}
.interior {
	grid-area: interior;
}
.ux {
	grid-area: ux;
}
.code {
	grid-area: code;
}
.graphic {
	grid-area: graphic;
}
img {
	width: 50px;
	height: 50px;
	filter: invert(70%);
}
.tabs:nth-child(2) .item:hover {
	background: rgba(243, 156, 18, 0.5);
}
.tabs:nth-child(3) .item:hover {
	background: rgba(211, 84, 0, 0.5);
}
.tabs:nth-child(4) .item:hover {
	background: rgba(22, 160, 133, 0.5);
}
.tabs:nth-child(5) .item:hover {
	background: rgba(39, 174, 96, 0.5);
}
.navbar {
	width: 100%;
	height: 100px;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	display: flex;
	padding: 15px;
}
.navbar:hover {
	background: rgba(0, 0, 0, 0.6);
}
.navbar img {
	width: 50px;
	height: 50px;
	filter: contrast(160%);
	padding: 0px 40px 0px 40px;
}
h5 {
	font-family: 'Montserrat', sans-serif;
	color: rgba(255,255,255,.7);
}
p {
	font-size: 0.8em;
	line-height: 2em;
}
h1 {
	font-family: 'Bebas Neue', cursive;
	font-size: 1.9em;
	color: rgba(255,255,255,.6);
	letter-spacing: 0.11em;
}
.move {
	padding-top: 150px;
	display: flex;
	flex-direction: column;
}
@media only screen and (max-width: 768px) {
	html {
		font-size: calc(0.4em + 1vmin);
	}
}
</style>