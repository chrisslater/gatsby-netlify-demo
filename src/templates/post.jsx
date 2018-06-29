import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

const PostTemplate = (props) => {
	return (
		<Layout>
			<StaticQuery
				query={graphql`
					query PostTemplateQuery($id: String) {
						post: contentfulFeature(id: { eq: $id }) {
							title,
							quote
						}
					}`
				}
				render={
					(data) => {

						const { title, quote } = data.post
						return (
							<div>
								<div>
									Title: {title}
								</div>
								<div>
									Quote: {quote}
								</div>
							</div>
						)
					}
				}
			/>
		</Layout>
	)
}

export default PostTemplate