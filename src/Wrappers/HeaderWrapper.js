import styled from "styled-components";

const Wrapper = styled.section`

.Header{
    position: sticky;
    top: 0;
    min-height: 80px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    background-color: rgba(20, 35, 225, 0.8);
}
.logo{
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    padding-left: 50px;
}
.Header-link{
    display: flex;
    margin-right: 10px;

}
.List-item{
    display: flex;
}
.List-item li{
    list-style: none;
    display: inline-block;
    font-size: 18px;
}
.List-item li a{
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    padding: 0px 15px;
}

.List-item li a:hover{
    color: rgba(239, 236, 15, 0.8);
}
button{
    background-color: yellow;
    border: none;
    width: 60px;
    height: 30px;
    border-radius: 8px;
}
button:hover{
    background-color: red;
    color: white;
}




`
export default Wrapper