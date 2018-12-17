import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    border: 2px solid #e53935;
    border-radius: 4px;
    margin-top: 20px;
    h3 {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        margin: 0;
        padding: 10px;
    }
    .Wrapper__image {
        padding: 10px;
        display: inline-block;
        span {
            position: relative;
            bottom: 25px;
            left: -5px;
            background-color: green;
            width: 20px;
            height: 20px;
            display: inline-block;
            border-radius: 50%;
            color: #ffffff;
            text-align: center;
            font-weight: bold;
        }
    }
    .Wrapper__product-container {
        display: flex;
        p {
            padding: 10px;
            margin: 0;
        }
        button {
            position: relative;
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
    }
    .Wrapper__empty {
        text-align: center;
        font-weight: bold;
    }
    .Wrapper__total {
        display: flex;
        align-items: baseline;
        p, span {
            padding: 5px;
        } 
    }
`