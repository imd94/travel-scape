import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
    constructor(els, thresholdPercent) {
        this.thresholdPercent = thresholdPercent;
        //this.itemsToReveal = document.querySelectorAll('.feature-item');
        this.itemsToReveal = els;
        this.browserHeight = window.innerHeight;
        this.hideInitialy();
        this.scrollTrhottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    events() {
        window.addEventListener('scroll', this.scrollTrhottle);
        window.addEventListener('resize', debounce(() => {
            console.log('Resize jus ran!');
            this.browserHeight = window.innerHeight;
        }, 333));
    }

    calcCaller() {
        console.log("Scroll unction ran");
        this.itemsToReveal.forEach(el => {
            if(el.isReveald == false) {
                this.calculateIfScrolledTo(el);
            }
        });
    }

    calculateIfScrolledTo(el) {
        if(window.scrollY + this.browserHeight > el.offsetTop) {
            console.log('Element was calculated!');
            let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100;
            if(scrollPercent < this.thresholdPercent) {
                el.classList.add('reveal-item--is-visible');
                el.isReveald = true;
                if(el.isLastItem) {
                    window.removeEventListener('scroll', this.scrollTrhottle);
                }
            }
        }
    }

    hideInitialy() {
        this.itemsToReveal.forEach((el) => {
            el.classList.add("reveal-item")
            el.isReveald = false;
        });
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }
}

export default RevealOnScroll;