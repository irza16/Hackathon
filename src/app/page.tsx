import Header from '../app/components/Header'
import Logo from '../app/components/Logo';
import Feature from '../app/components/Feature';
import Categories from '../app/components/Categories';
import Hotcategory from '../app/components/Hotcategory';
import Ourproducts from '../app/components/Ourproducts';
import { FeaturedProducts } from './components/Productdata';




export default function Home () {
  return (
    
    <div>
      
      <Header />
      <Logo/>
      <Feature heading="Featured Products" products={FeaturedProducts} top ="1270px"/>
      <Categories />
      <Hotcategory />
      <Ourproducts />
      
       </div>

  )
}