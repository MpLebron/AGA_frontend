<template>

  <div>
    <div class="logo_pos">
      <el-row>
        <el-col :span="3" :offset="6">
          <a href="http://www.aga-ygwg.com/" target="_blank"><img class="img-responsive" src="../../src/assets/static/img/logo/KeyLogo.png"></a>
        </el-col>
        <el-col :span="3" :offset="5">
          <a href="http://www.gsc.org.cn/" target="_blank"><img class="img-responsive" src="../../src/assets/static/img/logo/gsc.png"></a>
        </el-col>
      </el-row>
    </div>

    <div id="bottom">
      <span>Copyright &copy;2020 Nanjing Normal University</span><br>
      <span><a style="color: white" target="_blank" href="https://beian.miit.gov.cn">陕ICP备2020015416号</a></span>
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
#bottom {
  background-color: #201f23;
  margin-top: 10px;
  text-align: center;
  line-height: 20px;
  font-size: 25px;
  word-spacing: 4px;
}

span {
  font-family: arial;
  color: white;
  font-size: 0.8rem;
}

.logo_pos {
  line-height: 120px;
}

.logo_pos img {
  vertical-align: middle;
}
</style>