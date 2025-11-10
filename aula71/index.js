// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: true // configurável
    });
}

const p1 = new Produto('Camisa', 20, 3);
p1.estoque = 50000;
delete p1.estoque;
console.log(p1);
