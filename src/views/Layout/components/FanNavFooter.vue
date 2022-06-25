<template>
  <div class="fan-nav-footer">
    <dl class="info">
      <dt>
        <h1>Fan-Nav</h1>
      </dt>
      <dd>
        <span class="copyright">
          © 2022 Fan-Nav Design By
          <small>Double-Fan</small>
        </span>
        <a href="https://github.com/Double-Fan/fan-nav"><i class="fab fa-github"></i></a>
        <a href="mailto:409143214@qq.com"><i class="far fa-envelope"></i></a>
      </dd>
    </dl>
    <dl>
      <dt>关于</dt>
      <dd>制作本网站只是为了整理常用网站，无任何盈利目的。</dd>
      <dd>本站仅为网址导航，网站来源于网络，对其内容不负任何责任，若有问题，请联系我。</dd>
    </dl>
    <dl class="link">
      <dt>友情链接</dt>
      <dd>
        <a href="https://double-fan.github.io/" target="_blank">Double-Fan</a>
      </dd>
      <dd>
        <a href="https://double-fan.github.io/mini-web-projects/" target="_blank">mini-web-projects</a>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'FanNavFooter',
}
</script>

<style lang="scss" scoped>
.fan-nav-footer {
  display: flex;
  padding: 32px 16px;
  margin-top: 32px;
  background-color: #242525;
  color: #ebebeb;

  dl {
    flex-grow: 1;
    margin: 0 16px;

    dt {
      margin-bottom: 16px;
      color: #a6a6a6;
    }

    dd {
      line-height: 1.5;
    }
  }

  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-shrink: 0;

    .copyright {
      padding-right: 16px;
      border-right: 1px solid #a6a6a6;
    }

    h1 {
      font-size: 26px;
      color: #ebebeb;
    }

    a {
      padding-left: 16px;
    }

    small {
      font-size: 14px;
    }
  }

  .link {
    flex-shrink: 0;
  }
}
</style>
