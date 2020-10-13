/*Ejercicio 1
item|precio|stock
jeans|30|5
shoes|70|7
t-shirt|15|4
a) Cuantas modas de ropa pueden comprar con esos 200 dolares
b) cuantos pares de zapatos pueden comprar
c) cuantas camisas puedo comprar
d) Cuantos jeans puedo comprar*/

let saldo=200;
const precio_jean=30;
const precio_shoes=70;
const precio_tshirt=15;

let stock_jean=5;
let stock_shoes=7;
let stock_tshirt=4;
//a
let cantidad_compra=(saldo>(precio_jean+precio_shoes+precio_tshirt)
&& stock_jean>0 && stock_shoes>0 && stock_tshirt>0)?'Se puede comprar 1 conjunto':'no se puede comprar';
 console.log(cantidad_compra);
//b,c,d
let prenda='shoes';

switch(prenda){
    case 'jeans':
        let stock=5;
        if(stock>0 && saldo>precio_jean*5){
            console.log('se puede comprar 5 pantalones');
        }  
        break;
    case 'shoes':
        let stock_S=7;
        if(stock_S>0 && saldo>precio_shoes*2){
            console.log('se puede comprar 2 zapatos');
        }     
        break;
    case 't-shirt':
        let stock_T=4;
        if(stock_T>0 && saldo>precio_tshirt*4){
            console.log('se puede comprar 4 camisas');
        }  
}
