import React from "react";
import Card from 'react-bootstrap/Card';
import shopping2 from './shopping2.jpg'
import Products from './Products'
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Card className="bg-dark text-white border-0 ">
        <Card.Img src={shopping2} alt="Card image" height="550px" />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center">
          <Card.Title className="display-3 fw-bold mb-0"><span className="summer">S</span>ummer <span className="summer">S</span>hopping <span className="summer">D</span>ays</Card.Title>
          <Card.Text>
         CHECK OUT ALL THE TRENDS
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Products/>
    </div>
  );
}

export default Home;
