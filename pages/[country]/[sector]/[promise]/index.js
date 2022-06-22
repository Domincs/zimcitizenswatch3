import { Breadcrumb } from '../../../../components/breakcrumb';
import { SEO } from '../../../../components/seo';
import { NavbarContainer } from '../../../../containers/navbar';
import { PromiseTracker } from '../../../../containers/promise-tracker';

export default function Home({}) {

  return (
    <div className="static mb-[6em]">
      <SEO title='AfricanCitizensWatch' />
      <NavbarContainer />
      <main>
        <div className="container m-auto my-12">
          <Breadcrumb />
        </div>
        <PromiseTracker 
          icon="/icons/kept.svg" 
          sector="Economy" 
          status="Kept" 
          promise="Government's fiscal policy will put emphasis on strong fiscal discipline, accountability and transparency for the restoration of macro-economic stability."
        />
      </main>
    </div>
  );
}

Home.getInitialProps = async ({query}) => {
  const { sector } = query
  return { sector }
}