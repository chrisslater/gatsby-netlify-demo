import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../header'
import ContactForm from '../ContactForm'

import './index.css'

import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
  			query RootQuery {
				site {
					siteMetadata {
						title
					}
				}

				allContentfulFeature {
					edges {
						node {
							...FeatureFragment
						}
					}
				}
			}
		`}
		render={data => (
			<div>
				<Helmet title={data.site.siteMetadata.title}
					meta={[
						{ name: 'description', content: 'Sample' },
						{ name: 'keywords', content: 'sample, something' },
					]}
				/>
				<Header siteTitle={data.site.siteMetadata.title} />
				<div style={{
					margin: '0 auto',
					maxWidth: 960,
					padding: '0px 1.0875rem 1.45rem',
					paddingTop: 0,
				}}>
					{children}
				</div>
				<ContactForm />
			</div>
		)
		}
	/>
)

Layout.propTypes = {
	children: PropTypes.node,
}

export default Layout
