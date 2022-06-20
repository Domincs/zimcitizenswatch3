import { SEO } from '../components/seo';
import { CountriesContainer } from '../containers/countries';
import { HeroContainer } from '../containers/hero';
import { OverallSummaryContainer } from '../containers/overall_summary';
import { NavbarContainer } from '../containers/navbar';
import { Background } from '../containers/background';

export default function Home({}) {
  return (
    <div className="static mb-[6em]">
      <SEO title='SIVIO Home' />
      <NavbarContainer />
      <main>
        <Background />
        <HeroContainer
            country="African"
            description="an independent platform that tracks the performance and effectiveness of of African governments based on the pledges made in the manifesto and other important policy pronouncements."
            link="/#"
         />
        <CountriesContainer />
        <OverallSummaryContainer />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
    },
    revalidate: 60,
  };
}
