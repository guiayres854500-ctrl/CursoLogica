function teste() {
    console.log('Este é meu teste.');
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // Método de instância
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }
    
    // Método de estática
    static soma(x, y) {
        console.log(this);
    }
}

const controle1 = new ControleRemoto('Lg')
ControleRemoto.soma();