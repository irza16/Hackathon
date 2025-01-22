import { defineQuery } from "next-sanity";

export const allProducts = defineQuery (`
    
    *[_type == *product]{
    _id,
    name,
    description,
    price,
    priceWithoutDiscount,
    badge,
    category,
    stock,
    tags,
    "imageUrl": image.asset->url

    
    }
    `)

    