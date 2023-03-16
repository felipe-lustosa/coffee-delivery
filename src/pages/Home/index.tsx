import { useContext, useState } from 'react'
import { CategoryButton, CoffeeListCategories, CoffeeListContainer, CoffeeListHeader, CoffeeListProducts, IconContainer, IntroContainer, IntroItemsContainer, IntroTextContainer, IntroTitleContainer } from "./styles";
import introImage from "../../assets/Intro.png"
import { FaShoppingCart } from "react-icons/fa";
import { ProductItem } from "./components/ProductItem";
import { ProductsContext } from "../../contexts/ProductsContext";
import { Product } from '../../assets/productsData';

const introContent = {
  title: "Encontre o café perfeito para qualquer hora do dia",
  description: "Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora",
  image: introImage,
  items: [
    {
      icon: <FaShoppingCart size={16} color="white" />,
      description: "Compra simples e segura",
      background: "yellow-700"
    },
    {
      icon: <FaShoppingCart size={16} color="white" />,
      description: "Embalagem mantém o café intacto",
      background: "base-text"
    },
    {
      icon: <FaShoppingCart size={16} color="white" />,
      description: "Entrega rápida e rastreada",
      background: "yellow-500"
    },
    {
      icon: <FaShoppingCart size={16} color="white" />,
      description: "O café chega fresquinho até você",
      background: "purple-500"
    },
  ]
}



export function Home() {
  const { products, categories, cart, updateCartProduct } = useContext(ProductsContext)
  const [selectedCategories, setSelectedCategories]: any = useState([])

  function handleSelectedCategory(category: string) {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c: string) => c != category))
    } else {
      setSelectedCategories([...selectedCategories, category]) //
    }
  }

  return (
    <main>
      <IntroContainer id="intro">
        <IntroTextContainer>
          <IntroTitleContainer>
            <h1>{introContent.title}</h1>
            <p>{introContent.description}</p>
          </IntroTitleContainer>
          <IntroItemsContainer>
            {introContent.items.map((item, index) => {
              return <div key={index}>
                <IconContainer iconBackground={item.background}>
                  {item.icon}
                </IconContainer>
                {item.description}
              </div>
            })}
          </IntroItemsContainer>
        </IntroTextContainer>
        <img src={introContent.image} />
      </IntroContainer>

      <CoffeeListContainer>
        <CoffeeListHeader>
          <h1>Nossos cafés</h1>
          <CoffeeListCategories>
            {categories.map((category: string) => {
              return <CategoryButton key={category} onClick={() => handleSelectedCategory(category)} isSelected={selectedCategories.includes(category)} >
                {category}
              </CategoryButton>
            })}
          </CoffeeListCategories>
        </CoffeeListHeader>
        <CoffeeListProducts>
          {products.map((product: Product) => {
            if (selectedCategories.length == 0 || selectedCategories.some((item: string) => product.category.includes(item)))
              return <ProductItem key={product.id} product={product} handleUpdateCartProduct={updateCartProduct} />
          })}
        </CoffeeListProducts>
      </CoffeeListContainer>
    </main>
  )
}