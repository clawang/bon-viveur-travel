import React, { useEffect, useState } from 'react';

function ListMode(props) {
	const [image, setImage] = useState("");

	return (
		<div className="city-wrapper">
			<div className="city-content-wrapper">
				{props.data.map((category, i) => <Category data={category} key={i} setImage={setImage} />)}
			</div>
			<div className="image-container">
				{
					image ?
						<img src={process.env.PUBLIC_URL + image} />
						:
						<></>
				}
			</div>
		</div>
	);
}

function Category(props) {
	return (
		<div className="category-wrapper">
			<div className="category-title">
				<ScrollingBanner title={props.data.name} />
			</div>
			<div className="locations-wrapper">
				{props.data.items.map((item, i) => <Location data={item} key={i} setImage={props.setImage} />)}
			</div>
		</div>
	);
}

function ScrollingBanner(props) {
	const buildString = () => {
		let str = "";
		for (let i = 0; i < 20; i++) {
			str += props.title + " ● ";
		}
		return str;
	}
	return (
		<div className="scrolling-banner-wrapper">
			<div className="scrolling-banner-text">
				<p>{buildString()}</p>
				<p>{buildString()}</p>
			</div>
		</div>
	);
}

function Location(props) {

	const numToPrice = () => {
		let str = "";
		for (let i = 0; i < props.data.price; i++) {
			str += "$";
		}
		return str;
	}

	return (
		<div className="location-wrapper" onMouseEnter={() => props.setImage(props.data.img)}>
			<div className="location-title">
				<h3>{props.data.name + (props.data.img ? "⟶" : "")}</h3>
				{props.data.price ?
					<p>{numToPrice()}</p>
					:
					<></>
				}
			</div>
			<p>{props.data.description}</p>
		</div>
	);
}

export { ListMode };