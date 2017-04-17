import React from 'react'
import { SectionsContainer, Section } from 'components/Fullpage'
import VisibilitySensor from 'react-visibility-sensor'
import WelcomeSection from './WelcomeSection'
import AboutSection from './AboutSection'
import HowItWorksSection from './HowItWorksSection'
import BuzzMap from './BuzzMap'

import './LandingView.scss'

const fullpageOps = {
  delay: 600,
  anchors: ['overview', 'about', 'how-it-works', 'buzzmap']
}

const LandingView = ({ setVisibility }) => (
  <SectionsContainer className='ui container' {...fullpageOps}>
    <Section color='#916fa7'>
      <WelcomeSection>
        <VisibilitySensor onChange={setVisibility} />
      </WelcomeSection>
    </Section>
    <Section color='#916fa7'>
      <AboutSection />
    </Section>
    <Section color='#46926d'>
      <HowItWorksSection />
    </Section>
    <Section color='#000000'>
      <BuzzMap />
    </Section>
  </SectionsContainer>
)

LandingView.propTypes = {
  setVisibility: React.PropTypes.func
}

export default LandingView
