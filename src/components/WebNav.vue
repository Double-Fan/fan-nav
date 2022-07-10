<template>
  <div class="web-nav">
    <div class="web-nav-wrap">
      <div class="sidebar">
        <div class="sidebar-wrap">
          <ul class="menu-list">
            <li class="menu-item" v-for="web of webList" :key="web.id">
              <span @click="goto">{{ web.title }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="main">
        <section :id="web.id" class="card" v-for="web of webList" :key="web.id">
          <h3 ref="cardTitle" class="card-title">
            <i class="fas fa-tag"></i>
            {{ web.title }}
          </h3>
          <div class="card-body">
            <ul class="web-list">
              <li
                class="web-item"
                v-for="(sub, index) of web.children"
                :key="index"
              >
                <a :href="sub.url">
                  <div class="title">
                    <img :src="sub.logo" />
                    <strong>{{ sub.name }}</strong>
                  </div>
                  <p class="description" :title="sub.description">
                    {{ sub.description }}
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebNav',
  props: ['webList'],
  data() {
    return {
      offsetTops: [],
      cardTitleDOM: [],
      cardTitleIndex: 0,
      menuItemDOM: []
    }
  },
  methods: {
    goto(e) {
      window.scrollTo({
        left: 0,
        top: e.target.getAttribute('data-scroll'),
        behavior: 'smooth' //平滑滚动
      })
    }
  },
  mounted() {
    const _this = this
    _this.cardTitleDOM = document.querySelectorAll('.card-title')
    _this.cardTitleDOM.forEach(el => {
      _this.offsetTops.push(el.offsetTop)
    })

    _this.menuItemDOM = document.querySelectorAll('.menu-item > span')
    _this.menuItemDOM.forEach((el, index) => {
      index == 0 && el.classList.add('active')
      el.setAttribute('data-scroll', _this.offsetTops[index])
    })

    window.addEventListener('scroll', () => {
      _this.offsetTops.forEach((el, index) => {
        if (document.documentElement.scrollTop >= el) {
          _this.cardTitleIndex = index
        }
      })
      _this.menuItemDOM.forEach(el => {
        el.classList.remove('active')
      })
      _this.menuItemDOM[_this.cardTitleIndex].classList.add('active')
    })
  }
}
</script>

<style lang="scss" scoped>
/* 
  背景色：#f1f3f4
  active-背景色：#e9ebec
  标题-文字色：#202124
  文字色：#696a6c
*/
.web-nav {
  background-color: #f1f3f4;

  .web-nav-wrap {
    display: flex;
    width: 1400px;
    margin: 0 auto;

    .sidebar {
      display: flex;
      flex-direction: column;
      width: 160px;
      flex-shrink: 0;

      .sidebar-wrap {
        position: sticky;
        top: 0;

        .menu-list {
          margin-top: 20px;

          .menu-item {
            padding: 6px 0;
            font-size: 14px;
            color: #5e5d5b;

            span {
              padding: 2px 4px;
              line-height: 1.5;

              &:hover,
              &.active {
                font-weight: 700;
              }

              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
    }

    .main {
      flex-grow: 1;

      .card {
        margin-top: 15px;
        border-radius: 10px;
        background-color: #fff;

        .card-title {
          padding: 12px 36px;
          font-size: 18px;
          font-weight: 700;
          border-bottom: 1px solid #f1f4f9;
          color: #202124;
        }

        .web-list {
          display: flex;
          flex-wrap: wrap;
          padding: 13px 10px;

          .web-item {
            box-sizing: border-box;
            width: calc(100% / 6);
            height: 70px;
            padding: 10px 16px;

            &:hover {
              border-radius: 10px;
              background-color: #e9ebec;
              cursor: pointer;
            }

            .title {
              display: flex;
              align-items: center;
              height: 26px;
              color: #202124;

              img {
                width: 18px;
              }

              strong {
                margin-left: 4px;
                font-size: 14px;
                font-weight: 700;
              }
            }

            .description {
              height: 24px;
              margin-top: 4px;
              font-size: 12px;
              color: #696a6c;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
          }
        }
      }
    }
  }
}
</style>
