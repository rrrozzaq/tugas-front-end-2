import logo from "./logo.svg";
import "./App.css";
import image1 from "./asset/poster 1.jpg";
import image2 from "./asset/poster 2.jpg";
import image3 from "./asset/poster 3.jpg";
import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom"
import MovieList from "./component/movielist";
import Navbar from "./component/navbar";
import Favorite from "./component/favorite";


function App() {
  const movieList = [
    {
      image: image1,
      title: "18 Again",
      description: `Kisah seorang suami yang tiba-tiba kembali ke masa mudanya saat dia
      berusia 18 tahun. Hong Dae-young adalah seorang bintang bola basket
      semasa SMA. Namun, dirinya yang berusia 37 tahun hanyalah pria
      biasa. Saat menyesali hidupnya, dia kembali ke tubuhnya yang berusia
      18 tahun dengan jiwa berusia 37 tahun. Dia mengganti namanya menjadi
      Go Woo-young, dan mulai menjalani kehidupan barunya dengan identitas
      kedua ini.`,
    },
    {
      image: image3,
      title: "Tenggelamnya Kapal van der Wijck",
      description: `Berlatar tahun 1930-an, dari tanah kelahirannya Makassar, Zainuddin
      berlayar menuju kampung halaman ayahnya di Batipuh, Padang Panjang.
      Di sana, ia bertemu dengan Hayati, seorang gadis cantik jelita yang
      menjadi bunga di persukuannya. Kedua muda-5mudi itu jatuh cinta.
      Namun, adat dan istiadat yang kuat meruntuhkan cinta mereka berdua`,
    },
    {
      image: image2,
      title: "Bad Boys for Life",
      description: `Film ini bercerita tentang dua sahabat yang bernama Mike Lowrey
      (Will Smith) dan Marcus Burnett (Martin Lawrence) yang bekerja
      bersama sudah puluhan tahun di kepolisian Miami. Mereka sering
      beraksi berdua dalam menumpas kejahatan. Dalam aksinya menumpas
      kejahatan mereka sering bertingkah konyol layaknya seorang sahabat.
      Mereka juga selalu berdebat satu sama lain termasuk masalah tak
      penting.`,
    },
  ];

  const [wishList, setWishList] = useState([]);
  const addWishList = (item) => {
    setWishList([...wishList, item]);
  };
  const deleteWishList=(item)=>{
    setWishList(wishList.filter(list=>list.title !== item.title))
  }
  console.log(wishList);
  return (
    <BrowserRouter>
    
    <Routes>
      <Route exact path="/" element={<MovieList movieList={movieList} addWishList={addWishList}/>}/>
      <Route exact path="/favorite" element={<Favorite wishList={wishList} deleteWishList={deleteWishList}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
