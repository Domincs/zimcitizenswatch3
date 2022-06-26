import { SEO } from '../../../components/seo';
import { NavbarContainer } from '../../../containers/navbar';
import { SummaryOfPerformanceContainer } from '../../../containers/summary-of-performance';
import { capitalize } from '../../../lib/capitalize';
import moment from 'moment'
import { SectorPromisesContainer } from '../../../containers/sector-promises';
import { useRouter } from "next/router";
import axios from 'axios'

export default function Home({sector, summary}) {
  const { asPath } = useRouter();

  const statuses = [
    {label: "Total Promises", value: summary.all},
    {label: "Kept", value: summary.kept},
    {label: "Not Commenced", value: summary.not_commenced},
    {label: "Modified", value: summary.modified},
    {label: "Broken", value: summary.broken},
    {label: "Implemented", value: summary.implemented}
  ]

  return (
    <div className="static mb-[6em]">
      <SEO title='AfricanCitizensWatch' />
      <NavbarContainer />
      <main>
        <div className="container m-auto my-12">
          <h1 className="text-[106px] leading-none">{capitalize(sector)}</h1>
        </div>
        <SummaryOfPerformanceContainer date={moment().format("LL")} statuses={statuses} />
        <SectorPromisesContainer />
        
      </main>
    </div>
  );
}

Home.getInitialProps = async ({query}) => {
  const { country, sector } = query
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

  console.log("hello: ", `${apiUrl}/${sector}/summary`)

  const summary = (await axios.get(`${apiUrl}/${sector}/summary`)).data

  return { sector, summary }
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