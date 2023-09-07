// Objeto material: Carro.

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.motorLigado = false;
        this.velocidade = 0;
    }

    ligarCarro() {
        if (!this.motorLigado) {
            this.motorLigado = true;
            console.log(`O motor do ${this.marca} ${this.modelo} está ligado.`);
        } else {
            console.log(`O motor do ${this.marca} ${this.modelo} já está ligado.`);
        }
    }

    desligarCarro() {
        if (this.motorLigado) {
            this.motorLigado = false;
            this.velocidade = 0;
            console.log(`O motor do ${this.marca} ${this.modelo} está desligado.`);
        } else {
            console.log(`O motor do ${this.marca} ${this.modelo} já está desligado.`);
        }
    }

    acelerar(velocidade) {
        if (this.motorLigado) {
            this.velocidade += velocidade;
            console.log(`O ${this.marca} ${this.modelo} está indo a ${this.velocidade} km/h.`);
        } else {
            console.log(`Ligue o motor do ${this.marca} ${this.modelo} antes de acelerar.`);
        }
    }
}

// Exemplo de uso da classe Carro
const meuCarro = new Carro("Toyota", "Corolla", 2022);
meuCarro.ligarCarro(); // Ligar o motor do Toyota Corolla
meuCarro.acelerar(60); // O Toyota Corolla está indo a 60 km/h.
meuCarro.acelerar(20); // O Toyota Corolla está indo a 80 km/h.
meuCarro.desligarCarro(); // Desligar o motor do Toyota Corolla
meuCarro.acelerar(30); // Ligue o motor do Toyota Corolla antes de acelerar.



// Objeto material: Smartphone.

class Smarthphone {

    constructor(marca, modelo, sistemaOperacional) {
        this.marca = marca;
        this.modelo = modelo;
        this.sistemaOperacional = sistemaOperacional;
        this.ligado = false;
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`${this.marca} ${this.modelo} ligado.`);
        } else {
            console.log(`${this.marca} ${this.modelo} ja esta desligado`);
        }

    }

    fazerLigacao(numero) {
        if (this.ligado) {
            console.log(`Chamando ${numero}...`);
        } else {
            console.log(`Ligue o ${this.marca} ${this.modelo} antes de fazer a ligacao`);
        }
    }

    enviarMensagem(destinatario, mensagem) {
        if (this.ligado) {
            console.log(`Enviando mensagem para o ${destinatario}`);
        } else {
            console.log(`Ligue o ${this.marca} ${this.modelo} antes de enviar uma mensagem.`)
        }
    }
}

const meuSmartphone = new Smartphone("Apple", "iPhone 13", "iOS");
meuSmartphone.ligar(); // iPhone 13 ligado.
meuSmartphone.fazerLigacao("123-456-789"); // Chamando 123-456-789...
meuSmartphone.enviarMensagem("Amigo", "Olá, como você está?"); // Enviando mensagem para Amigo: Olá, como você está?


