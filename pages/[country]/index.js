import { SEO } from '../../components/seo';
import { HeroContainer } from '../../containers/hero';
import { NavbarContainer } from '../../containers/navbar';
import { capitalize } from '../../lib/capitalize';
import { CountrySummaryContainer } from '../../containers/country-summary';
import { PromiseSummaryContainer } from '../../containers/promise-summary';
import { PromisesAreaContainer } from '../../components/promises-area';

export default function Home({country}) {
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
        <HeroContainer
            country={capitalize(country)}
            description="Tracking the performance and effectiveness of the government of Malawi based on the pledges made in the manifesto and other important policy pronouncements."
         />
        <CountrySummaryContainer />
        <PromiseSummaryContainer statuses={statuses} />
        <PromisesAreaContainer />
      </main>
    </div>
  );
}

Home.getInitialProps = async ({query}) => {
  const { country } = query
  return { country }
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