import { CategoryButton, CoffeeListCategories, CoffeeListContainer, CoffeeListHeader, CoffeeListProducts, IconContainer, IntroContainer, IntroItemsContainer, IntroTextContainer, IntroTitleContainer } from "./styles";
import introImage from "../../assets/Intro.png"
import { FaShoppingCart } from "react-icons/fa";
import { products } from "../../assets/productsData";
import { ProductItem } from "./components/ProductItem";

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

const coffeeCategories = ["TRADICIONAL", "ESPECIAL", "COM LEITE", "ALCOÓLICO", "GELADO"]

export function Home() {
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
            {coffeeCategories.map(category => {
              return <CategoryButton key={category}>
                {category}
              </CategoryButton>
            })}
          </CoffeeListCategories>
        </CoffeeListHeader>
        <CoffeeListProducts>
          {products.map(product => {
            return <ProductItem key={product.id} product={product} />
          })}
        </CoffeeListProducts>
      </CoffeeListContainer>
    </main>
  )
}