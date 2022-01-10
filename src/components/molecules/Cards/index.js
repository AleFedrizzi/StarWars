import React from "react";
import { CardCotainer, CardImage } from "./styles";

export const Card = ({ item }) => {
  return(
    <CardCotainer>
      <CardImage source={{ uri: item.image_url }} />
    </CardCotainer>
  );
}