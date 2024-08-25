import React, { useEffect, useState } from "react";
import TypingEffect from "../components/TypingEffect";
import {
  CRTComputerContainer,
  NoiseOverlayStyle,
} from "../utils/StyledContainers";
import axios from "axios";
import { portfolioApi } from "../utils/apis/portfolioApi";

const IntroPage = () => {
  const [botScript, setBotScript] = useState([
    "INITIALIZING DAVY'S PORTFOLIO  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .",
  ]);

  useEffect(() => {
    const getData = async () => {
      const response = await portfolioApi.getBotScript();
      const data = await response.data;
      console.log(data);
      setBotScript(data);
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
