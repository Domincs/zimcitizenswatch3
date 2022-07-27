import { Breadcrumb } from '../../../../components/breakcrumb'
import { SEO } from '../../../../components/seo'
import { NavbarContainer } from '../../../../containers/navbar'
import { PromiseTracker } from '../../../../containers/promise-tracker'
import axios from 'axios'
import { capitalize } from '../../../../lib/capitalize'
import { useState } from 'react'
import { normalize } from '../../../../lib/normalize'

export default function Home({ promise, sector, node, status, promises, slug, apiUrl }) {
  const [currentPromise, setCurrentPromise] = useState(promise)

  const nextPromise = () => {
    console.log(node)
    let filtered = promises
    if(node !== "All categories")
      filtered = filtered.filter(obj => normalize(obj.keynode_name).toUpperCase() === node.toUpperCase())
    if(status !== "Total Promises")
      filtered = promises.filter(obj => normalize(obj.promise_state).toUpperCase() === status.toUpperCase())

    const index = filtered.findIndex(item => item.slug === slug)

    if(index < filtered.length-1) {
      axios.get(`${apiUrl}/${sector}/promises/${filtered[index+1].slug}`).then(
        res => setCurrentPromise(res.data)
      ).catch(err => console.log(err))
    }

  }

  const prevPromise = () => {
    let filtered = promises
    if(node !== "All categories")
      filtered = filtered.filter(obj => normalize(obj.keynode_name).toUpperCase() === node.toUpperCase())
    if(status !== "Total Promises")
      filtered = promises.filter(obj => normalize(obj.promise_state).toUpperCase() === status.toUpperCase())

    const index = filtered.findIndex(item => item.slug === slug)

    if(index > 0) {
      axios.get(`${apiUrl}/${sector}/promises/${filtered[index11].slug}`).then(
        res => setCurrentPromise(res.data)
      ).catch(err => console.log(err))
    }

  }

  return (
    <div className="static mb-[6em]">
      <SEO title='Sector' />
      <NavbarContainer />
      <main>
        <div className="container m-auto my-12 px-6">
          <Breadcrumb />
        </div>
    
        <PromiseTracker
          sector={capitalize(sector)}
          promise={currentPromise}
          prevPromise={prevPromise}
          nextPromise={nextPromise}
        />
      </main>
    </div>
  );
}

Home.getInitialProps = async ({query}) => {
  const { slug, sector, country, node, status } = query
  let apiUrl = ''
  if(country === 'malawi') {
    apiUrl = process.env.MW_URL
  }
  else if(country === 'zambia') {
    apiUrl = process.env.ZM_URL
  }
  const promises = (await axios.get(`${apiUrl}/${sector}/promises`)).data

  const promise = (await axios.get(`${apiUrl}/${sector}/promises/${slug}`)).data
  return { promise, sector, node, status, promises, slug, apiUrl }
}