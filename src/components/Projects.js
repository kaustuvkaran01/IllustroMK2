import React from 'react';
import styled from "styled-components";
import Cards from "./Cards";
import { img1 } from "../images/tab-macbook.png";

function Project() {
  return (
    <Container>
      <Cards
        maincon="This is something good.This is something good."
        headcon="Design Content by KKHT "
        githubLink="https://github.com"
      />
    
    </Container>
  );
}

export default Project;

const Container = styled.div`
  display: flex-row;
  margin-bottom: 0;
  padding-bottom: 0;
  height: 100vh;

`;