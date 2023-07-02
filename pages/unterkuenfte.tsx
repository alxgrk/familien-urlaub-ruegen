import type { NextPage } from "next";
import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./unterkuenfte.module.css";
const Unterkuenfte: NextPage = () => {
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

  const onFrameContainer11Click = useCallback(() => {
    router.push("/buchung");
  }, [router]);

  const onFrameContainer18Click = useCallback(() => {
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
    <div className={styles.unterkuenfte}>
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
                className={styles.unterknfteWrapper}
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
        <div className={styles.roomsSection}>
          <div className={styles.frameGroup}>
            <div className={styles.unsereUnterknfteParent}>
              <b className={styles.unsereUnterknfte}>Unsere Unterkünfte</b>
              <div className={styles.frAlleFamiliengren}>
                Für alle Familiengrößen
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.image1Parent}>
                  <img
                    className={styles.image1Icon}
                    alt=""
                    src="/image1@2x.png"
                  />
                  <img
                    className={styles.image3Icon}
                    alt=""
                    src="/image3@2x.png"
                  />
                </div>
                <img
                  className={styles.image2Icon}
                  alt=""
                  src="/image2@2x.png"
                />
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.bisZu3PersonenParent}>
                    <div className={styles.bisZu3}>Bis zu 3 Personen</div>
                    <div className={styles.kleinesFerienhaus}>
                      Kleines Ferienhaus
                    </div>
                  </div>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.unserKleinesFerienhausIstIWrapper}>
                      <div className={styles.unsereUnterknfte}>
                        Unser kleines Ferienhaus ist ideal für zwei Personen und
                        bietet bei maximaler Auslastung 4 Schlafplätze. Diese
                        gemütlichen Häuschen befinden sich am Ende des
                        Grundstücks ganz in der Nähe des Strandes zum Tromper
                        Wiek.
                      </div>
                    </div>
                  </div>
                </div>
                <Link className={styles.frameA} href="/buchung">
                  <div
                    className={styles.jetztReservierenWrapper}
                    onClick={onFrameContainer11Click}
                  >
                    <b className={styles.jetztReservieren}>Jetzt reservieren</b>
                  </div>
                  <div className={styles.frameChild} />
                </Link>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.frameParent4}>
                <div className={styles.frameParent2}>
                  <div className={styles.bisZu3PersonenParent}>
                    <div className={styles.bisZu3}>Bis zu 6 Personen</div>
                    <div className={styles.kleinesFerienhaus}>
                      Großes Ferienhaus
                    </div>
                  </div>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.unserKleinesFerienhausIstIWrapper}>
                      <div className={styles.unsereUnterknfte}>
                        Das größte unserer Ferienhäuser bietet 4 bis maximal 6
                        Personen Platz und ist damit ideal für kleine Gruppen
                        oder große Familien, die in der Nähe der Ostsee Erholung
                        suchen. Einige der Häuser besitzen auch eine Schlafcouch
                        die es dann bis zu 6 Personen erlaubt in unserem großen
                        Ferienhaus zu übernachten.
                      </div>
                    </div>
                  </div>
                </div>
                <Link className={styles.frameA} href="/buchung">
                  <div
                    className={styles.jetztReservierenWrapper}
                    onClick={onFrameContainer18Click}
                  >
                    <b className={styles.jetztReservieren}>Jetzt reservieren</b>
                  </div>
                  <div className={styles.frameChild} />
                </Link>
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.image1Parent}>
                  <img
                    className={styles.image1Icon1}
                    alt=""
                    src="/image11@2x.png"
                  />
                  <img
                    className={styles.image3Icon1}
                    alt=""
                    src="/image31@2x.png"
                  />
                </div>
                <img
                  className={styles.image1Icon2}
                  alt=""
                  src="/image12@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame1}>
          <div className={styles.commonRoomsSection}>
            <div className={styles.frameParent8}>
              <div className={styles.dasGemeinschaftshausParent}>
                <b className={styles.unsereUnterknfte}>Das Gemeinschaftshaus</b>
                <div className={styles.frAlleFamiliengren}>
                  Für gesellige Abende
                </div>
              </div>
              <div className={styles.frameParent9}>
                <div className={styles.frameParent10}>
                  <div className={styles.image1Container}>
                    <img
                      className={styles.image1Icon3}
                      alt=""
                      src="/image13@2x.png"
                    />
                    <img
                      className={styles.image3Icon2}
                      alt=""
                      src="/image32@2x.png"
                    />
                  </div>
                  <img
                    className={styles.image2Icon}
                    alt=""
                    src="/image21@2x.png"
                  />
                </div>
                <div className={styles.frameWrapper3}>
                  <div className={styles.frameParent11}>
                    <div className={styles.bisZu20PersonenWrapper}>
                      <div className={styles.bisZu3}>Bis zu 20 Personen</div>
                    </div>
                    <div className={styles.frameWrapper4}>
                      <div
                        className={styles.unserGemeinschaftshausImUntWrapper}
                      >
                        <div className={styles.unsereUnterknfte}>
                          Unser Gemeinschaftshaus im unteren Teil des
                          Familiencamps bietet alles für ein gemütliches
                          Beisammensein. Eine geräumige Küche, große Tische und
                          eine große Anzahl von Stühlen bieten jedem Gast Platz
                          um beispielsweise das Fernsehprogramm auf dem riesigen
                          Flatscreen zu verfolgen, oder einfach einen geselligen
                          Abend mit Freunden zu verbringen.
                        </div>
                      </div>
                    </div>
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
              <div className={styles.rgenGrundstcksGbr}>
                Rügen Grundstücks GbR
              </div>
              <div className={styles.familienurlaubAmStrand}>
                Familienurlaub am Strand von Rügen
              </div>
            </div>
            <div className={styles.homeLinkWrapper}>
              <div className={styles.homeLink}>
                <div className={styles.bisZu3}>Hauptsaison: 01.06. - 31.08</div>
                <div
                  className={styles.bisZu3}
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
            <div className={styles.bisZu3}>
              © Rügen Grundstücks GbR 2023. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unterkuenfte;
