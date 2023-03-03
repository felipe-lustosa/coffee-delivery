import coffee1 from '../assets/productImages/coffee1.png'
import coffee2 from '../assets/productImages/coffee2.png'
import coffee3 from '../assets/productImages/coffee3.png'
import coffee4 from '../assets/productImages/coffee4.png'
import coffee5 from '../assets/productImages/coffee5.png'
import coffee6 from '../assets/productImages/coffee6.png'
import coffee7 from '../assets/productImages/coffee7.png'
import coffee8 from '../assets/productImages/coffee8.png'
import coffee9 from '../assets/productImages/coffee9.png'
import coffee10 from '../assets/productImages/coffee10.png'
import coffee11 from '../assets/productImages/coffee11.png'
import coffee12 from '../assets/productImages/coffee12.png'
import coffee13 from '../assets/productImages/coffee13.png'
import coffee14 from '../assets/productImages/coffee14.png'

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string[];
  price: string;
  image: string;
}

export const products = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    category: [
      'TRADICIONAL'
    ],
    price: "R$ 9,90",
    image: coffee1
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    category: [
      'TRADICIONAL'
    ],
    price: "R$ 9,90",
    image: coffee2
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    category: [
      'TRADICIONAL'
    ],
    price: "R$ 9,90",
    image: coffee3
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    category: [
      'TRADICIONAL',
      'GELADO'
    ],
    price: "R$ 9,90",
    image: coffee4
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    category: [
      'TRADICIONAL',
      'COM LEITE'
    ],
    price: "R$ 9,90",
    image: coffee5
  },
  {
    id: 6,
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    category: [
      'TRADICIONAL',
      'COM LEITE'
    ],
    price: "R$ 9,90",
    image: coffee6
  },
  {
    id: 7,
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    category: [
      'TRADICIONAL',
      'COM LEITE'
    ],
    price: "R$ 9,90",
    image: coffee7
  },
  {
    id: 8,
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    category: [
      'TRADICIONAL',
      'COM LEITE'
    ],
    price: "R$ 9,90",
    image: coffee8
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    category: [
      'TRADICIONAL',
      'COM LEITE'
    ],
    price: "R$ 9,90",
    image: coffee9
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    category: [
      'ESPECIAL',
      'COM LEITE'
    ],
    price: "R$ 9,90",
    image: coffee10
  },
  {
    id: 11,
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    category: [
      'ESPECIAL',
      'ALCOÓLICO',
      'GELADO'
    ],
    price: "R$ 9,90",
    image: coffee11
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    category: [
      'ESPECIAL'
    ],
    price: "R$ 9,90",
    image: coffee12
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    category: [
      'ESPECIAL'
    ],
    price: "R$ 9,90",
    image: coffee13
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    category: [
      'ESPECIAL',
      'ALCOÓLICO'
    ],
    price: "R$ 9,90",
    image: coffee14
  },
]