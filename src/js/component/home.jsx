import React from "react";

// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

// //create your first component

import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

const Home = () => {

	return (
		<div className="text-center">
			{/* <h1 className="text-center mt-5">Hello Rigo!</h1> */}
			<p>
				{/* <img src={rigoImage} /> */}
			</p>
			<a href="#" className="">
				{/* If you see this green button... bootstrap is working... */}
			</a>
			<p>
				{/* Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love! */}
			</p>
			<Navbar/>
			<div className="Container">
				<Jumbotron/>
				<div className="d-sm-flex">
					<Card title={"proyecto React"}
					description={"Aprendiendo"}
					buttonURL={"www.google.com"} label={"Ir a Google"} />
					<Card title={"Ejecutando"}
					description={"El proceso"}
					buttonURL={"www.facebook.com"} label={"Ir a Google"} />
					<Card title={"explorando"}
					description={"nuevos temas"}
					buttonURL={"www.instagram.com"} label={"Ir a Google"} />
					<Card title={"resultado final"}
					description={"listo pa pintura"}
					buttonURL={"www.bootstrap.com"}label={"Ir a Google"} />

				</div>
					<Footer/>
			</div>
		</div>
	);
};

export default Home;
