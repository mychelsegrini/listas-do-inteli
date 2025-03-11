class Produto {
    constructor(nome, preco){ //Inicializa propriedades
        this.nome = nome; 
        this.preco = preco
    }

    calcularDesconto(){
        return this.preco*0.1 //Retorna desconto.
    }
}

class Livro extends Produto { //Livro herda o método construtor e propriedades de Produto.
    calcularDesconto(){ //Livro tem um método com mesmo identificador que od e Produto, mas com código diferente (override, polimorfismo).
        return this.preco*0.2;
    }
}

const livroBom = new Livro("A Volta dos que Não Foram", 200); //Exemplo de instância de livro.
console.log(livroBom.nome); 
console.log(livroBom.preco);