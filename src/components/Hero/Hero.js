import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText main center>
        The purpose of this portfolio is to present my sample text sample text sample text etc etc etc... *What I'm offering*
      </SectionText>
      <Button onClick={() => window.location = 'https://letterboxd.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;