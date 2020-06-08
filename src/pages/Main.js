import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import ImgCarousel from "../components/Carousel";
import Team from "../components/Team";
import Project from "../components/Projects";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import styled from "styled-components";

class Main extends Component {
    state = {
        navbarOpen: false
    };

    handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
    };

    render() {
        return (
          <MainContainer>
            <div className="header-top">
                    <Navbar
                        navbarState={this.state.navbarOpen}
                        handleNavbar={this.handleNavbar}
                    />
                </div>
                <div className="content">
                    <ImgCarousel />
                    <Project /> 
                    <Team />
                    <Footer />
                    {/* < Cards /> */}
            </div>
            {/* <Footer /> */}
          </MainContainer>
        );
    }
}
export default Main;

const MainContainer = styled.div`
    display: flex;
    .header-top {
        z-index: 1;
        background: #091921;
        padding-top: 1rem;
        height: 5rem;
    }
    .content {
        z-index: 0;
        margin-top: 10vh;
    }
`;
