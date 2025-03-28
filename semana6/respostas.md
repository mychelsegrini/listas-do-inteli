### **1)** A resposta será D. Perceba que, quando um identificador de variável é declarado sem definir um valor para a variável, ela recebe o valor "undefined" automaticamente. Porém, quando nem o identificador é declarado, o Javascript simplesmente não reconhece em qual local da memória a variável está armazenada, levando ao erro.

### **2)** A resposta será A. Perceba que a variável a, sendo um número, não é um valor booleano, então "a === 0" deve ser adicionado no lugar de "a" para que a verificação seja correta.

OBS: A questão 2 foi resolvida considerando o que provavelmente o avaliador estava pensando quando a criou. Porém, todo número x diferente de 0 tem Boolean(x) = true em javascript. Então, para manter o código sucinto, seria mais fácil retirar "b === 0", substituindo por simplesmente b. Isso, é claro, considerando que a e b são números e não strings (algo que o código não confere no exemplo). 

### **3)** A resposta é A. Perceba que, uma vez que tipo == "eletrônico", a estrutura switch(tipo) escolhe o case "eletrônico" e atribui preco = 1000.

### **4)** A resposta é D) 24. A função map gera um array com elementos que correspondem aos elementos do array original que passaram por determinada transformação (um callback) que os multiplicam por 2. Daí, numeros.map = [2, 4, 6, 8, 10]. Após isso, a função filter retira todos os elementos que não passam pelo test determinado pelo callback (x) => x > 5. Daí, 2 e 4 são retirados, deixando nosso array numeros.map(...).filter(...) = [6, 8, 10]. Por fim, reduce realiza uma iteração no array: ums operação entre determinada variável x (que foi retornada da última iteração) e um valor de determinada posição k do array. Normalmente, o primeiro valor de x pode ser dado como argumento de reduce (no nosso exemplo, é 0). Caso não seja definido, será array[0]. Dessa forma, nosso exemplo apenas soma todos os valores do array, resultando em 24.

### **5)** A resposta será C. A função array.splice(x, y, element1, ..., elementN) adiciona os N elementos element1, ..., elementN na posição x do array e tira os y elementos após a posição x. Dessa forma, a resposta C é a correta.

### **6)** A resposta é B. As duas são verdadeiras, porém apenas complementares.

### **7)** A resposta correta é A. III está errada, obviamente, porque JS suporta herança de classes. A I está certa, considerando que Funcionario acessa diretamente os seus próprios atributos herdados de Pessoa. A II está certa porque sim, já que ela é autodescritiva e não há o que eu possa explicar (assim como as outras duas).

### **8)** A resposta correta é B. Isso pelo simples fato de que sobrecarga de métodos não existe em Javascript (não é possível definir métodos com mesmo nome e número de argumentos diferente). Apenas é possível fazer gambiarras utilizando estruturas condicionais, dentro de um método apenas, que conferem o número de argumentos.

### **9)**

```javascript
function somaArray(numeros) {
    var soma = 0; //A variável soma não foi inicializada no escopo local.
    for (i = 0; i < numeros.length; i++) { //Em Javascript, a propriedade que representa o número de posições de um array "array" é array.length, não array.size.
        soma += 2*numeros[i]; //Estava sendo usado o operador de atribuição simples ao invés do operador de atribuição de adição, o que faria com que soma fosse retornada como o valor armazenado na última posição de numeros.

    }

    return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```

### **10)** 

```javascript

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
```