import React from 'react'

const Article = ({image, title}) => {
	return (
		<article className="article">
			<div className="article__header">
				<img src={image} alt="" />
			</div>
			<div className="article__description">
				<h3>{title}</h3>
			</div>
		</article>
	)
}

export default Article;