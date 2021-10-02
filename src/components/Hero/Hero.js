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

      <SectionText>
        My name is Wemi & I'm a full stack web developer based in Canada. I build and design simple, responsive websites that your clients will love
      </SectionText>

      <Button onClick={() => window.open("https://drive.google.com/file/d/1MJ5JTlUG0eeyFUs0NXAxgW08AyrD8hbv/view?usp=sharing")}>View My Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
