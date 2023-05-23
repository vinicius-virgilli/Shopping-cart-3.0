import { Component } from "react";
import { Link } from 'react-router-dom';
import cartLogo from '../images/cartLogo.png'
import iconePesquisar from '../images/iconePesquisar.svg'
import rico from '../images/rico.png'
class Header extends Component {
  constructor() {
    super()

    this.state = {
      searchedProduct: '',
    }

    this.saveSearchedProduct = this.saveSearchedProduct.bind(this);
    this.OnSarchProduct = this.OnSarchProduct.bind(this);
  }

  saveSearchedProduct({ target }) {
    const { value } = target;
    this.setState(() => ({
      searchedProduct: value,
    }));
  };

  async OnSarchProduct() {
    const { searchProduct } = this.props;
    const { searchedProduct } = this.state;
    searchProduct(searchedProduct);
  }
  render() {
    const { searchedProduct } = this.state;
    return (
      <>
        <header>
          <section className="logo">
            <img src={rico} alt="logo" />
            <h1>Shopping cart 3.0</h1>
          </section>
          <div className='searchField'>
            <label htmlFor="searchField">
            <input
              id='searchField'
              value={searchedProduct}
              placeholder="procure por produto"
              type="text"
              onChange={ this.saveSearchedProduct }
            />
            </label>
            <button
              onClick={ this.OnSarchProduct }
            >
              <img alt='ícone Pesquisar' src={iconePesquisar}></img>
            </button>
          </div>           
          <Link to="/cart"><img src={cartLogo} alt="logo do carrinho de compras" className="iconeCart"/></Link>
        </header>
      </>
    )
  }
}

export default Header;