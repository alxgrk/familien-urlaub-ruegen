import type { NextPage } from "next";
import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./lage.module.css";
const Lage: NextPage = () => {
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
    <div className={styles.lage}>
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
                className={styles.startWrapper}
                onClick={onFrameButton2Click}
              >
                <div className={styles.start}>Buchung</div>
              </button>
              <button
                className={styles.lageWrapper}
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
        <div className={styles.mapSection}>
          <div className={styles.mapSectionInner}>
            <div className={styles.unserGrundstckParent}>
              <b className={styles.unserGrundstck}>Unser Grundstück</b>
              <div className={styles.mBisZum}>100m bis zum Strand</div>
            </div>
          </div>
          <div className={styles.calendar1Wrapper}>
            <img
              className={styles.calendar1Icon}
              alt=""
              src="/calendar-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.frame1}>
          <div className={styles.locationSection}>
            <div className={styles.cardItem17}>
              <div className={styles.cardContent}>
                <div className={styles.h6}>
                  <p className={styles.altenkirchenrgen}>Zittkower Weg 18</p>
                  <p className={styles.altenkirchenrgen}>
                    18556 Altenkirchen/Rügen​
                  </p>
                  <p className={styles.altenkirchenrgen}>Deutschland</p>
                </div>
              </div>
              <div className={styles.flexRow}>
                <img
                  className={styles.icnCircleCircleMdIcon}
                  alt=""
                  src="/icncircle-circlemd3.svg"
                />
                <div className={styles.div}>
                  <b className={styles.h5}>Adresse</b>
                </div>
              </div>
            </div>
            <div className={styles.cardItem171}>
              <div className={styles.cardContent1}>
                <div className={styles.h6}>+49 151 64681052</div>
              </div>
              <div className={styles.flexRow}>
                <img
                  className={styles.icnCircleCircleMdIcon}
                  alt=""
                  src="/icncircle-circlemd4.svg"
                />
                <div className={styles.div}>
                  <b className={styles.h5}>Telefon</b>
                </div>
              </div>
            </div>
            <div className={styles.cardItem172}>
              <div className={styles.cardContent1}>
                <div className={styles.h6}>
                  buchung@familien-urlaub-ruegen.de
                </div>
              </div>
              <div className={styles.flexRow}>
                <img
                  className={styles.icnCircleCircleMdIcon}
                  alt=""
                  src="/icncircle-circlemd5.svg"
                />
                <div className={styles.div}>
                  <b className={styles.h5}>Email</b>
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
                <div className={styles.hauptsaison0106}>
                  Hauptsaison: 01.06. - 31.08
                </div>
                <div
                  className={styles.hauptsaison0106}
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
            <div className={styles.hauptsaison0106}>
              © Rügen Grundstücks GbR 2023. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lage;
