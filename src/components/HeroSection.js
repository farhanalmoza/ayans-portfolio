import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import HeroImg from '../assets/images/hero1.jpg';
import Button from './Button';
import SocialHeroArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyle = styled.div`
  .hero {
    height: 95vh;
    min-height: 619px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -3rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 5rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 700px;
    width: 100%;
    height: 430px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -12rem;
  }
  .hero__social,
  .hero__scroll__down {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    bottom: 10px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scroll__down {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scroll__down {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.6rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scroll__down {
    img {
      max-width: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 0.8rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 1rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 650px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: 35%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-width: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scroll__down {
      right: 0;
      bottom: 37%;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyle>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name">Farkhan</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              I am working as a freelance web developer and designer for 3
              years. I love to design and make new web experiences for the
              people.
            </PText>
            <Button
              btnLink="/projects"
              btnText="see my works"
              outline={false}
            />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialHeroArrow} alt="social media arrow" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="http://facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="http://facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
                <li>
                  <a
                    href="http://facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TW
                  </a>
                </li>
                <li>
                  <a
                    href="http://facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GH
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scroll__down">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeroStyle>
  );
}
