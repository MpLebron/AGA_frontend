<template>
  <div id="Events">
    <div>
      <el-tabs tab-position="left" v-model="activeTabName">
        <el-tab-pane label="2021" name="2021">
          <div class="list-group">
            <a href="#" class="list-group-item active">
              2021 Events
            </a>

            <router-link to="/Events/2021/3">
              <a href="#" class="list-group-item">Semi-annual Meeting of Board Members, AGA-YGWG</a>
            </router-link>

            <router-link to="/Events/2021/2">
              <a href="#" class="list-group-item">Prof. Dr. Antonio Paez's editoral introduction of the forthcoming special issue on Open Spatial Science in the Journal of Geographical Systems (JGS).</a>
            </router-link>

            <router-link to="/Events/2021/1">
              <a href="#" class="list-group-item">The First Asian Young Geographers Workshop Held Online</a>
            </router-link>
          </div>
        </el-tab-pane>

        <el-tab-pane label="2020" name="2020">
          <div class="list-group">
            <a href="#" class="list-group-item active">
              2020 Events
            </a>
            <router-link to="/Events/2020/1">
              <a href="#" class="list-group-item">First online meeting of Young Geographer Working Group (YGWG) of AGA</a>
            </router-link>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data() {
    return {
      value: '',
      activeTabName: '2021'
    }
  }
}
</script>

<style lang="less" scoped>
#Events {
  font-size: 19px;
  line-height: 25px;
  width: 1240px;
  margin: 0 auto;
  position: relative;
  word-spacing: 4px;
  margin-top: 30px;
  height: 700px;
}

h3 {
  color: #117450;
  font-size: 20px;
  font-weight: 1000;
}

// vs-select {
//   width: 150%;
// }
.vs-select-content {
  max-width: 80px;
  margin-left: -100px;
}

.list-group-item {
  font-size: 15px;
  font-weight: bold;
}

.list-group-item.active {
  background-color: #117450;
  border-color: #117450;
}

a {
  text-decoration: none;
}
</style>
