import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
//import Person from './modules/Person';


new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60); 
//new RevealOnScroll(document.querySelectorAll('.generic-content-container'), 75);

let mobileMenu = new MobileMenu();


if(module.hot) {
    module.hot.accept();
}


/* 
class Adult extends Person {
    payTaxes() {
        console.log(`${this.name} now owes zero taxes.`);
    }
}

let john = new Person('John Doe', 'green');
john.greet();

let jane = new Adult('Jane Smith', 'pink');
jane.greet();
jane.payTaxes();
  */