import { ATTRIBUTE_ACTIVE, ATTRIBUTE_BAR, ATTRIBUTE_CONTENT } from './constants';
import { getSiblings, hide, show } from './helper';
import { fadeOut, fadeIn } from './animations';

export class Tabby {

    constructor(container, options) {
        this.container = container;
        this.animation = options.animation || 'fade'; // 'fade'
        this.index = 0;
        this.items = [];

        this.initTabs();
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
};