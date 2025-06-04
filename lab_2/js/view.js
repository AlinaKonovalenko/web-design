const View = {
  renderAlarms(containerId, alarms) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    alarms.forEach(alarm => {
      const card = document.createElement('div');
      card.className = 'card mb-2 alarm-card';
      card.innerHTML = `
        <div class="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 class="card-title">${alarm.time}</h5>
            <p class="card-text text-muted">${alarm.enabled ? "Увімкнено" : "Вимкнено"}</p>
          </div>
          <div>
            <button class="btn ${alarm.enabled ? 'btn-off' : 'btn-on'} me-2 toggle-btn">Увімк/Вимк</button>
            <button class="btn btn-outline-secondary delete-btn">Видалити</button>
          </div>
        </div>
      `;

      card.querySelector('.toggle-btn').addEventListener('click', () => {
        Controller.toggleAlarm(alarm.id);
      });

      card.querySelector('.delete-btn').addEventListener('click', () => {
        Controller.deleteAlarm(alarm.id);
      });

      container.appendChild(card);
    });
  }
};
