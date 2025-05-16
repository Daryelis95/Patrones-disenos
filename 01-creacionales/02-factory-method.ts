/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

interface Hambuger {
    prepared(): void
}

class ChickenHamburger implements Hambuger {

    prepared(): void {
        console.log('Preparando hamburguesa de pollo');
    }
}

class BeefHamburger implements Hambuger {
    prepared(): void {
        console.log('Preparando hamburguesa de res');
    }
}

class BeanHamburger implements Hambuger {
    prepared(): void {
        console.log('Preparando hamburguesa de frijol');
    }
}

abstract class Restaurant {
    protected abstract createHamburger(): Hambuger;

   
    orderHamburger(): void {
        const hamburger = this.createHamburger();
        hamburger.prepared();
    }
}

class ChickenRestaurant extends Restaurant {

    protected createHamburger(): Hambuger {
       return new ChickenHamburger();
    }

}

class BeefRestaurant extends Restaurant {

    protected createHamburger(): Hambuger {
       return new BeefHamburger();
    }

}
class BeanRestaurant extends Restaurant {

    protected createHamburger(): Hambuger {
       return new BeanHamburger();
    }

}

function mainD() {
  let restaurant: Restaurant;

  const burgerType = prompt(
    '¿Qué tipo de hamburguesa quieres? ( chicken/beef/bean )'
  );

  switch (burgerType) {
    case 'chicken':
      restaurant = new ChickenRestaurant();
      break;

    case 'beef':
      restaurant = new BeefRestaurant();
      break;

    case 'bean':
      restaurant = new BeanRestaurant();
      break;

    default:
      throw new Error('Opción no válida');
  }

  restaurant.orderHamburger();
}

mainD();