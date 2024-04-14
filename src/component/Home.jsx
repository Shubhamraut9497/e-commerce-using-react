import React from "react";
import Card from 'react-bootstrap/Card';
import banner from '../ecommerce-banner.jpg'
import Products from './Products'
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Card className="bg-dark text-white border-0 " style={{position:"relative"}}>
        <div className="overlay"></div>
        <Card.Img src={banner} alt="Card image"  />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title className="display-3 fw-bold mb-0">Summer Shopping Days</Card.Title>
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
