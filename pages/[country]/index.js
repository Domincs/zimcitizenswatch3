import { SEO } from '../../components/seo'
import axios from 'axios'
import { HeroContainer } from '../../containers/hero'
import { NavbarContainer } from '../../containers/navbar'
import { capitalize } from '../../lib/capitalize'
import { CountrySummaryContainer } from '../../containers/country-summary'
import { PromiseSummaryContainer } from '../../containers/promise-summary'
import { PromisesAreaContainer } from '../../components/promises-area'
import { getSummaryPerCountry, getSummaryPerSector } from '../../apis/apis'

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
    <div className="static mb-[6em] my-4">
      <SEO title='Country' />
      <NavbarContainer />
      <main>
        <HeroContainer
            country={capitalize(country)}
            description="Tracking the performance and effectiveness of the government of Malawi based on the pledges made in the manifesto and other important policy pronouncements."
         />
        <CountrySummaryContainer countFromDate={countFrom} />
        <PromiseSummaryContainer statuses={statuses} />
        <PromisesAreaContainer country={country} economy={economy} governance={governance} corruption={corruption} climate_change={climate_change} social_service={social_service} />
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
  console.log(apiUrl)

  // const summary = getSummaryPerCountry(apiUrl)
  // const economy = getSummaryPerSector(apiUrl, 'economy')
  // const governance = getSummaryPerSector(apiUrl, 'governance')
  // const corruption = getSummaryPerSector(apiUrl, 'corruption')
  // const climate_change = getSummaryPerSector(apiUrl, 'climate_change')
  // const social_service = getSummaryPerSector(apiUrl, 'social_service')


  const summary = (await axios.get(`${apiUrl}/summary`)).data

  const economy = (await axios.get(`${apiUrl}/economy/summary`)).data
  const governance = (await axios.get(`${apiUrl}/governance/summary`)).data
  const corruption = (await axios.get(`${apiUrl}/corruption/summary`)).data
  const climate_change = (await axios.get(`${apiUrl}/climate_change/summary`)).data
  const social_service = (await axios.get(`${apiUrl}/social_service/summary`)).data

  return { country, summary, countFrom, economy, governance, corruption, climate_change, social_service }
}



// export async function getStaticPaths() {

//   const paths  = [
//     { params: { hj: 'malawi' }},
//     { params: { hj: 'zambia' }},
//   ]

//   return { paths, fallback: false }
// }

// export async function getStaticProps({ params }) {
//     const { hj } = params;

//   return {
//     props: {
//       hj
//     },
//     revalidate: 60,
//   };
// }