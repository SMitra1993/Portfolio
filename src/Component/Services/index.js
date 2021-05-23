import React from "react";
import {
  TechContainer,
  TechH1,
  TechWrapper,
  TechCard,
  TechIcon,
  TechH2,
  TechLi,
} from "./ServicesElements";
import tech3 from "../../Assests/Images/bug_fixing.svg";
import tech2 from "../../Assests/Images/tech-2.svg";
import tech1 from "../../Assests/Images/tech-1.svg";
const Services = () => {
  return (
    <>
      <TechContainer id="tech">
        <TechH1> Tech Stack</TechH1>
        <TechWrapper>
          <TechCard>
            <TechIcon src={tech1} />
            <TechH2> Front End</TechH2>
            <TechLi> HTML5 </TechLi>
            <TechLi> CSS </TechLi>
            <TechLi> Javascript </TechLi>
            <TechLi> React </TechLi>
            <TechLi> Vue.js </TechLi>
          </TechCard>
          <TechCard>
            <TechIcon src={tech2} />
            <TechH2> Back End</TechH2>
            <TechLi> Node.js </TechLi>
            <TechLi> Express </TechLi>
            <TechLi> Rest API </TechLi>
            <TechLi> Sql Server </TechLi>
            <TechLi> MongoDB </TechLi>
          </TechCard>
          <TechCard>
            <TechIcon src={tech3} />
            <TechH2>Dev Tools</TechH2>
            <TechLi> npm</TechLi>
            <TechLi> Git</TechLi>
            <TechLi> Jira</TechLi>
            <TechLi> Heroku</TechLi>
            <TechLi> Postman</TechLi>
            <TechLi> Bootstrap</TechLi>
          </TechCard>
        </TechWrapper>
      </TechContainer>
    </>
  );
};

export default Services;
