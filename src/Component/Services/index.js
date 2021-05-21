import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
import Icon1 from "../../Assests/Images/bug_fixing.svg";
const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1> wdwda</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2> One</ServicesH2>
            <ServicesP> ecsceccscseccse w dwd w dwadaw</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2> Two</ServicesH2>
            <ServicesP> iuf ry er reb ryevew</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2> Three</ServicesH2>
            <ServicesP> ebv rvev ryee yvbraw</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
