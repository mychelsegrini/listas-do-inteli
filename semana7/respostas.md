# **1)**
A seria a resposta correta. Perceba que q + r < p == true, o que já é suficiente para fazer resultado == true. Daí, console.log(resultado) imprime true. Além disso, a estrutura de repetição for realiza o produto de todos os valores dentro de valores, obviamente.

# **2)**
A é a alternativa correta. Perceba que 2500 + 1200 + 800 + 100 = 4600 < 5000. Por isso, tanto analisarCredito1() quanto analisarCredito2() repetirá o código até i = 3. 

# **3)**
B é a alternativa correta. Creio que o código é legível o suficiente para tornar qualquer tentativa de explicação extremamente redundante. Perceba que D também está correta, mas B é a "alternativa que melhor descreve o comportamento do código".

# **4)**
D é a resposta correta. Perceba que 300 + 600 + 500 = 1400, e 1200 < 1400 < 1600, mas 300 + 600 < 1200. Por isso, teríamos as seguintes 3 linhas iniciais:
- Dispositivo 1 ligado. Energia restante: 900

- Dispositivo 2 ligado. Energia restante: 300

- Dispositivo 3 ligado com bateria extra. Energia restante: 200

Perceba porém que, quando o segundo bloco possível na estrutura condicional foi chamada quando i = 2, ocorreu:
```javascript
energiaDisponivel = 0;
bateriaExtra -= (consumo - energiaDisponivel);
```
Daí, ```bateriaExtra``` passou a ser 400 - 500 = -100. Com isso, os dois próximos dispositivos não puderam ser alimentados, levando à alternativa correta D.


# **5)**
Alternativa B é a correta. Creio ser intuitivo, por se chamar "atualizar()".

# **6)**
Alternativa A é a correta. Perceba que também é intuitivo que Matter.js simule física de forma mais precisa que o Arcade Physics, pelos nomes de ambos. Arcade Physics passa a ideia de uma física mais "de brinquedo", "de jogos" pelo adjetivo Arcade. Matter.js, por levar o nome de um dos elementos fundamentais do universo (matéria), naturalmente parece ser mais preciso fisicamente. Novamente, este texto foi escrito para tentar adicionar alguma coisa à esta pergunta.

# **7)**

Uma vez que não gosto de pseudocódigos, irei implementar o programa em pseudocódigo e C++. No código C++, irei utilizar o preço como sendo 314,15 apenas para manter o código correto.

## Pseudocódigo

```javascript
Receba o número real preço;
Se preço pertence a [0; 50[, imprima "Frete não disponível!";
Senão, se preço pertence a [50; 199,99], imprima "Frete com custo adicional!";
Senão, se preço >= 200, imprima "Frete grátis!";
Senão, imprima "Preço inválido, tente novamente!".
```

## C++

```C++
#include <stdio.h>
#include <string>
using namespace std;

int main(){
    float price = 314.15;
    scanf("%f", &price);
    if(price < 50 && price >= 0){
        string str = "Frete não disponível!";
        printf("%s", str.c_str());
    } else if(price >= 50 && price <= 199.99){
        string str = "Frete com custo adicional!";
        printf("%s", str.c_str());
    } else if (price >= 200){
        string str = "Frete grátis!";
        printf("%s", str.c_str());
    }else{
        string str = "Preço inválido, tente novamente!";
        printf("%s", str.c_str());
    }
}
```

# **8)**

Uma vez que não gosto de pseudocódigos, irei implementar o programa em pseudocódigo e JavaScript.

## Pseudocódigo

```javascript
Classe Veiculo:
Atributos:

modelo;
ano;
Método Construtor(modelo, ano):

Define os valores dos atributos modelo e ano com os valores passados como parâmetro.

Método CalcularConsumo():

Classe Carro herda de Veiculo:
Atributos:

tempoMáximoDeMovimento;

Método Construtor(modeloDoCarro, anoDoCarro, tempoMáximoDeMovimentoDoCarro, capacidadeDoTanqueDoCarro):

construtorDeVeiculo(modeloDoCarro, anoDoCarro);
tempoMáximoDeMovimento = tempoMáximoDeMovimentoDoCarro;
capacidadeDoTanque = capacidadeDoTanqueDoCarro;


Método CalcularConsumo():
Retornar (capacidadeDoTanque/tempoMáximoDeMovimento);

Classe Moto herda de Veiculo:
Atributos:

tempoMáximoDeMovimento;
capacidadeDoTanque;

Método Construtor(modeloDaMoto, anoDaMoto, tempoMáximoDeMovimentoDaMoto, capacidadeDoTanqueDaMoto):

construtorDeVeiculo(modeloDaMoto, anoDaMoto);
tempoMáximoDeMovimento = tempoMáximoDeMovimentoDaMoto;
capacidadeDoTanque = capacidadeDoTanqueDaMoto;


Método CalcularConsumo():
Retornar (capacidadeDoTanque/tempoMáximoDeMovimento);

```

## JavaScript

```Javascript
class vehicle {
    model;
    year;

    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    calculateFuelConsumption(){

    }
}

class car extends vehicle {
    maximumMovementTime;
    tankCapacity;

    constructor(model, year, maximumMovementTime, tankCapacity){
        super(model, year);
        this.maximumMovementTime = maximumMovementTime;
        this.tankCapacity = tankCapacity;
    }

    calculateFuelConsumption(){
        return (this.tankCapacity/this.maximumMovementTime);
    }
}

class motorcycle extends vehicle {
    maximumMovementTime;
    tankCapacity;

    constructor(model, year, maximumMovementTime, tankCapacity){
        super(model, year);
        this.maximumMovementTime = maximumMovementTime;
        this.tankCapacity = tankCapacity;
    }

    calculateFuelConsumption(){
        return (this.tankCapacity/this.maximumMovementTime);
    }
}
```

# **9)** 

Uma vez que não gosto de pseudocódigos, irei implementar o programa em pseudocódigo e C++. Para o código em C++, irei utilizar o vetor de entrada (aceleracao, velocidadeSegura, velocidadeInicial, tempoMaximo, velocidadeMinima) = (-20, 3.14, 1000, 3600, 2.78), estando todas as grandezas físicas no SI. Perceba que, neste modelo, preferi utilizar uma aceleração negativa ao invés do termo "desaceleração".

## Pseudocódigo
```javascript
defina aceleracao;
defina velocidadeSegura;
defina velocidadeInicial;
defina tempoMaximo;
defina velocidadeMinima;

enquanto (verdadeiro){
    se velocidadeSegura < velocidadeMinima, então imprima "A velocidade segura é impossível de ser alcançada com a engenharia feita. Reveja o projeto." e quebre o ciclo;
    defina tempo = (velocidadeSegura - velocidadeInicial)/(aceleracao);
    se tempo < tempoMaximo, então imprima "A sonda poderá alcançar a velocidade segura em " + tempo + " segundos" e quebre o ciclo;
    senão, aceleracao recebe aceleracao - 1;
}
```

## C++

```C++
#include <stdio.h>
#include <string>
using namespace std;

float data = [-20, 3.14, 1000, 3600, 2.78];
float acceleration = data[0];
float secureVelocity = data[1];
float initialVelocity = data[2];
float maximumTime = data[3];
float minimumVelocity = data[4];

while (true){
    if (secureVelocity < minimumVelocity){
        string s = "A velocidade segura é impossível de ser alcançada com a engenharia feita. Reveja o projeto.";
        printf ("%s", s.c_str());
        break;
    }

    float time = (secureVelocity - initialVelocity)/acceleration;

    if (time < maximumTime>){
        string s = "A sonda poderá alcançar a velocidade segura em " + time + " segundos"
        printf("%s", s.c_str());
        break;
    } else {
        acceleration -= 1;
    }
}
```

# **10)** Irei implementar um pseudocódigo e um código em C++ para fins de simplicidade. Considerarei que estamos fazendo A x B, e não B x A. C será a matriz resultantes desta multiplicação. Além disso, cada matriz será um array de arrays que representam linhas da matriz.

## Pseudocódigo
```javascript
Função MultiplicarMatrizesInvestimento(A, B){
    Defina C;
    Se numeroDeLinhas(A) é diferente do numeroDeColunas(B), então:
        Retornar "As matrizes não podem ser multiplicadas porque a primeira não tem um número de linhas igual ao número de colunas da segunda.";
    Senão:
        Para i de 0 a numeroDeLinhas(A) - 1, faça:
            Adicione [] no final de C;
            Para j de 0 a numeroDeColunas(B) - 1, faça:
                Defina c = 0;
                Para k de 0 a numerodeColunas(A) - 1, faça:
                    c = c + A[i][k]*B[k][j];
                
                C[i][j] = c;

    ImprimirMatriz(C);
}
```

## C++

```C++
#include <stdio.h>
#include <vector>
#include <string>
using namespace std;

int main() {
    float multiplyMatrices(vector<vector<float>> A, vector<vector<float>> B){
        vector<vector<float>> C;

        if(A.size() != B[0].size()){
            string s = "As matrizes não podem ser multiplicadas porque a primeira não tem um número de linhas igual ao número de colunas da segunda.";
            printf("%s", s.c_str());
            return 0;
        } else{
            for(int i = 0; i < A.size(); i++){
                C.push_back({});
                for(int j = 0; j < A.size(); j++){
                    float c = 0;
                    for(int k = 0; k < A[0].size(); k++){
                        c += A[i][k]*B[k][j];
                    }
                    C[i][j] = c;
                }
            }
        }
    }

    void printMatrix(vector<vector<float>> C){
        for(int i = 0; i < C.size(); i++){
            for(int j = 0; j < C.size(); j++){
                printf("%f ", C[i][j]);
            }
            printf("%c", '\n');
        }
    }
}
```