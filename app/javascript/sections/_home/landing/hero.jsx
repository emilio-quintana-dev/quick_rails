import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import { useResponsive } from "~/hooks/use-responsive";

import { bgGradient } from "~/theme/css";

import Iconify from "~/components/iconify";

import backgroundImg from "~/assets/background/overlay_1.jpg"; // [BACK]

// ----------------------------------------------------------------------

export default function MarketingLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive("up", "md");

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: backgroundImg,
        }),
        overflow: "hidden",
      }}
    >
      <Container
        sx={{
          py: 15,
          display: { md: "flex" },
          alignItems: { md: "center" },
          height: { md: `100vh` },
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 10 }}>
          <Grid
            xs={12}
            md={6}
            lg={7}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h1" sx={{ my: 3 }}>
              Ship your startup in days, not weeks.
            </Typography>

            <Typography variant="subtitle1" color="text.secondary">
              Use our battle-tested opinionated SaaS stack based on React, Typescript and Ruby on Rails. Focus on building essential business logic instead of repeatable features.
            </Typography>

            <Stack
              spacing={3}
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "center", md: "unset" }}
              justifyContent={{ xs: "center", md: "unset" }}
              sx={{ mt: 5 }}
            >
              <Button
                variant="contained"
                size="large"
                component="a"
                href="https://github.com/emilio-quintana-dev/quick_rails"
              >
                Try For Free
              </Button>

              <Stack
                direction="row"
                alignItems="center"
                sx={{ typography: "h6" }}
              >
                <Fab size="medium" sx={{ mr: 1 }}>
                  <Iconify width={24} icon="carbon:play" />
                </Fab>
                See the Demo
              </Stack>
            </Stack>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={5}>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
