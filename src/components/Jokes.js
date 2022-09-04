import React from "react";
import Card from "./Card";
const Jokes = () => {

  const joke = [
    {
      category: "Fun",
      headline: "India VS Pakistan",
      description: " pakistan beats India",
    },
    {
      category: "Entertainment",
      headline: " Bollywood Movie Released",
      description: "Bollywood Movie Gets Hit an got no hatered",
    },
    {
      category: "Politics",
      headline: "Congress won elections",
      description: "Pappu defeat everyone to win elections",
    },
    
  ];
  return (
    <>
    {joke.map((candidate, key) => {
      return (
  <>
    <Card
    current={key}
    category={candidate.category}
    headline={candidate.headline}
    description={candidate.description}
    />
  </>
  );
})}
    </>
  );
};

export default Jokes;