import React from "react";
import { FlatList } from "react-native";
import { Card } from "../../molecules"

const FAKE_DATA = [
  {
    id: 0,
    image_url:
    'https://i0.wp.com/sociedadejedi.com.br/wp-content/uploads/2020/01/darth-vader-.jpg?fit=700%2C394&ssl=1',
  },
  {
    id: 1,
    image_url:
    'https://upload.wikimedia.org/wikipedia/pt/thumb/4/45/Yoda.jpg/200px-Yoda.jpg',
  },
]

export const Homelist = () => {
  return (
  <FlatList 
    horizontal
    data={FAKE_DATA}
    renderItem={({ item }) => <Card item={item} />}
    keyExtractor={(item) => item.id}
  />
  )
}