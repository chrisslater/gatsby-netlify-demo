/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
const path = require('path')

exports.createPages = ({
	actions,
	graphql
}) => {
	const {
		createPage
	} = actions

	return new Promise((resolve, reject) => {
		const postTemplate = path.resolve(`src/templates/post.jsx`)
		const layout = path.resolve(`src/templates/layout`)
		// Query for markdown nodes to use in creating pages.
		resolve(
			graphql(`
			{
				allContentfulFeature {
					edges {
						node {
							id,
							slug
						}
					}
				}

			}
		  `).then(result => {
				if (result.errors) {
					reject(result.errors)
				}

				console.log(result.data)

				// Create pages for each markdown file.
				result.data.allContentfulFeature.edges.forEach(({
					node
				}) => {
					const {
						slug,
						id,
					} = node

					createPage({
						path: `/${slug}`,
						component: postTemplate,
						layout: layout,
						hello: 'world',
						// In your blog post template's graphql query, you can use path
						// as a GraphQL variable to query for data from the markdown file.
						context: {
							id,
						},
					})
				})
			})
		)
	})
}