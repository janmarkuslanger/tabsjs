(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Tabby = {}));
}(this, function (exports) { 'use strict';

  /**
    * Active Tabs Attribute
    *
    * @type {String}
    */
  const ATTRIBUTE_ACTIVE = 'data-tabby-active';

  /**
    * Bar Tabs Attribute
    *
    * @type {String}
    */
  const ATTRIBUTE_BAR = 'data-tabby-bar';

  /**
    * Content Tabs Attribute
    *
    * @type {String}
    */
  const ATTRIBUTE_CONTENT = 'data-tabby-content';

  /**
    * returns an array of next element siblings
    *
    * @param {HTMLElement}
    *
    * @return {Array}
    */
  const getSiblings = (element) => {
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
   * @type {HTML Element} element
   */
  const show = (element) => {
      element.style.display = 'block';
  };

  /**
   * @type {HTML Element} element
   */
  const hide = (element) => {
      element.style.display = 'none';
  };

  /**
   * fade out an element
   * @type {HTML Element} element
   * @type {Function} cb
   */
  const fadeOut = (element, cb) => {
      let opacity = 1;
      const step = .05;

      function run() {
          if (opacity > 0) {
              opacity -= step;
              element.style.opacity = opacity.toString();
              requestAnimationFrame(run);
          } else {
              cancelAnimationFrame(run);
              if (cb) {
                  cb(element);
              }
          }
      }

      requestAnimationFrame(run);
  };

  /**
   * fade out an element
   * @type {HTML Element} element
   * @type {Function} cb
   */
  const fadeIn = (element,cb) => {
      let opacity = 0;
      const step = .05;

      function run() {
          if (opacity < 1) {
              opacity += step;
              element.style.opacity = opacity.toString();
              requestAnimationFrame(run);
          } else {
              cancelAnimationFrame(run);
              if (cb) {
                  cb(element);
              }
          }
      }

      requestAnimationFrame(run);
  };

  class Tabby {

      constructor(container, options) {
          this.container = container;
          this.animation = options.animation || false; // 'fade'
          this.index = 0;
          this.items = [];

          this.initTabs();
      }

      collectItems() {



          return items;
      }

      doSwitch(index){

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
              fadeOut(prevContent, function(el) {
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
      * init Tabs
      *
      */
      initTabs() {
          const bars = getSiblings(
              this.container.querySelector(`[${ATTRIBUTE_BAR}]`)
          );

          const content = getSiblings(
              this.container.querySelector(`[${ATTRIBUTE_CONTENT}]`)
          );

          bars.forEach((bar, index) => {
              const attr = bar.getAttribute(ATTRIBUTE_BAR);
              const partner = content.filter(item => item.getAttribute(ATTRIBUTE_CONTENT) === attr)[0];

              if (index === 0) {
                  partner.style.display = 'block';
                  partner.style.opacity = '1';
              } else {
                  partner.style.display = 'none';
                  partner.style.opacity = '0';
              }

              this.items.push([bar,partner]);

              bar.addEventListener('click', () => {
                  this.doSwitch(index);
              });
          });
      }



  }

  const version = '3.0.0-beta';

  const init = (container = null, options = {}) => {

      if (!container) {
          return;
      }

      return Array.isArray(container)
          ? container.map((component) => new Tabby(component, options))
          : new Tabby(container, options);
  };

  exports.version = version;
  exports.init = init;

  Object.defineProperty(exports, '__esModule', { value: true });

}));