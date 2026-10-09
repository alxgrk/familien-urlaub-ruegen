import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, createTheme} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { deDE } from "@mui/x-date-pickers/locales";
import { de as deDateFns } from "date-fns/locale";

import { lora } from "../lib/fonts";

import "./global.css";

export default function MyApp(props: any) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const muiTheme = createTheme({
    typography: {
      fontFamily: lora.style.fontFamily,
    },
  });

  return (
    <React.Fragment>
      <Head>
        <title>Familiencamp Rügen – Ferienhäuser am Strand in Drewoldke</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta
          name="description"
          content="Familienurlaub auf Rügen: gemütliche Ferienhäuser und Bungalows nur 150 m vom Strand der Tromper Wiek entfernt. Jetzt unverbindlich anfragen."
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Familiencamp Rügen" />
        <meta
          property="og:title"
          content="Familiencamp Rügen – Ferienhäuser am Strand in Drewoldke"
        />
        <meta
          property="og:description"
          content="Familienurlaub auf Rügen: gemütliche Ferienhäuser und Bungalows nur 150 m vom Strand der Tromper Wiek entfernt. Jetzt unverbindlich anfragen."
        />
        <meta property="og:url" content="https://familien-urlaub-ruegen.de/" />
        <meta
          property="og:image"
          content="https://familien-urlaub-ruegen.de/dronensicht-main-page-header.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns} localeText={deDE.components.MuiLocalizationProvider.defaultProps.localeText} adapterLocale={deDateFns}>
          <ThemeProvider theme={muiTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
      </LocalizationProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
