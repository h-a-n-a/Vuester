<template>
  <div class="vuester-container">
    <div class="wallpaper">
      <div class="filter-layer"></div>
    </div>
    <div class="welcome">
      <span class="msg" @click="sayName">{{ name }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Vuester',
  data() {
    return {
      name: 'Welcome to Vuester'
    }
  }
}
</script>
<style lang="scss" scoped>
.vuester-container {
  width: 100vw;
  height: 100vh;

  .filter-layer,
  .wallpaper {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
  }

  .wallpaper {
    position: fixed;
    background: url(https://source.unsplash.com/random/1920x1080) 50% #aaa;
    background-size: cover;

    .filter-layer {
      position: absolute;
      background-color: rgba(61, 66, 96, 0.4);
      background-image: linear-gradient(
        140deg,
        rgba(61, 66, 96, 0.4) 15%,
        rgba(31, 34, 49, 0.6)
      );
      opacity: 0.9;
    }
  }

  .welcome {
    .msg {
      font-family: 'Lucida Grande';
      font-size: 140px;
      color: #fff;
      cursor: default;
    }
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
