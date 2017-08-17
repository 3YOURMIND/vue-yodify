<template>
  <transition name="slide-up">
    <div class="global-toaster" v-show="visible">
      <div class="type" :class="types">
        <span>
          <svg width="24px" height="24px" viewBox="0 0 24 24">
          <g fill="#FFFFFF">
            <path d="M18,15.1626667 L20,17.04 L20,18 L4,18 L4,17.04 L6,15.1599998 L5.87733333,
            11 C5.87733333,10.0613286 6.07999797,9.17244864 6.48533333,8.33333333 C6.89066869,
            7.49421803 7.45244085,6.78666955 8.17066667,6.21066667 C8.88889248,5.63466379 9.69599552,
            5.24711211 10.592,5.048 L10.592,4.408 C10.592,4.00977579 10.7271098,3.67555691 10.9973333,
            3.40533333 C11.2675569,3.13510976 11.6017758,3 12,3 C12.3982242,3 12.7324431,
            3.13510976 13.0026667,3.40533333 C13.2728902,3.67555691 13.408,4.00977579 13.408,
            4.408 L13.408,5.048 C14.3040045,5.24711211 15.1111075,5.63466379 15.8293333,
            6.21066667 C16.5475591,6.78666955 17.1093313,7.49421803 17.5146667,
            8.33333333 C17.920002,9.17244864 18.1226667,10.0613286 18.1226667,
            11 L18,15.1626667 Z M10,19 L14,19 C14,19.5396852 13.80488,
            20.0079345 13.4146341,20.4047619 C13.0243883,20.8015893 12.5528483,21 12,
            21 C11.4471517,21 10.9756117,20.8015893 10.5853659,20.4047619 C10.19512,20.0079345 10,19.5396852 10,19 Z"></path>
          </g>
        </svg>
        </span></div>
      <div class="content">
        {{content}}
      </div>
      <div class="yoda-close" @click="closeClick"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'global-toaster',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseTime: {
      type: Number,
      default: 3000
    },
    showToaster: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: 'Message'
    },
    types: {
      type: String,
      default: 'success'
    }
  },
  methods: {
    closeClick: function () {
      this.showToaster = false
    }
  },
  computed: {
    visible: function () {
      if (this.autoClose) {
        setTimeout(() => {
          this.showToaster = false
        }, this.autoCloseTime)
      }
      return this.showToaster
    }
  }
}
</script>

<style>
.global-toaster {
  font-family: 'Open Sans', sans-serif;
  background: #fff;
  width: 80%;
  font-size: inherit;
  opacity: 0.9;
  box-sizing: border-box;
  max-width: 32em;
  height: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  margin: 0 auto;
  left: 0;
  z-index: 999;
  bottom: 2em;
  border-radius: 5px;
  right: 0;
  letter-spacing: normal;
  word-spacing: normal;
}
.global-toaster * {
  box-sizing: border-box;
}
.content {
  float: left;
  width: 100%;
  font-size: 1em;
  padding: 1.2em 5em;
}
.type {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px 0 0 5px;
  background: #2C66C4;
  width: 3em;;
  text-align: center;
  height: 100%;
  color: #fff;
}
.type span svg {
    width: 1.4em;
    height: 1.4em;
    margin: -0.7em;
    top: 50%;
    position: absolute;
}
.type.success {
    background: #65A200;
}
.type.error {
    background: #FF3535;
}
.yoda-close {
  right: 1em;
  top: 50%;
  margin-top: -12px;
  position: absolute;
  width: 24px;
  text-align: center;
  vertical-align: middle;
  height: 24px;
  display: inline-block;
}
.yoda-close::after {
  content: '\D7';
  line-height: 24px;
  text-align: center;
  padding: 0;
  font-size: 1.2em;
}
.yoda-close:hover {
  background: #ddd;
  color: #fff;
  border-radius: 100%;
  cursor: pointer;
}

.slide-up-enter-active,
.slide-up-leave-active,
.slide-up-transition {
  bottom: 2em;
  transition: opacity .5s;
  animation: slidup 0.5s ease-out;
}
.slide-up-leave-active,
.slide-up-enter,
.slide-up-leave {
  opacity: 0;
  animation: sliddown 0.5s ease-out;
}

@keyframes slidup {
  0% {
    bottom: 0;
  }
  100% {
    bottom: 2em;
  }
}
@keyframes sliddown {
  0% {
    bottom: 2em;
  }
  100% {
    bottom: 0;
  }
}
</style>
