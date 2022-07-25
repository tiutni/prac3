import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { nickNameState } from "./recoil/User";
import { useRecoilState } from "recoil";
import { LoginButton } from "./PageA";

const PageB = () => {

  const navigate = useNavigate();

  const [nickname, setNickname] = useRecoilState(nickNameState);

  const onClickConfirm = () =>{
    navigate('/c');
  }
  
  return (
    <div>
      <input type="text" placeholder="닉네임을 입력해주세요" value={nickname} onChange={(e)=>setNickname(e.target.value)}/>
      <button onClick={onClickConfirm}>확인</button>
      <LoginButton>로그인컴포넌트</LoginButton>
    </div>
  );
};

export default PageB;
