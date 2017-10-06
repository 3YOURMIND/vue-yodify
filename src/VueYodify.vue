<template>
  <div class="notification__container">
    <div
      class="notification"
      v-for="notification in queue"
      :key="notification.id">
      <div :class="iconClass(notification.type)">
        <bell-icon></bell-icon>
      </div>
      <div class="content" v-text="notification.message"></div>
      <div class="yoda-close" @click="deleteNotification(notification.id)">
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
$color-success: #65A200;
$color-error: #FF3535;
$color-info: #23509a;
$color-warn: yellow;

.notification__container {
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
  cursor: pointer;
}

.yoda-close:hover {
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
}

.notification {
  width: 400px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: table;
  position: relative;
}

.icon {
  width: 55px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: table-cell;
  padding-top: 30px;
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
  bottom: 50%;
  left: 4%;
  transform: translate(0, -50%);
  height: 24px;
  width: 24px;
}

.content {
  padding-left: 1.5em;
  padding-right: 3em;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: table-cell;
  background-color: white;
  vertical-align: middle;
  padding-top: 0.93em;
  padding-bottom: 0.93em;
}
</style>
