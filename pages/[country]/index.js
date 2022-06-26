import { SEO } from '../../components/seo'
import axios from 'axios'
import { HeroContainer } from '../../containers/hero'
import { NavbarContainer } from '../../containers/navbar'
import { capitalize } from '../../lib/capitalize'
import { CountrySummaryContainer } from '../../containers/country-summary'
import { PromiseSummaryContainer } from '../../containers/promise-summary'
import { PromisesAreaContainer } from '../../components/promises-area'

export default function Home({country, summary, countFrom}) {
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
      <SEO title='AfricanCitizensWatch' />
      <NavbarContainer />
      <main>
        <HeroContainer
            country={capitalize(country)}
            description="Tracking the performance and effectiveness of the government of Malawi based on the pledges made in the manifesto and other important policy pronouncements."
         />
        <CountrySummaryContainer countFromDate={countFrom} />
        <PromiseSummaryContainer statuses={statuses} />
        <PromisesAreaContainer country={country} />
      </main>
    </div>
  );
}

Home.getInitialProps = async ({query}) => {
  const { country } = query
  let apiUrl = ''
  let countFrom = ''
  if(country === 'zambia') {
    apiUrl = process.env.MW_URL
    countFrom = process.env.MW_INAUGURATION
  }
  else if(country === 'malawi') {
    apiUrl = process.env.ZM_URL
    countFrom = process.env.ZM_INAUGURATION
  }

  const summary = (await axios.get(`${apiUrl}/summary`)).data
  console.log(summary)

  return { country, summary, countFrom }
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