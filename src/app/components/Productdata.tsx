import Image1 from "../assets/Image.png";
import Image2 from "../assets/Image (1).png";
import Image3 from "../assets/Image (2).png";
import Image4 from "../assets/Image (3).png";
import Image5 from "../assets/Image (5).png";
import Image6 from "../assets/Image (6).png";
import Image8 from "../assets/Image (8).png";
import Image9 from "../assets/Image (9).png";
import BuyIcon from "../assets/Buy 3.png";
import CartIcon from "../assets/Group.png";

export const AllProducts = [
  {
    id: 1,
    name: "Library Stool Chair",
    textcolor: "#007580",
    price: 20,
    oldPrice: null,
    image: Image1,
    badge: { text: "New", color: "#01AD5A" },
    cartIcon: BuyIcon,
    cartBg: "#029FAE",
  },
  {
    id: 2,
    name: "Pink Stool Chair",
    price: 20,
    oldPrice: 30,
    image: Image2,
    badge: { text: "Sales", color: "#F5813F" },
    cartIcon: CartIcon,
    cartBg: "#F0F2F3",
  },
  {
    id: 3,
    name: "Library Stool Chair",
    price: 20,
    oldPrice: null,
    image: Image3,
    badge: null,
    cartIcon: CartIcon,
    cartBg: "#F0F2F3",
  },
  {
    id: 4,
    name: "Library Stool Chair",
    price: 20,
    oldPrice: null,
    image: Image4,
    badge: null,
    cartIcon: CartIcon,
    cartBg: "#F0F2F3",
  },
];

export const R2Products = [
  {
    id: 5,
    name: "Library Stool Chair",
    price: 20,
    oldPrice: null,
    image: Image5,
    badge: { text: "New", color: "#01AD5A" },
    cartIcon: BuyIcon,
    cartBg: "#029FAE",
  },
  {
    id: 6,
    name: "Library Stool Chair",
    price: 20,
    oldPrice: 30,
    image: Image8,
    badge: { text: "Sales", color: "#F5813F" },
    cartIcon: CartIcon,
    cartBg: "#F0F2F3",
  },
  {
    id: 7,
    name: "Library Stool Chair",
    price: 20,
    oldPrice: null,
    image: Image9,
    badge: null,
    cartIcon: CartIcon,
    cartBg: "#F0F2F3",
  },
  {
    id: 8,
    name: "Library Stool Chair",
    price: 20,
    oldPrice: null,
    image: Image1,
    badge: null,
    cartIcon: CartIcon,
    cartBg: "#F0F2F3",
  },
];

export const R3Products = [
  {
    id: 9,
    name: "Library Stool Chair",
    price: 20,
    oldPrice: null,
    image: Image4,
    badge: { text: "New", color: "#01AD5A" },
    cartIcon: BuyIcon,
    cartBg: "#029FAE",
  },
  AllProducts.find((product) => product.id === 2),
  AllProducts.find((product) => product.id === 3),
  {
    id: 12,
    name: "Library Stool Chair",
    price: 20,
    oldPrice: null,
    image: Image6,
    badge: null,
    cartIcon: CartIcon,
    cartBg: "#F0F2F3",
  },
];

export const FeaturedProducts = AllProducts.slice(0, 4);
