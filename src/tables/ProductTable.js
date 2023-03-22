import React from 'react';
import styled from 'styled-components';

const Table = styled.div`


table {
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
  text-align: center;
  padding: 0 2rem;


  h2 {
    margin-top: 2rem;
    font-weight: 900;
    color: #785afd;
    font-family: "Montserrat",Sans-serif;
    font-size: 32px;
    letter-spacing: -1.8px;
  }

  thead {
    @media screen and (max-width: 768px) { width: 1400px;}
    tr{
      th{
        width: 10vw;
        font-weight: 700;
        color: #785afd;
        font-family: "Montserrat",Sans-serif;
        font-size: 16px;
       
        
        :nth-child(4) {
          width: 20vw;
        }

        @media screen and (max-width: 768px){
          width: 300px !important;
        }
      }
    }
  }

  tbody {
    margin-bottom: 2rem;
    
    @media screen and (max-width: 768px) { width: 1400px;}
    tr {
      td {        
        /* border: 1px solid gray; */
        width: 10vw;
        margin: 0;
        padding: 1rem 0;
        color: #58595b;
        font-family: "Open Sans",Sans-serif;
        font-size: 15px;
        font-weight: 300;

        :nth-child(4) {
          width: 20vw;
        }

        #product-image {
          width: 40px;
          height: 40px;
          margin: 0 !important;
          padding: 0;
          display: inline-block;

          img {
            width: 50px;
            height: 50px;
            margin: 0 !important;
            padding: 0;
            object-fit: cover;
          }
        }

          .button {
            font-family: "Open Sans",Sans-serif;
            font-size: 14px;
            font-weight: 400;
            border-radius: 6px;
            border: 1px solid white;
            cursor: pointer;

            :nth-child(1){
            background-color: #785afd;
            color:white;
            }
            :nth-child(2){
            background-color: red;
            color:white;}

            a {
              text-decoration: none;
              color:white;
            }
          }

          @media screen and (max-width: 768px){
          width: 300px !important;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 90vw;
    align-items: flex-start;
  }
}
`;


const ProductTable = (props) => (
  <Table>
    <table>
      <h2> Listagem de produtos </h2> 
      <thead>
        <tr>
          <th>Produto</th>
          <th>Foto do produto</th>
          <th>Ações</th>
          <th>Descrição</th>
          <th>Medidas</th>
          <th>Peso do produto</th>
          <th>Codigo de barras</th>
          <th>Categoria</th>
          <th>Preço</th>
          <th>Data de aquisição</th>
        </tr>
      </thead>
      <tbody>
        {props.products.length > 0 ? (
          props.products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td><div id="product-image"><img alt="imagem legal" src={product.image} /></div></td>
              <td class="td-buttons">
                <button className="button muted-button" onClick={() => {props.editRow(product)}}><a href="#produtos-link">Editar</a></button>
                {/* Using Props to alter DB state and erase the data*/}
                <button className="button muted-button" onClick={() => props.deleteProduct(product.id)}>Deletar</button>
              </td>
              <td>{product.description}</td>
              <td>{product.height} x {product.width} <br/>x {product.depth}CM</td>
              <td>{product.weight}KG</td>
              <td>{product.barcode}</td>
              <td>{product.categories}</td>
              <td>R${product.price}</td>
              <td>{product.aquisitondate.split("-").reverse().join("-")}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>Sem produtos</td>
          </tr>
        )}
      </tbody>
    </table>
  </Table>
)

export default ProductTable