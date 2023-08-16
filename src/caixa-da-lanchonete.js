
class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        var priceT = 0.00;
        var listaMetodoDePagamentos = ['dinheiro','debito','credito'];
        var listaItensNome = [];
        if (!itens.some((element) => true))
            return "Não há itens no carrinho de compra!"

        if(!listaMetodoDePagamentos.includes(metodoDePagamento))
            return 'Forma de pagamento inválida!';
        for(var i =0; i<itens.length; i++)
        {
            var item = itens[i];   
            var nome0_quantidade1 = item.split(',');
            nome0_quantidade1[1] = parseInt(nome0_quantidade1[1])
            
            listaItensNome.push(nome0_quantidade1[0])

            if(parseInt(nome0_quantidade1[1])==0)
                return 'Quantidade inválida!';
            
                var price = nome0_quantidade1[0] === 'cafe' ? 3.00
                :   nome0_quantidade1[0] === 'chantily' ? 1.50
                :   nome0_quantidade1[0] === 'suco' ? 6.20
                :   nome0_quantidade1[0] === 'sanduiche' ? 6.50
                :   nome0_quantidade1[0] === 'queijo' ? 2.00
                :   nome0_quantidade1[0] === 'salgado' ? 7.25
                :   nome0_quantidade1[0] === 'combo1' ? 9.50
                :   nome0_quantidade1[0] === 'combo2' ? 7.50 
                :  -1

            if(price == -1)
                return "Item inválido!";
            else if(nome0_quantidade1[0] === 'queijo'){
                if(!listaItensNome.includes('sanduiche'))    
                    return 'Item extra não pode ser pedido sem o principal';     
            }else if(nome0_quantidade1[0] === 'chantily'){
                if(!listaItensNome.includes('cafe'))
                    return 'Item extra não pode ser pedido sem o principal';
            } 
                 priceT = priceT + price*nome0_quantidade1[1];
        }
        if(metodoDePagamento==="dinheiro")
            priceT = priceT*0.95;
        else if(metodoDePagamento==="credito")
            priceT = priceT*1.03;
        
        priceT = parseFloat(priceT).toFixed(2);
        var Total = ("R$ " + priceT.toString()).toString();
        Total = Total.replace(/\./g,',');
        return Total;
    }
    
}


export { CaixaDaLanchonete };
