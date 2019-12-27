<template>
  <div class="panel center">
    <div class="navbar center">
      <router-link to="/"><h5>HOME</h5></router-link>
      <img src="https://www.dropbox.com/s/lqxhvz32aw2mx2w/innovation.png?raw=1" alt="innovation">
      <router-link to="/about"><h5>ABOUT</h5></router-link>
    </div>
    <div  class="display center">
      <div class="move">
        <img src="https://drive.google.com/uc?id=1yJuBnB8Jb6OqMkM-zcZZaTb2YtMddH1g" alt="">
      </div>
      <div class="child">
        <h3>Eliza Khachatryan</h3>
        <p>I learned design in the furniture production company my parents ran for years. Studied Interior Design when I moved to the USA and practiced for several years. Then I got curious about developing apps and learned to code. I am taking a UX certification course at UCLA extension to bring together design and code. I also like to binge on TV shows and movies and post my cooking explorations on Instagram. 
        </p>
        <ul class="social-icons">
          <!-- <li><a href="" class="social-icon"> <i class="fa fa-facebook"></i></a></li> -->
          <li><a href="https://twitter.com/elijbet" class="social-icon"> <i class="fa fa-twitter"></i></a></li>
          <!-- <li><a href="" class="social-icon"> <i class="fa fa-rss"></i></a></li> -->
          <!-- <li><a href="" class="social-icon"> <i class="fa fa-youtube"></i></a></li> -->
          <li><a href="https://www.linkedin.com/in/eliza-khachatryan-b9b13966/" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
          <li><a href="https://github.com/Elijbet" class="social-icon"> <i class="fa fa-github"></i></a></li>
          <li><a href="https://codepen.io/collection/XPJjkR/" class="social-icon"> <i class="fa fa-codepen"></i></a></li>
      </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Bebas+Neue|Montserrat|Rock+Salt|Lato);
  @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);

.panel {
  display: flex;
  height: 1200px;
  font-size: calc(0.8em + 1vmin);
  font-family: sans-serif;
  color: white;
  background-color: #1D1E21;
  padding-top: 30px;
}
.display {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  border: 1px solid rgba(255,255,255,.25);
  width: 50%;
  padding: 60px 20px 60px 20px;
  margin-top: 80px;
}
.child {
  width: 60%;
  display: flex;
  margin-right: 10px;
  margin-left: 0px;
  margin-top: 40px;
  flex-direction: column;
}
img {
  width: 400px;
}
.center {
  justify-content: center;
  align-items: center;
}
h3 {
  font-family: 'Bebas Neue', cursive;
  font-size: 1.9em;
  margin-bottom: 0.2em;
  color: rgba(255,255,255,.6);
  letter-spacing: 0.11em;
}
p {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8em;
  line-height: 2em;
  color: rgba(255,255,255,.25);
}
.move {
  transform: translateY(-5px);
  transform: translateX(-95px);
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

/*social media icons */

a {
    text-decoration: none;
    color: #fff;
}
p > a:hover{
    color: #d9d9d9;
    text-decoration:  underline;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    margin:  1% 0 1% 0;
}
._12 {
    font-size: 1.2em;
}
._14 {
    font-size: 1.4em;
}
ul {
    padding:0;
    list-style: none;
    font-family: 'Lato', sans-serif;
    color: #FFF;
}
.footer-social-icons {
    width: 350px;
    display:block;
    margin: 0 auto;
}
.social-icon {
    color: #fff;
}
ul.social-icons {
    margin-top: 40px;
}
.social-icons li {
    vertical-align: top;
    display: inline;
    height: 100px;
}
.social-icons a {
    color: #fff;
    text-decoration: none;
}
.fa-facebook {
    padding:10px 14px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    background-color: #322f30;
}
.fa-facebook:hover {
    background-color: #3d5b99;
}
.fa-twitter {
    padding:10px 12px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    background-color: #322f30;
}
.fa-twitter:hover {
    background-color: #00aced;
}
.fa-rss {
    padding:10px 14px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    background-color: #322f30;
}
.fa-rss:hover {
    background-color: #eb8231;
}
.fa-youtube {
    padding:10px 14px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    background-color: #322f30;
}
.fa-youtube:hover {
    background-color: #e64a41;
}
.fa-linkedin {
    padding:10px 14px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    background-color: #322f30;
}
.fa-linkedin:hover {
    background-color: #0073a4;
}
.fa-github {
    padding:10px 14px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    background-color: #322f30;
}
.fa-github:hover {
    background-color: #5a32a3;
}
.fa-codepen {
    padding:10px 14px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    background-color: #322f30;
}
.fa-codepen:hover {
    background-color: #1ABC9C;
}

@media only screen and (max-width: 1200px) {
  .display {
    width: 80%;
  }
}
</style>