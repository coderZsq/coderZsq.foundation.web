<template>
<div class="target">
  <div class="target-block">
    <h2>{{name}}</h2>
    <p>{{description}}</p>
    <div class="download">
      <a target="_blank" :href="href">Clone or download</a>
    </div>
    <div class="comment">
      <div class="dot" ref="dot"></div>
      <div class="language">
        {{language}}
      </div>
      <div class="star">
        ★ {{star}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
    href: String,
    name: String,
    description: String,
    color: String,
    language: String,
    star: String
  },
  methods: {
    setDotColor: function() {
      this.$refs.dot.style.backgroundColor = this.color;
    }
  },
  mounted: function() {
    this.setDotColor();
  }
}
</script>

<style scoped>
.target {
  width: 330px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  height: 240px;
  float: left;
  border-radius: 12px;
}

.target-block {
  height: inherit;
  width: inherit;
  border-radius: 12px;
  position: relative;
  background-color: #f8f8f8;
}

.target-block:hover {
  box-shadow: 1px 1px 15px #ddd;
}

.target .target-block h2 {
  color: #444;
  position: absolute;
  top: 20px;
  width: inherit;
  text-align: center;
  font-size: 22px;
}

.target .target-block p {
  color: #666;
  position: absolute;
  top: 60px;
  padding-left: 20px;
  padding-right: 20px;
}

.comment {
  width: 290px;
  height: 20px;
  position: absolute;
  top: 160px;
  left: 20px;
  line-height: 20px;
}

.comment .dot {
  position: absolute;
  width: 10px;
  height: 10px;
  float: left;
  border-radius: 10px;
  top: calc(50% - 5px);
}

.comment .language {
  float: left;
  text-indent: 17px;
  color: #333;
  height: inherit;
}

.comment .star {
  text-indent: 20px;
  color: #555;
  height: inherit;
}

.download {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 330px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #28aa46;
  color: #fff;
  font-size: 20px;
}

.download a,
.download a:link,
.download a:visited,
.download a:hover {
  text-decoration: none;
  color: #fff;
}
</style>
