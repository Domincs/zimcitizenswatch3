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
        <HeroContainer />
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
