import { Product } from "./types";
import Image from 'next/image'
import P1 from '/public/p1.webp'
import P2 from '/public/p2.webp'
import P3 from '/public/p3.webp'
import P4 from '/public/p4.webp'
import P5 from '/public/p5.webp'
import P6 from '/public/p6.webp'

export const Products:Product[] = [
    {
        id:1,
        title:'Sweatshirt',
        price:80,
        category:'female',
        image:P1
    },
    {
        id:2,
        title:'Sweatshirt',
        price:30,
        category:'female',
        image:P2
    },
    {
        id:3,
        title:'Sweatshirt',
        price:50,
        category:'female',
        image:P3
    },
    {
        id:4,
        title:'Sweatpant',
        price:80,
        category:'female',
        image:P4
    },
    {
        id:5,
        title:'Sweatpant',
        price:60,
        category:'female',
        image:P5
    },
    {
        id:6,
        title:'Hoodie',
        price:70,
        category:'female',
        image:P6
    },
];