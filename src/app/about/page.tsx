import React from 'react'
import AboutSection from '@/components/AboutSection'
import Featured from '@/components/Featured'
import PageBreadCrumb from '@/components/PageBreadCrumb'

const AboutPage = () => {
  return (
      <>
          <PageBreadCrumb sub='About'/>
          <AboutSection />
        <Featured/>  
    </>
  )
}

export default AboutPage