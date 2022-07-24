import { SEO } from '../components/seo';
import { CountriesContainer } from '../containers/countries';
import { HeroContainer } from '../containers/hero';
import { OverallSummaryContainer } from '../containers/overall_summary';
import { NavbarContainer } from '../containers/navbar';
import { Background } from '../containers/background';
import axios from 'axios';
import { AboutContainer } from '../containers/about';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";


export default function Home({ summary }) {
  const [scrolled, setScrolled] = useState(0)
    

  const items = [
    { name: "Malawi", active: true, activeTab: scrolled<0.33, link: '/malawi', target: '_self', map: "/maps/mw.svg" },
    { name: "Zambia", active: scrolled > 0.5, activeTab: scrolled>0.33 && scrolled<0.66, link: '/zambia', target: '_self', map: "/maps/zm.svg" },
    { name: "Zimbabwe", active: scrolled === 1, activeTab: scrolled>0.66, link: 'https://zimcitizenswatch.org', target: '_blank', map: "/maps/zw.svg" }
  ]

  const handleScroll = (progress) => {
    setScrolled(progress)
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let tl = gsap.timeline({});
    
    let sections = gsap.utils.toArray(".panel");

    tl.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-scroll",
        start: 'top 15%',
        //end: () => innerWidth * (sections.length+1),
        pin: true,
        scrub: 0.1,
        end: "+=4500",
        onUpdate: (self) => {handleScroll(self.progress)}
      }
    })
  }, [])

  gsap.registerPlugin(ScrollToPlugin)

  const anchorClick = (e, iTarget) => {
      e.preventDefault();
      const target_ele = document.querySelector(iTarget)
      const scroll_cont = document.querySelector("#horizontal-scroll-container")
      const offset = scroll_cont.getBoundingClientRect()
      const target = target_ele.getBoundingClientRect()
      // const containerOffset = (offset.top+window.pageYOffset + target.left) * (offset.width / (offset.width - window.innerWidth));
      const containerOffset = offset.top+window.pageYOffset + target.left ;

      gsap.to(window, {
          scrollTo: {
              y: containerOffset,
              autoKill: false
          },
          duration: 1
      });

  }


  return (
    <div className="static next-default-container">
      <SEO title='Home' />
      <NavbarContainer />
      <main className="mb-20vh">
        <Background />
        <HeroContainer
            country="African"
            description="an independent platform that tracks the performance and effectiveness of of African governments based on the pledges made in the manifesto and other important policy pronouncements."
            link="#about-section"
         />
        <CountriesContainer anchorClick={anchorClick} />
        <OverallSummaryContainer
          summary={summary}
          anchorClick={anchorClick}
          scrolled={scrolled}
          items={items}
        />
        <AboutContainer />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const mwUrl = process.env.MW_URL
  const zmUrl = process.env.ZM_URL
  const zwUrl = process.env.ZW_URL

  const malawi = (await axios.get(`${mwUrl}/summary`)).data
  const zambia = (await axios.get(`${zmUrl}/summary`)).data
  const zimbabwe = (await axios.get(`${zwUrl}/api/summary`)).data

  return {
    props: {
      summary: { 
        malawi: { ...malawi, inauguration: process.env.MW_INAUGURATION },
        zambia: { ...zambia, inauguration: process.env.ZM_INAUGURATION },
        zimbabwe: { ...zimbabwe, inauguration: process.env.ZW_INAUGURATION }

      }
      
    },
    revalidate: 60,
  };
}
