import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const PageA = () => {
    const navigate = useNavigate();

    const [isValue, setIsValue] = useState(false);

    const goToB = () =>{
        navigate('/b');
    }

    const onChangeId = (e) =>{
        const id = e.target.value;

        if(id.length<5){
            setIsValue(false);
        }
        else{
            setIsValue(true);
        }
    }

    useEffect(() => {

        console.log("A화면 나타남");

        return()=>{
            console.log("A화면 사라짐");
        }
    }, [])


    

  return (
    <div>
        <h1>PageA</h1>
        <button onClick={goToB}>b로 이동</button>
        <Link to='/c'>PageC로 이동</Link>
        <NameStyle>디모</NameStyle>
        <input onChange={onChangeId}/>
        <LoginButton active={isValue}>로그인</LoginButton>

    </div>
  )
}

const NameStyle = styled.div`
    color:red;
    font-size: 25px;
`;

export const LoginButton = styled.button`
    color: black;
    font-size: 20px;
    padding: 10px 20px;

    background-color: ${props=>props.active?"red":"white"};
`;

export default PageA