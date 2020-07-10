<template>
  <div class="sunflower">
    <div class="head">
      <div class="eye"></div>
      <div class="eye"></div>
      <div class="mouth"></div>
    </div>
    <div class="petals"></div>
    <div class="trunk">
      <div class="branch"></div>
      <div class="branch"></div>
    </div>
    <div class="vase"></div>
  </div>
</template>

<script>
export default {
  name: 'Sunflower',
}
</script>

<style lang="scss" scoped>
.sunflower {
  position: fixed;
  height: 30px;
  width: 30px;

  bottom: 180px;
  left: 25px;
}

.head {
  animation: move 3s infinite linear;
  height: 50px;
  width: 62px;
  position: relative;
  left: 8px;
  top: 39px;
  transform-origin: 50% -7px;
  user-select: none;

  .eye {
    background: #43699A;
    border-radius: 10px;
    height: 5px;
    position: absolute;
    top: 30px;
    width: 5px;
    animation: eye 4s linear infinite normal 0.5s;

    &:first-of-type { left: 17px; }
    &:nth-of-type(2) { right: 17px; }
  }
}

.head .mouth {
  background: #ECF0F1;
  border-radius: 30px;
  bottom: 2px;
  clip: rect(8px, 15px, 16px, 0);
  height: 16px;
  margin-left: -7.5px;
  position: absolute;
  left: 50%;
  width: 15px;
}

.petals {
  z-index: -1;
  border-radius: 100%;
  display: inline-block;
  background-color: #FAAA18;
  height: 50px;
  width: 50px;
  position: absolute;
  animation: petals 3s infinite linear;
  box-shadow: 15px 17px #FFE000,
    -15px 17px #FFE000,
    -22px -7px #FFE000,
    0px -22px #FFE000,
    22px -7px #FFE000;
}

.trunk {
  height: 65px;
  width: 5px;
  background:#77b039;
  position: absolute;
  top: 100px;
  left: 37px;
  z-index: -2;
  animation: trunk 3s infinite linear;
}

.branch {
  background: #77B039;
  height: 35px;
  width: 9px;
  position: absolute;
  top: 24px;

  &:first-of-type {
    left: -12px;
    border-radius: 100% 0% 0% 0%;
    -webkit-border-radius: 100% 0% 0% 0%;
    -moz-border-radius: 100% 0% 0% 0%;
    -ms-border-radius: 100% 0% 0% 0%;
    -o-border-radius: 100% 0% 0% 0%;

    transform: rotate(-50deg);
    -webkit-transform: rotate(-50deg);
    -moz-transform: rotate(-50deg);
    -ms-transform: rotate(-50deg);
    -o-transform: rotate(-50deg);
  }
  &:nth-of-type(2) {
    left: 10px;

    border-radius: 0% 100% 0% 0%;
    -webkit-border-radius: 0% 100% 0% 0%;
    -moz-border-radius: 0% 100% 0% 0%;
    -ms-border-radius: 0% 100% 0% 0%;
    -o-border-radius: 0% 100% 0% 0%;

    transform: rotate(50deg);
    -webkit-transform: rotate(50deg);
    -moz-transform: rotate(50deg);
    -ms-transform: rotate(50deg);
    -o-transform: rotate(50deg);
  }
}

.vase {
  position:absolute;
  top: 165px;
  left: 21px;
  height: 0;
  width: 38px;
  border-top: 45px solid #faaa18;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;

  &:before, &:after {
    content: '';
    position: absolute;
    background: #FAA118;
  }

  &:before {
    background: #F9A018;
    height: 20px;
    width: 58px;
    top: -50px;
    left: -18px;
    position: absolute;
    box-shadow: 0 5px 10px -9px black;
    -moz-transform: 0 5px 10px -9px black;
    -ms-transform: 0 5px 10px -9px black;
    -o-transform: 0 5px 10px -9px black;
  }
}

@keyframes petals {
  0% { transform: rotate(0); left: 10px; }
  25% { left: 20px; }
  50% { left: 10px; }
  75% { left: 20px; }
  100% { transform: rotate(360deg); left: 10px; }
}

@keyframes move {
  0% { left: 5px; }
  25% { left: 15px; }
  50% { left: 5px; }
  75% { left: 15px; }
  100% { left: 5px; }
}

@keyframes eye {
  from {}
  79% { height: 5px; }
  80% { height: 0px; }
  85% { height: 5px; }
  to { height: 5px; }
}

@keyframes trunk {
  0% { left: 34px; transform: rotate(-5deg); }
  25% { left: 40px; transform: rotate(5deg); }
  50% { left: 34px; transform: rotate(-5deg); }
  75% { left: 40px; transform: rotate(5deg); }
  100% { left: 34px; transform: rotate(-5deg); }
}
</style>
