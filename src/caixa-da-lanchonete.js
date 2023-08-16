
class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        priceT = 0.00;
        listaMetodoDePagamentos = ['dinheiro','debito','credito'];
        if(itens.lenght==0)
            return 'Não há itens no carrinho de compra!'
        else if(!listaMetodoDePagamentos.includes(metodoDePagamento))
            return 'Forma de pagamento inválida!'
        for(var item in itens)
        {
            var nome0_quantidade1 = str.split(',');

            if(nome0_quantidade1[1]<=0)
                return 'Quantidade inválida!'
            
                price = nome0_quantidade1[0] == 'cafe' ? 3.00
                :   nome0_quantidade1[0] == 'chantily' ? 1.50
                :   nome0_quantidade1[0] == 'suco' ? 6.20
                :   nome0_quantidade1[0] == 'sanduiche' ? 6.50
                :   nome0_quantidade1[0] == 'queijo' ? 2.00
                :   nome0_quantidade1[0] == 'salgado' ? 7.25
                :   nome0_quantidade1[0] == 'combo1' ? 9.50
                :   nome0_quantidade1[0] == 'combo2' ? 7.50 
                :  -1
            if(price == -1)
                return 'Item inválido!'
            else if(nome0_quantidade1[0] == 'queijo'){
                if(!itens.includes('sanduiche'))    
                    return 'Item extra não pode ser pedido sem o principal'        
            }else if(nome0_quantidade1[0] == 'chantily'){
                if(!itens.includes('cafe'))
                    return 'Item extra não pode ser pedido sem o principal'
            } 
                 priceT = priceT + price*nome0_quantidade1[1];



        }

        return "";
    }
    
}


export { CaixaDaLanchonete };
