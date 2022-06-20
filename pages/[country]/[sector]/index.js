import { SEO } from '../../../components/seo';
import { NavbarContainer } from '../../../containers/navbar';
import { SummaryOfPerformanceContainer } from '../../../containers/summary-of-performance';
import { capitalize } from '../../../lib/capitalize';
import moment from 'moment'
import { SectorPromisesContainer } from '../../../containers/sector-promises';

export default function Home({sector}) {
  const statuses = [
    {label: "Total Promises", value: "340"},
    {label: "Kept", value: "23"},
    {label: "Not Commenced", value: "12"},
    {label: "Modified", value: "234"},
    {label: "Broken", value: "87"},
    {label: "Implemented", value: "56"}
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
  const { sector } = query
  return { sector }
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