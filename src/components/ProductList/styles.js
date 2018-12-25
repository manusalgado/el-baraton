import styled from 'styled-components'

export const Product = styled.div`
    padding: 10px;
    margin: 20px 0;
		border-radius: 2.36px;	
		background-color: #FFFFFF;	
		box-shadow: 0 1px 19px 0 rgba(225,225,225,0.5), 0 1px 4px 0 rgba(0,0,0,0.5);
    h3 {
        font-size: 1rem;
        text-transform: uppercase;
				font-weight: 700;
				margin: 0;
    		padding: 10px;
		}
		div {
			text-align:center;
			img {
				max-width: 100%;
			}
		}
		.Product__stock {
			display: flex;
			align-items: center;
			padding: 0 10px;
			.Product__stock--green {
				display: flex;
				align-items: center;
				span {
				width: 20px;
				height: 20px;
				background-color: green;
				display: block;
				border-radius: 50%;
				margin: 0 15px;
				}
			}
			.Product__stock--red {
				display: flex;
				align-items: center;
				span {
				width: 20px;
				height: 20px;
				background-color: red;
				display: block;
				border-radius: 50%;
				margin: 0 15px;
				}
			}
		}
		.Product__price {
			padding: 10px;
			display: block;
			font-weight: bold;
		}
		.Product__add-cart {
			border-radius: 4px;
			border: none;
			background-color: #e53935;
			color: #ffffff;
			padding: 10px;
			display: block;
			margin: auto;
			font-weight: 700;
			cursor:pointer;
		}
		.Product__add-cart-no {
			border-radius: 4px;
			border: none;
			background-color: rgba(223,3,20,0.5);
			color: #ffffff;
			padding: 10px;
			display: block;
			margin: auto;
			font-weight: 700;
			cursor:default;
		}
    transition: 300ms;
    &:hover {
    transition: 0.2s ease-in;
    transform: translateY(-10px);
  }
  &:active {
    transform: scale(0.9);
  }
`