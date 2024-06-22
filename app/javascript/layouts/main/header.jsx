import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";

import { useOffSetTop } from "~/hooks/use-off-set-top";
import { useResponsive } from "~/hooks/use-responsive";

import { bgBlur } from "~/theme/css";

import Logo from "~/components/logo";

import NavMobile from "./nav/mobile";
import NavDesktop from "./nav/desktop";
import { HEADER } from "../config-layout";
// NOTE: Might be able to delete.
// import Searchbar from "../common/searchbar";
import { navConfig } from "./config-navigation";
import HeaderShadow from "../common/header-shadow";
// NOTE: Might be able to delete.
// import SettingsButton from "../common/settings-button";

// ----------------------------------------------------------------------

export default function Header({ headerOnDark }) {
  const theme = useTheme();

  const offset = useOffSetTop();

  const mdUp = useResponsive("up", "md");

  const renderContent = (
    <>
      <Box sx={{ lineHeight: 0, position: "relative" }}>
        <Logo />
      </Box>

      <>
        <Stack
          flexGrow={1}
          alignItems="center"
          sx={{
            height: 1,
            display: { xs: "none", md: "flex" },
          }}
        ></Stack>

        <Box sx={{ flexGrow: { xs: 1, md: "unset" } }} />
      </>

      {mdUp && <NavDesktop data={navConfig} />}

      {!mdUp && <NavMobile data={navConfig} />}
    </>
  );

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(["height", "background-color"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: "common.white",
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: "text.primary",
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {renderContent}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};
