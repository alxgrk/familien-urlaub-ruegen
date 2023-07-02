import type { NextPage } from "next";
import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./d-s-g-v-o.module.css";
const DSGVO: NextPage = () => {
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
    <div className={styles.dsgvo}>
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
        <div className={styles.headerSection}>
          <div className={styles.headerSectionInner}>
            <div className={styles.unsereDatenschutzerklrungParent}>
              <b className={styles.unsereDatenschutzerklrung}>
                Unsere Datenschutzerklärung
              </b>
              <div className={styles.angabenGem}>Angaben gemäß § 5 TMG</div>
            </div>
          </div>
        </div>
        <div className={styles.frame1}>
          <div className={styles.textSection}>
            <div className={styles.codetodesignWrapper}>
              <div className={styles.codetodesign}>
                <b className={styles.heading2}>
                  1. Datenschutz auf einen Blick
                </b>
                <b className={styles.heading3}>Allgemeine Hinweise</b>
                <div className={styles.p}>
                  <div className={styles.dieFolgendenHinweiseContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Die folgenden Hinweise geben einen einfachen Überblick
                        darüber, was mit Ihren personenbezogenen Daten passiert,
                        wenn Sie diese Website besuchen. Personenbezogene Daten
                        sind alle Daten,
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        mit denen Sie persönlich identifiziert werden können.
                        Ausführliche Informationen zum Thema Datenschutz
                        entnehmen Sie unserer unter diesem Text aufgeführten
                        Datenschutzerklärung.
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading3}>
                  Datenerfassung auf dieser Website
                </b>
                <b className={styles.ihreDatenWerden}>
                  Wer ist verantwortlich für die Datenerfassung auf dieser
                  Website?
                </b>
                <div className={styles.p}>
                  <div className={styles.dieDatenverarbeitungAufContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Die Datenverarbeitung auf dieser Website erfolgt durch
                        den Websitebetreiber. Dessen Kontaktdaten können Sie dem
                        Abschnitt „Hinweis zur Verantwortlichen Stelle“ in
                        dieser Datenschutzerklärung
                      </p>
                      <p className={styles.dieFolgendenHinweise}>entnehmen.</p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading41}>Wie erfassen wir Ihre Daten?</b>
                <div className={styles.ihreDatenWerden}>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns
                  diese mitteilen. Hierbei kann es sich z. B. um Daten handeln,
                  die Sie in ein Kontaktformular eingeben.
                </div>
                <div className={styles.p}>
                  <div className={styles.andereDatenWerdenContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Andere Daten werden automatisch oder nach Ihrer
                        Einwilligung beim Besuch der Website durch unsere
                        IT-Systeme erfasst. Das sind vor allem technische Daten
                        (z. B. Internetbrowser,
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
                        Erfassung dieser Daten erfolgt automatisch, sobald Sie
                        diese Website betreten.
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading41}>Wofür nutzen wir Ihre Daten?</b>
                <div className={styles.ihreDatenWerden}>
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie
                  Bereitstellung der Website zu gewährleisten. Andere Daten
                  können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </div>
                <b className={styles.heading41}>
                  Welche Rechte haben Sie bezüglich Ihrer Daten?
                </b>
                <div className={styles.p3}>
                  <div className={styles.sieHabenJederzeitContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft
                        über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                        personenbezogenen Daten zu erhalten. Sie haben außerdem
                        ein Recht, die
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Berichtigung oder Löschung dieser Daten zu verlangen.
                        Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
                        haben, können Sie diese Einwilligung jederzeit für die
                        Zukunft widerrufen.
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Außerdem haben Sie das Recht, unter bestimmten Umständen
                        die Einschränkung der Verarbeitung Ihrer
                        personenbezogenen Daten zu verlangen. Des Weiteren steht
                        Ihnen ein Beschwerderecht bei
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        der zuständigen Aufsichtsbehörde zu.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.ihreDatenWerden}>
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können
                  Sie sich jederzeit an uns wenden.
                </div>
                <b className={styles.heading2}>2. Hosting</b>
                <div className={styles.ihreDatenWerden}>
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </div>
                <b className={styles.heading3}>Externes Hosting</b>
                <div className={styles.p}>
                  <div className={styles.dieDatenverarbeitungAufContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Diese Website wird extern gehostet. Die
                        personenbezogenen Daten, die auf dieser Website erfasst
                        werden, werden auf den Servern des Hosters / der Hoster
                        gespeichert. Hierbei kann es sich v. a. um
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        IP-Adressen, Kontaktanfragen, Meta- und
                        Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                        Websitezugriffe und sonstige Daten, die über eine
                        Website generiert werden, handeln.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.p3}>
                  <div className={styles.dasExterneHostingContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Das externe Hosting erfolgt zum Zwecke der
                        Vertragserfüllung gegenüber unseren potenziellen und
                        bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im
                        Interesse einer sicheren, schnellen
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        und effizienten Bereitstellung unseres Online-Angebots
                        durch einen professionellen Anbieter (Art. 6 Abs. 1 lit.
                        f DSGVO). Sofern eine entsprechende Einwilligung
                        abgefragt wurde, erfolgt die
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Verarbeitung ausschließlich auf Grundlage von Art. 6
                        Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die
                        Einwilligung die Speicherung von Cookies oder den
                        Zugriff auf Informationen im
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Endgerät des Nutzers (z. B. Device-Fingerprinting) im
                        Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit
                        widerrufbar.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.ihreDatenWerden}>
                  Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit
                  verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
                  erforderlich ist und unsere Weisungen in Bezug auf diese Daten
                  befolgen.
                </div>
                <div className={styles.ihreDatenWerden}>
                  Wir setzen folgende(n) Hoster ein:
                </div>
                <div className={styles.p6}>
                  <div className={styles.musterhostingAgMusterwegContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Musterhosting AG
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Musterweg 100
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        90210 Musterstadt
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading41}>Auftragsverarbeitung</b>
                <div className={styles.p}>
                  <div className={styles.wirHabenEinenContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Wir haben einen Vertrag über Auftragsverarbeitung (AVV)
                        zur Nutzung des oben genannten Dienstes geschlossen.
                        Hierbei handelt es sich um einen datenschutzrechtlich
                        vorgeschriebenen Vertrag,
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        der gewährleistet, dass dieser die personenbezogenen
                        Daten unserer Websitebesucher nur nach unseren Weisungen
                        und unter Einhaltung der DSGVO verarbeitet.
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading2}>
                  3. Allgemeine Hinweise und Pflicht­informationen
                </b>
                <b className={styles.heading3}>Datenschutz</b>
                <div className={styles.p}>
                  <div className={styles.dieBetreiberDieserContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                        persönlichen Daten sehr ernst. Wir behandeln Ihre
                        personenbezogenen Daten vertraulich und entsprechend den
                        gesetzlichen
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Datenschutzvorschriften sowie dieser
                        Datenschutzerklärung.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.p}>
                  <div className={styles.wennSieDieseContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Wenn Sie diese Website benutzen, werden verschiedene
                        personenbezogene Daten erhoben. Personenbezogene Daten
                        sind Daten, mit denen Sie persönlich identifiziert
                        werden können. Die
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        vorliegende Datenschutzerklärung erläutert, welche Daten
                        wir erheben und wofür wir sie nutzen. Sie erläutert
                        auch, wie und zu welchem Zweck das geschieht.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.p}>
                  <div className={styles.wirWeisenDaraufContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Wir weisen darauf hin, dass die Datenübertragung im
                        Internet (z. B. bei der Kommunikation per E-Mail)
                        Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
                        der Daten vor dem Zugriff durch
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Dritte ist nicht möglich.
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading3}>
                  Hinweis zur verantwortlichen Stelle
                </b>
                <div className={styles.ihreDatenWerden}>
                  Die verantwortliche Stelle für die Datenverarbeitung auf
                  dieser Website ist:
                </div>
                <div className={styles.p6}>
                  <div className={styles.musterhostingAgMusterwegContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Beispielfirma
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Musterweg 10
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        90210 Musterstadt
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.p}>
                  <div className={styles.telefon490Container}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Telefon: +49 (0) 123 44 55 66
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        E-Mail: info@beispielfirma.de
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.p}>
                  <div className={styles.verantwortlicheStelleIstContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Verantwortliche Stelle ist die natürliche oder
                        juristische Person, die allein oder gemeinsam mit
                        anderen über die Zwecke und Mittel der Verarbeitung von
                        personenbezogenen Daten (z. B. Namen,
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        E-Mail-Adressen o. Ä.) entscheidet.
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading3}>Speicherdauer</b>
                <div className={styles.p3}>
                  <div className={styles.soweitInnerhalbDieserContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Soweit innerhalb dieser Datenschutzerklärung keine
                        speziellere Speicherdauer genannt wurde, verbleiben Ihre
                        personenbezogenen Daten bei uns, bis der Zweck für die
                        Datenverarbeitung entfällt.
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Wenn Sie ein berechtigtes Löschersuchen geltend machen
                        oder eine Einwilligung zur Datenverarbeitung widerrufen,
                        werden Ihre Daten gelöscht, sofern wir keine anderen
                        rechtlich zulässigen
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Gründe für die Speicherung Ihrer personenbezogenen Daten
                        haben (z. B. steuer- oder handelsrechtliche
                        Aufbewahrungsfristen); im letztgenannten Fall erfolgt
                        die Löschung nach Fortfall dieser
                      </p>
                      <p className={styles.dieFolgendenHinweise}>Gründe.</p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading3}>
                  Allgemeine Hinweise zu den Rechtsgrundlagen der
                  Datenverarbeitung auf dieser Website
                </b>
                <div className={styles.p15}>
                  <div className={styles.sofernSieInContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Sofern Sie in die Datenverarbeitung eingewilligt haben,
                        verarbeiten wir Ihre personenbezogenen Daten auf
                        Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9
                        Abs. 2 lit. a DSGVO, sofern
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
                        verarbeitet werden. Im Falle einer ausdrücklichen
                        Einwilligung in die Übertragung personenbezogener Daten
                        in Drittstaaten erfolgt die
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Datenverarbeitung außerdem auf Grundlage von Art. 49
                        Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von
                        Cookies oder in den Zugriff auf Informationen in Ihr
                        Endgerät (z. B. via Device-
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Fingerprinting) eingewilligt haben, erfolgt die
                        Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs.
                        1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
                        Sind Ihre Daten zur
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Vertragserfüllung oder zur Durchführung vorvertraglicher
                        Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf
                        Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren
                        verarbeiten wir Ihre
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Daten, sofern diese zur Erfüllung einer rechtlichen
                        Verpflichtung erforderlich sind auf Grundlage von Art. 6
                        Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner
                        auf Grundlage unseres
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO
                        erfolgen. Über die jeweils im Einzelfall einschlägigen
                        Rechtsgrundlagen wird in den folgenden Absätzen dieser
                        Datenschutzerklärung
                      </p>
                      <p className={styles.dieFolgendenHinweise}>informiert.</p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading37}>
                  Widerruf Ihrer Einwilligung zur Datenverarbeitung
                </b>
                <div className={styles.p}>
                  <div className={styles.vieleDatenverarbeitungsvorgn}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                        ausdrücklichen Einwilligung möglich. Sie können eine
                        bereits erteilte Einwilligung jederzeit widerrufen. Die
                        Rechtmäßigkeit der bis zum
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
                        unberührt.
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading3}>
                  Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
                  sowie gegen Direktwerbung (Art. 21 DSGVO)
                </b>
                <div className={styles.p17}>
                  <div className={styles.wennDieDatenverarbeitungContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS.
                        1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS
                        RECHT, AUS GRÜNDEN, DIE SICH
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE
                        VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
                        EINZULEGEN; DIES GILT AUCH FÜR
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE
                        JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG
                        BERUHT, ENTNEHMEN SIE DIESER
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN,
                        WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN
                        NICHT MEHR VERARBEITEN, ES
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR
                        DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE
                        UND FREIHEITEN
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER
                        GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
                        RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART.
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        21 ABS. 1 DSGVO).
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.p18}>
                  <div className={styles.werdenIhrePersonenbezogenenContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
                        DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT,
                        JEDERZEIT WIDERSPRUCH GEGEN DIE
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN
                        ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH
                        FÜR DAS PROFILING,
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT.
                        WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN
                        DATEN ANSCHLIESSEND
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
                        (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading3}>
                  Beschwerde­recht bei der zuständigen Aufsichts­behörde
                </b>
                <div className={styles.p}>
                  <div className={styles.imFalleVonContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Im Falle von Verstößen gegen die DSGVO steht den
                        Betroffenen ein Beschwerderecht bei einer
                        Aufsichtsbehörde, insbesondere in dem Mitgliedstaat
                        ihres gewöhnlichen Aufenthalts, ihres
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes
                        zu. Das Beschwerderecht besteht unbeschadet
                        anderweitiger verwaltungsrechtlicher oder gerichtlicher
                        Rechtsbehelfe.
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading3}>
                  Recht auf Daten­übertrag­barkeit
                </b>
                <div className={styles.p}>
                  <div className={styles.dieDatenverarbeitungAufContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                        Einwilligung oder in Erfüllung eines Vertrags
                        automatisiert verarbeiten, an sich oder an einen Dritten
                        in einem gängigen, maschinenlesbaren
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Format aushändigen zu lassen. Sofern Sie die direkte
                        Übertragung der Daten an einen anderen Verantwortlichen
                        verlangen, erfolgt dies nur, soweit es technisch machbar
                        ist.
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading3}>
                  Auskunft, Berichtigung und Löschung
                </b>
                <div className={styles.p6}>
                  <div className={styles.sieHabenImContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Sie haben im Rahmen der geltenden gesetzlichen
                        Bestimmungen jederzeit das Recht auf unentgeltliche
                        Auskunft über Ihre gespeicherten personenbezogenen
                        Daten, deren Herkunft und Empfänger
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        und den Zweck der Datenverarbeitung und ggf. ein Recht
                        auf Berichtigung oder Löschung dieser Daten. Hierzu
                        sowie zu weiteren Fragen zum Thema personenbezogene
                        Daten können Sie sich
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        jederzeit an uns wenden.
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading3}>
                  Recht auf Einschränkung der Verarbeitung
                </b>
                <div className={styles.p}>
                  <div className={styles.sieHabenDasContainer2}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Sie haben das Recht, die Einschränkung der Verarbeitung
                        Ihrer personenbezogenen Daten zu verlangen. Hierzu
                        können Sie sich jederzeit an uns wenden. Das Recht auf
                        Einschränkung der
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Verarbeitung besteht in folgenden Fällen:
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.list}>
                  <div className={styles.item}>
                    <div className={styles.wennSieDieContainer}>
                      <span className={styles.dieFolgendenHinweiseContainer1}>
                        <p className={styles.dieFolgendenHinweise}>
                          Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                          personenbezogenen Daten bestreiten, benötigen wir in
                          der Regel Zeit, um dies zu überprüfen. Für die Dauer
                          der Prüfung haben Sie das
                        </p>
                        <p className={styles.dieFolgendenHinweise}>
                          Recht, die Einschränkung der Verarbeitung Ihrer
                          personenbezogenen Daten zu verlangen.
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className={styles.itemWenn}>
                    Wenn die Verarbeitung Ihrer personenbezogenen Daten
                    unrechtmäßig geschah/geschieht, können Sie statt der
                    Löschung die Einschränkung der Datenverarbeitung verlangen.
                  </div>
                  <div className={styles.item1}>
                    <div className={styles.wennSieEinenContainer}>
                      <span className={styles.dieFolgendenHinweiseContainer1}>
                        <p className={styles.dieFolgendenHinweise}>
                          Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
                          eingelegt haben, muss eine Abwägung zwischen Ihren und
                          unseren Interessen vorgenommen werden. Solange noch
                          nicht feststeht,
                        </p>
                        <p className={styles.dieFolgendenHinweise}>
                          wessen Interessen überwiegen, haben Sie das Recht, die
                          Einschränkung der Verarbeitung Ihrer personenbezogenen
                          Daten zu verlangen.
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className={styles.item2}>
                    <div className={styles.wennWirIhreContainer}>
                      <span className={styles.dieFolgendenHinweiseContainer1}>
                        <p className={styles.dieFolgendenHinweise}>
                          Wenn wir Ihre personenbezogenen Daten nicht mehr
                          benötigen, Sie sie jedoch zur Ausübung, Verteidigung
                          oder Geltendmachung von Rechtsansprüchen benötigen,
                          haben Sie das Recht, statt
                        </p>
                        <p className={styles.dieFolgendenHinweise}>
                          der Löschung die Einschränkung der Verarbeitung Ihrer
                          personenbezogenen Daten zu verlangen.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.p6}>
                  <div className={styles.wennSieDieContainer2}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                        eingeschränkt haben, dürfen diese Daten – von ihrer
                        Speicherung abgesehen – nur mit Ihrer Einwilligung oder
                        zur Geltendmachung,
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Ausübung oder Verteidigung von Rechtsansprüchen oder zum
                        Schutz der Rechte einer anderen natürlichen oder
                        juristischen Person oder aus Gründen eines wichtigen
                        öffentlichen Interesses der
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Europäischen Union oder eines Mitgliedstaats verarbeitet
                        werden.
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading3}>SSL- bzw. TLS-Verschlüsselung</b>
                <div className={styles.p6}>
                  <div className={styles.dieseSeiteNutztContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz
                        der Übertragung vertraulicher Inhalte, wie zum Beispiel
                        Bestellungen oder Anfragen, die Sie an uns als
                        Seitenbetreiber senden, eine SSL-
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
                        erkennen Sie daran, dass die Adresszeile des Browsers
                        von „http://“ auf „https://“ wechselt und an dem
                        Schloss-Symbol in Ihrer
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Browserzeile.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.ihreDatenWerden}>
                  Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können
                  die Daten, die Sie an uns übermitteln, nicht von Dritten
                  mitgelesen werden.
                </div>
                <b className={styles.heading3}>
                  Widerspruch gegen Werbe-E-Mails
                </b>
                <div className={styles.p}>
                  <div className={styles.derNutzungVonContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Der Nutzung von im Rahmen der Impressumspflicht
                        veröffentlichten Kontaktdaten zur Übersendung von nicht
                        ausdrücklich angeforderter Werbung und
                        Informationsmaterialien wird hiermit
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        widersprochen. Die Betreiber der Seiten behalten sich
                        ausdrücklich rechtliche Schritte im Falle der
                        unverlangten Zusendung von Werbeinformationen, etwa
                        durch Spam-E-Mails, vor.
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading23}>
                  4. Datenerfassung auf dieser Website
                </b>
                <b className={styles.heading3}>Server-Log-Dateien</b>
                <div className={styles.ihreDatenWerden}>
                  Der Provider der Seiten erhebt und speichert automatisch
                  Informationen in so genannten Server-Log-Dateien, die Ihr
                  Browser automatisch an uns übermittelt. Dies sind:
                </div>
                <div className={styles.list1}>
                  <div className={styles.itemBrowsertyp}>
                    Browsertyp und Browserversion
                  </div>
                  <div className={styles.itemVerwendetes}>
                    verwendetes Betriebssystem
                  </div>
                  <div className={styles.itemReferrer}>Referrer URL</div>
                  <div className={styles.itemHostname}>
                    Hostname des zugreifenden Rechners
                  </div>
                  <div className={styles.itemUhrzeit}>
                    Uhrzeit der Serveranfrage
                  </div>
                  <div className={styles.itemIpAdresse}>IP-Adresse</div>
                </div>
                <div className={styles.ihreDatenWerden}>
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen
                  wird nicht vorgenommen.
                </div>
                <div className={styles.p}>
                  <div className={styles.dieErfassungDieserContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Die Erfassung dieser Daten erfolgt auf Grundlage von
                        Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
                        berechtigtes Interesse an der technisch fehlerfreien
                        Darstellung und der Optimierung
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        seiner Website – hierzu müssen die Server-Log-Files
                        erfasst werden.
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading37}>Kontaktformular</b>
                <div className={styles.p}>
                  <div className={styles.wennSieUnsContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Wenn Sie uns per Kontaktformular Anfragen zukommen
                        lassen, werden Ihre Angaben aus dem Anfrageformular
                        inklusive der von Ihnen dort angegebenen Kontaktdaten
                        zwecks Bearbeitung der
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Anfrage und für den Fall von Anschlussfragen bei uns
                        gespeichert. Diese Daten geben wir nicht ohne Ihre
                        Einwilligung weiter.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.p6}>
                  <div className={styles.dieVerarbeitungDieserContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Die Verarbeitung dieser Daten erfolgt auf Grundlage von
                        Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                        Erfüllung eines Vertrags zusammenhängt oder zur
                        Durchführung vorvertraglicher
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Maßnahmen erforderlich ist. In allen übrigen Fällen
                        beruht die Verarbeitung auf unserem berechtigten
                        Interesse an der effektiven Bearbeitung der an uns
                        gerichteten Anfragen (Art. 6 Abs. 1 lit. f
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
                        DSGVO) sofern diese abgefragt wurde; die Einwilligung
                        ist jederzeit widerrufbar.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.p}>
                  <div className={styles.dieVonIhnenContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Die von Ihnen im Kontaktformular eingegebenen Daten
                        verbleiben bei uns, bis Sie uns zur Löschung auffordern,
                        Ihre Einwilligung zur Speicherung widerrufen oder der
                        Zweck für die
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Datenspeicherung entfällt (z. B. nach abgeschlossener
                        Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
                        Bestimmungen – insbesondere Aufbewahrungsfristen –
                        bleiben unberührt.
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading3}>
                  Anfrage per E-Mail, Telefon oder Telefax
                </b>
                <div className={styles.p}>
                  <div className={styles.wennSieUnsContainer2}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Wenn Sie uns per E-Mail, Telefon oder Telefax
                        kontaktieren, wird Ihre Anfrage inklusive aller daraus
                        hervorgehenden personenbezogenen Daten (Name, Anfrage)
                        zum Zwecke der Bearbeitung
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Ihres Anliegens bei uns gespeichert und verarbeitet.
                        Diese Daten geben wir nicht ohne Ihre Einwilligung
                        weiter.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.p6}>
                  <div className={styles.dieVerarbeitungDieserContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Die Verarbeitung dieser Daten erfolgt auf Grundlage von
                        Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                        Erfüllung eines Vertrags zusammenhängt oder zur
                        Durchführung vorvertraglicher
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Maßnahmen erforderlich ist. In allen übrigen Fällen
                        beruht die Verarbeitung auf unserem berechtigten
                        Interesse an der effektiven Bearbeitung der an uns
                        gerichteten Anfragen (Art. 6 Abs. 1 lit. f
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
                        DSGVO) sofern diese abgefragt wurde; die Einwilligung
                        ist jederzeit widerrufbar.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.p}>
                  <div className={styles.dieVonIhnenContainer2}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Die von Ihnen an uns per Kontaktanfragen übersandten
                        Daten verbleiben bei uns, bis Sie uns zur Löschung
                        auffordern, Ihre Einwilligung zur Speicherung widerrufen
                        oder der Zweck für die
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Datenspeicherung entfällt (z. B. nach abgeschlossener
                        Bearbeitung Ihres Anliegens). Zwingende gesetzliche
                        Bestimmungen – insbesondere gesetzliche
                        Aufbewahrungsfristen – bleiben unberührt.
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading23}>5. Analyse-Tools und Werbung</b>
                <b className={styles.heading37}>Matomo</b>
                <div className={styles.ihreDatenWerden}>
                  Diese Website benutzt den Open Source Webanalysedienst Matomo.
                </div>
                <div className={styles.p6}>
                  <div className={styles.mitHilfeVonContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Mit Hilfe von Matomo sind wir in der Lage Daten über die
                        Nutzung unserer Website durch die Websitebesucher zu
                        erfassen und zu analysieren. Hierdurch können wir u. a.
                        herausfinden, wann
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        welche Seitenaufrufe getätigt wurden und aus welcher
                        Region sie kommen. Außerdem erfassen wir verschiedene
                        Logdateien (z. B. IP-Adresse, Referrer, verwendete
                        Browser und Betriebssysteme)
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        und können messen, ob unsere Websitebesucher bestimmte
                        Aktionen durchführen (z. B. Klicks, Käufe u. Ä.).
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.p3}>
                  <div className={styles.dieNutzungDiesesContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage
                        von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat
                        ein berechtigtes Interesse an der Analyse des
                        Nutzerverhaltens, um sowohl sein
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Webangebot als auch seine Werbung zu optimieren. Sofern
                        eine entsprechende Einwilligung abgefragt wurde, erfolgt
                        die Verarbeitung ausschließlich auf Grundlage von Art. 6
                        Abs. 1 lit. a DSGVO
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        und § 25 Abs. 1 TTDSG, soweit die Einwilligung die
                        Speicherung von Cookies oder den Zugriff auf
                        Informationen im Endgerät des Nutzers (z. B.
                        Device-Fingerprinting) im Sinne des TTDSG
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        umfasst. Die Einwilligung ist jederzeit widerrufbar.
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.ihreDatenWerden}>Hosting</b>
                <div className={styles.ihreDatenWerden}>
                  Wir hosten Matomo ausschließlich auf unseren eigenen Servern,
                  sodass alle Analysedaten bei uns verbleiben und nicht
                  weitergegeben werden.
                </div>
                <b className={styles.heading23}>6. Newsletter</b>
                <b className={styles.heading3}>Newsletter­daten</b>
                <div className={styles.p6}>
                  <div className={styles.wennSieDenContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Wenn Sie den auf der Website angebotenen Newsletter
                        beziehen möchten, benötigen wir von Ihnen eine
                        E-Mail-Adresse sowie Informationen, welche uns die
                        Überprüfung gestatten, dass Sie der
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Inhaber der angegebenen E-Mail-Adresse sind und mit dem
                        Empfang des Newsletters einverstanden sind. Weitere
                        Daten werden nicht bzw. nur auf freiwilliger Basis
                        erhoben. Diese Daten
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        verwenden wir ausschließlich für den Versand der
                        angeforderten Informationen und geben diese nicht an
                        Dritte weiter.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.p36}>
                  <div className={styles.dieVerarbeitungDerContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Die Verarbeitung der in das Newsletteranmeldeformular
                        eingegebenen Daten erfolgt ausschließlich auf Grundlage
                        Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die
                        erteilte Einwilligung zur
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Speicherung der Daten, der E-Mail-Adresse sowie deren
                        Nutzung zum Versand des Newsletters können Sie jederzeit
                        widerrufen, etwa über den „Austragen“-Link im
                        Newsletter. Die
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Rechtmäßigkeit der bereits erfolgten
                        Datenverarbeitungsvorgänge bleibt vom Widerruf
                        unberührt.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.p6}>
                  <div className={styles.dieVonIhnenContainer4}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns
                        hinterlegten Daten werden von uns bis zu Ihrer
                        Austragung aus dem Newsletter bei uns bzw. dem
                        Newsletterdiensteanbieter gespeichert
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        und nach der Abbestellung des Newsletters oder nach
                        Zweckfortfall aus der Newsletterverteilerliste gelöscht.
                        Wir behalten uns vor, E-Mail-Adressen aus unserem
                        Newsletterverteiler nach eigenem
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Ermessen im Rahmen unseres berechtigten Interesses nach
                        Art. 6 Abs. 1 lit. f DSGVO zu löschen oder zu sperren.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.ihreDatenWerden}>
                  Daten, die zu anderen Zwecken bei uns gespeichert wurden,
                  bleiben hiervon unberührt.
                </div>
                <div className={styles.p3}>
                  <div className={styles.nachIhrerAustragungContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Nach Ihrer Austragung aus der Newsletterverteilerliste
                        wird Ihre E-Mail-Adresse bei uns bzw. dem
                        Newsletterdiensteanbieter ggf. in einer Blacklist
                        gespeichert, sofern dies zur Verhinderung
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        künftiger Mailings erforderlich ist. Die Daten aus der
                        Blacklist werden nur für diesen Zweck verwendet und
                        nicht mit anderen Daten zusammengeführt. Dies dient
                        sowohl Ihrem Interesse als auch
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        unserem Interesse an der Einhaltung der gesetzlichen
                        Vorgaben beim Versand von Newslettern (berechtigtes
                        Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die
                        Speicherung in der Blacklist ist
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        <span>{`zeitlich nicht befristet. `}</span>
                        <b className={styles.sieKnnenDer}>
                          Sie können der Speicherung widersprechen, sofern Ihre
                          Interessen unser berechtigtes Interesse überwiegen.
                        </b>
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading2}>7. Plugins und Tools</b>
                <b className={styles.heading3}>OpenStreetMap</b>
                <div className={styles.ihreDatenWerden}>
                  Wir nutzen den Kartendienst von OpenStreetMap (OSM).
                </div>
                <div className={styles.p39}>
                  <div className={styles.wirBindenDasContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Wir binden das Kartenmaterial von OpenStreetMap auf dem
                        Server der OpenStreetMap Foundation, St John’s
                        Innovation Centre, Cowley Road, Cambridge, CB4 0WS,
                        Großbritannien, ein.
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Großbritannien gilt als datenschutzrechtlich sicherer
                        Drittstaat. Das bedeutet, dass Großbritannien ein
                        Datenschutzniveau aufweist, das dem Datenschutzniveau in
                        der Europäischen Union
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        entspricht. Bei der Nutzung der OpenStreetMap-Karten
                        wird eine Verbindung zu den Servern der
                        OpenStreetMap-Foundation hergestellt. Dabei können u. a.
                        Ihre IP-Adresse und weitere
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Informationen über Ihr Verhalten auf dieser Website an
                        die OSMF weitergeleitet werden. OpenStreetMap speichert
                        hierzu unter Umständen Cookies in Ihrem Browser oder
                        setzt vergleichbare
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Wiedererkennungstechnologien ein.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.p3}>
                  <div className={styles.dieNutzungVonContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Die Nutzung von OpenStreetMap erfolgt im Interesse einer
                        ansprechenden Darstellung unserer Online-Angebote und
                        einer leichten Auffindbarkeit der von uns auf der
                        Website angegebenen Orte.
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Dies stellt ein berechtigtes Interesse im Sinne von Art.
                        6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende
                        Einwilligung abgefragt wurde, erfolgt die Verarbeitung
                        ausschließlich auf Grundlage
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG,
                        soweit die Einwilligung die Speicherung von Cookies oder
                        den Zugriff auf Informationen im Endgerät des Nutzers
                        (z. B. Device-
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Fingerprinting) im Sinne des TTDSG umfasst. Die
                        Einwilligung ist jederzeit widerrufbar.
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading37}>Friendly Captcha</b>
                <div className={styles.ihreDatenWerden}>
                  Wir nutzen Friendly Captcha (im Folgenden „Friendly Captcha“)
                  auf dieser Website. Anbieter ist die Friendly Captcha GmbH, Am
                  Anger 3-5, 82237 Woerthsee, Deutschland.
                </div>
                <div className={styles.p6}>
                  <div className={styles.mitFriendlyCaptchaContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Mit Friendly Captcha soll überprüft werden, ob die
                        Dateneingabe auf dieser Website (z. B. in einem
                        Kontaktformular) durch einen Menschen oder durch ein
                        automatisiertes Programm erfolgt.
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        Hierzu analysiert Friendly Captcha das Verhalten des
                        Websitebesuchers anhand verschiedener Merkmale. Zur
                        Analyse wertet Friendly Captcha verschiedene
                        Informationen aus (z. B. anonymisierte
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        <span>{`IP-Adresse, Referrer, Besuchszeit etc.). Weitere Informationen hierzu finden Sie unter: `}</span>
                        <span className={styles.httpsfriendlycaptchacomle}>
                          https://friendlycaptcha.com/legal/privacy-end-users/
                        </span>
                        <span className={styles.span}>.</span>
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.p3}>
                  <div className={styles.dieSpeicherungUndContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Die Speicherung und Analyse der Daten erfolgt auf
                        Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                        Websitebetreiber hat ein berechtigtes Interesse daran,
                        seine Webangebote vor missbräuchlicher
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        automatisierter Ausspähung und vor SPAM zu schützen.
                        Sofern eine entsprechende Einwilligung abgefragt wurde,
                        erfolgt die Verarbeitung ausschließlich auf Grundlage
                        von Art. 6 Abs. 1 lit. a
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die
                        Speicherung von Cookies oder den Zugriff auf
                        Informationen im Endgerät des Nutzers (z. B.
                        Device-Fingerprinting) im Sinne des
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        TTDSG umfasst. Die Einwilligung ist jederzeit
                        widerrufbar.
                      </p>
                    </span>
                  </div>
                </div>
                <b className={styles.heading41}>Auftragsverarbeitung</b>
                <div className={styles.p}>
                  <div className={styles.wirHabenEinenContainer}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <p className={styles.dieFolgendenHinweise}>
                        Wir haben einen Vertrag über Auftragsverarbeitung (AVV)
                        zur Nutzung des oben genannten Dienstes geschlossen.
                        Hierbei handelt es sich um einen datenschutzrechtlich
                        vorgeschriebenen Vertrag,
                      </p>
                      <p className={styles.dieFolgendenHinweise}>
                        der gewährleistet, dass dieser die personenbezogenen
                        Daten unserer Websitebesucher nur nach unseren Weisungen
                        und unter Einhaltung der DSGVO verarbeitet.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.p44}>
                  <div className={styles.quelleHttpswwweRecht24}>
                    <span className={styles.dieFolgendenHinweiseContainer1}>
                      <span>{`Quelle: `}</span>
                      <span className={styles.httpsfriendlycaptchacomle}>
                        https://www.e-recht24.de
                      </span>
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

export default DSGVO;
