<template>
  <div id="aboutUs">
    <div>
      <div>
        <h3>Mission of YGWG</h3>
        <hr>
        <div>
          <div id="mission">The working team will develop a medium-term research agenda for the working group, which will serve as the guideline for working group events and for community members to share ideas and research findings. Specifically,<br><br>
          </div>

          <ul>
            <li>Develop and maintain connections and joint efforts with other AGA groups as well as other related GIScience and geographic academic organizations.
            </li>
            <li>Organize special sessions and workshops in AGA conferences as well as other GIScience, or geography conferences, in accordance with the research agenda.
            </li>
            <li>Collaborate with commissions within AGA or other academic associations to organize joint workshops on topics of shared interest.
            </li>
          </ul>

        </div>
      </div>

      <div class="col-md-12">
        <br>
        <h3 class="cos-strong">Structure of YGWG</h3>
        <hr>
        <div class="cos-modal">
          <p>
            The YGWG consists of a team (chair, secretary, and regional contact persons) and members. The secretary and regional contact persons will be nominated by the chair and elected through a meeting or online voting. There will be a board committee that will work with the chair and secretary to manage the group.
          </p>
          <br>
          <img class="img-responsive" src="../assets/static/img/Content/AY3_1.png">
          <br>
          <br>
          <p>
            All these positions are appointed for a period of four years. The appointment of the positions
            can be terminated mid-term for non-performance, or unsatisfactory performance, of duties.
          </p>
          <br />
        </div>
      </div>

      <div class="row " id="ReigonalDivisions">
        <h3 class="cos-strong">Reigonal Divisions</h3>
        <hr>
        <div id="regional">The regions of YGWG are settled in accordance with AGA’s divisions. A tentative division of regions is as follows:<br></br></div>
        <ul>
          <li>Region 1: Japan, Korea, Mongolia
          </li>
          <li>Region 2: Kazakhstan, Kyrgyzstan, Tajikistan, Uzbekistan
          </li>
          <li>Region 3: Turkey, Israel, Iran, Azerbaijan
          </li>
          <li>Region 4: India, Pakistan, Bangladesh, Nepal, Sri Lanka
          </li>
          <li>Region 5: Vietnam, Cambodia, Thailand, Indonesia, Philippines, Malaysia
          </li>
          <li>Region 6: China, Hong Kong SAR of China, Macau SAR of China
          </li>
        </ul>
      </div>
    </div>
    <el-backtop style="visibility-height:1400"></el-backtop>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style lang="less" scoped>
#aboutUs {
  font-size: 19px;
  line-height: 25px;
  width: 1240px;
  margin: 0 auto;
  position: relative;
  word-spacing: 4px;
  margin-top: 30px;
  text-align: justify;
}

hr {
  border: 0.1px solid;
  border-color: #eeeeee;
}

.img-responsive {
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: auto;
  max-width: 100%;
}

h3 {
  color: #117450;
  font-size: 20px;
  font-weight: 1000;
}

h4 {
  color: #117450;
}

#mission,
#regional {
  color: #117450;
  line-height: 30px;
}

li {
  line-height: 40px;
}

.row {
  align-items: center;
  margin: 40px 0;
  line-height: 28px;
}

p {
  margin-bottom: 0px;
}
</style>