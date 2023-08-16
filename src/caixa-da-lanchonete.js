
class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        //valor Total SEM desconto ou acréscimo
        var priceT = 0.00;
        //Lista de métodos dos pagamentos disponíveis
        var listaMetodoDePagamentos = ['dinheiro','debito','credito'];
        //Lista dos nomes com os itens da lista para fazer a verificação mais a frente
        //se tem o item principal do item extra
        var listaItensNome = [];
        //Verificar se a lista itens está vazia
        if (itens.length==0)
            return "Não há itens no carrinho de compra!"
        //Verificar se o método de  pagamento está incluso
        //nos pagamentos possíveis
        if(!listaMetodoDePagamentos.includes(metodoDePagamento))
            return 'Forma de pagamento inválida!';

        //Laço de repetição criado para separar os itens e a quantidade e fazer
        //o cálculo do preço total sem disconto ou acrescimo
        for(var i =0; i<itens.length; i++)
        {
            //variável com o item da lista
            var item = itens[i];   
            //variável criada para separar o item e a quantidade, onde
            //index 0 é o nome do item e index 1 é a quantidade
            var nome0_quantidade1 = item.split(',');
            //transformando a quantidade de itens em inteiro
            nome0_quantidade1[1] = parseInt(nome0_quantidade1[1])
            //adicionando o nome dos itens na lista
            listaItensNome.push(nome0_quantidade1[0])
            //verificando se a quantidade de itens é igual a zero
            if(parseInt(nome0_quantidade1[1])==0)
                return 'Quantidade inválida!';
            //operador ternário para pegar o preço do item
                var price = nome0_quantidade1[0] === 'cafe' ? 3.00
                :   nome0_quantidade1[0] === 'chantily' ? 1.50
                :   nome0_quantidade1[0] === 'suco' ? 6.20
                :   nome0_quantidade1[0] === 'sanduiche' ? 6.50
                :   nome0_quantidade1[0] === 'queijo' ? 2.00
                :   nome0_quantidade1[0] === 'salgado' ? 7.25
                :   nome0_quantidade1[0] === 'combo1' ? 9.50
                :   nome0_quantidade1[0] === 'combo2' ? 7.50 
                :  -1
            //Verificar se o item existe na lista da lanchonete
            if(price == -1)
                return "Item inválido!";
            //verificar se o item principal foi pedido antes do item extra
            else if(nome0_quantidade1[0] === 'queijo'){
                if(!listaItensNome.includes('sanduiche'))    
                    return 'Item extra não pode ser pedido sem o principal';     
            }else if(nome0_quantidade1[0] === 'chantily'){
                if(!listaItensNome.includes('cafe'))
                    return 'Item extra não pode ser pedido sem o principal';
            } 
            //Cálculo Total do preço sem desconto ou acréscimo
            priceT = priceT + price*nome0_quantidade1[1];
        }
        //Cálculo para aplicar o desconto
        if(metodoDePagamento==="dinheiro")
            priceT = priceT*0.95;
        //Cálculo para aplicar o acréscimo
        else if(metodoDePagamento==="credito")
            priceT = priceT*1.03;
        //ToFixed falado no desafio para arrendondar para duas casas decimais
        priceT = parseFloat(priceT).toFixed(2);
        //Conversão do tipo Float para tipo String
        var Total = ("R$ " + priceT.toString()).toString();
        //Substituição do '.' para ','
        Total = Total.replace(/\./g,',');
        return Total;
    }
    
}


export { CaixaDaLanchonete };
