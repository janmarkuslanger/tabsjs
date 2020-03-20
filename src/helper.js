/**
 * returns an array of next element siblings
 * @param {HTMLElement}
 * @return {Array}
 */
export const getSiblings = (element) => {
  const arrayContainer = [element];
  let nextElement = element.nextElementSibling;

  if (!nextElement) {
    return arrayContainer;
  }

  while (nextElement) {
    arrayContainer.push(nextElement);
    nextElement = nextElement.nextElementSibling;
  }

  return arrayContainer;
};

/**
 * show element via html element
 * @param {HTML Element} el
 */
export const show = (el) => {
  el.style.display = 'block';
};

/**
 * hide element via css
 * @param {HTML Element} el
 */
export const hide = (el) => {
  el.style.display = 'none';
};
