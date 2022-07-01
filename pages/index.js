import { SEO } from '../components/seo';
import { CountriesContainer } from '../containers/countries';
import { HeroContainer } from '../containers/hero';
import { OverallSummaryContainer } from '../containers/overall_summary';
import { NavbarContainer } from '../containers/navbar';
import { Background } from '../containers/background';
import axios from 'axios';


export default function Home({ summary }) {
  return (
    <div className="static">
      <SEO title='SIVIO Home' />
      <NavbarContainer />
      <main className="mb-20vh">
        <Background />
        <HeroContainer
            country="African"
            description="an independent platform that tracks the performance and effectiveness of of African governments based on the pledges made in the manifesto and other important policy pronouncements."
            link="/#"
         />
        <CountriesContainer />
        <OverallSummaryContainer summary={summary} />
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
