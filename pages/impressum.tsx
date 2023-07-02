import type { NextPage } from "next";
import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./impressum.module.css";
const Impressum: NextPage = () => {
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
    <div className={styles.impressum}>
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
                className={styles.startWrapper}
                onClick={onFrameButton3Click}
              >
                <div className={styles.start}>Lage</div>
              </button>
              <button
                className={styles.impressumWrapper}
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
        <div className={styles.headerSection}>
          <div className={styles.headerSectionInner}>
            <div className={styles.unserImpressumParent}>
              <b className={styles.unserImpressum}>Unser Impressum</b>
              <div className={styles.angabenGem}>Angaben gemäß § 5 TMG</div>
            </div>
          </div>
        </div>
        <div className={styles.frame1}>
          <div className={styles.textSection}>
            <div className={styles.headerSectionInner}>
              <div className={styles.codetodesign}>
                <b className={styles.heading2}>Angaben gemäß § 5 TMG</b>
                <div className={styles.p}>
                  <div className={styles.rgenGrundstcksGbrContainer}>
                    <span className={styles.quelleERecht24deTxtContainer}>
                      <p className={styles.rgenGrundstcksGbr}>
                        Rügen Grundstücks GbR
                      </p>
                      <p className={styles.rgenGrundstcksGbr}>
                        c/o Christine Girke
                      </p>
                      <p className={styles.rgenGrundstcksGbr}>Gartenweg 3</p>
                      <p className={styles.rgenGrundstcksGbr}>
                        04463 Großpösna
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.p1}>
                  <div className={styles.strongVertretenContainer}>
                    <span className={styles.quelleERecht24deTxtContainer}>
                      <p className={styles.rgenGrundstcksGbr}>
                        <b>Vertreten durch:</b>
                      </p>
                      <p className={styles.rgenGrundstcksGbr}>
                        Dieter Scheibner
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading21}>Kontakt</b>
                <div className={styles.p1}>
                  <div className={styles.telefon49151Container}>
                    <span className={styles.quelleERecht24deTxtContainer}>
                      <p className={styles.rgenGrundstcksGbr}>
                        Telefon: +49 151 64681052
                      </p>
                      <p className={styles.rgenGrundstcksGbr}>
                        E-Mail: info@familien-urlaub-ruegen.de
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading22}>Steuer-ID</b>
                <div className={styles.p3}>
                  <div className={styles.umsatzsteuerIdentifikationsnu}>
                    <span className={styles.quelleERecht24deTxtContainer}>
                      <p className={styles.rgenGrundstcksGbr}>
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                        Umsatzsteuergesetz:
                      </p>
                      <p className={styles.rgenGrundstcksGbr}>238/292/09187</p>
                      <p className={styles.rgenGrundstcksGbr}>
                        Finanzamt Grimma
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading22}>
                  Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
                </b>
                <div className={styles.wirSindNicht}>
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </div>
                <div className={styles.p5}>
                  <div className={styles.quelleERecht24de}>
                    <span className={styles.quelleERecht24deTxtContainer}>
                      <span>{`Quelle: `}</span>
                      <span className={styles.eRecht24de}>e-recht24.de</span>
                    </span>
                  </div>
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
              <div className={styles.rgenGrundstcksGbr1}>
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

export default Impressum;
