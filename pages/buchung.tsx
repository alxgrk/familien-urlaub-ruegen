import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./buchung.module.css";
const Buchung: NextPage = () => {
  const [
    formControlInputStyle1DateTimePickerValue,
    setFormControlInputStyle1DateTimePickerValue,
  ] = useState<string | null>(null);
  const router = useRouter();

  const onCayoBeachClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrameButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

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

  const onFrameContainer7Click = useCallback(() => {
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
      <div className={styles.buchung}>
        <div className={styles.heroSectionParent}>
          <img
            className={styles.heroSectionIcon}
            alt=""
            src="/hero-section1@2x.png"
          />
          <nav className={styles.navbar}>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.logoWrapper}>
                  <div className={styles.logo}>
                    <button
                      className={styles.cayobeach}
                      onClick={onCayoBeachClick}
                    >
                      Familienurlaub Rügen
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.navigationMenu}>
                <button
                  className={styles.startWrapper}
                  onClick={onFrameButtonClick}
                >
                  <div className={styles.start}>Start</div>
                </button>
                <button
                  className={styles.startWrapper}
                  onClick={onFrameButton1Click}
                >
                  <div className={styles.start}>Unterkünfte</div>
                </button>
                <button
                  className={styles.buchungWrapper}
                  onClick={onFrameButton2Click}
                >
                  <div className={styles.start}>Buchung</div>
                </button>
                <button
                  className={styles.startWrapper}
                  onClick={onFrameButton3Click}
                >
                  <div className={styles.start}>Lage</div>
                </button>
                <button
                  className={styles.startWrapper}
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
        </div>
        <div className={styles.frame}>
          <div className={styles.calendarSection}>
            <div className={styles.calendarSectionInner}>
              <div className={styles.unsereVerfgbarkeitenParent}>
                <b className={styles.unsereVerfgbarkeiten}>
                  Unsere Verfügbarkeiten
                </b>
                <div className={styles.klickenSieAuf}>
                  Klicken Sie auf die An- und Abreisedaten in der jeweiligen
                  Kategorie.
                </div>
              </div>
            </div>
            <div className={styles.calendar1Wrapper}>
              <img
                className={styles.calendar1Icon}
                alt=""
                src="/calendar-11@2x.png"
              />
            </div>
          </div>
          <div className={styles.frame1}>
            <div className={styles.reservationSection}>
              <div className={styles.formCard1}>
                <img className={styles.coverIcon} alt="" src="/cover@2x.png" />
                <div className={styles.div}>
                  <b className={styles.h3}>Kontaktformular</b>
                  <form className={styles.cardContent}>
                    <div className={styles.formGroup}>
                      <div className={styles.formControl}>Name *</div>
                      <input
                        className={styles.formControlInputStyle1}
                        type="text"
                        placeholder="Vor- und Nachname * "
                        maxLength
                        minLength
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <div className={styles.formControl}>Email-Adresse *</div>
                      <input
                        className={styles.formControlInputStyle1}
                        type="text"
                        placeholder="example@web.de"
                        maxLength
                        minLength
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <div className={styles.formControl}>Telefonnummer</div>
                      <input
                        className={styles.formControlInputStyle1}
                        type="text"
                        placeholder="0171 12345678"
                        maxLength
                        minLength
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <div className={styles.formControl}>
                        Anzahl Erwachsene *
                      </div>
                      <select className={styles.customSelect} required />
                    </div>
                    <div className={styles.formGroup}>
                      <div className={styles.formControl}>Anzahl Kinder *</div>
                      <select className={styles.customSelect} required />
                    </div>
                    <div className={styles.formGroup}>
                      <div className={styles.formControl}>
                        Geburtstag Kind 1 *
                      </div>
                      <div className={styles.formControlInputStyle13}>
                        <DatePicker
                          label="05.05.2018"
                          value={formControlInputStyle1DateTimePickerValue}
                          onChange={(newValue: any) => {
                            setFormControlInputStyle1DateTimePickerValue(
                              newValue
                            );
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
                    </div>
                    <textarea
                      className={styles.formGroup4}
                      placeholder="Buchungswunsch"
                    />
                  </form>
                  <div
                    className={styles.abschickenWrapper}
                    onClick={onFrameContainer7Click}
                  >
                    <b className={styles.abschicken}>Abschicken</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footer1}>
            <div className={styles.companyDetailsSocialMediaParent}>
              <div className={styles.companyDetailsSocialMedia}>
                <div className={styles.logo1}>
                  <div className={styles.cayobeach1}>Familiencamp Rügen</div>
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
                  <div className={styles.h3}>Hauptsaison: 01.06. - 31.08</div>
                  <div
                    className={styles.h3}
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
              <div className={styles.h3}>
                © Rügen Grundstücks GbR 2023. Alle Rechte vorbehalten.
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Buchung;
