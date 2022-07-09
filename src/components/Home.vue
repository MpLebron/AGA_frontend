<template>
  <div id="Home">
    <div>
      <h3>Vision of YGWG</h3>
      <hr>
      <div id="vision"> The vision of Young Geographer Working Group (YGWG) of Asian Geographical Association (AGA) is to bring together young geographers to foster a community for physical geography, human geography, GIScience and related research, with strong links to environment, health and sustainable development.
        <br><br>
      </div>
    </div>

    <div>
      <h3>Latest News</h3>
      <hr>
      <div>
        <router-link to="/Events/2021/1">
          <strong class="home-h"><a id="Call-for-Nominations">The First Asian Young Geographers Workshop Held Online</a><br></strong>
        </router-link>
        <small class="home-date">Dec 18-19, 2021<br></small>
        <p>On December 18th–19th, 2021, the First Asian Young Geographers Workshop was held online. Initiated by the Young Geographers Working Group of the Asian Geographical Association (AGA-YCWG), the Workshop was jointly organized by AGA-YGWG, Young and Early Career Geographers Task Force of the International Geographical Union (IGU-YECG) and Working Committee for Young Geographers of the Geographical Society of China (GSC- WCYG). Under the theme “Young Geographers’ Response to Challenges in Asia”, the workshop attracted about 600 participants from 30 countries and regions worldwide. After call for paper within two weeks, a total of 213 abstracts and papers were received. As a result, 178 of them have been selected for oral presentations in 14 sessions of different topics, such as Building Resilience to Poverty Reduction in Asia, Hydro-Climatic Extreme Events in Mountain Regions, Geographical Indications Environment and Sustainability, etc.<br></p>
        <p>The abstract follows:
          <router-link to="/Events/2021/1">
            (more…)
          </router-link>
        </p>
      </div>
      <hr style="border-bottom:3px double grey;">
      <div>
        <router-link to="/Events/2021/1">
          <strong class="home-h"><a id="Call-for-Abstracts">Semi-annual Meeting of Board Members, AGA-YGWG</a><br></strong>
        </router-link>
        <small class="home-date">Aug 30, 2021<br></small>
        <p>The semi-annual meeting of AGA-YGWG board members has been successfully held online on Aug 30, 2021.<br></p>

        <p>The abstract follows:
          <router-link to="/Events/2021/1">
            (more…)
          </router-link>
        </p>
      </div>

      <hr style="border-bottom:3px double grey;">

      <div>
        <strong class="home-h"><a href="https://www.sciencedirect.com/science/article/pii/S0012825220302695" target="_blank">A Position Paper on Open Web-Distributed Integrated Geographic Modelling and Simulation to Enable Broader Participation and Applications</a><br></strong>
        <small class="home-date">June 24, 2020<br></small>
        <p>Chair of YGWG of AGA joined forces to write a position paper on Open Web-Distributed Integrated Geographic Modelling and Simulation to Enable Broader Participation and Applications.

          The paper has appeared on the Elsevier journal Earth-Science Reviews and it is open access.<br></p>
        <p>The abstract follows: <a href="https://www.sciencedirect.com/science/article/pii/S0012825220302695" target="_blank">(more…)</a></p>
      </div>

      <hr style="border-bottom:3px double grey;">

    </div>
    <el-backtop style="visibility-height:1400"></el-backtop>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted: function () {
    if (location.href.indexOf('#reloaded') <= 0) {
      location.href = location.href + '#reloaded'
      location.reload()
    }
  }
}
</script>

<style lang="less" scoped>
#Home {
  font-size: 19px;
  line-height: 35px;
  width: 1240px;
  margin: 0 auto;
  position: relative;
  word-spacing: 4px;
  margin-top: 30px;
  text-align: justify;
}

h3 {
  color: #117450;
  font-size: 20px;
  font-weight: 1000;
}

hr {
  border: 0.1px solid;
  border-color: #eeeeee;
}

#vision {
  line-height: 30px;
}

.home-h {
  font-size: larger;
  font-weight: bolder;
}

.home-date {
  font-weight: bold;
  color: grey;
}
a {
  text-decoration: none;
  font-size: 20px;
  color: #117450;
}
</style>