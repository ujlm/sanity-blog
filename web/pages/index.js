import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import Header from '../components/general/Header'
import Subscribe from '../components/home/sections/Subscribe'
import Guides from '../components/home/sections/Guides'
import Scamstories from '../components/home/sections/Scamstories'
import NewsAndReports from '../components/home/sections/NewsAndReports'
import Recommendations from '../components/home/sections/Recommendations'

const Index = ({posts}) => {
    return (
      <>
        <Header color='#fff' />
        <Subscribe />
        <Guides/>
        <Scamstories />
        <NewsAndReports />
        <Recommendations/>
      </>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
    `)
    return {
      props: {
        posts
      }
    }
}

export default Index