import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./index.module.css";
const Homepage: NextPage = () => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] = useState<
    string | null
  >(null);
  const [frameDateTimePicker1Value, setFrameDateTimePicker1Value] = useState<
    string | null
  >(null);
  const router = useRouter();

  const onFrameButton1Click = useCallback(() => {
    router.push("/unterkuenfte");
  }, [router]);

  const onFrameButton2Click = useCallback(() => {
    router.push("/buchung");
  }, [router]);

  const onFrameButton3Click = useCallback(() => {
    router.push("/lage");
  }, [router]);

  const onFrameButton4Click = useCallback(() => {
    router.push("/impressum");
  }, [router]);

  const onFrameLinkClick = useCallback(() => {
    router.push("/buchung");
  }, [router]);

  const onLinkClick = useCallback(() => {
    router.push("/unterkuenfte");
  }, [router]);

  const onLink1Click = useCallback(() => {
    router.push("/unterkuenfte");
  }, [router]);

  const onLink2Click = useCallback(() => {
    router.push("/unterkuenfte");
  }, [router]);

  const onFrameLink1Click = useCallback(() => {
    window.open(
      "https://www.tripadvisor.de/Attractions-g946482-Activities-Rugen_Island_Mecklenburg_West_Pomerania.html"
    );
  }, []);

  const onFrameContainer22Click = useCallback(() => {
    router.push("/unterkuenfte");
  }, [router]);

  const onFrameLink4Click = useCallback(() => {
    router.push("/buchung");
  }, [router]);

  const onUnterknfteClick = useCallback(() => {
    router.push("/unterkuenfte");
  }, [router]);

  const onBuchungClick = useCallback(() => {
    router.push("/buchung");
  }, [router]);

  const onLageClick = useCallback(() => {
    router.push("/lage");
  }, [router]);

  const onDatenschutzClick = useCallback(() => {
    router.push("/d-s-g-v-o");
  }, [router]);

  const onImpressumClick = useCallback(() => {
    router.push("/impressum");
  }, [router]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.homepage}>
        <div className={styles.frame} />
        <div className={styles.frame1} />
        <div className={styles.frame2} />
        <header className={styles.frame3}>
          <img
            className={styles.heroSectionIcon}
            alt=""
            src="/hero-section@2x.png"
          />
          <nav className={styles.navbar}>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.logoWrapper}>
                  <div className={styles.logo}>
                    <button className={styles.cayobeach}>
                      Familienurlaub Rügen
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.navigationMenu}>
                <button className={styles.startWrapper}>
                  <div className={styles.start}>Start</div>
                </button>
                <button
                  className={styles.unterknfteWrapper}
                  onClick={onFrameButton1Click}
                >
                  <div className={styles.start}>Unterkünfte</div>
                </button>
                <button
                  className={styles.unterknfteWrapper}
                  onClick={onFrameButton2Click}
                >
                  <div className={styles.start}>Buchung</div>
                </button>
                <button
                  className={styles.unterknfteWrapper}
                  onClick={onFrameButton3Click}
                >
                  <div className={styles.start}>Lage</div>
                </button>
                <button
                  className={styles.unterknfteWrapper}
                  onClick={onFrameButton4Click}
                >
                  <div className={styles.start}>Impressum</div>
                </button>
              </div>
              <img
                className={styles.hamburgerMenuIcon}
                alt=""
                src="/notification.svg"
              />
            </div>
          </nav>
          <div className={styles.einOrtZumEntspannenFrDieWrapper}>
            <b className={styles.einOrtZum}>
              “Ein Ort zum Entspannen für die ganze Familie.”
            </b>
          </div>
        </header>
        <div className={styles.frame4}>
          <div className={styles.bookingStrip}>
            <div>
              <DatePicker
                label="Anreisetag"
                value={frameDateTimePickerValue}
                onChange={(newValue: any) => {
                  setFrameDateTimePickerValue(newValue);
                }}
                slotProps={{
                  textField: {
                    variant: "standard",
                    size: "medium",
                    color: "primary",
                  },
                }}
              />
            </div>
            <div className={styles.bookingStripChild} />
            <div>
              <DatePicker
                label="Abreisetag"
                value={frameDateTimePicker1Value}
                onChange={(newValue: any) => {
                  setFrameDateTimePicker1Value(newValue);
                }}
                slotProps={{
                  textField: {
                    variant: "standard",
                    size: "medium",
                    color: "primary",
                  },
                }}
              />
            </div>
            <div className={styles.bookingStripChild} />
            <input
              className={styles.bookingStripInner}
              type="text"
              defaultValue="2 Erw. - 0 Kinder"
              placeholder="Unterkunft für"
              maxLength
              minLength
            />
            <Link
              className={styles.magnifier24OutlineParent}
              href="/buchung"
              onClick={onFrameLinkClick}
            >
              <img
                className={styles.magnifier24Outline}
                alt=""
                src="/magnifier--24--outline.svg"
              />
              <b className={styles.verfgbarkeitPrfen}>Verfügbarkeit prüfen</b>
            </Link>
          </div>
          <div className={styles.highlightSection}>
            <div className={styles.frameGroup}>
              <div className={styles.unsereHighlightsParent}>
                <b className={styles.unsereHighlights}>Unsere Highlights</b>
                <div className={styles.freuenSieSich}>Freuen Sie sich auf:</div>
              </div>
              <div className={styles.cardItem17Parent}>
                <div className={styles.cardItem17}>
                  <div className={styles.flexRow}>
                    <img
                      className={styles.icnCircleCircleMdIcon}
                      alt=""
                      src="/icncircle-circlemd.svg"
                    />
                    <div className={styles.div}>
                      <b className={styles.h5}>Lage</b>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.h6}>
                      <p
                        className={styles.naturbelassenerStrand}
                      >{`- Naturbelassener Strand `}</p>
                      <p className={styles.naturbelassenerStrand}>
                        {" "}
                        in 150m Entfernung
                      </p>
                    </div>
                    <div className={styles.h61}>- Ruhiges Areal im Wald</div>
                    <div className={styles.h61}>
                      - Campingplatz-Markt fußläufig
                    </div>
                    <div className={styles.h61}>
                      - Insel erkunden mit dem Fahrrad
                    </div>
                    <Link
                      className={styles.link}
                      href="/unterkuenfte"
                      onClick={onLinkClick}
                    >
                      Mehr
                    </Link>
                  </div>
                </div>
                <div className={styles.cardItem17}>
                  <div className={styles.flexRow1}>
                    <img
                      className={styles.icnCircleCircleMdIcon}
                      alt=""
                      src="/icncircle-circlemd1.svg"
                    />
                    <div className={styles.div1}>
                      <b className={styles.h51}>Ausstattung</b>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.h61}>- Kaffeemaschine</div>
                    <div className={styles.h61}>- Kühlschrank​</div>
                    <div className={styles.h61}>- Wasserkocher</div>
                    <div className={styles.h61}>- Mikrowelle/Grill</div>
                    <div className={styles.h61}>- Staubsauger</div>
                    <Link
                      className={styles.link}
                      href="/unterkuenfte"
                      onClick={onLink1Click}
                    >
                      Mehr
                    </Link>
                  </div>
                </div>
                <div className={styles.cardItem17}>
                  <div className={styles.flexRow1}>
                    <img
                      className={styles.icnCircleCircleMdIcon}
                      alt=""
                      src="/icncircle-circlemd2.svg"
                    />
                    <div className={styles.div1}>
                      <b className={styles.h51}>Gemeinschaft</b>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.h61}>- Gemeinschaftshütte</div>
                    <div className={styles.h61}>- Gemeinschaftsküche​</div>
                    <div className={styles.h61}>- Duschkabinen</div>
                    <div className={styles.h61}>- Parkplatz</div>
                    <div className={styles.h61}>
                      - Ladestation für Elektroautos
                    </div>
                    <Link
                      className={styles.link}
                      href="/unterkuenfte"
                      onClick={onLink2Click}
                    >
                      Mehr
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.imageParent}>
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                <div className={styles.frameContainer}>
                  <div className={styles.frameDiv}>
                    <div className={styles.zbKapArkonaParent}>
                      <div className={styles.unsereHighlights}>
                        <span>{`z.B. `}</span>
                        <b>Kap Arkona</b>
                      </div>
                      <div className={styles.beliebteAusflugsziele}>
                        Beliebte Ausflugsziele
                      </div>
                    </div>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.obKapArkonaFischerdrfchenWrapper}>
                        <div className={styles.obKapArkonaContainer}>
                          <p className={styles.naturbelassenerStrand}>
                            Ob Kap Arkona, Fischerdörfchen Vitt oder die Häfen
                            von Wiek, Dranske und Breege - all diese
                            touristischen Ziele können Sie leicht per Fahrrad
                            erreichen und dabei den Norden der Insel Rügen
                            erkunden.
                          </p>
                          <p className={styles.naturbelassenerStrand}>
                            Auch ein Tagesausflug zur nahegelegenen Insel
                            Hiddensee ist von Dranske oder Wiek aus möglich.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
                    <a
                      className={styles.mehrEntdeckenWrapper}
                      href="https://www.tripadvisor.de/Attractions-g946482-Activities-Rugen_Island_Mecklenburg_West_Pomerania.html"
                      target="_blank"
                      onClick={onFrameLink1Click}
                    >
                      <b className={styles.verfgbarkeitPrfen}>Mehr Entdecken</b>
                    </a>
                    <div className={styles.frameChild} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame5}>
          <div className={styles.roomsSection}>
            <div className={styles.unsereHighlightsParent}>
              <b className={styles.unsereHighlights}>Unterkünfte</b>
              <div className={styles.freuenSieSich}>
                Sehen Sie sich die verfügbaren Hütten an
              </div>
            </div>
            <div className={styles.lineParent}>
              <div className={styles.frameItem} />
              <div
                className={styles.frameParent2}
                onClick={onFrameContainer22Click}
              >
                <Link className={styles.frameA} href="/unterkuenfte">
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/frame-45@2x.png"
                  />
                  <div className={styles.frameParent3}>
                    <div className={styles.mittlereHtteParent}>
                      <div className={styles.mittlereHtte}>Kleine Hütte</div>
                      <div className={styles.betten}>3 Betten</div>
                    </div>
                    <div className={styles.parent}>
                      <div className={styles.unsereHighlights}>25€</div>
                      <div className={styles.nacht}>/ Nacht</div>
                    </div>
                  </div>
                </Link>
                <Link className={styles.frameA} href="/unterkuenfte">
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/frame-46@2x.png"
                  />
                  <div className={styles.frameParent3}>
                    <div className={styles.mittlereHtteParent}>
                      <div className={styles.mittlereHtte}>Große Hütte</div>
                      <div className={styles.betten}>Bis zu 6 Betten</div>
                    </div>
                    <div className={styles.parent}>
                      <div className={styles.unsereHighlights}>45€</div>
                      <div className={styles.nacht}>/ Nacht</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.frame6}>
            <div className={styles.cta}>
              <div className={styles.unsereHighlights}>
                Um Erinnerungen zu schaffen
              </div>
              <Link
                className={styles.jetztReservierenWrapper}
                href="/buchung"
                onClick={onFrameLink4Click}
              >
                <b className={styles.verfgbarkeitPrfen}>Jetzt reservieren</b>
              </Link>
            </div>
            <div className={styles.footer}>
              <div className={styles.footer1}>
                <div className={styles.companyDetailsSocialMediaParent}>
                  <div className={styles.companyDetailsSocialMedia}>
                    <div className={styles.logo1}>
                      <div className={styles.cayobeach1}>
                        Familiencamp Rügen
                      </div>
                    </div>
                    <div className={styles.rgenGrundstcksGbr}>
                      Rügen Grundstücks GbR
                    </div>
                    <div className={styles.familienurlaubAmStrand}>
                      Familienurlaub am Strand von Rügen
                    </div>
                  </div>
                  <div className={styles.homeLinkWrapper}>
                    <div className={styles.homeLink}>
                      <div className={styles.unsereHighlights}>
                        Hauptsaison: 01.06. - 31.08
                      </div>
                      <div
                        className={styles.unsereHighlights}
                      >{`Nebensaison:   01.03. - 31.05. & 01.09. - 31.10.`}</div>
                    </div>
                  </div>
                  <div className={styles.homeLinkContainer}>
                    <div className={styles.homeLink}>
                      <Link
                        className={styles.datenschutz}
                        href="/unterkuenfte"
                        onClick={onUnterknfteClick}
                      >
                        Unterkünfte
                      </Link>
                      <Link
                        className={styles.datenschutz}
                        href="/buchung"
                        onClick={onBuchungClick}
                      >
                        Buchung
                      </Link>
                      <Link
                        className={styles.datenschutz}
                        href="/lage"
                        onClick={onLageClick}
                      >
                        Lage
                      </Link>
                      <Link
                        className={styles.datenschutz}
                        href="/d-s-g-v-o"
                        onClick={onDatenschutzClick}
                      >
                        Datenschutzerklärung
                      </Link>
                      <Link
                        className={styles.datenschutz}
                        href="/impressum"
                        onClick={onImpressumClick}
                      >
                        Impressum
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.rgenGrundstcksGbr2023AlWrapper}>
                  <div className={styles.unsereHighlights}>
                    © Rügen Grundstücks GbR 2023. Alle Rechte vorbehalten.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Homepage;
