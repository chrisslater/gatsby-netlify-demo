import React from 'react'
import { graphql } from 'gatsby'

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