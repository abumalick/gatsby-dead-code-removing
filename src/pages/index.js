import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  if (process.env.GATSBY_SHOULD_BE_REMOVED){
    console.log('THIS IS NOT REMOVED AND SHOULD BE')
  }
  if (!process.env.GATSBY_SHOULD_BE_REMOVED){
    console.log('THIS SHOULD NOT BE REMOVED');
  }

  if (false) {
    console.log('THIS IS CORRECTLY REMOVED')
  }

  return (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
  }

export default IndexPage
