import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info_items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Farkhan</span>
            </p>
            <h2 className="about__heading">A freelance Web developer</h2>
            <div className="about__info">
              <PText>
                Consequat nostrud et labore incididunt reprehenderit magna
                cillum deserunt adipisicing quis esse aliqua. Sunt consectetur
                officia proident reprehenderit sunt non. Esse adipisicing
                officia consequat dolore laborum. Reprehenderit laborum nulla
                minim commodo aliquip exercitation laboris tempor. Dolore anim
                ad elit aliqua cillum consequat veniam.
                <br /> <br />
                Consequat nostrud et labore incididunt reprehenderit magna
                cillum deserunt adipisicing quis esse aliqua. Sunt consectetur
                officia proident reprehenderit sunt non. Esse adipisicing
                officia consequat dolore laborum. Reprehenderit laborum nulla
                minim commodo aliquip exercitation laboris tempor. Dolore anim
                ad elit aliqua cillum consequat veniam.
                <br /> <br />
                Consequat nostrud et labore incididunt reprehenderit magna
                cillum deserunt adipisicing quis esse aliqua. Sunt consectetur
                officia proident reprehenderit sunt non. Esse adipisicing
                officia consequat dolore laborum. Reprehenderit laborum nulla
                minim commodo aliquip exercitation laboris tempor. Dolore anim
                ad elit aliqua cillum consequat veniam.
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="Farkhan img" />
          </div>
        </div>
        <div className="about__info_items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['SMK Negeri 1 Jamblang, Cirebon']}
            />
            <AboutInfoItem
              title="College"
              items={['UPN "Veteran" Jawa Timur']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'JavaScript', 'REACT']}
            />
            <AboutInfoItem
              title="BackEnd"
              items={['Laravel', 'Codeigniter', 'Node']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>
            <AboutInfoItem
              title="2019-2020"
              items={['Junior developer at Adiva Net']}
            />
            <AboutInfoItem title="2020-" items={['Freelance web developer']} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
