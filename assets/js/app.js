import {
  fetchPastActivities
} from "./activities.service.js";

import {
  renderPastActivities
} from "./activities.js";


async function init() {
  const container =
    document.querySelector(
      "#past-activities"
    );

  try {
    const activities =
      await fetchPastActivities();

    renderPastActivities(
      container,
      activities
    );
  } catch (error) {
    console.error(
      "Impossible de charger les activités.",
      error
    );

    if (container) {
      container.innerHTML = `
        <p class="activities-error">
          Les activités ne peuvent pas être
          chargées pour le moment.
        </p>
      `;
    }
  }
}


init();
