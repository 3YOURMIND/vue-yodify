<template>
  <div class="vue-yodify">
    <div
      class="notification"
      v-for="notification in queue"
      :key="notification.id">
      <div :class="iconClass(notification.type)">
        <bell-icon></bell-icon>
      </div>
      <div class="content" v-text="notification.message"></div>
      <div class="close" @click="deleteNotification(notification.id)">
        &#x2715;
      </div>
    </div>
  </div>
</template>

<script>
import EventsBridge from './events';
import BellIcon from './BellIcon.vue';
import IdGenerator from './id-generator';

export default {
  name: 'VueYodify',
  components: {
    BellIcon,
  },
  data() {
    return {
      queue: [],
    };
  },
  methods: {
    addNotification(payload) {
      const id = IdGenerator.guid();
      const queuePayload = {
        id,
        message: payload.text,
        type: payload.type,
      };
      this.queue.push(queuePayload);
      setTimeout(() => {
        this.deleteNotification(id);
      }, 3 * 1000);
    },
    deleteNotification(id) {
      this.queue = this.queue.filter(notification => notification.id !== id);
    },
    iconClass(notificationStatus) {
      return `icon icon--${notificationStatus}`;
    },
  },
  mounted() {
    EventsBridge.events.$on('vue-yodify', this.addNotification);
  },
};
</script>

<style lang="scss" scoped>
$color-success: #65a200;
$color-error: #ff3535;
$color-info: #23509a;
$color-warn: yellow;

.vue-yodify {
  z-index: 9999;
  top: 0;
  right: 0;
  position: fixed;
  transform: translate(-10px, 0);
}

.notification {
  margin-top: 10px;
  margin-bottom: 10px;
}

.close {
  right: 1em;
  top: 50%;
  margin-top: -0.8em;
  line-height: 1.6em;
  position: absolute;
  width: 1.6em;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  cursor: pointer;
}

.close:hover {
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.1);
}

.notification {
  width: 448px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: table;
  position: relative;
}

.icon {
  width: 48px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: table-cell;
  padding-top: 30px;
  box-sizing: border-box;
  padding-bottom: 30px;
}

.icon--success {
  background-color: $color-success;
}

.icon--error {
  background-color: $color-error;
}

.icon--info {
  background-color: $color-info;
}

.icon--warn {
  background-color: $color-warn;
}

.icon svg {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translate(0, -50%);
  height: 24px;
  width: 24px;
}

.content {
  width: 400px;
  padding: 0 3em 0 1em;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: table-cell;
  box-sizing: border-box;
  background-color: white;
  vertical-align: middle;
  padding-top: 0.93em;
  padding-bottom: 0.93em;
}
</style>
