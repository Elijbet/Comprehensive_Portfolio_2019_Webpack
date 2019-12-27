<template>
  <div class="panel">
    <div class="navbar center">
      <router-link to="/"><h5>HOME</h5></router-link>
      <img src="https://www.dropbox.com/s/lqxhvz32aw2mx2w/innovation.png?raw=1" alt="innovation">
      <router-link to="/about"><h5>ABOUT</h5></router-link>
    </div>

		<div  class="display">
			<div 
				v-for="(item, index) in itemsConditional"
				:key="index"
				class="child center">
        <div v-if="item.placeholder" class="flex center">
          <img 
            :src="item.placeholder"
            @click="sendInfo(item)"
            id="show-modal">
        </div>
        <div 
          v-if="item.placeholderPDF" 
          class="flex center iframe-container">
          <iframe 
            :src="item.placeholderPDF" 
            height="300px" 
            width="400px"
            frameborder="0" 
            border="0" 
            cellspacing="0"
            style="border-style: none"
            >
          </iframe>
          <div 
            class="overlay"
            @click="sendInfo(item)"
            id="show-modal">
          </div>
        </div>
        <div 
          v-if="item.placeholderImageLink"
          class="flex center">
          <a 
            :href="item.webLink"
            class="flex center">
            <img :src="item.placeholderImageLink" />
          </a>
        </div>
        <h3 class="header">
        PROJECT: {{ item.project.toUpperCase() }}
        </h3>
        <p>
        Tech: {{ item.tech }}
        </p>
			</div>
		</div>
		<modal v-if="showModal" @close="showModal = false">
			<div slot="body" class="center flex body">
        <div v-if="selectedUser.placeholder" class="flex center">
          <img :src="selectedUser.placeholder">
        </div>
        <div v-if="selectedUser.placeholderPDF" class="flex center iframe-width">
          <iframe :src="selectedUser.placeholderPDF" height="520px" width="130%" frameborder="0" border="0" cellspacing="0" style="border-style: none;"></iframe>
        </div>
        <h3 class="header">
        PROJECT: {{ selectedUser.project.toUpperCase() }}
        </h3>
        <p>
        Tech: {{ selectedUser.tech }}
        </p>
			</div>
		</modal>
	</div>
</template>

<script>
  import Modal from './modal/Modal.vue'

	export default {
		data() {
			return {
				showModal: false,
				link: 'https://drive.google.com/uc?id=1j6YOO5HaRA4obZY-TAHQoKJTNDJ4aVO6',
				items: [],
				selectedUser: '',
			}
		},
		methods: {
			sendInfo(item){
				this.showModal = true;
				this.selectedUser = Object.assign({}, item);
			}
		},
    computed: {
      itemsConditional() {
        if(this.$route.params.section === "code" ) {
          return [{placeholderImageLink: 'https://drive.google.com/uc?id=1jS0Maw5UDHBQmqHi7rxD_de9e1K4PiXG', webLink: 'https://github.com/Elijbet/Move-Planner-App-React/blob/master/README.md', project: 'Move Planner', tech: 'React. An application that brings you all the information you need before you move to a new location. It provides street view of the address, an article on the city from Wikipedia, and a list of NYT articles.'}, {placeholderImageLink: 'https://drive.google.com/uc?id=1yKk-4_Jy9c6bWBjYSpmFjXiFZC3QRViE', webLink: 'https://github.com/Elijbet/Gif_Theatre/blob/master/README.md', project: 'Gif Theatre', tech: 'React. Make a gif theater that shuffles random gifs with an animated transition. Swap it, if the user clicks on a thumbnail, and give an option to resume random shufle upon click on resume button.'}, {placeholderImageLink: "https://drive.google.com/uc?id=1x8u7vQGcZQXZJvFlgR5DJBOjqqiJXKvY", webLink: "https://github.com/Elijbet/DictionaryApp/blob/master/README.md", project: 'Dictionary App', tech: 'Rails Dictionary App.'}, {placeholderImageLink: 'https://drive.google.com/uc?id=1MDmxLNl2q5f0cbvVlD6ZgE9ftM-hLsOH', webLink: 'https://github.com/Elijbet/Karma_Bank', project: 'Karma Bank', tech: 'Rails API & Vue front. Karma Bank is a positive affirmation app that logs your positive experiences and gives them out later to brighten up your day.'}, {placeholderImageLink: 'https://drive.google.com/uc?id=1_c1zrgtJLEU9J9cy6ZFhTIszcfQm66pK', webLInk: 'https://github.com/Elijbet/Goodreads_clone/blob/master/README.md', project: 'Readers App', tech: 'Vue Goodreads Clone with API from Goodreads and Firebase backend. Deploy a Vue.js App with Firebase Hosting. This app is written a while ago. Working on an alternative Wonk App project with a new approach.'}]
        } else if(this.$route.params.section === "interior" ) {
          return [{placeholderPDF: 'https://drive.google.com/uc?id=0B4qfPIQ8j-PYaUZoN3QwYUxDNkk#toolbar=0', project: 'Portfolio', tech: 'Adobe Suite, SketchUp, 3ds Max, AutoCAD, Sketches, Pencil Drawing'}, {placeholderPDF: 'https://drive.google.com/uc?id=18x0UyjVJkJdL1siBNjcpuUsvHbwI-gc6#toolbar=0', project: 'Elevations', tech: 'AutoCAD, Photoshop'}, {placeholderPDF: 'https://drive.google.com/uc?id=1WZXg3zKNszEBtliKMU_xqzpBfDx0TOqv#toolbar=0', project: 'Residential Renderings', tech: 'SketchUp, Photoshop'}, {placeholderPDF: 'https://drive.google.com/uc?id=1uvmNdK-9j3taPc6H3QKKk_nqaLcUOfHp#toolbar=0', project: 'Long Renderings', tech: 'AutoCAD, Photoshop'}, {placeholderPDF: 'https://drive.google.com/uc?id=1YSP7lIExPv8elY9vAx3j1DaPVJ2kBfqe#toolbar=0', project: 'Collection', tech: 'SketchUp, AutoCAD, Photoshop'}]
        } else if(this.$route.params.section === "graphic" ) {
          return [{placeholder: 'https://drive.google.com/uc?id=0B4qfPIQ8j-PYSEZtYl9QZHJVQTg', project: 'Seafood Restaurant', tech: 'Adobe Suite'}, {placeholder: 'https://drive.google.com/uc?id=0B4qfPIQ8j-PYUjR3MFRPX2tyeHc', project: 'Popularizing Education', tech: 'Hand Sketches, Adobe Suite'}, {placeholder: 'https://drive.google.com/uc?id=1M8gA62P11WrWVf0LABvwdHEn1hjLZR_w', project: 'Wild Oak Cafe', tech: 'Hand Sketches'}]
        } else if(this.$route.params.section === "uxui" ) {
          return [{placeholderPDF: 'https://codepen.io/elijbet/full/LYYzEyY', project: 'Masonry Image Gallery with Animated Corner Fold', tech: 'Vue'}, {placeholderPDF: 'https://codepen.io/elijbet/full/xxxRXbm', project: 'Image mask skews on scroll', tech: 'Small animation project taking advantage of the scroll position.'}, {placeholderPDF: 'https://codepen.io/elijbet/full/vYYyNVr', project: 'Panel of Square Images', tech: 'Vue and CSS practice layout.'}, {placeholderPDF: 'https://codepen.io/elijbet/full/wvvvYRd', project: 'Color Letters on Hover', tech: 'Using Data attribute to create a hover animation.'}, {placeholderPDF: 'https://codepen.io/elijbet/full/ZEEbaWv', project: 'Sliding Side Menu with Styled Cursor', tech: 'Hover on the right side red strip to open a menu panel. Study of slide in panels.'},  {placeholderPDF: 'https://codepen.io/elijbet/full/eYOabLb', project: 'Masonry Carousel', tech: 'Study of a Vue Carousel Layout of Stacked Images.'}, {placeholderPDF: 'https://codepen.io/elijbet/full/zYYdjYy', project: 'Donuts', tech: 'CSS. Fun donut shaped images. Practice absolute positioning and background-clipping.'}]
          // {placeholderPDF: 'https://codepen.io/elijbet/full/dyyzRva', project: 'Different Scroll Speeds', tech: 'Taken some jquery version of parallax boxes moving at different speeds and converted into Vue.'}, 
        } else {
          return false
        }
      }
    },
    components: {
      Modal
    }
  }
</script>

<style scoped>
	@import url(https://fonts.googleapis.com/css?family=Bebas+Neue|Montserrat);

h5 {
  font-family: 'Montserrat', sans-serif;
  color: rgba(255,255,255,.7);
}
.panel {
  font-size: calc(0.8em + 1vmin);
  font-family: sans-serif;
  color: white;
  background-color: #1D1E21;
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
  background-color: #1D1E21;
}
.navbar:hover {
  background: rgba(0, 0, 0, 1);
}
.navbar img {
  width: 50px;
  height: 50px;
  filter: contrast(160%);
  padding: 0px 40px 0px 40px;
}
.display {
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  margin-top: 120px;
}
.child {
  width: 33%;
  display: flex;
  padding: 40px 0px 40px 0px;
  border: 1px solid rgba(255,255,255,.25);
  border-left: 0;
  border-top: 0;
  flex-direction: column;
}
.child:first-child {
  border-left: 1px solid rgba(255,255,255,.25);
  border-top: 1px solid rgba(255,255,255,.25);
}
.child:nth-child(2){
  border-top: 1px solid rgba(255,255,255,.25);
}
.child:nth-child(3){
  border-top: 1px solid rgba(255,255,255,.25);
}
.child:nth-child(3n+4){
  border-left: 1px solid rgba(255,255,255,.25);
}
img {
  width: 80%;
}
.center {
  justify-content: center;
  align-items: center
}
.flex {
  display: flex;
}

h3 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Bebas Neue', cursive;
  font-size: 1.5em;
  font-weight: 100;
  padding-right: 50px;
  padding-left: 50px;
}
p {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7em;
  padding-right: 50px;
  padding-left: 50px;
}
.header, .body {
  margin-top: 35px;
  flex-direction: column;
  margin-bottom: 30px;
}
.overlay {
  top:0;
  left:0;
  width:100%;
  height:100%;
  position:absolute;
}
.iframe-container {
  position: relative;
}
.iframe-width {
  width: 700px;
}
@media only screen and (max-width: 992px) {
  .child {
    width: 49.5%;
  }
  .child:nth-child(3){
  border-top: 0;
  }
  .child:nth-child(3n+4){
  border-left: 0
  }
  .child:nth-child(2n+3){ 
   border-left: 1px solid rgba(255,255,255,.25); 
  }
}
</style>