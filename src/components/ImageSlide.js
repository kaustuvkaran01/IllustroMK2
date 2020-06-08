import React from "react";
import styled from "styled-components";
function ImageSlide = ({ url }) => {
    
    return (
        <Container style={{backgroundImage: "`url(${url})`"}}>

        </Container>
        );
    }
export default ImageSlide;
const Container = styled.div`
backgroundSize: cover;
backgroundPosition: center;
`;