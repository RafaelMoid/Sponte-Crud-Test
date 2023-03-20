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
      aquisitondate: '11-01-1990',
      image: '' 
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
      aquisitondate: '11-01-1990',
      image: '' 
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
      aquisitondate: '11-01-1990',
      image: '' 
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  const FlexLarge = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35%;
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
  `;

  const ProductList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
  `;

  return ( 
    <Container>
      <div class="header-container">
        <img class="sponte-logo" src="https://www.sponte.com.br/wp-content/uploads/2020/02/LogoSponteBranca.svg" />
        <div>
          <h1>Sponte Product CRUD system</h1>
          <h2>by Rafael Varela</h2>
        </div>
      </div>
      <FlexRow>
        <FlexLarge>
          {editing ? (
          <FlexMid>
            <h2>Editar produto</h2>
            <EditProductForm
              setEditing={setEditing}
              currentProduct={currentProduct}
              updateProduct={updateProduct}
            />
          </FlexMid>
          ) : (
          <FlexMid>
            <h2>Adicionar produto</h2>
            <AddProductForm addProduct={addProduct} />
          </FlexMid>
            )}
        </FlexLarge>
          <ProductList>
            <h2> Listagem de produtos </h2> 
            {/* Passing the deleteProduct and EditRow as Props to Product Table */}
            <ProductTable products = { products } editRow={editRow} deleteProduct = {deleteProduct} />
          </ProductList>
      </FlexRow>
    </Container>
)
}

export default App