import React from 'react';
import styled from "styled-components";
import Card from "./Card1";
import { img1 } from "../images/tab-macbook.png";

function Team() {
  return (
    <Container>
      <div className="header">
        <div className="headerText">
          <span className="heading">
            <h2 style={{ fontWeight: "strong", padding: "5%" }}>
              Endless possibilities with computer vision AI
            </h2>
            <p
              style={{
                justifyContent: "center",
                padding: "10%",
                fontSize: "large",
                paddingTop: "2%"
              }}
            >
              Gather valuable business insights from images, data and text using
              machine learning, image recognition and computer vision.
              <br /> Use data to drive business operations and enhance the
              customer experience. From improving the digital experience to
              monitoring physical spaces, the practical possibilities of
              computer vision AI are endless.
            </p>
          </span>
        </div>
      </div>

      <div className="Team">
        <div className="Team1">
          <Card id="1" name="This is it" className="card"/>
          <Card id="2" name="This is not " className="card"/>
          <Card id="3"  className="card"/>
        </div>
        <div className="Team2">
          <Card id="7" name="This cannot be done." className="card"/>
          <Card id="8" name="This cannot be seen." className="card"/>
          <Card id="9" name="This cannot be made." className="card"/>
          <Card  className="card"/>
          <Card  className="card"/>
        </div>
        <div className="Team3">
          <Card id="4" name="HIt"  className="card"/>
          <Card id="5" name="Hi"  className="card"/>
          <Card id="6" name="This is it"  className="card"/>
        </div>
      </div>
    </Container>
  );
}

export default Team;

const Container = styled.div`
  margin-top: 0;
  background: #112;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 0;
  color: var(--main-dark);
  
  .header {
    display: flex;
    position: relative;
    min-height: 100vh;
    width: auto;
    margin: auto;
    max-height: 100vh;
    align-items: center;
    background: url("https://source.unsplash.com/random");
    background-size: cover;
    background-repeat: no-repeat;
  }
  .headerText{
    background: rgba(0,0,0,0.5);
    color: white;
    width: 60%;
    margin: auto;
  }
  .Team {
    display: flex;
    width: 80%;
    background: #112;
    margin: auto;
    justify-content: space-around;
    height: 80%;
    align-items: center;
    
  }
  .Team1 {
   display: flex;
   flex-direction: column;
   fle

  }
  .Team2 {
  
    display: flex;
    flex-direction: column;
 
    
  }

  .Team3 {
   
    display: flex;
    flex-direction: column;
 

  }
  span {
    text-align: center;
    padding-top: 20rem;
  }
`;