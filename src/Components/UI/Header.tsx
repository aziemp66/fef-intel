import React from "react";

const Header = () => {
	return (
		<div className="flex justify-center items-center flex-col">
			<p className="font-poppins text-xl">With Poppins</p>
			<p className="text-xl">Without Poppins</p>
			<img src="/logo/fef-logo.png" alt="fef" />
		</div>
	);
};

export default Header;
