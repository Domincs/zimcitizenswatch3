import { SEO } from '../../components/seo'
import axios from 'axios'
import { HeroContainer } from '../../containers/hero'
import { NavbarContainer } from '../../containers/navbar'
import { capitalize } from '../../lib/capitalize'
import { CountrySummaryContainer } from '../../containers/country-summary'
import { PromiseSummaryContainer } from '../../containers/promise-summary'
import { PromisesAreaContainer } from '../../components/promises-area'
import { FooterContainer } from '../../containers/footer'

export default function Home({country, summary, countFrom, economy, governance, corruption, climate_change, social_service}) {
  const statuses = [
    {label: "Total Promises", value: summary['all']},
    {label: "Kept", value: summary.kept},
    {label: "Not Commenced", value: summary.not_commenced},
    {label: "Modified", value: summary.modified},
    {label: "Broken", value: summary.broken},
    {label: "Implemented", value: summary.implemented}
  ]
  return (
    <div className="static my-4 overflow-x-hidden">
      <SEO title='Country' />
      <NavbarContainer />
      <main>
        <HeroContainer
            country={capitalize(country)}
            description={`Tracking the performance and effectiveness of the government of ${capitalize(country)} based on the pledges made in the manifesto and other important policy pronouncements.`}
         />
        <CountrySummaryContainer countFromDate={countFrom} country={country} />
        <PromiseSummaryContainer statuses={statuses} />
        <PromisesAreaContainer country={country} economy={economy} governance={governance} corruption={corruption} climate_change={climate_change} social_service={social_service} />
        <FooterContainer />
      </main>
    </div>
  );
}

Home.getInitialProps = async ({query}) => {
  const { country } = query
  let apiUrl = ''
  let countFrom = ''
  if(country === 'malawi') {
    apiUrl = process.env.MW_URL
    countFrom = process.env.MW_INAUGURATION
  }
  else if(country === 'zambia') {
    apiUrl = process.env.ZM_URL
    countFrom = process.env.ZM_INAUGURATION
  }

  const summary = (await axios.get(`${apiUrl}/summary`)).data

  const economy = (await axios.get(`${apiUrl}/economy/summary`)).data
  const governance = (await axios.get(`${apiUrl}/governance/summary`)).data
  const corruption = (await axios.get(`${apiUrl}/corruption/summary`)).data
  const climate_change = (await axios.get(`${apiUrl}/climate_change/summary`)).data
  const social_service = (await axios.get(`${apiUrl}/social_service/summary`)).data

  return { country, summary, countFrom, economy, governance, corruption, climate_change, social_service }
}
