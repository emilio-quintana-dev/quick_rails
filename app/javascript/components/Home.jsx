/* eslint-disable perfectionist/sort-imports */

// ----------------------------------------------------------------------

import { BrowserRouter } from "react-router-dom";
import Router from "~/routes/sections";
import { HelmetProvider } from "react-helmet-async";

import ThemeProvider from "~/theme";
import { LocalizationProvider } from "~/locales";

import ProgressBar from "~/components/progress-bar";
import { MotionLazy } from "~/components/animate/motion-lazy";
import { SettingsDrawer, SettingsProvider } from "~/components/settings";

// ----------------------------------------------------------------------

export default function Home() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <LocalizationProvider>
          <SettingsProvider
            defaultSettings={{
              themeMode: "light", // 'light' | 'dark'
              themeDirection: "ltr", //  'rtl' | 'ltr'
              themeColorPresets: "default", // 'default' | 'preset01' | 'preset02' | 'preset03' | 'preset04' | 'preset05'
            }}
          >
            <ThemeProvider>
              <MotionLazy>
                <ProgressBar />
                <SettingsDrawer />
                <Router />
              </MotionLazy>
            </ThemeProvider>
          </SettingsProvider>
        </LocalizationProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
