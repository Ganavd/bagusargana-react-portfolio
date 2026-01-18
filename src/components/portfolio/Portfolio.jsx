import React, { useState } from "react";
import "./Portfolio.css";

import Menu from "./Menu";
import { RiGithubLine, RiLink } from "react-icons/ri";

import { motion } from "framer-motion";

const Portfolio = () => {
	const [items, setItems] = useState(Menu);
	const [activeFilter, setActiveFilter] = useState(0);
	const filterItems = (categoryItem) => {
		const updatedItems = Menu.filter((curElem) => {
			return curElem.category.includes(categoryItem);
		});

		setItems(updatedItems);
	};

	return (
		<section className="portfolio container section" id="portfolio">
			<h2 className="section__title">Recent Projects</h2>

			<div className="portfolio__filters">
				<div className="portfolio__filters-group">
					<span className={activeFilter === 0 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { setItems(Menu); setActiveFilter(0) }}>
						All
					</span>
					<span className={activeFilter === 1 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Web"); setActiveFilter(1) }}>
						Web
					</span>
					<span className={activeFilter === 2 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Game"); setActiveFilter(2) }}>
						Game
					</span>
					<span className={activeFilter === 3 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Data-Python"); setActiveFilter(3) }}>
						Data-Python
					</span>
				</div>

				<div className="portfolio__filters-group">
					<span className={activeFilter === 4 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Basic"); setActiveFilter(4) }}>
						Basic
					</span>
					<span className={activeFilter === 5 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Mid"); setActiveFilter(5) }}>
						Mid
					</span>
					<span className={activeFilter === 6 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("High"); setActiveFilter(6) }}>
						High
					</span>
				</div>
			</div>

			<div className="portfolio__container grid">
				{items.map((elem) => {
					const { id, image, title, category, url, repositoryUrl } = elem;

					return (
						<motion.div
							layout
							animate={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="portfolio__card"
							key={id}>
							<div className="portfolio__thumbnail">
								<img src={image} alt="" className="portfolio__img" height="267" />
								<div className="portfolio__mask"></div>
							</div>

							<span className="portfolio__category">{category.join(', ')}</span>
							<h3 className="portfolio__title">{title}</h3>
							<a href={url} target="_blank" rel="noreferrer" className="portfolio__button">
								<RiLink className="portfolio__button-icon" />
							</a>
							<a href={repositoryUrl} target="_blank" rel="noreferrer" className="portfolio__github-button">
								<RiGithubLine className="portfolio__button-icon" />
							</a>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
