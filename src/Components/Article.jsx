import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addArticle } from "../features/articlesSlice";
import ShoppingCart from './ShoppingCart';

const Article = ({ image, title }) => {

	const dispatch = useDispatch();

	const articles = useSelector(state => state.articles)

	const handleAddArticle = () => {
		dispatch(addArticle(title))
	}

	console.log(articles)
	return (
		<article className="article">
			<div className="article__content">

				<div className="article__content__header">
					<img src={image} alt="" />
				</div>
				<div className="article__content__description">
					<h3>{title}</h3>
					<ShoppingCart onClick={handleAddArticle}  className="add" />
				</div>
			</div>

		</article>
	)
}

export default Article;