/* 
1. Criar uma função exercicio01()
- Pedir 5 nomes de alunos.
- Usar uma variável indice começando em 0.
- Enquanto o indice for menor que 5:
    - Pedir o nome do aluno com prompt.
    - Mostrar um alert com "Aluno cadastrado: " + nome.
    - Incrementar o indice.
- Ao final, mostrar um alert "Cadastro finalizado".

*/

function exercicio01() {
    let indice = 0

    while (indice < 5) {
        let nome = prompt("Digite o nome ")
        alert("Aluno cadastrado" + nome)
        indice = indice + 1
    }
    alert("Cadastro finalizado")
}

/*

2. Criar uma função exercicio02()
- Pedir 4 cores favoritas.
- Usar while com indice começando em 0.
- Enquanto o indice for menor que 4:
    - Pedir uma cor (ex: "Digite uma cor").
    - Mostrar um alert com "Cor escolhida: " + cor.
    - Incrementar o indice.
- Ao final, mostrar um alert "Obrigado por informar suas cores favoritas".


*/
function exercicio02() {

    let indice = 0

    while (indice < 4) {
        let cores = prompt("Digite uma cor")
        alert("Cor esclhida: " + cores)
        indice = indice + 1
    }
    alert("Obrigado pelas informações")

}
/*

3. Criar uma função exercicio03()
- Pedir 3 nomes de cidades que o usuário quer viajar.
- Usar while com indice começando em 0.
- Enquanto o indice for menor que 3:
    - Pedir o nome da cidade.
    - Mostrar um alert com "Destino " + (indice + 1) + ": " + cidade.
    - Incrementar o indice.
- Ao final, mostrar um alert "Planejamento de viagem concluído".

*/
function exercicio03() {
    let indice = 0

    while (indice < 3) {
        let cidade = prompt("Digite o nome da cidade")
        alert("Destino " + (indice + 1) + ": " + cidade)
        indice = indice + 1
    }

    alert("Planejamento de viagem concluido")
}
/*

4. Criar uma função exercicio04()
- Pedir 5 números inteiros.
- Usar while com indice começando em 0.
- Criar uma variável soma começando em 0.
- Enquanto o indice for menor que 5:
    - Pedir um número com prompt.
    - Converter para inteiro (parseInt).
    - Somar na variável soma.
    - Incrementar o indice.
- Ao final, mostrar um alert com "Soma total: " + soma.

*/

function exercicio04() {
    let indice = 0
    let soma = 0

    while (indice < 5) {
        let numero = parseInt(prompt("Digite um numero"))
        soma = soma + numero
        indice = indice + 1
    }
    alert("Soma total: " + soma)
}

/*

5. Criar uma função exercicio05()
- Pedir 3 filmes favoritos.
- Usar while com indice começando em 0.
- Enquanto o indice for menor que 3:
    - Pedir o nome do filme.
    - Pedir o ano de lançamento.
    - Mostrar um alert com "Filme: [nome] - Ano: [ano]".
    - Incrementar o indice.
- Ao final, mostrar um alert "Lista de filmes cadastrada com sucesso".
*/

function exercicio05() {
    let indice = 0

    while (indice < 3) {
        let nome = prompt("Digite o nome do filme")
        let ano = parseInt(prompt("Digite o ano de lançamento"))
        alert("Filme: " + nome +
            "\nLançamento: " + ano
        )
        indice = indice + 1
    }
    alert("Lista de filmes cadastrada com sucesso")
}
/*

6. Criar uma função exercicio06()
- Solicitar 5 números utilizando enquanto
- Apresentar a soma dos números
- Apresentar a média dos números


*/
function exercicio06() {
    let indice = 0
    let soma = 0

    while (indice < 5) {
        let numero = parseInt(prompt("Digite um numero"))
        soma = soma + numero
        indice = indice + 1
    }

    let media = soma / 3

    alert("Soma: " + soma +
        "\nMedia: " + media

    )
}
/*

7. Criar uma função exercicio07()
- Solicitar o valor de 6 vendas
- Apresentar o total das vendas
- Calcular e apresenta 5% de comissão sobre total das vendas.


*/
function exercicio07() {
    let indice = 0
    let total = 0

    while (indice < 6) {
        let valor = parseFloat(prompt("Digite o valor do produto"))
        total = total + valor
        indice = indice + 1
    }
    let comissao = total * 0.05

    alert("Valor total: " + total +
        "\nComissão: " + comissao
    )
}
/*

8. Criar uma função exercicio08()
- Solicitar 10 números
- Apresentar se o número é par
- Apresentar se o número é ímpar

*/
function exercicio08() {
    let indice = 0

    while (indice < 10) {
        let numero = parseInt(prompt("Digite um numero"))
        if (numero % 2 === 0) {
            alert("O numero é par")
        }
        else {
            alert("O numero é impar")
        }
        indice = indice + 1
    }
}
/*

9. Criar uma função exercicio09()
- Solicitar um número para o usuário
- Apresentar a tabuada desse número utilizando while
- Formato esperado:
- 5 x 1 = 5
- 5 x 2 = 10
- ...
- 5 x 10 = 50
- O número(5) apresentado foi digitado pelo usuário, ou seja, deve apresentar a tabuada do número digitado

*/

function exercicio09() {
    let indice = 0
    let numero = parseInt(prompt("Digite um numero"))

    while (indice <= 10) {
        let tabuada = numero * indice
        alert(numero + " X " + indice + " = " + tabuada)
        indice = indice + 1
    }
}

/*

10. Criar uma função exercicio10()
- Solicitar 10 números
- Apresentar a quantidade de números pares
- Apresentar a quantidade de números ímpares

*/
function exercicio10() {
    let indice = 0
    let quantidadePar = 0
    let quantidadeImpar = 0

    while (indice < 10) {
        let numero = parseInt(prompt("Digite um numero"))
        if (numero % 2 === 0) {
            quantidadePar = quantidadePar + 1
        }
        else {
            quantidadeImpar = quantidadeImpar + 1
        }
        indice = indice + 1
    }
    alert("Quantidade de numeros pares: " + quantidadePar +
        "\nQuantidade de numeros impares: " + quantidadeImpar
    )
}

/*

11. Criar uma função exercicio11()
- Solicitar 4 notas de um aluno utilizando enquanto
- Calcular a média das notas
- Apresentar a média
- Se a média for maior ou igual a 7 apresentar Aprovado
- Senão apresentar Reprovado

 */
function exercicio11() {
    let indice = 0
    let soma = 0

    while (indice < 4) {
        let nota = parseFloat(prompt("Digite a nota"))
        soma = soma + nota
        indice = indice + 1
    }

    let media = soma / 4
    if (media >= 7) {
        alert("Aprovado")
    }
    else {
        alert("Reprovado")
    }
}

/*

12. Criar uma função exercicio12()
- Solicitar o valor de 5 produtos utilizando enquanto
- Calcular o total da compra
- Se o total for maior que 200 aplicar 10% de desconto
- Apresentar o valor total sem desconto
- Apresentar o valor final com desconto (se houver)

*/
function exercicio12() {
    let indice = 0
    let total = 0
    while (indice < 5) {
        let valor = parseFloat(prompt("digite o valor do produto"))
        total = total + valor
        indice = indice + 1
    }
    if (total > 200) {
        let desconto = total * 0.90
        alert("Total: " + total +
            "\nTotal com desconto: " + desconto
        )
    }
    else {
        alert("Total: " + total)
    }
}
/*

13. Criar uma função exercicio13()
- Solicitar 6 idades utilizando enquanto
- Calcular a média das idades
- Apresentar a média das idades
- Se a média for maior ou igual a 18 apresentar Maior de idade
- Senão apresentar Menor de idade

*/
function exercicio13() {
    let indice = 0
    let soma = 0
    while (indice < 6) {
        let idade = parseInt(prompt("Digite a idade"))
        soma = soma + idade
        indice = indice + 1
    }

    let media = soma / 6
    alert("Media das idades: " + media)

    if (media >= 18) {
        alert("Maior de idade")
    }
    else {
        alert("Menor de idade")
    }
}

/*

14. Criar uma função exercicio14()
- Solicitar 5 salários utilizando enquanto
- Calcular o maior salário informado
- Calcular o menor salário informado
- Calcular a média dos salários
- Se a média for maior que 3000 apresentar mensagem Salários acima da média
- Senão apresentar mensagem Salários dentro da média
*/
function exercicio14() {
    let indice = 0
    let maiorSalario = 0
    let menorSalario = 9999999999999999999999
    let soma = 0

    while (indice < 5) {
        let salario = parseFloat(prompt("Digite o salario"))
        soma = soma + salario
        if (salario > maiorSalario) {
            maiorSalario = salario
        }
        if (menorSalario > salario) {
            menorSalario = salario
        }
        indice = indice + 1
    }


    let media = soma / 5

    alert("Maior salario é: " + maiorSalario +
        "\nMenor salario é: " + menorSalario +
        "\nMedia: " + media
    )
    if (media > 3000) {
        alert(" Salários acima da média")
    }
    else {
        alert("Salários dentro da média")
    }
}
/*

15. Criar uma função exercicio15()
- Solicitar 4 valores de contas (água, luz, internet, aluguel) utilizando enquanto
- Calcular o total das contas
- Solicitar a renda mensal do usuário
- Se o total das contas for maior que 50% da renda apresentar mensagem Orçamento comprometido
- Senão apresentar mensagem Orçamento saudável
- Apresentar o total das contas e o percentual que representa da renda
*/
function exercicio15() {
    let indice = 0
    let totalContas = 0

    while (indice < 4) {
        let conta = parseFloat(prompt("Digite o valor da conta"))
        totalContas = totalContas + conta
        indice = indice + 1
    }
    let renda = parseFloat(prompt("Digite sua renda mensal"))
    let metade = renda / 2
    if (totalContas > metade) {
        alert("Orçamento comprometido")
    }
    else {
        alert("Orçamento saudavel")
    }
    let porcentagem = (totalContas / renda) * 100

    alert("Total das contas: " + totalContas +
        "\nPorcentagem do valor das contas: " + porcentagem + "%"
    )
}
/*
16. Criar uma função exercicio16()
- Solicitar a altura de 5 pessoas
- Descobrir e armazenar a maior altura utilizando while
- Apresentar a maior altura informada
*/
function exercicio16() {
    let indice = 0
    let maiorAltura = 0

    while (indice < 5) {
        let altura = parseInt(prompt("Digite a altura em cm"))
        indice = indice + 1
        if (altura > maiorAltura) {
            maiorAltura = altura
        }
    }
    alert("A maior altura é: " + maiorAltura)
}
/*
17. Criar uma função exercicio17()
- Solicitar o peso de 4 pessoas
- Descobrir e armazenar o menor peso utilizando while
- Apresentar o menor peso informado
*/
function exercicio17() {
    let indice = 0
    let menorPeso = 999999999

    while (indice < 4) {
        let peso = parseFloat(prompt("Digite o peso"))
        indice = indice + 1
        if (peso < menorPeso) {
            menorPeso = peso
        }
    }
    alert("Menor peso é: " + menorPeso)
}
/*
18. Criar uma função exercicio18()
- Solicitar o nome e a idade de 5 pessoas
- Descobrir quem possui a maior idade utilizando while
- Apresentar o nome da pessoa e a idade dela
*/
function exercicio18() {
    let indice = 0
    let maiorIdade = 0
    let nomeMaiorIdade = ""

    while (indice < 5) {
        let nome = prompt("Digite o nome")
        let idade = parseInt(prompt("Digite a idade"))

        if (idade > maiorIdade) {
            nomeMaiorIdade = nome
            maiorIdade = idade
        }

        indice = indice + 1
    }

    alert("Nome da pessoa com a maior idade é: " + nomeMaiorIdade +
        "\nMaior idade é: " + maiorIdade
    )
}
/*
19. Criar uma função exercicio19()
- Solicitar o preço de 6 produtos
- Descobrir o maior preço utilizando while
- Descobrir o menor preço utilizando while
- Apresentar o maior e o menor preço informados
*/
function exercicio19() {
    let indice = 0
    let maiorPreco = 0
    let menorPreco = 999999999999999999999999999

    while (indice < 6) {
        let preco = parseFloat(prompt("Digite o preço"))
        indice = indice + 1

        if (preco > maiorPreco) {
            maiorPreco = preco
        }

        if (preco < menorPreco) {
            menorPreco = preco
        }
    }

    alert("O menor preço é: " + menorPreco +
        "\nO maior preço é " + maiorPreco
    )
}
/*
20. Criar uma função exercicio20()
- Solicitar o nome e o valor do salário de 4 colaboradores
- Descobrir qual colaborador tem o maior salário utilizando while
- Apresentar o nome do colaborador e o salário dele
*/
function exercicio20() {
    let indice = 0
    let maiorSalario = 0
    let nomeMaiorSalario = ""

    while (indice < 4) {
        let nome = prompt("Digite o nome do funcionario")
        let salario = parseFloat(prompt("Digite o salario"))

        if (salario > maiorSalario) {
            maiorSalario = salario
            nomeMaiorSalario = nome
        }
        indice = indice + 1
    }

    alert("O nome da pessoa com o maior salario é: " + nomeMaiorSalario +
        "\nSalrio: " + maiorSalario
    )
}
/*
21. Criar uma função exercicio21()
- Solicitar a temperatura de 7 dias
- Descobrir a maior temperatura utilizando while
- Descobrir a menor temperatura utilizando while
- Apresentar a maior e a menor temperatura informadas
*/
function exercicio21() {
    let indice = 0
    let maiorTemperatura = 0
    let menorTemperatura = 99999999

    while (indice < 7) {
        let temperatura = parseInt(prompt("Digite a temperatura"))

        if (temperatura > maiorTemperatura) {
            maiorTemperatura = temperatura
        }

        if (temperatura < menorTemperatura) {
            menorTemperatura = temperatura
        }

        indice = indice + 1
    }
    alert("A maior temperatura foi: " + maiorTemperatura +
        "\nA menor temperatura foi: " + menorTemperatura
    )
}
/*
22. Criar uma função exercicio22()
- Solicitar o nome e o preço de 5 produtos
- Descobrir qual produto tem o menor preço utilizando while
- Apresentar o nome do produto e o preço dele
*/
function exercicio22() {
    let indice = 0
    let nomeMenorPreco = ""
    let menorPreco = 999999999999999999999

    while (indice < 5) {
        let nome = prompt("Digite o nome do produto")
        let preco = parseFloat(prompt("Digite o preço do produto"))

        if (preco < menorPreco) {
            nomeMenorPreco = nome
            menorPreco = preco
        }
        indice = indice + 1
    }
    alert("O produto com menor preço é: " + nomeMenorPreco +
        "\nPreço: R$" + menorPreco
    )
}
/*
23. Criar uma função exercicio23()
- Solicitar a idade de 8 pessoas
- Contar quantas são crianças (idade < 12)
- Contar quantas são adolescentes (12 a 17)
- Contar quantas são adultos (18 a 59)
- Contar quantas são idosos (60 ou mais)
- Apresentar a quantidade em cada categoria
*/
function exercicio23() {
    let indice = 0
    let crianças = 0
    let adolescentes = 0
    let adultos = 0
    let idosos = 0

    while (indice < 8) {
        let idade = parseInt(prompt("Digite a idade"))

        if (idade < 12) {
            crianças = crianças + 1
        }
        else if (idade >= 12 && idade < 18) {
            adolescentes = adolescentes + 1
        }
        else if (idade >= 18 && idade < 60) {
            adultos = adultos + 1
        }
        else {
            idosos = idosos + 1
        }
        indice = indice + 1
    }

    alert("Numero de crianças: " + crianças +
        "\nNumero de adolescentes: " + adolescentes +
        "\nNumero de adultos: " + adultos +
        "\nNumero de idosos: " + idosos
    )
}
/*
24. Criar uma função exercicio24()
- Solicitar a nota de 10 alunos
- Contar quantos alunos estão Reprovados (nota < 5)
- Contar quantos alunos estão em Recuperação (nota >= 5 e < 7)
- Contar quantos alunos estão Aprovados (nota >= 7)
- Apresentar a quantidade de Reprovados, Recuperação e Aprovados
*/
function exercicio24() {
    let indice = 0
    let reprovado = 0
    let recuperacao = 0
    let aprovado = 0

    while (indice < 10) {
        let nota = parseFloat(prompt("Digite a nota do aluno"))

        if (nota < 5) {
            reprovado = reprovado + 1
        }
        else if (nota >= 5 && nota < 7) {
            recuperacao = recuperacao + 1
        }
        else if (nota >= 7) {
            aprovado = aprovado + 1
        }
        indice = indice + 1
    }
    alert("Numero de alunos reprovados: " + reprovado +
        "\nNumero de alunos em recuperação: " + recuperacao +
        "\nNumero de alunos aprovados: " + aprovado
    )

}
/*
25. Criar uma função exercicio25()
- Solicitar o salário de 7 colaboradores
- Contar quantos ganham até 2000
- Contar quantos ganham entre 2001 e 5000
- Contar quantos ganham acima de 5000
- Apresentar a quantidade de colaboradores em cada faixa salarial
*/
function exercicio25() {
    let indice = 0
    let salrioBaixo = 0
    let salarioMedio = 0
    let salarioBom = 0

    while (indice < 7) {
        let salario = parseFloat(prompt("Digite o salario"))

        if (salario <= 2000) {
            salrioBaixo = salrioBaixo + 1
        }
        else if (salario > 2000 && salario < 5000) {
            salarioMedio = salarioMedio + 1
        }
        else {
            salarioBom = salarioBom + 1
        }
        indice = indice + 1
    }
    alert("Numero de pessoas com salario menor que 2000: " + salrioBaixo +
        "\nNumero de pessoas com salario entre 2000 e 5000: " + salarioMedio +
        "\nNumero de pessoas com salario maior que 5000: " + salarioBom
    )
}
/*
26. Criar uma função exercicio26()
- Solicitar a temperatura de 6 dias
- Contar quantos dias foram Frios (temperatura < 15)
- Contar quantos dias foram Agradáveis (temperatura entre 15 e 25)
- Contar quantos dias foram Quentes (temperatura > 25)
- Apresentar a quantidade de dias Frios, Agradáveis e Quentes
*/
function exercicio26() {
    let indice = 0
    let frio = 0
    let agradavel = 0
    let quente = 0
    while (indice < 6) {
        let temperatura = parseInt(prompt("Digite a temperatura do dia em celsius"))
        if (temperatura < 15) {
            frio = frio + 1
        }
        else if (temperatura > 14 && temperatura < 26) {
            agradavel = agradavel + 1
        }
        else {
            quente = quente + 1
        }
        indice = indice + 1
    }
    alert("Dias frio: " + frio +
        "\nDias agradaveis: " + agradavel +
        "\nDias quentes: " + quente
    )
}
/*
27. Criar uma função exercicio27()
- Solicitar a avaliação de 10 clientes (1 a 5)
- Contar quantas avaliações foram Ruim (1 ou 2)
- Contar quantas avaliações foram Regular (3)
- Contar quantas avaliações foram Bom (4 ou 5)
- Apresentar a quantidade de respostas Ruim, Regular e Bom
*/
function exercicio27() {
    let indice = 0
    let ruin = 0
    let regular = 0
    let bom = 0
    while (indice < 10) {
        let nota = parseInt(prompt("Digite a nota de 1 a 5"))
        if (nota > 0 && nota < 3) {
            ruin = ruin + 1
        }
        else if (nota === 3) {
            regular = regular + 1
        }
        else if (nota > 3 && nota < 6) {
            bom = bom + 1
        }
        indice = indice + 1
    }
    alert("Avalições ruin: " + ruin +
        "\nAvaliações regulares: " + regular +
        "\nAvaliações boas: " + bom
    )
}
/*
28. Criar uma função exercicio28()
- Solicitar 8 números inteiros
- Contar quantos números são negativos
- Contar quantos números são iguais a zero
- Contar quantos números são positivos
- Apresentar a quantidade de números negativos, iguais a zero e positivos
*/
function exercicio28() {
    let indice = 0
    let negativos = 0
    let zero = 0
    let positivos = 0
    while (indice < 8) {
        indice = indice + 1
        let numero = parseInt(prompt("digite um numero inteiro"))
        if (numero < 0) {
            negativos = negativos + 1
        }
        else if (numero === 0) {
            zero = zero + 1
        }
        else {
            positivos = positivos + 1
        }
    }
    alert("Numeros negativos: " + negativos +
        "\nNumeros igual a zero: " + zero +
        "\nNumeros positivos: " + positivos
    )
}
/*
29. Criar uma função exercicio29()
- Solicitar o peso de 5 encomendas
- Contar quantas são Leves (peso < 2 kg)
- Contar quantas são Médias (peso entre 2 e 10 kg)
- Contar quantas são Pesadas (peso > 10 kg)
- Apresentar a quantidade de encomendas Leves, Médias e Pesadas
*/
function exercicio29() {
    let indice = 0
    let leve = 0
    let medio = 0
    let pesado = 0
    while (indice < 5) {
        indice = indice + 1
        let peso = parseInt(prompt("Digite o peso da encomenda em kg"))
        if (peso < 3) {
            leve = leve + 1
        }
        else if (peso > 10) {
            pesado = pesado + 1
        }
        else {
            medio = medio + 1
        }
    }
    alert("Encomendas leves: " + leve +
        "\nEncomendas medias: " + medio +
        "\nEncomendas pesadas: " + pesado
    )
}
/*
30. Criar uma função exercicio30()
- Solicitar a quantidade de pelúcias da Disney que deseja cadastrar
- Para cada pelúcia, solicitar o personagem [MICKEY/MINNIE/DONALD]
- Contar quantas pelúcias são do Mickey
- Contar quantas pelúcias são da Minnie
- Contar quantas pelúcias são do Donald
- Apresentar o resumo das pelúcias cadastradas por personagem
*/
function exercicio30() {
    let quantidade = parseInt(prompt("Digite quantas pelucias desejas cadastrar"))
    let indice = 0
    let mickey = 0
    let minnie = 0
    let donald = 0
    while (indice < quantidade) {
        indice = indice + 1
        let produto = prompt("Qual o persogagem [mickey/minnie/donald")

        if (produto === "minnie" || produto === "Minnie") {
            minnie = minnie + 1
        }
        else if (produto === "mickey" || produto === "Mickey") {
            mickey = mickey + 1
        }
        else if (produto === "donald" || produto === "Donald") {
            donald = donald + 1
        }
    }
    alert("Pelucias do Mickey: " + mickey +
        "\nPelucias da Minnie: " + minnie +
        "\nPelucias do Donald: " + donald
    )
}
/*
31. Criar uma função exercicio31()
- Solicitar a quantidade de clientes que irão responder a pesquisa
- Para cada cliente, solicitar a forma de pagamento utilizada [CRÉDITO/DÉBITO/DINHEIRO]
- Contar quantos pagaram no crédito
- Contar quantos pagaram no débito
- Contar quantos pagaram em dinheiro
- Apresentar o total de clientes em cada forma de pagamento
*/
function exercicio31() {
    let desejada = parseInt(prompt("Digite a quantidade de clientes"))
    let indice = 0
    let debito = 0
    let credito = 0
    let dinheiro = 0

    while (indice < desejada) {
        indice = indice + 1
        let forma = prompt("Digite a forma de pagamento desejada [DEBITO/CREDITO/DINHEIRO")
        if (forma === "debito") {
            debito = debito + 1
        }
        else if (forma === "credito") {
            credito = credito + 1
        }
        else if (forma === "dinheiro") {
            dinheiro = dinheiro + 1
        }
    }
    alert("Debito: " + debito +
        "\nCrédito: " + credito +
        "\nDinheiro: " + dinheiro
    )
}
/*
32. Criar uma função exercicio32()
- Solicitar a quantidade de ingressos vendidos
- Para cada ingresso, solicitar o tipo [INTEIRA/MEIA/CORTESIA]
- Contar quantos ingressos são INTEIRA
- Contar quantos ingressos são MEIA
- Contar quantos ingressos são CORTESIA
- Apresentar o total de ingressos por tipo
*/
function exercicio32() {
    let desejada = parseInt(prompt("Digite a qunatidade de ingressos vendidos"))
    let indice = 0
    let inteiro = 0
    let meia = 0
    let cortesia = 0

    while (indice < desejada) {
        indice = indice + 1
        let ingresso = prompt("Qual o tipo de ingresso?")
        if (ingresso === "inteiro") {
            inteiro = inteiro + 1
        }
        else if (ingresso === "meia") {
            meia = meia + 1
        }
        else if (ingresso === "cortesia") {
            cortesia = cortesia + 1
        }
    }
    alert("Inteira: " + inteiro +
        "\nMeia: " + meia +
        "\nCortesia: " + cortesia
    )
}
/*
33. Criar uma função exercicio33()
- Solicitar a quantidade de lanches vendidos em um dia
- Para cada lanche, solicitar o tipo [HAMBURGUER/PIZZA/HOTDOG]
- Contar quantos pedidos foram de hambúrguer
- Contar quantos pedidos foram de pizza
- Contar quantos pedidos foram de hotdog
- Apresentar a quantidade de pedidos por tipo de lanche
*/
function exercicio33() {
    let desejada = parseInt(prompt("Digite a quantidade de lanches"))
    let indice = 0
    let hamburguer = 0
    let pizza = 0
    let hotdog = 0

    while (indice < desejada) {
        indice = indice + 1
        let lanche = prompt("Digite o tipo do lanche [ hamburguer / pizza / hotdog ]")

        if (lanche === "hamburguer") {
            hamburguer = hamburguer + 1
        }
        else if (lanche === "pizza") {
            pizza = pizza + 1
        }
        else if (lanche === "hotdog") {
            hotdog = hotdog + 1
        }
    }
    alert("Hamburguer: " + hamburguer +
        "\nPizza: " + pizza +
        "\nHotdog: " + hotdog
    )
}
/*
34. Criar uma função exercicio34()
- Solicitar a quantidade de livros que deseja cadastrar
- Para cada livro, solicitar a categoria [FICÇÃO/ESTUDO/INFANTIL]
- Contar quantos livros são de Ficção
- Contar quantos livros são de Estudo
- Contar quantos livros são Infantis
- Apresentar a quantidade de livros em cada categoria
*/
function exercicio34() {
    let desejada = parseInt(prompt("Digite a quantidade de livros"))
    let indice = 0
    let ficcao = 0
    let estudo = 0
    let infantil = 0

    while (indice < desejada) {
        indice = indice + 1
        let livro = prompt("Digite o tipo do livro [ ficção / estudo / infantil ]")

        if (livro === "ficção") {
            ficcao = ficcao + 1
        }
        else if (livro === "estudo") {
            estudo = estudo + 1
        }
        else if (livro === "infantil") {
            infantil = infantil + 1
        }
    }
    alert("Ficção: " + ficcao +
        "\nEstudo: " + estudo +
        "\nInfantil: " + infantil
    )
}
/*
35. Criar uma função exercicio35()
- Solicitar o nome de personagens de anime até o usuário digitar sair
- Cada vez que um nome for digitado, exibir uma mensagem com o personagem cadastrado
- Ao digitar sair, encerrar o cadastro
- Apresentar a quantidade total de personagens cadastrados
*/
function exercicio35() {
    let nome = ""
    let qunatidadePersonagens = 0

    while (nome != "sair") {
        nome = prompt("Digite o nome do personagem ou 'sair' para encerrar")

        if (nome != "sair") {
            qunatidadePersonagens = qunatidadePersonagens + 1
        }
    }
}
/*
36. Criar uma função exercicio36()
- Solicitar o nome de jogos favoritos até o usuário digitar sair
- Contar quantos jogos foram cadastrados
- Contar quantos jogos são do gênero RPG (quando o usuário digitar "RPG" em uma pergunta de gênero)
- Ao final, apresentar a quantidade total de jogos e quantos são RPG
*/
function exercicio36() {
    let nome = undefined
    let quantidadeDeJogos = 0
    let rpg = 0

    while (nome != "sair") {
        nome = prompt("Digite o nome do jogo ou 'sair' para encerrar")


        if (nome != "sair") {
            quantidadeDeJogos = quantidadeDeJogos + 1

            let genero = prompt("Digite o genero do seu jogo")
        }

        if (genero === "rpg" || genero === "RPG") {
            rpg = rpg + 1
        }
    }
    alert("Quantidade de jogos: " + quantidadeDeJogos +
        "\nQuantidade de jogos rpg: " + rpg
    )
}
/*
37. Criar uma função exercicio37()
- Solicitar o nome de heróis da Marvel até o usuário digitar sair
- Para cada herói, solicitar também o nível de poder [BAIXO/MEDIO/ALTO]
- Contar quantos heróis têm poder BAIXO, MEDIO e ALTO
- Ao final, apresentar a quantidade em cada nível de poder
*/
function exercicio37() {
    let nome = undefined
    let baixo = 0
    let medio = 0
    let alto = 0

    while (nome != "sair") {
        nome = prompt("Digite o nome do herói ou 'sair' para encerrar")
        if (nome != "sair") {
            let poder = prompt("Digite o nivel de poder [BAIXO/MEDIO/ALTO]")

            if (poder === "baixo") {
                baixo = baixo + 1
            }
            else if (poder === "medio") {
                medio = medio + 1
            }
            else if (poder === "alto") {
                alto = alto + 1
            }
        }
    }
    alert("Herós com poder baixo: " + baixo +
        "\nHeróis com poder medio: " + medio +
        "\nHeróis com poder alto: " + alto
    )
}
/*
38. Criar uma função exercicio38()
- Solicitar o nome de séries geeks (ex: Star Wars, Star Trek, etc.) até o usuário digitar sair
- Para cada série cadastrada, solicitar uma nota de 0 a 10
- Calcular a média das notas das séries informadas
- Ao final, apresentar a quantidade de séries cadastradas e a média das notas
*/
function exercicio38() {
    let nome = undefined
    let soma = 0
    let media = 0
    let qunatidade = 0

    while (nome != "sair") {
        nome = prompt("Digite o nome da série geek ou 'sair' para encerrar")

        if (nome != "sair") {
            qunatidade = qunatidade + 1
            let nota = parseFloat(prompt("Digite uma nota de 0 a 10 para a série"))

            soma = soma + nota
        }
    }
    media = soma / qunatidade

    alert("Quantidade de série: " + qunatidade +
        "\nMédia das notas: " + media
    )
}
/*
39. Criar uma função exercicio39()
- Solicitar o nome de consoles/jogos retrô (ex: SNES, Mega Drive) até o usuário digitar sair
- Contar quantos itens foram cadastrados
- Solicitar para cada item se o usuário já jogou [SIM/NÃO]
- Ao final, apresentar quantos itens foram cadastrados e quantos o usuário já jogou
*/
function exercicio39() {
    let nome = undefined
    let quantidadeTotal = 0
    let quantidadeJogados = 0

    while (nome != "sair") {
        nome = prompt("Digite o nome do jogo/console ou 'sair' para encerrar")

        if (nome != "sair") {
            quantidadeTotal = quantidadeTotal + 1
            let jogou = confirm("Você ja jogou este jogo/console")

            if (jogou === true) {
                quantidadeJogados = quantidadeJogados + 1
            }
        }
    }
    alert("Quantidade de jogos: " + quantidadeTotal +
        "\nQuantidade já jogados: " + quantidadeJogados
    )
}
/*
40. Criar uma função exercicio40()
- Solicitar a distância percorrida em km e o consumo de combustível em litros
- Apresentar um MENU com as opções:
    1 - Calcular consumo médio (km/l)
    2 - Calcular custo da viagem (solicitar o preço do litro de combustível)
    3 - Alterar distância percorrida
    4 - Alterar consumo em litros
    10 - Sair
- Enquanto a opção digitada for diferente de 10
- Executar a opção escolhida e apresentar o resultado
- Ao escolher 10 encerrar o programa
*/
function exercicio40() {
    let menu = undefined

    let distancia = parseFloat(prompt("Digite a distância percorrida em KM"))
    let consumo = parseFloat(prompt("Digite a quantidade de combustivel consumido em litros"))

    while (menu != 10) {
        menu = parseInt(prompt(`
            Menu:
            1 - Calcular consumo médio (km/l)
            2 - Calcular custo da viagem
            3 - Alterar distância percorrida
            4 - Alterar consumo em litros
            10 - Sair`
        ))
        if (menu === 1) {
            let consumoMedio = distancia / consumo
            alert("Consumo medio: " + consumoMedio + " km/l")
        }
        else if (menu === 2) {
            let precoGasolina = parseFloat(prompt("Digite o preço da gasolina"))
            let custo = consumo * precoGasolina

            alert("Custo da viagem: " + custo)
        }
        else if (menu === 3) {
            distancia = parseFloat(prompt("Digite a nova distancia"))
        }
        else if (menu === 4) {
            consumo = parseFloat(prompt("digite a nova qunatidade de combustivel consumido"))
        }
    }
}
/*
41. Criar uma função exercicio41()
- Solicitar o saldo inicial de uma conta bancária
- Apresentar um MENU com as opções:
    1 - Depositar
    2 - Sacar
    3 - Consultar saldo
    10 - Sair
- Enquanto a opção for diferente de 10
- Executar a operação escolhida
- No saque, não permitir sacar valor maior que o saldo
- Ao final, apresentar o saldo final da conta
*/
function exercicio41() {
    let menu = undefined

    let saldo = parseFloat(prompt("Digite o saldo inicial"))

    while (menu != 10) {
        menu = parseInt(prompt(`
    Menu:
    1 - Depositar
    2 - Sacar
    3 - Consultar saldo
    10 - Sair
            `))

        if (menu === 1) {
            let deposito = parseFloat(prompt("Digite o valor que dejesa depositar"))
            saldo = saldo + deposito
        }
        else if (menu === 2) {
            let saque = parseFloat(prompt("Digite o valor que deseja sacar"))

            if (saque > saldo) {
                alert("Você nao possui esse valor")
            }
            else {
                saldo = saldo - saque
            }
        }
        else if (menu === 3) {
            alert("Seu saldo é de: " + saldo)
        }
    }
    alert("O saldo final: " + saldo)
}
/*
42. Criar uma função exercicio42()
- Apresentar um MENU de conversão de temperaturas:
    1 - Celsius para Fahrenheit
    2 - Fahrenheit para Celsius
    10 - Sair
- Enquanto a opção for diferente de 10
- Solicitar a temperatura conforme a opção
- Realizar a conversão e apresentar o resultado
- Voltar ao MENU até o usuário escolher sair
*/
function exercicio42() {
    let menu = undefined

    while (menu != 10) {
        menu = parseInt(prompt(`
            Menu:
            1 - Celsius para Fahrenheit
            2 - Fahrenheit para Celsius
            10 - Sair`))

        if (menu === 1) {
            let temperaturaC = parseInt(prompt("Digite a temperatura em Celsius"))
            let fahrenheit = (temperaturaC * 9 / 5) + 32
            alert("Temperatura: " + fahrenheit)
        }
        else if (menu === 2) {
            let temperaturaF = parseInt(prompt("Digite a temperatura em fahrenheit"))
            let celsius = (temperaturaF - 32) * 5 / 9
            alert("Temperautura: " + celsius)
        }
    }
}
/*
43. Criar uma função exercicio43()
- Apresentar um MENU de calculadora de IMC:
    1 - Calcular IMC
    2 - Ver instruções de uso
    10 - Sair
- Enquanto a opção for diferente de 10
- Na opção 1 solicitar peso e altura, calcular e apresentar o IMC
- Na opção 2 apresentar uma breve explicação do que é IMC
- Voltar ao MENU até o usuário escolher sair
*/
function exercicio43() {
    let menu = undefined

    while (menu != 10) {
        menu = parseInt(prompt(`
            Menu:
            1 - Calcular IMC
            2 - Ver instruções de uso
            10 - Sair`))

        if (menu === 1) {
            let peso = parseFloat(prompt("Digite o peso"))
            let altura = parseFloat(prompt("Digite a altura em metros"))

            let imc = peso / (altura * altura)

            alert("O IMC é de: " + imc.toFixed(2))
        }
        else if (menu === 2) {
            alert(`O IMC (Índice de Massa Corporal) é calculado dividindo o peso (kg) pela altura² (m²) e suas classificações são:

Abaixo de 18,5 → Abaixo do peso

18,5 a 24,9 → Peso normal

25,0 a 29,9 → Sobrepeso

30,0 a 34,9 → Obesidade grau I

35,0 a 39,9 → Obesidade grau II

40,0 ou mais → Obesidade grau III

Essas faixas são usadas como referência para avaliar riscos à saúde.`)
        }
    }
}
/*
44. Criar uma função exercicio44()
- Apresentar um MENU de controle de estoque:
    1 - Adicionar itens ao estoque
    2 - Remover itens do estoque
    3 - Consultar quantidade em estoque
    10 - Sair
- Declarar uma variável estoque iniciando em 0
- Enquanto a opção for diferente de 10
- Executar a opção escolhida atualizando o estoque
- Não permitir remover quantidade maior que o estoque
- Ao sair, apresentar a quantidade final em estoque
*/
function exercicio44() {
    let menu = undefined
    let estoque = 0

    while (menu != 10) {
        menu = parseInt(prompt(`
            Menu:
            1 - Adicionar itens ao estoque
            2 - Remover itens do estoque
            3 - Consultar quantidade em estoque
            10 - Sair`))

        if (menu === 1) {
            let adicionar = parseInt(prompt("Digite a quantidade de itens que desejas adicionar"))
            estoque = estoque + adicionar
        }
        else if (menu === 2) {
            let remover = parseInt(prompt("DIgite a quantidade de itens que desejas retirar"))

            if (remover > estoque) {
                alert("Não possui essa quantidade no estoque")
            }
            else {
                estoque = estoque - remover
            }
        }
        else if (menu === 3) {
            alert("A quantidade em estoque é: " + estoque)
        }
    }
    alert("A quantidade em estoque é: " + estoque)
}
/*
45. Criar uma função exercicio45()
- Apresentar um MENU de lanche:
    1 - Adicionar Hambúrguer (R$ 15,00)
    2 - Adicionar Pizza (R$ 25,00)
    3 - Adicionar Refrigerante (R$ 8,00)
    4 - Ver total parcial
    10 - Finalizar pedido
- Declarar uma variável total começando em 0
- Enquanto a opção for diferente de 10
- Somar o valor do item escolhido ao total
- Permitir consultar o total parcial
- Ao finalizar o pedido, apresentar o valor total
*/
function exercicio45() {
    let menu = undefined
    let total = 0

    while (menu != 10) {
        menu = parseInt(prompt(`
            Menu:
            1 - Adicionar Hambúrguer (R$ 15,00)
            2 - Adicionar Pizza (R$ 25,00)
            3 - Adicionar Refrigerante (R$ 8,00)
            4 - Ver total parcial
            10 - Finalizar pedido`))

        if (menu === 1) {
            total = total + 15.00
        }
        else if (menu === 2) {
            total = total + 25.00
        }
        else if (menu === 3) {
            total = total + 8.00
        }
        else if (menu === 4) {
            alert("O total parcial é: R$" + total.toFixed(2))
        }
    }
    alert("O total foi de: R$" + total.toFixed(2))
}
/*
46. Criar uma função exercicio46()
- Apresentar um MENU de notas de aluno:
    1 - Cadastrar nota
    2 - Ver média das notas
    3 - Ver quantidade de notas cadastradas
    10 - Sair
- Utilizar while para repetir o MENU
- Somar as notas cadastradas e contar quantas foram inseridas
- Na opção 2 calcular e apresentar a média
- Na opção 3 apresentar a quantidade de notas cadastradas
*/
function exercicio46() {
    let menu = undefined
    let soma = 0
    let cadastradas = 0

    while (menu != 10) {
        menu = parseInt(prompt(`
            1 - Cadastrar nota
            2 - Ver média das notas
            3 - Ver quantidade de notas cadastradas
            10 - Sair`))

        if (menu === 1) {
            let nota = parseFloat(prompt("Digite a nova nota"))
            soma = soma + nota
            cadastradas = cadastradas + 1
            alert("Nota cadastrada")
        }
        else if (menu === 2) {
            let media = soma / cadastradas
            alert("A media é: " + media.toFixed(2))
        }
        else if (menu === 3) {
            alert("A quantidade de notas cadastradas são: " + cadastradas)
        }
    }
}
/*
47. Criar uma função exercicio47()
- Apresentar um MENU de pesquisa de satisfação:
    1 - Registrar resposta "Ruim"
    2 - Registrar resposta "Regular"
    3 - Registrar resposta "Bom"
    4 - Ver resumo da pesquisa
    10 - Encerrar pesquisa
- Utilizar contadores para cada tipo de resposta
- Enquanto a opção for diferente de 10
- Registrar a opção escolhida
- Na opção 4 apresentar a quantidade de respostas Ruim, Regular e Bom
- Ao encerrar, mostrar o resumo final da pesquisa
*/
function exercicio47() {
    let menu = undefined
    let ruim = 0
    let regular = 0
    let bom = 0

    while (menu != 10) {
        menu = parseInt(prompt(`
            Menu:
    1 - Registrar resposta "Ruim"
    2 - Registrar resposta "Regular"
    3 - Registrar resposta "Bom"
    4 - Ver resumo da pesquisa
    10 - Encerrar pesquisa`))

        if (menu === 1) {
            ruim = ruim + 1
        }
        else if (menu === 2) {
            regular = regular + 1
        }
        else if (menu === 3) {
            bom = bom + 1
        }
        else if (menu === 4) {
            alert("Respostas 'Ruim' : " + ruim +
                "\nRespostas 'regular' : " + regular +
                "\nRespostas 'bom' : " + bom
            )
        }
    }
    alert("Respostas 'Ruim' : " + ruim +
        "\nRespostas 'regular' : " + regular +
        "\nRespostas 'bom' : " + bom)
}
/*
48. Criar uma função exercicio48()
- Cadastrar quantas vendas desejar
- Para cada venda solicitar:
    - Nome do cliente
    - Valor da compra
    - Forma de pagamento [CRÉDITO/DÉBITO/PIX]
- Calcular o maior valor de compra
- Calcular o menor valor de compra
- Calcular a média das compras
- Contar quantas vendas foram em CRÉDITO, DÉBITO e PIX
- Apresentar um resumo geral das vendas
*/
function exercicio48() {
    let quantidade = parseInt(prompt("Quantas vendas desejas cadastrar"))
    let soma = 0
    let maiorValor = 0
    let menorValor = 99999999999999999999999999999999999
    let credito = 0
    let debito = 0
    let pix = 0
    let indice = 0

    while (indice < quantidade) {
        let nome = prompt("digite o nome do cliente")
        let valor = parseFloat(prompt("Digite o valor da compra"))
        let pagamento = prompt("Digite a forma de pagamento [CRÉDITO/DÉBITO/PIX]")

        if (valor > maiorValor) {
            maiorValor = valor
        }
        if (valor < menorValor) {
            menorValor = valor
        }

        if (pagamento === "credito" || pagamento === "crêdito" || pagamento === "Crêdito") {
            credito = credito + 1
        }
        else if (pagamento === "debito" || pagamento === "Débito" || pagamento === "débito") {
            debito = debito + 1
        }
        else if (pagamento === "pix" || pagamento === "PIX") {
            pix = pix + 1
        }
        indice = indice + 1

        soma = soma + valor
    }
    let media = soma / quantidade

    alert("Maior valor de venda: " + maiorValor +
        "\nMenor valor de venda: " + menorValor +
        "\nMedia das vendas: " + media.toFixed(2) +
        "\nQuantidade de pagamentos no débito: " + debito +
        "\nQuantidade de pagamentos no crêdito: " + credito +
        "\nQuantidade de pagamentos no pix: " + pix
    )
}
/*
49. Criar uma função exercicio49()
- Cadastrar quantos alunos desejar
- Para cada aluno solicitar:
    - Nome
    - Idade
    - Peso
    - Altura
- Calcular o IMC de cada aluno
- Contar quantos alunos estão Abaixo do peso, Peso normal e Acima do peso
- Descobrir qual aluno tem o maior IMC
- Descobrir qual aluno tem o menor IMC
- Calcular a média das idades
- Apresentar um resumo geral dos alunos
*/
function exercicio49() {
    let indice = 0
    let quantidade = parseInt(prompt("Quantos alunos desejas cadastrar"))
    let soma = 0
    let maiorImc = 0
    let menorImc = 9999999999
    let abaixo = 0
    let normal = 0
    let acima = 0

    while (indice < quantidade) {
        let nome = prompt("Digite o nome do aluno")
        let idade = parseInt(prompt("Digite a idade do aluno"))
        let altura = parseFloat(prompt("Digite a altura do aluno em metros"))
        let peso = parseFloat(prompt("Digite o peso do aluno em KG"))

        let imc = peso / (altura * altura)

        if (imc < 18.5) {
            abaixo = abaixo + 1
        }
        else if (imc >= 18.5 && imc < 25) {
            normal = normal + 1
        }
        else if (imc > 25) {
            acima = acima + 1
        }

        if (imc > maiorImc) {
            maiorImc = imc
        }
        if (imc < menorImc) {
            menorImc = imc
        }

        soma = soma + idade

        indice = indice + 1
    }
    let media = soma / quantidade

    alert("Maior IMC: " + maiorImc.toFixed(2) +
        "\nMenor IMC: " + menorImc.toFixed(2) +
        "\nQuantidade de alunos abaixo do peso: " + abaixo +
        "\nQuantidade de alunos com o peso normal: " + normal +
        "\nQuantidade de alunos acima do peso: " + acima +
        "\nMedia de idade dos alunos: " + media
    )
}
/*
50. Criar uma função exercicio50()
- Cadastrar quantos títulos desejar em uma maratona geek
- Para cada título solicitar:
    - Nome do título
    - Tipo [FILME/SÉRIE/ANIME]
    - Nota (0 a 10)
- Calcular a maior nota atribuída
- Calcular a menor nota atribuída
- Calcular a média das notas
- Contar quantos são FILME, quantos são SÉRIE e quantos são ANIME
- Apresentar um resumo geral da maratona
*/
function exercicio50() {
    let quantidade = parseInt(prompt("Digite a quantidade de titulos que dejesas cadastrar"))
    let indice = 0
    let maiorNota = 0
    let menorNota = 999
    let soma = 0
    let filme = 0
    let serie = 0
    let anime = 0

    while (indice < quantidade) {
        let nome = prompt("Digite o nome do titulo")
        let tipo = prompt("Digite o tipo do titulo [FILME/SÉRIE/ANIME]")
        let nota = parseFloat(prompt("Dê uma nota ao titulo de 0 a 10"))

        indice = indice + 1

        if (nota > maiorNota) {
            maiorNota = nota
        }
        if (nota < menorNota) {
            menorNota = nota
        }

        if (tipo === "Filme" || tipo === "filme") {
            filme = filme + 1
        }
        else if (tipo === "serie" || tipo === "Série" || tipo === "série") {
            serie = serie + 1
        }
        else if (tipo === "anime" || tipo === "Anime") {
            anime = anime + 1
        }

        soma = soma + nota
    }
    let media = soma / quantidade

    alert("Maior nota: " + maiorNota +
        "\nMenor nota: " + menorNota +
        "\nMedia das notas: " + media.toFixed(2) +
        "\nQuantidade de filmes: " + filme +
        "\nQuantidade de séries: " + serie +
        "\nQuantidade de animes: " + anime
    )
}