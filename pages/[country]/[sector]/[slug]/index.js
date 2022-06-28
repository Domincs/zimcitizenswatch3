import { Breadcrumb } from '../../../../components/breakcrumb'
import { SEO } from '../../../../components/seo'
import { NavbarContainer } from '../../../../containers/navbar'
import { PromiseTracker } from '../../../../containers/promise-tracker'
import axios from 'axios'
import { capitalize } from '../../../../lib/capitalize'

export default function Home({ promise, sector }) {

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
          sector={capitalize(sector)}
          promise={promise}
        />
      </main>
    </div>
  );
}

Home.getInitialProps = async ({query}) => {
  const { slug, sector, country } = query
  let apiUrl = ''
  if(country === 'zambia') {
    apiUrl = process.env.MW_URL
  }
  else if(country === 'malawi') {
    apiUrl = process.env.ZM_URL
  }
  const promise = (await axios.get(`${apiUrl}/${sector}/promises/${slug}`)).data
  return { promise, sector }
}