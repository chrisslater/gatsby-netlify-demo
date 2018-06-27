import React from 'react'

const Feature = ({ title, quote }) => (
	<div>{title} - {quote}</div>
)


export default Feature;

export const query = graphql`
	fragment FeatureFragment on ContentfulFeature {
		title,
		quote
	}
`;