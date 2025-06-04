const Controller = {
  init() {
    this.form = document.querySelector('form');
    this.timeInput = this.form.querySelector('input[type="time"]');
    this.containerId = 'alarms-container';

    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.addAlarm();
    });

    this.updateView();
  },

  addAlarm() {
    const time = this.timeInput.value;
    if (!time) return;
    Model.addAlarm(time);
    this.timeInput.value = '';
    this.updateView();
  },

  deleteAlarm(id) {
    Model.removeAlarm(id);
    this.updateView();
  },

  toggleAlarm(id) {
    Model.toggleAlarm(id);
    this.updateView();
  },

  updateView() {
    View.renderAlarms(this.containerId, Model.getAlarms());
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Controller.init();
});
