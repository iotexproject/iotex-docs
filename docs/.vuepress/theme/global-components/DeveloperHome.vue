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
          shadow="none"
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
      <el-col
        :span="24"
        v-for="(detail, idx) in data.part1Body"
        :key="idx"
        v-if="detail.isHead === true"
      >
        <el-card shadow="none" class="card-3" @click.native="jump(detail.link)">
          <div>
            <el-col :span="12" :xs="24">
              <div class="card-title">
                <a :href="detail.link">
                  <h3>{{ detail.title }}</h3>
                </a>
              </div>
              <div>{{ detail.content }}</div>
            </el-col>
            <el-col :span="12" :xs="24">
              <img class="thumbnail" :src="detail.image" />
            </el-col>
          </div>
        </el-card>
      </el-col>
      <el-col
        :span="12"
        :xs="24"
        v-for="(detail, idx) in data.part1Body"
        :key="idx"
        v-if="detail.isHead === false"
      >
        <el-card
          shadow="none"
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
      <el-col
        :span="12"
        :xs="24"
        v-for="(detail, idx) in data.part2Body"
        :key="idx"
      >
        <el-card
          shadow="none"
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
        <h2>{{ data.part3Title }}</h2>
      </el-col>
    </el-row>
    <el-row :gutter="gutter">
      <el-col
        :span="12"
        :xs="24"
        v-for="(detail, idx) in data.part3Body"
        :key="idx"
      >
        <el-card shadow="none" class="card-2" @click.native="jump(detail.link)">
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
        <h2>{{ data.part4Title }}</h2>
      </el-col>
    </el-row>
    <el-row :gutter="gutter">
      <el-col
        :span="12"
        :xs="24"
        v-for="(detail, idx) in data.part4Body"
        :key="idx"
      >
        <el-card
          class="card-1"
          shadow="none"
          :style="detail.icon | cardStyle"
          @click.native="jump(detail.link)"
        >
          <div>
            <div class="card-body">
              <div class="card-title">
                <a :href="detail.link">
                  <h3>{{ detail.title }}</h3>
                </a>
              </div>
              <div>{{ detail.content }}</div>
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
    <hr />
    <el-row :gutter="gutter">
      <el-col :span="12" :xs="24">
        <Content slot-key="foot1" />
      </el-col>
      <el-col :span="12" :xs="24">
        <Content slot-key="foot2" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "DeveloperHome",
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
  h2
    border none
  .card-body
    padding-left 50px
  .card-title
    h3
      margin 0
      font-size 1.15rem
  .sub-title
    margin 30px 0
    font-size 20px
  .el-card
    border none
    margin-bottom 20px
    cursor pointer
  .card-1
    height 100px
    @media only screen and (max-width: 575px)
      height auto

  .card-2
    height 90px
    @media only screen and (max-width: 575px)
      height auto

  .card-3
    height 120px
    @media only screen and (max-width: 575px)
      height auto

  .el-tag
    margin-right 8px
    margin-top 8px
  .thumbnail
    margin 0
    padding 0
    bottom: 0
</style>
