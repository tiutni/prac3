import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { nickNameState } from "./recoil/User";

const PageC = () => {
  
  const nickname = useRecoilValue(nickNameState);
  
  return (
    <div>
      <h1>{nickname}님 안녕하세요:)</h1>
    </div>
  );
};

export default PageC;
