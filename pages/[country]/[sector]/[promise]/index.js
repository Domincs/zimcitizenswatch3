import { SEO } from '../../../../components/seo';
import { NavbarContainer } from '../../../../containers/navbar';

export default function Home({sector}) {

  return (
    <div className="static mb-[6em]">
      <SEO title='AfricanCitizensWatch' />
      <NavbarContainer />
      <main>
      </main>
    </div>
  );
}

Home.getInitialProps = async ({query}) => {
  const { sector } = query
  return { sector }
}