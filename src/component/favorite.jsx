import React from 'react'
import Navbar from './navbar'

function Favorite(props) {
    const {wishList,deleteWishList}=props
    return (
        <>
    <Navbar/>
      <div class="wrapper">
        {wishList.map((item, index) => (
          <div class="card" key={index}>
            <img src={item.image} alt={item.title} />
            <div class="info">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <h2>
                <i class="fa fa-star" aria-hidden="true"></i> 9.4
              </h2>
              <div className="btn-con">
                <div>
                  <button class="idea">Mulai Nonton</button>
                  <button>Trailer</button>
                </div>
                <button onClick={() => deleteWishList(item)}>
                  Delete from Wishlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    
    </>
    )
}

export default Favorite
