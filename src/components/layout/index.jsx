import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../header'
import Feature from '../Feature'
import Form from '../Form'
import './index.css'

import { StaticQuery, graphql } from "gatsby"

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
				{data.allContentfulFeature.edges.map(({ node }) => (
					<Feature {...node} />
				))}
				<div style={{
					margin: '0 auto',
					maxWidth: 960,
					padding: '0px 1.0875rem 1.45rem',
					paddingTop: 0,
				}}>
					{children}
				</div>
				<Form />
			</div>
		)
		}
	/>
)

Layout.propTypes = {
	children: PropTypes.func,
}

export default Layout
