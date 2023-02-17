import styled from "styled-components";

const Wrapper = styled.section`

.Products{
    margin: 20px auto;
    width: 80%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: orange;
    border-radius: 5px;
}
.Card{
    width: 250px;
    height: 380px;
    border: 1px solid black;
    border-radius: 5px;
    overflow: hidden;
    padding: 10px;
    margin: 40px 20px;
    background-color: white;
}
.Product-image{
    width: 100%;
    height: 100px;
    max-width: 300px;
    min-height: 200px;
    display: block;
    object-fit: contain;
}
.Product-name{
    text-transform: uppercase;
    margin: 10px 0px;
}
.Product-price{
    margin: 10px 0px;
    padding-bottom: 20px;
    font-size: 18px;
    line-height: 30px;
}
.Product-add-button{
    font-weight: 700;
    font-size: 18px;
    border-radius: 5px;
    border:none;
    outline: none;
    background-color: blue;
    width: 100%;
    height: 40px;
    display: block;
    cursor: pointer;
    text-transform: uppercase;
    margin: 15px auto;
}
.Product-add-button:hover{
    background-color: red;
    color: white;
}
.Product-add-button:active{
    transform: translateY(2px);
}


`
export default Wrapper