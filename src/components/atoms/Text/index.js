import React from "react";
import { CustomText, SubTitulo } from "./styles";

export const Text = ({children}) => {
  return(
    <CustomText>
      {children}
    </CustomText>
  );
}

export const Sub = () => {
  return(
    <SubTitulo>Que a força esteja com você</SubTitulo>
  );
}

// export const SubTit = ({}) =>{
//   return (
//     <TittleSub>Que a força esteja com você</TittleSub>
//   );
// }