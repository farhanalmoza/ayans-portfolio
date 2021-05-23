import React from 'react';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectSection';
import ServiceSection from '../components/ServiceSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
    </div>
  );
}
