import React, { useState } from 'react';
import ProductTable from './tables/ProductTable';
import AddProductForm from './forms/AddProductForm';
import EditProductForm from './forms/EditProductForm';
import styled from 'styled-components';

const App = () => {

  // Fictional Data
  const productsData = [{
      id: 1,
      title: 'PC Gammer',
      description: '32GB Ram, Octacore 9i, SDD 500GB, Cooling system, Great product and you should buy it',
      height: '40',
      width: '32',
      depth: '20',
      weight: '2',
      barcode: '13284687',
      categories: 'Pc Gammer',
      price: '10000',
      aquisitondate: '1990-01-11',
      image: 'images/pcgamer1.jpg' 
    },
    {
      id: 2,
      title: 'PC Gammer 2',
      description: '32GB Ram, Octacore 9i, SDD 500GB, Cooling system, Great product and you should buy it',
      height: '40',
      width: '32',
      depth: '20',
      weight: '2',
      barcode: '13284687',
      categories: 'Pc Gammer',
      price: '10000',
      aquisitondate: '1990-01-11',
      image: 'images/pcgamer2.jpg' 
    },
     {
       id: 3,
      title: 'PC Gammer 3',
      description: '32GB Ram, Octacore 9i, SDD 500GB, Cooling system, Great product and you should buy it',
      height: '40',
      width: '32',
      lenght: '20',
      weight: '2',
      barcode: '13284687',
      categories: 'Pc Gammer',
      price: '10000',
      aquisitondate: '1990-01-11',
      image: 'images/pcgamer3.jpg' 
    },
  ]

  const [products, setProducts] = useState(productsData)
  // Editing state logic for modal
  const [editing, setEditing] = useState(false)
  // Inicial form state Empty waiting the selected entry for colect it's data
  const initialFormState = {
    id: null,
    title: '',
    description: '',
    height: '',
    width: '',
    depth: '',
    weight: '',
    barcode: '',
    categories: '',
    price: '',
    aquisitondate: '',
    image: '' ,
  }
  // Way to see and updtate who the current product being edit is
  const [currentProduct, setCurrentProduct] = useState(initialFormState)

  // Because we're not using a API or a Database i've created this function to autoincremet the product id
  // But if we have one of those it probably wouldn't be necessary.
  const addProduct = (product) => {
    product.id = products.length + 1
    setProducts([...products, product])
  }

  // Delete arrow function to delete data :)
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  // Update arrow function to alter data of DB
  const editRow = (product) => {
    setEditing(true)

    setCurrentProduct({
      id: product.id,
      title: product.title,
      description: product.description,
      height: product.height,
      width: product.width,
      depth: product.depth,
      weight: product.weight,
      barcode: product.barcode,
      categories: product.categories,
      price: product.price,
      aquisitondate: product.aquisitondate,
      image: product.image, 
    })
  }

  // taking two parameters - the updated product object, and the id
  // and we'll use a ternary operation to map through the products
  const updateProduct = (id, updatedProduct) => {
    setEditing(false)
  
    setProducts(products.map((product) => (product.id === id ? updatedProduct : product)))
  }

  // Styled Components
  const Container = styled.div`
    width: calc(100vw - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    .header-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      position: relative;

      .sponte-logo {
        position: absolute;
        left: 30px;
        top: 30px;
        width: 200px;
      }

      div {
        h1 {
          color: #fff;
          font-size: 30px;
          font-weight: 900;
          letter-spacing: -1px;
          margin: 30px 0 0 0;
          text-align: center;
        }
        
        h2 {
          color: #fff;
          font-size: 35px;
          font-weight: 300;
          letter-spacing: -.7px;
          margin: 0 0 30px 0;
          text-align: center;
        }
      }
    }

  `;

  const FlexRow = styled.div`
    width: 95vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

  const FlexLarge = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95vw;
    background-color: white;
    border-radius: 8px;
    margin-bottom: 2rem;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
    text-align: center;

    h2 { box-shadow: 0px; }
    `;

const FlexMid = styled.div`
    box-shadow: 0px;
    width: 80%;
    margin-bottom: 2rem;

    h2 {
      margin-top: 2rem;
      font-weight: 900;
      color: #785afd;
      font-family: "Montserrat",Sans-serif;
      font-size: 32px;
      letter-spacing: -1.8px;
    }
  `;

  const ProductList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95vw;
  `;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-decoration: none;
  position: fixed;
  top: 88vh;
  right: 2rem;

  a {
    text-decoration: none;
  :nth-child(1){
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    background-color: white;
    padding: 2px;
    border-radius: 50px;
    max-width: 50px;

    :hover {
      scale: 1.1;
    }
  
    img{
    max-width: 50px;
    }
  }
  }
`;

const NewProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-decoration: none;
  position: absolute;
  top: 4rem;
  right: 2.5vw;
  background-color: #785afd;
  text-decoration: none;
  border-radius: 6px;
  padding: 21px;
  cursor: pointer;
  z-index: 1;
  -webkit-box-shadow: 0px 8px 24px -9px #000;
  box-shadow: 0px 8px 24px -9px #000;


  
  :hover{
    background-color: #6d52e3;
  }

  a {
    cursor: pointer;
    color: white;
    text-decoration: none;
    font-weight: 700;
    text-align: center;

      .seta {
        margin-left: 18px;
        width: 14px;
      }
    }

`;

  return ( 
    <Container>
      <NewProduct>
        <a href="#cadastro-produtos">Adicionar novo produto <img class="seta" src="seta.png" /></a>
        
      </NewProduct>
      <ContactWrapper>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=5581995402751"><img src="wpp.png" /></a>
      </ContactWrapper>
      <div class="header-container">
        <img class="sponte-logo" src="https://www.sponte.com.br/wp-content/uploads/2020/02/LogoSponteBranca.svg" />
        <div>
          <h1>Sponte Product CRUD system</h1>
          <h2>by Rafael Varela</h2>
        </div>
      </div>
      <FlexRow>
        <ProductList>
          {/* Passing the deleteProduct and EditRow as Props to Product Table */}
          <ProductTable products = { products } editRow={editRow} deleteProduct = {deleteProduct} />
        </ProductList>
        <FlexLarge>
          {editing ? (
          <FlexMid id="produtos-link">
            <h2>Editar produto</h2>
            <EditProductForm
              setEditing={setEditing}
              currentProduct={currentProduct}
              updateProduct={updateProduct}
            />
          </FlexMid>
          ) : (
          <FlexMid id="cadastro-produtos">
            <h2>Adicionar produto</h2>
            <AddProductForm addProduct={addProduct} />
          </FlexMid>
            )}
        </FlexLarge>
      </FlexRow>
    </Container>
)
}

export default App