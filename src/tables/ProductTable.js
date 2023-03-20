import React from 'react'

const ProductTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Produto</th>
        <th>Descrição</th>
        <th>Medidas</th>
        <th>Peso do produto</th>
        <th>Codigo de barras</th>
        <th>Categoria</th>
        <th>Preço</th>
        <th>Data de aquisição</th>
        <th>Foto do produto</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {props.products.length > 0 ? (
        props.products.map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>{product.height} x {product.width} x {product.depth}CM</td>
            <td>{product.weight}</td>
            <td>{product.barcode}</td>
            <td>{product.categories}</td>
            <td>{product.price}</td>
            <td>{product.aquisitondate}</td>
            <td>{product.image}</td>
            <td>
              <button className="button muted-button" onClick={() => {props.editRow(product)}}>Editar</button>
              {/* Using Props to alter DB state and erase the data*/}
              <button className="button muted-button" onClick={() => props.deleteProduct(product.id)}>Deletar</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Sem produtos</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ProductTable