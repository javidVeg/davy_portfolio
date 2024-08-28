import React, { useEffect, useState } from "react";
import TypingEffect from "../components/TypingEffect";
import {
  CRTComputerContainer,
  NoiseOverlayStyle,
} from "../utils/StyledContainers";
import { portfolioApi } from "../utils/apis/portfolioApi";

const IntroPage = () => {
  const [botScript, setBotScript] = useState([
    "INITIALIZING DAVY'S PORTFOLIO  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .",
  ]);

  useEffect(() => {
    const getData = async () => {
      const response = await portfolioApi.getBotScript();
      const data = await response.data;
      setBotScript(data[0]);
    };
    getData();
  }, []);

  return (
    <CRTComputerContainer>
      <NoiseOverlayStyle></NoiseOverlayStyle>
      <TypingEffect lines={botScript} />
    </CRTComputerContainer>
  );
};

export default IntroPage;
