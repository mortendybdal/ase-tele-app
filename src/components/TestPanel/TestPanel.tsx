import { useStore } from "@/store/store";
import {
  CloseButton,
  Content,
  Header,
  SubTitle,
  Title,
  Wrapper,
} from "./TestPanel.styles";
import { IoCloseSharp } from "react-icons/io5";
import { JsonEditor, githubLightTheme } from "json-edit-react";
import { AllObjects } from "@/generated-api/api";

export default function TestPanel() {
  const showTestPanel = useStore.useIsTestMode();
  const customerData = useStore.useCustomerData();
  const setShowTestPanel = useStore.useSetIsTestMode();
  const setCustomerData = useStore.useSetCustomerData();
  return (
    <Wrapper $show={showTestPanel}>
      <Header>
        <Title>Test Mode</Title>
        <SubTitle>
          It is possible to edit data to see the effect in the UI.
        </SubTitle>
        <CloseButton onClick={() => setShowTestPanel(false)}>
          <IoCloseSharp />
        </CloseButton>
      </Header>

      <Content>
        <JsonEditor
          data={customerData}
          setData={(data) => setCustomerData(data as AllObjects)}
          theme={githubLightTheme}
          restrictDelete={true}
          restrictAdd={true}
          restrictTypeSelection={true}
          rootFontSize={12}
          enableClipboard={false}
          maxWidth={"100%"}
        />
      </Content>
    </Wrapper>
  );
}
