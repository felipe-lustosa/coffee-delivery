import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  row-gap: 0.75rem;

  background: ${props => props.theme['base-card']};
  /* padding: 1.25rem; */
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;
  text-align: center;

  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme['base-button']};

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;

  margin-bottom: 0.25rem;
  flex-wrap: wrap;
`

export const ProductCategoryButton = styled.button`
  border: none;
  border-radius: 16px;
  padding-block: 0.375rem;
  padding-inline: 0.75rem;
  background: ${props => props.theme['yellow-300']};;
  background-origin: 10px;
  color: ${props => props.theme['yellow-700']};

  font-size: 0.625rem;
  font-weight: 700;

`

export const PriceContainer = styled.div`
  color: ${props => props.theme['base-text']};

  span {
    font-size: ${props => props.theme['text-md']};
    font-weight: 700;
  }

`

export const CartDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  align-items: start;
  justify-content: start;
  gap: 0.5rem;

  h2 {
    font-size: ${props => props.theme['text-md']};
    /* 1.25rem */
    font-weight: 700;
    color: ${props => props.theme['base-subtitle']}
  }
`

export const ProductAmountContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ProductAmountStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;


  /* Base/Button */

  background: ${props => props.theme['base-button']};
  border-radius: 6px;

/* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  button {
    background: ${props => props.theme['base-button']};
    color: ${props => props.theme['purple-700']};
    display: flex;
    align-items: center;
    gap: 0.25rem;
    border: none;
    font-size: 0.75rem;
  }

  font-size: ${props => props.theme['text-md']};
  font-weight: 400;
`

export const CartButton = styled.button`
  border: none;
  padding: 0.5rem;
  background-color: ${props => props.theme['purple-700']};
  border-radius: 8px;
  height: 2.375rem;
  width: 2.375rem;
`

export const CartContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`