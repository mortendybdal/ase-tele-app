"use client";

import Box from "@/components/Box/Box";
import { Inner, Wrapper } from "./page.styled";
import Logo from "@/components/Logo";
import { useKeyPressed } from "@/hooks/useKeyPressed";
import { useEffect } from "react";
import TestPanel from "@/components/TestPanel";
import { useStore } from "@/store/store";

export default function Home() {
  const showTestPanel = useStore.useIsTestMode();
  const setShowTestPanel = useStore.useSetIsTestMode();
  const aKey = useKeyPressed("a");
  const sKey = useKeyPressed("s");
  const eKey = useKeyPressed("e");

  useEffect(() => {
    if (aKey && sKey && eKey && !showTestPanel) {
      setShowTestPanel(true);
    }
  }, [aKey, sKey, eKey, showTestPanel, setShowTestPanel]);

  return (
    <Wrapper>
      <Inner $showTestPanel={showTestPanel}>
        <Box title="Box 1">
          This is a simple box component styled with styled-components. It
          includes a header and content area.
        </Box>
        <Box title="Box 2">
          Here is another box to demonstrate multiple instances of the Box
          component.
        </Box>
        <Box title="Box 3">
          This is a simple box component styled with styled-components. It
          includes a header and content area.
        </Box>
        <Box title="Box 4">
          Here is another box to demonstrate multiple instances of the Box
          component.
        </Box>
        <Box title="Box 5">
          This is a simple box component styled with styled-components. It
          includes a header and content area.
        </Box>
        <Box title="Box 6">
          Here is another box to demonstrate multiple instances of the Box
          component.
        </Box>
        <Logo />
      </Inner>
      <TestPanel />
    </Wrapper>
  );
}
