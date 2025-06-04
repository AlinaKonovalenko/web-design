const Model = {
  alarms: [],

  addAlarm(time) {
    const id = Date.now();
    this.alarms.push({ id, time, enabled: true });
    return id;
  },

  removeAlarm(id) {
    this.alarms = this.alarms.filter(alarm => alarm.id !== id);
  },

  toggleAlarm(id) {
    const alarm = this.alarms.find(a => a.id === id);
    if (alarm) alarm.enabled = !alarm.enabled;
  },

  getAlarms() {
    return this.alarms;
  }
};
