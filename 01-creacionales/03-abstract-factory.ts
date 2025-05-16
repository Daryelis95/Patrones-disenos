/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Hamburger {
    prepared(): void;
}

interface Drink {
    pour(): void;
}

class Chicken implements Hamburger {
    prepared(): void {
        console.log("Preparando hamburguesa de pollo");
    }
}

class Beef implements Hamburger {
    prepared(): void {
        console.log("Preparando hamburguesa de carne");
    }
}

class Water implements Drink {
    pour(): void {
        console.log("Sirviendo bebida de agua");
    }
}

class Soda implements Drink {
    pour(): void {
        console.log("Sirviendo bebida gaseosa");
    }
}

interface RestaurantFactory {
    createHamburger(): Hamburger;
    createDrink(): Drink;
}

class FastFoodRestaurantFactory implements RestaurantFactory {
    createHamburger(): Hamburger {
        return new Beef();
    }
    createDrink(): Drink {
        return new Soda();
    }
}

class HealthyRestaurantFactory implements RestaurantFactory {
    createHamburger(): Hamburger {
        return new Chicken();
    }
    createDrink(): Drink {
        return new Water();
    }
}

function maint(factory: RestaurantFactory) {
    const hamburger = factory.createHamburger();
    const drink = factory.createDrink();

    hamburger.prepared();
    drink.pour();
}

console.log('\nPedido del menú regular:');
maint(new FastFoodRestaurantFactory());

console.log('\n\nPedido del menú saludable:');
maint(new HealthyRestaurantFactory());
