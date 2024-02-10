import React from 'react'
import Productdata from '../Data/ProductData'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';


function Block1(props) {
  let filter = Productdata.filter((a) => a.category == props.tt)
  return (
    <>
      <div className="container py-4">
        <h3 className='text-uppercase border-bottom border-danger border-3 '>{props.tt}</h3>
        <OwlCarousel className='owl-theme' autoplay={true} autoplayTimeout={1000}  autoplayHoverPause={true} items={6} loop margin={10} nav>
          {filter.slice(0, 10).map((ii) => (
            <div className="product-grid">
              <div className="product-image">
                <Link to={`/details/${ii.id}`}>
                  <img className="pic-1" src={ii.thumbnail}/>
                  <img className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg" />
                </Link>
                <ul className="social">
                  <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
                  <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                  <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
                </ul>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">20%</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star disable" />
              </ul>
              <div className="product-content">
                <h3 className="title"><a href="#">{ii.title}</a></h3>
                <div className="price">Price=${ii.price}
                  <span>Discount Price={ii.discountPercentage}%</span>
                </div>
                <a className="add-to-cart" href>+ Add To Cart</a>
              </div>
            </div>

          ))}

        </OwlCarousel>
      </div>
    </>
  )
}

export default Block1