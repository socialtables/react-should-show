import React from "react";

export default function ShouldShow({ shouldShow, hiddenElement = null, children }) {
	return (
		shouldShow
		?
		React.Children.only(children)
		:
		hiddenElement
	);
}