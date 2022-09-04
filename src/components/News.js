import React from "react";
import Card from "./Card";

const News = () => {
  const newsarray = [
    {
      category: "Sports",
      headline: "India Won",
      description: "India beat pakistan",
    },
    {
      category: "Entertainment",
      headline: "Movie Released",
      description: "New Movie Bahubali got released",
    },
    {
      category: "Politics",
      headline: "Modi won elections",
      description: "BJP defeat everyone to win elections",
    },
    {
      category: "Olympics",
      headline: "Gold medal",
      description: "India won gold at boxing",
    },
    {
      cateogory: "Games",
      headline: "BGMI banned",
      description: "BGMI got banned undet IT sector",
    },
    {
      cateogory: "Politics",
      headline: "West Bengal elections soon",
      description: "Elections to be held on December,22",
    },
  ];

  return (
    <>
      {newsarray.map((candidate, key) => {
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

export default News;