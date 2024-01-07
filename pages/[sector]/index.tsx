import { useEffect, useState } from 'react';
import { SEO } from '../../components/seo';
import { SectorPromisesContainer } from '../../containers/sector-promises';
import { useRouter } from "next/router";
import { normalize } from '../../lib/normalize';
import { Hero } from 'components/pages/sectors';

export default function Home({ sector, promises }) {

  const { asPath } = useRouter();
  const [keyNodes, setKeyNodes] = useState([])
  const [currentKeyNode, SetCurrentKeyNode] = useState("All categories")
  const [currentStatus, SetCurrentStatus] = useState("Total Promises")


  const [currentPromises, setPromises] = useState(promises)
  const [furtherFilter, setFurtherFilter] = useState(currentPromises)

  const resetFilters = (thePromises) => {
    const nodes = thePromises?.map(obj => {
      return obj.keynode_name
    })

    let nodesList = Array.from(new Set(nodes))

    const listItems = nodesList.map((item) => {
      return { active: false, text: item }
    })

    setKeyNodes([{ active: true, text: "All categories" }, ...listItems])
  }

  useEffect(() => {
    resetFilters(promises)
  }, [promises])


  const filterKeyNode = (keynode) => {
    SetCurrentKeyNode(keynode)
    const newStatus = keyNodes.map(obj => {
      if (obj.text === keynode) {
        return { ...obj, active: true }
      }
      return { ...obj, active: false }
    })
    setKeyNodes(newStatus)
    if (keynode === "All categories") {
      setFurtherFilter(currentPromises)
    }
    else {
      const filtered = currentPromises.filter(obj => normalize(obj.keynode_name).toUpperCase() === keynode.toUpperCase())
      setFurtherFilter(filtered)
    }
  }



  return (
    <div className="static px-4 md:px-0">
      <SEO title='Sector' />
      <main className="my-12 flex flex-col gap-20">
        <Hero image={"/images/economy-hero.svg"} sector={sector} />
        <SectorPromisesContainer keyNodes={keyNodes} promises={furtherFilter} currentNode={currentKeyNode} currentStatus={currentStatus} path={asPath} filterKeyNode={filterKeyNode} />
      </main>
    </div>
  );
}

Home.getInitialProps = async ({ query }) => {
  const { sector } = query;
  return { sector, promises: [] }
}
