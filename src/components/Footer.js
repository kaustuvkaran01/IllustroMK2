import React from 'react';
import styled from "styled-components";
// import { MadeWithLove } from "react-made-with-love";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <FooterContainer>
      <div className="social-container">
        <a
          href="https://www.youtube.com/user/onemeeeliondollars"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/sanchit.tanwar.3"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.twitter.com"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.instagram.com"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      {/* <div className="mwl">
          <MadeWithLove emoji/>
      </div> */}
    </FooterContainer>
  );
}
export default Footer;
const FooterContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 15vh;
    align-items: center;
    justify-content: center;
    background: #112;
    .social-container {
        padding: 25px 50px;
        background: #112;
        display: flex;
    }
    a.social {
        margin: 0 1rem;
        transition: transform 250ms;
        display: inline-block;
    }
    a.social: hover {
        transform: translateY(-4px);
    }
    a.youtube {
        color: #eb3223;
      }
      
      a.facebook {
        color: #4968ad;
      }
      
      a.twitter {
        color: #49a1eb;
      }
      
      a.instagram {
        color: black;
      }
`;