import { useState } from "react";
import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import WHLanding from "@/components/WHLanding";
import WHRunning from "@/components/WHRunning";
import WHFinished from "@/components/WHFinished";
export default function WimHofTimer() {
  const timerStates = ["setting", "running", "finished"];
  const [currentState, setCurrentState] = useState(timerStates[0]);
  const [setting, setSetting] = useState({
    readyDuration: 5,
    instructionDuration: 3,
    sets: 3,
    breathCycles: 30,
    breathDuration: 3,
    holdingTime: [60, 90, 120, 120, 150],
    inhaleHoldingTime: 15,
  });

  return (
    <Box>
      {currentState === "setting" && (
        <WHLanding
          setting={setting}
          setSetting={setSetting}
          setCurrentState={setCurrentState}
        />
      )}
      {currentState === "running" && (
        <WHRunning setting={setting} setCurrentState={setCurrentState} />
      )}

      {currentState === "finished" && (
        <WHFinished setting={setting} setCurrentState={setCurrentState} />
      )}
    </Box>
  );
}
