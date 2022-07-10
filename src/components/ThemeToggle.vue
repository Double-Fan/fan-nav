<template>
  <div class="theme-toggle">
    <input type="checkbox" id="theme-checkbox" class="theme-checkbox" />
    <label for="theme-checkbox" class="theme-label">
      <i class="fas fa-moon"></i>
      <i class="fas fa-sun"></i>
      <div class="ball"></div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'ThemeToggle'
}
</script>

<style lang="scss" scoped>
.theme-toggle {
  .theme-checkbox {
    display: none;

    &:checked + .theme-label .ball {
      transform: translateX(24px);
    }
  }

  .theme-label {
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50px;
    height: 26px;
    padding: 5px;
    border-radius: 50px;
    background-color: #111;
    cursor: pointer;

    .fa-moon {
      color: #f1c40f;
    }

    .fa-sun {
      color: #f39c12;
    }

    .ball {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background-color: #fff;
      transition: transform 0.3s ease;
    }
  }
}
</style>
