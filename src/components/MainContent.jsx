import React from "react";
import Food from "../assets/food.png";
import Pills from "../assets/lotsofpills.png";

const MainContent = () => {
  return (
    <div className="main-content-wrapper">
      <div className="main-content">
        <p>
          Natural bodybuilding is a discipline focused on building muscle
          strength, tone, and size through a combination of rigorous training,
          balanced nutrition, and without the use of performance-enhancing drugs
          or steroids. This approach emphasizes not only physical improvement
          but also health and longevity. Natural bodybuilders rely on hard work,
          consistent effort, and the body's natural hormonal processes to
          achieve their fitness goals, making it a sustainable and ethical
          alternative to chemically-enhanced methods.
        </p>
      </div>
      <div className="row-one">
        <div className="main-content-dark">
          <p>
            A key component of natural bodybuilding is proper nutrition. A
            well-balanced diet, rich in proteins, complex carbohydrates, and
            healthy fats, provides the essential nutrients needed for muscle
            growth and recovery. Additionally, natural bodybuilders prioritize
            nutrient timing—eating specific macronutrients around workouts to
            optimize performance and muscle repair. Unlike competitive
            bodybuilding with heavy reliance on artificial enhancements, the
            natural approach highlights the importance of maintaining overall
            health while achieving impressive results.
          </p>
        </div>
        <div className="image-food">
          <img src={Food} alt="delicious fruit" />
        </div>
      </div>
      <div className="row-two">
        <div className="image-two">
          <img src={Pills} alt="" />
        </div>
        <div className="main-content">
          <p>
            Training for natural bodybuilding typically involves a mix of
            resistance exercises, progressive overload, and adequate recovery
            periods to stimulate muscle growth. Rest and sleep are equally
            important to allow the body to repair and grow stronger.
            Furthermore, natural bodybuilders focus on achieving a harmonious,
            balanced physique, emphasizing symmetry, proportion, and a lean body
            composition. This focus on balance and health makes natural
            bodybuilding a compelling choice for those who value discipline and
            longevity over quick, unsustainable gains.
          </p>
        </div>
      </div>
      <div className="main-content">
        <p>
          Natural bodybuilding is the best choice for those seeking a
          sustainable and health-conscious approach to fitness. It emphasizes
          building strength and muscle naturally through disciplined training,
          balanced nutrition, and adequate recovery, without relying on harmful
          performance-enhancing substances. This not only ensures long-term
          physical and mental well-being but also promotes integrity and
          self-discipline. Additionally, natural bodybuilding fosters a balanced
          and symmetrical physique while prioritizing overall health, making it
          an ideal path for those who value longevity and a genuine sense of
          achievement.
        </p>
      </div>
    </div>
  );
};

export default MainContent;
