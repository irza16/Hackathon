 export const AllProducts = [
    
{


      id: 1,
      name: "Library Stool Chair",
      textcolor: "#007580",
      price: 20,
      oldPrice: null,
      image: require("../assets/Image.png"),
      badge: { text: "New", color: "#01AD5A" },
      cartIcon: require("../assets/Buy 3.png"),
      cartBg: "#029FAE",
    },
    {
      id: 2,
      name: "Pink Stool Chair",
      price: 20,
      oldPrice: 30,
      image: require("../assets/Image (1).png"),
      badge: { text: "Sales", color: "#F5813F" },
      cartIcon: require("../assets/Group.png"),
      cartBg: "#F0F2F3",
    },
    
    {
      id: 3,
      name: "Library Stool Chair",
      price: 20,
      oldPrice: null,
      image: require("../assets/Image (2).png"),
      badge: null, 
      cartIcon: require("../assets/Group.png"),
      cartBg: "#F0F2F3",
    },
  
    {
      id: 4,
      name: "Library Stool Chair",
      price: 20,
      oldPrice: null,
      image: require("../assets/Image (3).png"),
      badge: null,
      cartIcon: require("../assets/Group.png"),
      cartBg: "#F0F2F3",
    },

]
  
export const R2Products = [


{

    id: 5,
    name: "Library Stool Chair",
    price: 20,
    oldPrice: null,
    image: require("../assets/Image (5).png"),
    badge: { text: "New", color: "#01AD5A" },
    cartIcon: require("../assets/Buy 3.png"),
    cartBg: "#029FAE",
  },


  {
    id: 6,
    name: "Library Stool Chair",
    price: 20,
    oldPrice: 30,
    image: require("../assets/Image (8).png"),
    badge: { text: "Sales", color: "#F5813F" },
    cartIcon: require("../assets/Group.png"),
    cartBg: "#F0F2F3",
  },
  
  {
    id: 7,
    name: "Library Stool Chair",
    price: 20,
    oldPrice: null,
    image: require("../assets/Image (9).png"),
    badge: null, 
    cartIcon: require("../assets/Group.png"),
    cartBg: "#F0F2F3",
  },

  {
    id: 8,
    name: "Library Stool Chair",
    price: 20,
    oldPrice: null,
    image: require("../assets/Image.png"),
    badge: null,
    cartIcon: require("../assets/Group.png"),
    cartBg: "#F0F2F3",
  },

   
    
  

  ];

  export const R3Products = [


    {
    
        id: 9,
        name: "Library Stool Chair",
        price: 20,
        oldPrice: null,
        image: require("../assets/Image (4).png"),
        badge: { text: "New", color: "#01AD5A" },
        cartIcon: require("../assets/Buy 3.png"),
        cartBg: "#029FAE",
      },
    
    
      AllProducts.find((product) => product.id === 2),
    
      AllProducts.find((product) => product.id === 3),
    
      {
        id: 12,
        name: "Library Stool Chair",
        price: 20,
        oldPrice: null,
        image: require("../assets/Image (6).png"),
        badge: null,
        cartIcon: require("../assets/Group.png"),
        cartBg: "#F0F2F3",
      },
    
       
        
      
    
      ];
  
export const FeaturedProducts = AllProducts.slice(0, 4);
