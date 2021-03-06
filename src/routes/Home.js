import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Header from "../header/Header";
import Navbar from "../header/Navbar";
import Navigation from "../components/Navigation"

import "./Home.css";
import "../components/Movie.css";
import "../header/Header.css";

import "../header/Navbar.css";
import Background from "../header/Background";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    console.log(movies);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="main">
        <section className="container">
          
          {isLoading ? (
            <div className="loader">
              
            
              <span className="loader__text">Loading ...</span>
             
            </div>
            
          ) : (

            <div className="main">
              <Navbar />
              <Navigation />
              <Background />
            
            <div className="title">
        <Header />
            <div className="movies">
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  poster={movie.medium_cover_image}
                  
                  summary={movie.summary}
                  rating={movie.rating}
                />
              ))}
              
            </div>
            </div>

            </div>
            
            
          )}
        </section>
      </div>
    );
  }
}

export default Home;
