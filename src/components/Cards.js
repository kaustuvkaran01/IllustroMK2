import React from 'react';
import tachyons from "tachyons";
import styled from "styled-components";
import img1 from "../images/code.jpg";

function Cards (props){
const { maincon, headcon, githubLink } = props;
return (
  <MainContainer>
    <CardContainer>
      <Card>
        <div className="face face1">
          <div className="content">
            <img src={img1} />
            <h3>{headcon}</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>{maincon}</p>
            <a href={githubLink}>Read More</a>
          </div>
        </div>
      </Card>
    </CardContainer>
  </MainContainer>
);
}
export default Cards;


const MainContainer = styled.div`
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;

`;
const CardContainer = styled.div`
    font-family: Ubuntu,sans-serif;
    padding: 0 10rem 0 10rem;
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: space-between;
`;
const Card = styled.div`
    position: relative;
    min-width: 20vw;
    .face {
        width: 20vw;
        height: 200px;
        transition: 0.5s;
    }
    .face.face1 {
        position: relative;
        background: #112;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index:1;
        transform: translateY(100px);
    }

    &:hover .face.face1 {
      background: #ff0057;
      transform: translateY(0);
    }


    .face.face2 .content {
      opacity: 1;
      transition: 0.5s;
    }

    &:hover .face.face1.content {
      opacity: 1;
    }

    .face.face1 .content img {
      max-width: 15vw;
      padding-bottom: 2.15rem;
      padding-left: 2rem;
    }

    .face.face1 .content h3 {
      margin: 10px 0 0;
      padding: 0;
      color: #fff;
      text-align; center;
      font-size: 1.5em;
    }

    .face.face2 {
        position: relative;
        background: #112;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
        box-shadow: 0 20px 50px rgba(0,0,0,0.8);
        transform: translateY(-100px);
        color:#215e65;
    }

    &:hover .face.face2 {
      transform: translateY(0);
    }

    .face.face2 .content p {
      margin: 0;
      padding: 0;
    }
    .face.face2 .content a {
      margin: 15px 0 0;
      display: inline-block;

      text-decoration: none;
      font-weight: 900;
      color: #215e65;
      padding: 5px;
      border: 1px solid #333;
      border-radius: 12rem;
    }

    .face.face2 .content a:hover {
      background: #215e65;
      color: #112;
      border: none;
    }
`;