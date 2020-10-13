/*Ejercicio 1
item|precio|stock
jeans|30|5
shoes|70|7
t-shirt|15|4
a) Cuantas modas de ropa pueden comprar con esos 200 dolares
b) cuantos pares de zapatos pueden comprar
c) cuantas camisas puedo comprar
d) Cuantos jeans puedo comprar*/

//a
const precio_jean=30;
const precio_shoes=70;
const precio_tshirt=15;

const precio_moda=precio_jean+precio_shoes+precio_tshirt;

let presupuesto=200;
let conjuntos_comprados=0;

while(presupuesto>precio_moda){   
  conjuntos_comprados++;
  presupuesto-=precio_moda;
}
console.log('el numero de conjuntos comprados es: '+conjuntos_comprados);
//b-c-d

let nuevo_presupuesto=200;

let stock_jean=5;
let stock_shoes=7;
let stock_tshirt=4;

let prenda_comprar='jeans';

switch(prenda_comprar){
    case 'shoes':
        let cantidad_zapatos=0;
        while(nuevo_presupuesto>precio_shoes && stock_shoes>0){
            cantidad_zapatos++;
            nuevo_presupuesto-=precio_shoes;
            stock_shoes--;
        }
        console.log(`el total de pares de zapatos comprados es : ${cantidad_zapatos}`);
        break;
    case 'jeans':
        let cantidad_jeans=0;
            while(nuevo_presupuesto>precio_jean && stock_jean>0){
                cantidad_jeans++;
                nuevo_presupuesto-=precio_jean;
                stock_jean--;               
            }
            console.log('el total de jeans comprados es :'+cantidad_jeans);    
          break;
    case 'tshirt':
        let cantidad_tshirt=0;
            while(nuevo_presupuesto>precio_tshirt && stock_tshirt>0){
                cantidad_tshirt++;
                nuevo_presupuesto-=precio_tshirt;
                stock_tshirt--;
               
            }
            console.log('el total de camisas compradas es :'+cantidad_tshirt);      
        break;
        default:
            console.log('No existe esa prenda en nuestro inventario');
}