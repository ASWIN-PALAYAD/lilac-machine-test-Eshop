import styled from "styled-components";

const Wrapper = styled.section`



.Container{
    margin: 20px auto;
    width: 80%;
    height: 80vh;
    background-color: orange;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
    

}
.Cart-items{
    display: flex;
    justify-content: center;
        margin-bottom: 40px;

    
}

.Item-card{
    border: 1px solid black;
    text-align: center;
    padding: 10px;
    height: 230px;
    border-radius: 5px;
    margin: 8px 8px 8px 8px ;

    
}
.image img{
    width: 100%;
    height: 150px;
}
button{
    background-color: blue;
    color: white;
    border: none;
    width: 100px;
    height: 20px;
    border-radius: 5px;
}
button:hover{
    background-color: red;
    transform: scale(1.1);
}
.TotalAmount{
    margin-top: 30px;

}




`
export default Wrapper