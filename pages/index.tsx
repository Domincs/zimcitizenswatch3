import { SEO } from '../components/seo';
import { HeroContainer } from '../containers/hero';
import axios from 'axios';
import { SectorOverview } from '../containers/sector-overview';
import { Methodology } from '../containers/methodology';


export default function Home({ summary }) {



  return (
    <div className="">
      <SEO title='Home' />
      <HeroContainer
        country="Zim"
        description="An independent platform to hold the Zimbabwean government accountable. ZCW tracks the actions of government against the areas that citizens have raised in SIVIO’s annual CPE reports and the strategies outlined in the National Development Strategy 2021-2025 (NDS1)."
        link="#about-section"
      />
      <SectorOverview />
      <Methodology />


      {/* <Background /> */}
      
      {/* <CountriesContainer anchorClick={anchorClick} /> */}
      {/* <OverallSummaryContainer
        summary={summary}
        anchorClick={anchorClick}
        scrolled={scrolled}
        items={items}
      />
      <AboutContainer />
      <FooterContainer/> */}
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
