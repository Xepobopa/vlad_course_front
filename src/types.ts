import {ShopEnum} from "./enums";

export type CardType = {
    id: string,
    uuid: string
    title: string,
    photo: string,
    price: number,
    discount: number,
    type: ShopEnum
    desc?: string
}

export type ProductType = CardType & {
    desc: string
}

export type Order = ProductType & {
    quantity: number
}