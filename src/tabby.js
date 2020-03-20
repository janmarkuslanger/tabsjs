import { ATTRIBUTE_ACTIVE, ATTRIBUTE_BAR, ATTRIBUTE_CONTENT } from './constants';
import { getSiblings, hide, show } from './helper';
import { fadeOut, fadeIn } from './animations';

export class Tabby {
  constructor(container, options) {
    this.container = container;
    this.animation = options.animation;
    this.index = 0;
    this.items = [];

    this.initTabs();
  }

  /**
   * performs a switch to a given index
   * @param {Number} index
   */
  doSwitch(index) {
    if (this.dontUpdate(index)) {
      return;
    }

    const prevContent = this.items[this.index][1];
    const nextContent = this.items[index][1];

    const prevBar = this.items[this.index][0];
    const nextBar = this.items[index][0];

    if (!this.animation) {
      hide(prevContent);
      show(nextContent);
      prevBar.removeAttribute(ATTRIBUTE_ACTIVE);
      nextBar.setAttribute(ATTRIBUTE_ACTIVE, '');
    } else {
      fadeOut(prevContent, () => {
        hide(prevContent);
        show(nextContent);
        fadeIn(nextContent);
        prevBar.removeAttribute(ATTRIBUTE_ACTIVE);
        nextBar.setAttribute(ATTRIBUTE_ACTIVE, '');
      });
    }

    this.index = index;
  }

  /**
   * switch to the next element
   */
  next() {
    this.doSwitch((this.index + 1));
  }

  /**
   * switch to the previous element
   */
  previous() {
    this.doSwitch((this.index - 1));
  }

  /**
   * checks if a given index should not trigger an update
   * @param {Number} index
   * @return {Boolean}
   */
  dontUpdate(index) {
    return (
      index < 0
      || (index > (this.items.length - 1))
      || index === this.index
    );
  }

  /**
   * method to destroy the tabs
   */
  destroy() {
    const bar = this.items[this.index][0];
    const content = this.items[this.index][1];
    hide(content);
    bar.removeAttribute(ATTRIBUTE_ACTIVE);
    content.removeAttribute(ATTRIBUTE_ACTIVE);
  }

  /**
   * init Tabs
   */
  initTabs() {
    const bars = getSiblings(
      this.container.querySelector(`[${ATTRIBUTE_BAR}]`),
    );

    const content = getSiblings(
      this.container.querySelector(`[${ATTRIBUTE_CONTENT}]`),
    );

    bars.forEach((bar, index) => {
      const attr = bar.getAttribute(ATTRIBUTE_BAR);
      const partner = content.filter(item => item.getAttribute(ATTRIBUTE_CONTENT) === attr)[0];

      if (index === 0) {
        show(partner);
        partner.style.opacity = '1';
        bar.setAttribute(ATTRIBUTE_ACTIVE, '');
      } else {
        hide(partner);
        if (this.animation) {
          partner.style.opacity = '0';
        }
      }

      this.items.push([bar, partner]);

      bar.addEventListener('click', () => {
        this.doSwitch(index);
      });
    });
  }
}

export default Tabby;
