import "../App.css";
import Navbar from "./navbar";

function MovieList(props) {
  console.log(props);
  const { movieList,addWishList } = props;
  return (
    <>
    <Navbar/>
      <div class="wrapper">
        {movieList.map((item, index) => (
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
                <button onClick={() => addWishList(item)}>
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    
    </>
  );
}

export default MovieList;
