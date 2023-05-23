import {Component} from 'react';
import { getCategories, getProductsFromQuery } from '../services/apiFunctions.js';
import Header from '../components/Header.jsx';

class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      productCategories: [],
      resultGetProductsFromQuery: [],
      searchedProduct: '',
    }

    this.searchProduct = this.searchProduct.bind(this);
  }

  async componentDidMount() {
    const productCategories = await getCategories();
    this.setState({ productCategories });
  }

  async searchProduct(searchedProduct) {
    console.log(searchedProduct);
    const data = await getProductsFromQuery(searchedProduct);
    const { results } = data;
    this.setState({
      resultGetProductsFromQuery: results,
      searchedProduct,});
  };

  render() {
    const { productCategories, resultGetProductsFromQuery, searchedProduct} = this.state;
    
    const categories = productCategories.map(({ id, name }) => (

      <li
        key={ id }
      >
          {name}
      </li>
    ));

    let resultsOfSearch;

    if (resultGetProductsFromQuery.length > 0 && searchedProduct ) {
      resultsOfSearch = resultGetProductsFromQuery.map(({title, thumbnail, price, id }) => <li key={ id } className='productSearched'>
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        </li>);
    } else if (searchedProduct){
      resultsOfSearch = <p>Nenhum produto foi encontrado!</p>;
    }

    return (
      <>
        <Header searchProduct={this.searchProduct}/>
        <div className='mainContainer'>
          <div className='categories'>
            <h3>Categorias</h3>
            {categories}
          </div>
        
          <div className='resultsOfSearch'>
            {resultsOfSearch}
          </div>

        </div>
      </>
    );
  }
}

export default ProductList;