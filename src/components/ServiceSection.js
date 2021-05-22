import React from 'react';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItems from './ServicesSectionItems';

const ServicesItemStyles = styled.div`
  padding: 8rem 0;
  .services__allItems {
    display: flex;
    gap: 7rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="what i will do for you" />

        <div className="services__allItems">
          <ServicesSectionItems
            icon={<MdDesktopMac />}
            title="Web Design"
            desc="Laboris irure excepteur proident officia aute proident ullamco aute sint exercitation Lorem id ex cillum. Commodo cillum sunt nostrud euqui pariatur magna eu elit mollit magna."
          />
          <ServicesSectionItems
            icon={<MdCode />}
            title="Web Development"
            desc="Laboris irure excepteur proident officia aute proident ullamco aute sint exercitation Lorem id ex cillum. Commodo cillum sunt nostrud euqui pariatur magna eu elit mollit magna."
          />
          <ServicesSectionItems
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="Laboris irure excepteur proident officia aute proident ullamco aute sint exercitation Lorem id ex cillum. Commodo cillum sunt nostrud euqui pariatur magna eu elit mollit magna."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
