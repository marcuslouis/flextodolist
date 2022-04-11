import React from "react";
import { Home } from "./views/home.jsx";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
const Layout = () => {
	

	return (
		<div>
			<Navbar />
			<Home />
			<Footer />
		</div>
	);
};

export default injectContext(Layout);
