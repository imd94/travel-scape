import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
//import Person from './modules/Person';

if(module.hot) {
    module.hot.accept();
}

let mobileMenu = new MobileMenu();

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