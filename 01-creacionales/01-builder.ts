/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

class Computer {
  public cpu: string = 'Cpu - not defined';
  public ram: string = 'ram - not defined';
  public storage: string = 'storage - not defined';
  public gpu?: string = 'gpu - not defined';

  displayConfiguration() {
    console.log(`
            Configuracion de la computadora:
            CPU: ${this.cpu}
            RAM: ${this.ram}
            ALMACENAMIENTO: ${this.storage}
            GPU: ${this.gpu ?? 'No tiene GPU'}
        `);
  }
}

class ComputerBuilder {

    private computer: Computer;

    constructor(){
        this.computer = new Computer();
    }

    setCPU(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    setRAM(ram: string): ComputerBuilder {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: string): ComputerBuilder {
        this.computer.storage = storage;
        return this;
    }

    setGPU(gpu: string): ComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }

    buil(){
        return this.computer;
    }
}

function main() {
    const basicComputer: Computer = new ComputerBuilder()
    .setCPU('Intel core 2 Dùo')
    .setRAM('4GB')
    .setStorage('256GB')
    .buil();
    console.log('Computadora basica:')
    basicComputer.displayConfiguration()

    const gamingComputer: Computer = new ComputerBuilder()
    .setCPU('Intel I9')
    .setRAM('64GB')
    .setStorage('1 T')
    .setGPU('Nvidia RTX5090')
    .buil();
    console.log('Computadora gamer:')
    gamingComputer.displayConfiguration()
}

main();