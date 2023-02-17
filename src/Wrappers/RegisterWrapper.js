import styled from "styled-components";

const Wrapper = styled.section`

display: flex;
justify-content: center;
align-items: center;
height: 100vh;

.Container{
padding: 15px;
border: 2px solid black;
}
.Heading{
    display: flex;
    justify-content: center;
}
.Form_Row{
    padding: 10px;
}
.Input_Field{
    width: 100%;
    height: 20px;
    margin-top: 5px;
}
.Submit{
    display: flex;
    justify-content: center;

}
.Submit>button{
    height: 25px;
    width: 60px;
    border-radius: 5px;
    border: none;
    background-color: blue;
    color: white;
}




`


export default Wrapper