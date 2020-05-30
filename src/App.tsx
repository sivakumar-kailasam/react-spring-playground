import * as React from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
/** @jsx jsx */

const Image = styled.img`
	height: 36px;
	width: 36px;
`;

const btnStyles = css`
	display: flex;
	height: 70px;
	background: rebeccapurple;
	color: white;
	align-items: center;
	justify-content: center;
	padding: 1em;

	img + div {
		margin-left: 20px;
	}
`;

export default function App() {
	const [isExpanded, setIsExpanded] = React.useState(true);

	return (
		<button css={btnStyles} onClick={() => setIsExpanded(isExpanded => !isExpanded)}>
			{isExpanded ? (
				<>
					<Image src="https://image.flaticon.com/icons/svg/2916/2916115.svg" />

					<div>A very very long text that's going to be hidden on Click</div>
				</>
			) : (
				<Image src="https://image.flaticon.com/icons/svg/753/753345.svg" />
			)}
		</button>
	);
}
