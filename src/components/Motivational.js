import React from "react";
import Card from "./Card";
const Motivational = () => {
    const quotes = [
        {
          category: "Work",
          headline: "Dedication",
          description: " To get the proper results one should do their work with full dedication",
        },
        {
          category: "Happiness",
          headline: "Smile",
          description: "To conquer any situation just smile and you will definetly win",
        },
        
        
      ];
  return (
    <>
    {quotes.map((candidate, key) => {
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

export default Motivational;