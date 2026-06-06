export const el = (tag, attributes = {}, ...children) => {
  const element = document.createElement(tag);

  for (const [key, value] of Object.entries(attributes)) {
    if (key === 'classList') {
      element.classList.add(...value);
    } else if (key === 'on') {
      for (const [eventName, handler] of Object.entries(value)) {
        element.addEventListener(eventName, handler);
      }
    } else {
      element[key] = value;
    }
  }

  element.append(...children);

  return element;
};
