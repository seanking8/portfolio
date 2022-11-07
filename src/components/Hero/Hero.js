import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi,<br />
        I'm Seán
      </SectionTitle>
      <SectionText main center>
        A passionate full-stack and game developer based in Vancouver, Canada
      </SectionText>
      <Button onClick={() => window.location = 'https://letterboxd.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;