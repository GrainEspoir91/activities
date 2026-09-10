function formatDate(value) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat(
    "fr-FR",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  ).format(
    new Date(value)
  );
}


function formatTime(value) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat(
    "fr-FR",
    {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }
  ).format(
    new Date(value)
  );
}


function getDateLabel(activity) {
  const date =
    formatDate(
      activity.start_at
    );

  const start =
    formatTime(
      activity.start_at
    );

  const end =
    formatTime(
      activity.end_at
    );

  if (
    start &&
    end
  ) {
    return `${date} • ${start}-${end}`;
  }

  if (start) {
    return `${date} • ${start}`;
  }

  return date;
}


function createActivityCard(activity) {
  const article =
    document.createElement(
      "article"
    );

  article.className =
    "activity-card";


  const image =
    document.createElement(
      "img"
    );

  image.className =
    "activity-card__image";

  image.loading =
    "lazy";

  image.alt =
    activity.title || "Activité Grain d'Espoir";

  image.src =
    activity.image_url ||
    "logo.png";

  image.onerror =
    () => {
      image.onerror = null;
      image.src = "logo.png";
    };


  const status =
    document.createElement(
      "span"
    );

  status.className =
    "activity-card__status";

  status.textContent =
    "Complété";


  const content =
    document.createElement(
      "div"
    );

  content.className =
    "activity-card__content";


  const date =
    document.createElement(
      "span"
    );

  date.className =
    "activity-card__date";

  date.textContent =
    getDateLabel(activity);


  const title =
    document.createElement(
      "h3"
    );

  title.textContent =
    activity.title ||
    "Activité Grain d'Espoir";


  const place =
    document.createElement(
      "p"
    );

  place.className =
    "activity-card__place";

  const locationParts = [
    activity.location_name,
    activity.city
  ].filter(Boolean);

  place.textContent =
    locationParts.join(" — ");


  const description =
    document.createElement(
      "p"
    );

  description.className =
    "activity-card__description";

  description.textContent =
    activity.description ||
    "";


  content.appendChild(date);
  content.appendChild(title);

  if (place.textContent) {
    content.appendChild(place);
  }

  if (description.textContent) {
    content.appendChild(
      description
    );
  }


  article.appendChild(status);
  article.appendChild(image);
  article.appendChild(content);

  return article;
}


export function renderPastActivities(
  container,
  activities
) {
  if (!container) {
    return;
  }

  container.replaceChildren();

  if (!activities.length) {
    const empty =
      document.createElement(
        "p"
      );

    empty.className =
      "activities-empty";

    empty.textContent =
      "Aucune activité passée disponible.";

    container.appendChild(
      empty
    );

    return;
  }

  const fragment =
    document.createDocumentFragment();

  activities.forEach(
    (activity) => {
      fragment.appendChild(
        createActivityCard(
          activity
        )
      );
    }
  );

  container.appendChild(
    fragment
  );
}
