<template>
  <div id="ContactUs">
    <p id="ConInfo">CONTACT INFORMATION</p>
    <hr style="margin-top:20px">
    <div id="leader">
      <ul>
        <li>
          <strong>Prof. Min Chen</strong>
          <p>Chairman, Professor
          </p>
          <strong>Address:</strong>
          <p>Nanjing Normal University<br>
            1 Wenyuan Road, Nanjing, Jiangsu, 210023, China<br>
          </p>
          <strong>E-mail:</strong><br>
          <a href="mailto:chenmin0902@163.com" style="color: orange;"> chenmin0902@163.com </a><br>
          <br>
        </li>

        <li>
          <strong>Dr. Li He</strong>
          <p>Secretary General , Associate Professor
          </p>
          <strong>Address:</strong>
          <p>Xi'an Jiaotong University<br>
            28 Xianning Road West, Xi'an, Shaanxi, 710049, China<br>
          </p>
          <strong>E-mail:</strong><br>
          <a href="mailto:lihegeo@xjtu.edu.cn" style="color: orange;"> mailto:lihegeo@xjtu.edu.cn </a><br>
          <br>
        </li>

        <li>
          <strong>Kai Zhang</strong>
          <p>Office Assistant
          </p>
          <strong>Address:</strong>
          <p>Nanjing Normal University<br>
            1 Wenyuan Road, Nanjing, Jiangsu, 210023, China<br>
          </p>
          <strong>E-mail:</strong><br>
          <a href="mailto:zhangk2g@163.com" style="color: orange;"> zhangk2g@163.com </a><br>
          <br>

        </li>
      </ul>
    </div>

    <!-- Send Message -->
    <div class="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
      <h3 class="cos-strong">Send Message</h3>
      <hr>
      <div class="cos-modal col-xs-8">
        <div class="form-group">
          <label for="CEmail">Email</label>
          <input type="email" class="form-control" id="CEmail" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div> <br>
        <div class="form-group">
          <label for="CName">Name</label>
          <input type="text" class="form-control" id="CName" placeholder="Name">
        </div><br>
        <div class="form-group">
          <label for="Cmessage">Message</label>
          <textarea type="text" class="form-control" id="CMessage" placeholder="Message"></textarea>
        </div>
        <br>
        <button type="submit" id="contactusemail" class="btn btn-primary blue-bg" @click="contactUs">Submit</button>
        <br>
        <p id="successfulcontactus"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {}
  },
  methods: {
    contactUs() {
      var c_name = document.getElementById('CName').value
      var c_email = document.getElementById('CEmail').value
      var c_message = document.getElementById('CMessage').value

      // 如果字段为空，则提醒用户补充字段
      if ((c_email === '') | (c_message === '') | (c_name === '')) {
        this.$notify({
          title: 'Message',
          message: 'Please enter related information!',
          type: 'warning'
        })
        // 如果邮箱验证成功，则发送邮件
      } else if (this.isEmail(c_email)) {
        // to Zaiyang Ma
        this.$http.post(
          'https://formspree.io/f/mvodkdky',
          {
            From: 'aga-ygwg.com',
            Name: c_name,
            Email: c_email,
            Message: c_message
          },
          function () {
            //
          }
        )

        // To Xintao Liu
        this.$http.post(
          'https://formspree.io/f/xleobwbk',
          {
            From: 'aga-ygwg.com',
            Name: c_name,
            Email: c_email,
            Message: c_message
          },
          function () {}
        )
        this.$notify({
          title: 'Suceess',
          message: 'Sucessfully submitted, Please wait and we will get back to you！',
          type: 'success'
        })
        // 如果邮箱验证失败，则提醒用户输入正确格式的邮箱
      } else {
        this.$notify({
          title: 'Message',
          message: 'Please enter a valid email!',
          type: 'warning'
        })
      }
    },

    isEmail(str) {
      if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(str)) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="less" scoped>
hr {
  border: 0.1px solid;
  border-color: #eeeeee;
}

#ContactUs {
  width: 1240px;
  margin: 0 auto;
  position: relative;
  margin-top: 30px;
}

#ConInfo {
  color: #117450;
  font-size: 20px;
  font-weight: 1000;
}

#leader {
  font-size: 20px;
  line-height: 30px;
}

h3 {
  color: #117450;
  font-size: 20px;
  font-weight: 1000;
}

#messageTip {
  font-size: 14px;
  color: #117450;
}

a {
  text-decoration: none;
}
</style>