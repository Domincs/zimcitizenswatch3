import { Breadcrumb } from '../../../../components/breakcrumb'
import { SEO } from '../../../../components/seo'
import { NavbarContainer } from '../../../../containers/navbar'
import { PromiseTracker } from '../../../../containers/promise-tracker'
import axios from 'axios'
import { capitalize } from '../../../../lib/capitalize'
import { useState } from 'react'
import { normalize } from '../../../../lib/normalize'
import { FooterContainer } from '../../../../containers/footer'

export default function Home({ promise, sector, node, status, slug, promises, apiUrl, country }) {
  const [currentPromise, setCurrentPromise] = useState(promise)
  const [slugVal, setSlugVal] = useState(slug)

  const nextPromise = () => {
    let filtered = promises
    if(node !== "All categories")
      filtered = filtered.filter(obj => normalize(obj.keynode_name).toUpperCase() === node.toUpperCase())
    if(status !== "Total Promises")
      filtered = promises.filter(obj => normalize(obj.promise_state).toUpperCase() === status.toUpperCase())

    const index = filtered.findIndex(item => item.slug === slugVal)
    console.log(index)
    console.log(filtered.length)

    if(index < filtered.length-1) {
      console.log(`${apiUrl}/${sector}/promises/${filtered[index+1].slug}`)
      // const data = await axios.get(`${apiUrl}/${sector}/promises/${filtered[index+1].slug}`).data
      // console.log(data)
      axios.get(`${apiUrl}/${sector}/promises/${filtered[index+1].slug}`).then(
        res => {
          console.log(res.data)
          setCurrentPromise(res.data)
          setSlugVal(res.data[0].slug)
        }
      ).catch(err => console.log(err))
    }

  }

  const prevPromise = async() => {
    let filtered = promises
    if(node !== "All categories")
      filtered = filtered.filter(obj => normalize(obj.keynode_name).toUpperCase() === node.toUpperCase())
    if(status !== "Total Promises")
      filtered = promises.filter(obj => normalize(obj.promise_state).toUpperCase() === status.toUpperCase())

    const index = filtered.findIndex(item => item.slug === slugVal)
    console.log(index)
    console.log(filtered.length)

    if(index > 0) {
      // const data = await axios.get(`${apiUrl}/${sector}/promises/${filtered[index-1].slug}`).data
      // console.log(data)
      axios.get(`${apiUrl}/${sector}/promises/${filtered[index-1].slug}`).then(
        res => {
          console.log(res.data)
          setCurrentPromise(res.data)
          setSlugVal(res.data[0].slug)
        }
      ).catch(err => console.log(err))
    }

  }

  return (
    <div className="static">
      <SEO title='Sector' />
      <NavbarContainer />
      <main>
        <div className="container m-auto my-12 px-6">
          <Breadcrumb link={`/${country}/${sector}`}/>
        </div>
    
        <PromiseTracker
          sector={capitalize(sector)}
          promise={currentPromise}
          prevPromise={prevPromise}
          nextPromise={nextPromise}
        />
        <FooterContainer />
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
  return { promise, sector, node, status, promises, slug, apiUrl, country }
}