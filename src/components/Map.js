import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImge from '../assets/images/map.png';

const MapStyles = styled.div`
  background: url(${MapImge}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background-color: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Cirebon, West Java, Indonesia</PText>
          <a
            href="https://www.google.com/maps/place/6%C2%B037'28.2%22S+108%C2%B027'28.6%22E/@-6.6244847,108.4574018,19z/data=!3m1!4b1!4m13!1m6!3m5!1s0x2e6ee7222b3660eb:0x172d396ef63128cf!2sKedai+Tahu+Geprek+Mimitum!8m2!3d-6.6247073!4d108.4579459!3m5!1s0x0:0x0!7e2!8m2!3d-6.6244861!4d108.4579492"
            target="_blank"
            rel="noreferrer"
            className="map__card__link"
          >
            Open in Google Map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
