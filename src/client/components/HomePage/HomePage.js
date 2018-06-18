import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => (
  <div>
    <h1>Home Page</h1>

    <h2>Get Started</h2>
    <ol>
      <li>
          go to{' '}
        <Link href="/demo" to="/demo">
            demo app
        </Link>
      </li>
      <li>Remove the demo</li>
    </ol>
  </div>
)

export default HomePage
