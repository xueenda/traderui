import {
  createTheme,
  IconButton,
  Stack,
  Toggle,
  ThemeProvider,
  initializeIcons
} from "@fluentui/react";
import { useState } from "react";
import ProfileTabs from "./components/ProfileTabs";
import ControlPanel from "./components/ControlPanel";
import {EditProfile} from "./components/EditProfile";

initializeIcons();

const myTheme = createTheme({
  palette: {
    themePrimary: "#eda621",
    themeLighterAlt: "#090701",
    themeLighter: "#261b05",
    themeLight: "#47320a",
    themeTertiary: "#8e6314",
    themeSecondary: "#d1921d",
    themeDarkAlt: "#efae36",
    themeDark: "#f1ba54",
    themeDarker: "#f5cc7f",
    neutralLighterAlt: "#393837",
    neutralLighter: "#383736",
    neutralLight: "#363534",
    neutralQuaternaryAlt: "#323131",
    neutralQuaternary: "#302f2e",
    neutralTertiaryAlt: "#2e2d2d",
    neutralTertiary: "#dfdfdf",
    neutralSecondary: "#e4e4e4",
    neutralSecondaryAlt: "#e4e4e4",
    neutralPrimaryAlt: "#e9e9e9",
    neutralPrimary: "#cfcfcf",
    neutralDark: "#f4f4f4",
    black: "#f9f9f9",
    white: "#3b3a39",
  },
});


export default function App() {
  const [isLight, setLightTheme] = useState(true);

  const menuProps = {
    shouldFocusOnMount: true,
    shouldFocusOnContainer: true,
    items: [
      {
        key: "editProfile",
        text: "Edit Profile",
        onClick: () => console.log("Rename clicked"),
      },
      {
        key: "editModel",
        text: "Edit Model",
        onClick: () => console.log("Edit clicked"),
      },
      {
        key: "docs",
        text: "Model Document",
        href: "http://bing.com",
      },
      {
        key: "changeLogs",
        text: "Change Log",
        href: "http://bing.com",
      },
      {
        key: "apps",
        text: "Download App",
        href: "http://bing.com",
        target: "_blank",
      },
    ],
  };

  const menuIcon = { iconName: "ContextMenu" };

  return (
    <ThemeProvider applyTo="body" theme={isLight ? "" : myTheme}>
      <Stack tokens={{ childrenGap: 10, maxWidth: "100%" }}>
        <Stack
          horizontal
          horizontalAlign="space-between"
          tokens={{ childrenGap: 0 }}
        >
          <Stack.Item>
            <ProfileTabs />
          </Stack.Item>
          <Stack.Item styles={{ root: { paddingTop: 8 } }}>
            <Stack horizontal>
              <Toggle
                onText="Dark"
                offText="Light"
                styles={{ root: { paddingTop: 5 } }}
                onClick={() => setLightTheme((i) => !i)}
              />
              {/* <DefaultButton persistMenu menuProps={menuProps} /> */}
              <IconButton
                menuProps={menuProps}
                iconProps={menuIcon}
                title="More Options"
                ariaLabel="More Options"
                styles={{ root: { fontWeight: 800 } }}
              />
            </Stack>
          </Stack.Item>
        </Stack>
        <ControlPanel />
        {/* <Stack horizontal tokens={{ childrenGap: 10 }}>
          <Stack.Item grow={2}>
            <div style={{ background: "grey", height: 500 }}>
              {" "}
              Risk Overview
            </div>
          </Stack.Item>
          <Stack.Item grow={1}>
            <Stack
              styles={{ root: { height: 500 } }}
              tokens={{ childrenGap: 10 }}
            >
              <Stack.Item>
                <div style={{ background: "grey", height: 300 }}></div>
              </Stack.Item>
              <Stack.Item>
                <div style={{ background: "grey", height: 190 }}></div>
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item grow={1}>
            <div style={{ background: "grey", height: 500 }}></div>
          </Stack.Item>
        </Stack> */}
        <EditProfile />
        {/* <Stack horizontal tokens={{ childrenGap: 10 }}>
          <DefaultButton
            text="Toggle Theme"
            onClick={() => setLightTheme((i) => !i)}
          />
          <PrimaryButton text="PrimaryButton" />
        </Stack>
        <Toggle label="Dark Mode" onClick={() => setLightTheme((i) => !i)} />
        <Toggle label="Disabled" disabled={true} />
        <Checkbox label="Checkbox" />
        <Checkbox checked label="Checkbox Checked" /> */}
      </Stack>
    </ThemeProvider>
  );
}
