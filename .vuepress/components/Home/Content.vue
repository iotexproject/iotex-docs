<template>
  <div class="custom-page">
    <el-row>
      <el-col>
        <h1>{{ data.mainTitle }}</h1>
        <div class="sub-title">{{ data.subTitle }}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-card
          class="card-1"
          shadow="hover"
          :style="data.topCard.icon | cardStyle"
          @click.native="jump(data.topCard.link)"
        >
          <div class="card-body">
            <div class="card-title">
              <a :href="data.topCard.link">
                <h3>{{ data.topCard.title }}</h3>
              </a>
            </div>
            <div>{{ data.topCard.content }}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <h2>{{ data.part1Title }}</h2>
      </el-col>
    </el-row>
    <el-row :gutter="gutter">
      <el-col :span="12" v-for="(detail, idx) in data.part1Body" :key="idx">
        <el-card
          shadow="hover"
          :style="detail.icon | cardStyle"
          class="card-2"
          @click.native="jump(detail.link)"
        >
          <div class="card-body">
            <div class="card-title">
              <a :href="detail.link">
                <h3>{{ detail.title }}</h3>
              </a>
            </div>
            <div>{{ detail.content }}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <h2>{{ data.part2Title }}</h2>
      </el-col>
    </el-row>
    <el-row :gutter="gutter">
      <el-col :span="12" v-for="(detail, idx) in data.part2Body" :key="idx">
        <el-card
          shadow="hover"
          class="card-2"
          @click.native="jump(detail.link)"
        >
          <div>
            <div class="card-title">
              <a :href="detail.link">
                <h3>{{ detail.title }}</h3>
              </a>
            </div>
            <div>
              <el-tag size="mini" v-for="(tag, i) in detail.tags" :key="i">
                {{ tag }}
              </el-tag>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <h2>{{ data.part3Title }}</h2>
      </el-col>
    </el-row>
    <el-row :gutter="gutter">
      <el-col
        :span="24"
        v-for="(detail, idx) in data.part3Body"
        :key="idx"
        v-if="detail.isHead === true"
      >
        <el-card
          shadow="hover"
          class="card-3"
          @click.native="jump(detail.link)"
        >
          <div>
            <el-col :span="12">
              <div class="card-title">
                <a :href="detail.link">
                  <h3>{{ detail.title }}</h3>
                </a>
              </div>
              <div>{{ detail.content }}</div>
            </el-col>
            <el-col :span="12">
              <img class="thumbnail" :src="detail.image" />
            </el-col>
          </div>
        </el-card>
      </el-col>
      <el-col
        :span="12"
        v-for="(detail, idx) in data.part3Body"
        :key="idx"
        v-if="detail.isHead === false"
      >
        <el-card
          shadow="hover"
          :style="detail.icon | cardStyle"
          class="card-2"
          @click.native="jump(detail.link)"
        >
          <div class="card-body">
            <div class="card-title">
              <a :href="detail.link">
                <h3>{{ detail.title }}</h3>
              </a>
            </div>
            <div>{{ detail.content }}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <hr />
    <el-row :gutter="gutter">
      <el-col :span="12">
        <Content slot-key="foot1" />
      </el-col>
      <el-col :span="12">
        <Content slot-key="foot2" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gutter: 20
    };
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  },
  mounted() {},
  methods: {
    jump(url) {
      window.location = url;
    }
  },
  filters: {
    cardStyle(img) {
      return {
        backgroundImage: `url(${img})`,
        backgroundSize: "36px 36px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "20px 20px"
      };
    }
  }
};
</script>

<style lang="stylus">
.custom-page
  .card-body
    padding-left 50px
  .card-title
    h3
      margin 0
      font-size 1.15rem
  .sub-title
    margin 30px 0
    padding-right 240px
    font-size 20px
  .el-card
    margin-bottom 20px
    cursor pointer
  .card-1
    height 100px
  .card-2
    height 90px
  .card-3
    height 120px
  .el-tag
    margin-right 8px
    margin-top 8px
  .thumbnail
    margin 0
    padding 0
    bottom: 0
</style>
