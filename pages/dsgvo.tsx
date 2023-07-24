import type { NextPage } from "next";
import SidePageHeader from "../components/side-page-header";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";

const Dsgvo: NextPage = () => {
  return (
    <div className="relative rounded-2xl bg-light-text-color w-full overflow-hidden flex flex-col items-center justify-start text-center text-[3.5rem] text-black font-title-2">
      <SidePageHeader
        hamburgerMenu="/notification1.svg"
        mobileNavigationMenu={false}
        sidePageHeaderPosition="unset"
        sidePageHeaderWidth="unset"
        sidePageHeaderHeight="20.81rem"
        sidePageHeaderAlignSelf="stretch"
        sidePageHeaderHeight1="5.63rem"
        sidePageHeaderPadding="0.63rem 1rem"
        navbarHeight="3.75rem"
        logoFontSize="2.5rem"
        cayoBeachHeight="3.75rem"
        cayoBeachGap="3.31rem"
        navigationMenuFontSize="1rem"
        startFontSize="1rem"
        unterknfteFontSize="1rem"
        buchungFontSize="1rem"
        lageFontSize="1rem"
        impressumHeight="3.75rem"
        mobileNavigationMenuWidth="1.49rem"
        mobileNavigationMenuHeight="1.5rem"
      />
      <div className="self-stretch [background:linear-gradient(180deg,_#fff5eb,_#fff_50.52%,_#fff5eb)] flex flex-row items-center justify-start">
        <Sidebar/>
        <div className="flex-1 flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-center justify-start md:w-auto md:[align-self:unset] sm:w-auto sm:[align-self:unset]">
            <div className="self-stretch flex flex-col py-[4.5rem] px-[0.5rem] items-center justify-start gap-[0.5rem]
            md:w-auto md:[align-self:unset] sm:w-auto sm:[align-self:unset] sm:pl-[0.5rem] sm:box-border">
              <b className="self-stretch relative leading-[125%] md:text-[2.63rem] sm:text-[1.75rem]">
                Unsere Datenschutzerklärung
              </b>
              <div className="self-stretch relative text-[1.25rem] leading-[125%] font-medium">
                Angaben gemäß § 5 TMG
              </div>
            </div>
            <div className="self-stretch flex flex-col p-[2.25rem] items-start justify-start gap-[1.19rem] text-left text-[0.81rem] font-inter lg:pl-[2.25rem] lg:box-border md:items-start md:justify-center md:pl-[2.25rem] md:box-border">
              <b className="self-stretch relative text-[1.31rem] flex items-center shrink-0">
                1. Datenschutz auf einen Blick
              </b>
              <b className="self-stretch relative text-[0.98rem] flex items-center shrink-0">
                Allgemeine Hinweise
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Die folgenden Hinweise geben einen einfachen Überblick
                      darüber, was mit Ihren personenbezogenen Daten passiert,
                      wenn Sie diese Website besuchen. Personenbezogene Daten
                      sind alle Daten,
                    </p>
                    <p className="m-0">
                      mit denen Sie persönlich identifiziert werden können.
                      Ausführliche Informationen zum Thema Datenschutz entnehmen
                      Sie unserer unter diesem Text aufgeführten
                      Datenschutzerklärung.
                    </p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[0.98rem] flex items-center shrink-0">
                Datenerfassung auf dieser Website
              </b>
              <b className="self-stretch relative flex items-center shrink-0">
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Die Datenverarbeitung auf dieser Website erfolgt durch den
                      Websitebetreiber. Dessen Kontaktdaten können Sie dem
                      Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser
                      Datenschutzerklärung
                    </p>
                    <p className="m-0">entnehmen.</p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[0.88rem] flex items-center shrink-0">
                Wie erfassen wir Ihre Daten?
              </b>
              <div className="self-stretch relative flex items-center shrink-0">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben.
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Andere Daten werden automatisch oder nach Ihrer
                      Einwilligung beim Besuch der Website durch unsere
                      IT-Systeme erfasst. Das sind vor allem technische Daten
                      (z. B. Internetbrowser,
                    </p>
                    <p className="m-0">
                      Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
                      Erfassung dieser Daten erfolgt automatisch, sobald Sie
                      diese Website betreten.
                    </p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[0.88rem] flex items-center shrink-0">
                Wofür nutzen wir Ihre Daten?
              </b>
              <div className="self-stretch relative flex items-center shrink-0">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gewährleisten. Andere Daten können
                zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </div>
              <b className="self-stretch relative text-[0.88rem] flex items-center shrink-0">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                      Herkunft, Empfänger und Zweck Ihrer gespeicherten
                      personenbezogenen Daten zu erhalten. Sie haben außerdem
                      ein Recht, die
                    </p>
                    <p className="m-0">
                      Berichtigung oder Löschung dieser Daten zu verlangen. Wenn
                      Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                      können Sie diese Einwilligung jederzeit für die Zukunft
                      widerrufen.
                    </p>
                    <p className="m-0">
                      Außerdem haben Sie das Recht, unter bestimmten Umständen
                      die Einschränkung der Verarbeitung Ihrer personenbezogenen
                      Daten zu verlangen. Des Weiteren steht Ihnen ein
                      Beschwerderecht bei
                    </p>
                    <p className="m-0">der zuständigen Aufsichtsbehörde zu.</p>
                  </span>
                </div>
              </div>
              <div className="self-stretch relative flex items-center shrink-0">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
                sich jederzeit an uns wenden.
              </div>
              <b className="self-stretch relative text-[1.31rem] flex items-center shrink-0">
                2. Hosting
              </b>
              <div className="self-stretch relative flex items-center shrink-0">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </div>
              <b className="self-stretch relative text-[0.98rem] flex items-center shrink-0">
                Externes Hosting
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Diese Website wird extern gehostet. Die personenbezogenen
                      Daten, die auf dieser Website erfasst werden, werden auf
                      den Servern des Hosters / der Hoster gespeichert. Hierbei
                      kann es sich v. a. um
                    </p>
                    <p className="m-0">
                      IP-Adressen, Kontaktanfragen, Meta- und
                      Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                      Websitezugriffe und sonstige Daten, die über eine Website
                      generiert werden, handeln.
                    </p>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Das externe Hosting erfolgt zum Zwecke der
                      Vertragserfüllung gegenüber unseren potenziellen und
                      bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im
                      Interesse einer sicheren, schnellen
                    </p>
                    <p className="m-0">
                      und effizienten Bereitstellung unseres Online-Angebots
                      durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f
                      DSGVO). Sofern eine entsprechende Einwilligung abgefragt
                      wurde, erfolgt die
                    </p>
                    <p className="m-0">
                      Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs.
                      1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die
                      Einwilligung die Speicherung von Cookies oder den Zugriff
                      auf Informationen im
                    </p>
                    <p className="m-0">
                      Endgerät des Nutzers (z. B. Device-Fingerprinting) im
                      Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit
                      widerrufbar.
                    </p>
                  </span>
                </div>
              </div>
              <div className="self-stretch relative flex items-center shrink-0">
                Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit
                verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
                erforderlich ist und unsere Weisungen in Bezug auf diese Daten
                befolgen.
              </div>
              <div className="self-stretch relative flex items-center shrink-0">
                Wir setzen folgende(n) Hoster ein:
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">Musterhosting AG</p>
                    <p className="m-0">Musterweg 100</p>
                    <p className="m-0">90210 Musterstadt</p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[0.88rem] flex items-center shrink-0">
                Auftragsverarbeitung
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Wir haben einen Vertrag über Auftragsverarbeitung (AVV)
                      zur Nutzung des oben genannten Dienstes geschlossen.
                      Hierbei handelt es sich um einen datenschutzrechtlich
                      vorgeschriebenen Vertrag,
                    </p>
                    <p className="m-0">
                      der gewährleistet, dass dieser die personenbezogenen Daten
                      unserer Websitebesucher nur nach unseren Weisungen und
                      unter Einhaltung der DSGVO verarbeitet.
                    </p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[1.31rem] flex items-center shrink-0">
                3. Allgemeine Hinweise und Pflicht­informationen
              </b>
              <b className="self-stretch relative text-[0.98rem] flex items-center shrink-0">
                Datenschutz
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                      persönlichen Daten sehr ernst. Wir behandeln Ihre
                      personenbezogenen Daten vertraulich und entsprechend den
                      gesetzlichen
                    </p>
                    <p className="m-0">
                      Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Wenn Sie diese Website benutzen, werden verschiedene
                      personenbezogene Daten erhoben. Personenbezogene Daten
                      sind Daten, mit denen Sie persönlich identifiziert werden
                      können. Die
                    </p>
                    <p className="m-0">
                      vorliegende Datenschutzerklärung erläutert, welche Daten
                      wir erheben und wofür wir sie nutzen. Sie erläutert auch,
                      wie und zu welchem Zweck das geschieht.
                    </p>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Wir weisen darauf hin, dass die Datenübertragung im
                      Internet (z. B. bei der Kommunikation per E-Mail)
                      Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
                      der Daten vor dem Zugriff durch
                    </p>
                    <p className="m-0">Dritte ist nicht möglich.</p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[0.98rem] flex items-center shrink-0">
                Hinweis zur verantwortlichen Stelle
              </b>
              <div className="self-stretch relative flex items-center shrink-0">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">Beispielfirma</p>
                    <p className="m-0">Musterweg 10</p>
                    <p className="m-0">90210 Musterstadt</p>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">Telefon: +49 (0) 123 44 55 66</p>
                    <p className="m-0">E-Mail: info@beispielfirma.de</p>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Verantwortliche Stelle ist die natürliche oder juristische
                      Person, die allein oder gemeinsam mit anderen über die
                      Zwecke und Mittel der Verarbeitung von personenbezogenen
                      Daten (z. B. Namen,
                    </p>
                    <p className="m-0">E-Mail-Adressen o. Ä.) entscheidet.</p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[0.98rem] flex items-center shrink-0">
                Speicherdauer
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Soweit innerhalb dieser Datenschutzerklärung keine
                      speziellere Speicherdauer genannt wurde, verbleiben Ihre
                      personenbezogenen Daten bei uns, bis der Zweck für die
                      Datenverarbeitung entfällt.
                    </p>
                    <p className="m-0">
                      Wenn Sie ein berechtigtes Löschersuchen geltend machen
                      oder eine Einwilligung zur Datenverarbeitung widerrufen,
                      werden Ihre Daten gelöscht, sofern wir keine anderen
                      rechtlich zulässigen
                    </p>
                    <p className="m-0">
                      Gründe für die Speicherung Ihrer personenbezogenen Daten
                      haben (z. B. steuer- oder handelsrechtliche
                      Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
                      Löschung nach Fortfall dieser
                    </p>
                    <p className="m-0">Gründe.</p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[0.98rem] flex items-center shrink-0">
                Allgemeine Hinweise zu den Rechtsgrundlagen der
                Datenverarbeitung auf dieser Website
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Sofern Sie in die Datenverarbeitung eingewilligt haben,
                      verarbeiten wir Ihre personenbezogenen Daten auf Grundlage
                      von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a
                      DSGVO, sofern
                    </p>
                    <p className="m-0">
                      besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
                      verarbeitet werden. Im Falle einer ausdrücklichen
                      Einwilligung in die Übertragung personenbezogener Daten in
                      Drittstaaten erfolgt die
                    </p>
                    <p className="m-0">
                      Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs.
                      1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies
                      oder in den Zugriff auf Informationen in Ihr Endgerät
                      (z. B. via Device-
                    </p>
                    <p className="m-0">
                      Fingerprinting) eingewilligt haben, erfolgt die
                      Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1
                      TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind
                      Ihre Daten zur
                    </p>
                    <p className="m-0">
                      Vertragserfüllung oder zur Durchführung vorvertraglicher
                      Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf
                      Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren
                      verarbeiten wir Ihre
                    </p>
                    <p className="m-0">
                      Daten, sofern diese zur Erfüllung einer rechtlichen
                      Verpflichtung erforderlich sind auf Grundlage von Art. 6
                      Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf
                      Grundlage unseres
                    </p>
                    <p className="m-0">
                      berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO
                      erfolgen. Über die jeweils im Einzelfall einschlägigen
                      Rechtsgrundlagen wird in den folgenden Absätzen dieser
                      Datenschutzerklärung
                    </p>
                    <p className="m-0">informiert.</p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[1.05rem] flex items-center shrink-0">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                      ausdrücklichen Einwilligung möglich. Sie können eine
                      bereits erteilte Einwilligung jederzeit widerrufen. Die
                      Rechtmäßigkeit der bis zum
                    </p>
                    <p className="m-0">
                      Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
                      unberührt.
                    </p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[0.98rem] flex items-center shrink-0">
                Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
                sowie gegen Direktwerbung (Art. 21 DSGVO)
              </b>
              <div className="self-stretch flex flex-col items-start justify-start text-[0.94rem]">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1
                      LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS
                      RECHT, AUS GRÜNDEN, DIE SICH
                    </p>
                    <p className="m-0">
                      AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE
                      VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
                      EINZULEGEN; DIES GILT AUCH FÜR
                    </p>
                    <p className="m-0">
                      EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE
                      JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG
                      BERUHT, ENTNEHMEN SIE DIESER
                    </p>
                    <p className="m-0">
                      DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN,
                      WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT
                      MEHR VERARBEITEN, ES
                    </p>
                    <p className="m-0">
                      SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR
                      DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE
                      UND FREIHEITEN
                    </p>
                    <p className="m-0">
                      ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG,
                      AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN
                      (WIDERSPRUCH NACH ART.
                    </p>
                    <p className="m-0">21 ABS. 1 DSGVO).</p>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-[0.94rem]">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
                      DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT,
                      JEDERZEIT WIDERSPRUCH GEGEN DIE
                    </p>
                    <p className="m-0">
                      VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM
                      ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR
                      DAS PROFILING,
                    </p>
                    <p className="m-0">
                      SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT.
                      WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN
                      DATEN ANSCHLIESSEND
                    </p>
                    <p className="m-0">
                      NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
                      (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
                    </p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[0.98rem] flex items-center shrink-0">
                Beschwerde­recht bei der zuständigen Aufsichts­behörde
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Im Falle von Verstößen gegen die DSGVO steht den
                      Betroffenen ein Beschwerderecht bei einer
                      Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres
                      gewöhnlichen Aufenthalts, ihres
                    </p>
                    <p className="m-0">
                      Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes
                      zu. Das Beschwerderecht besteht unbeschadet anderweitiger
                      verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                    </p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[0.98rem] flex items-center shrink-0">
                Recht auf Daten­übertrag­barkeit
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                      Einwilligung oder in Erfüllung eines Vertrags
                      automatisiert verarbeiten, an sich oder an einen Dritten
                      in einem gängigen, maschinenlesbaren
                    </p>
                    <p className="m-0">
                      Format aushändigen zu lassen. Sofern Sie die direkte
                      Übertragung der Daten an einen anderen Verantwortlichen
                      verlangen, erfolgt dies nur, soweit es technisch machbar
                      ist.
                    </p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[0.98rem] flex items-center shrink-0">
                Auskunft, Berichtigung und Löschung
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Sie haben im Rahmen der geltenden gesetzlichen
                      Bestimmungen jederzeit das Recht auf unentgeltliche
                      Auskunft über Ihre gespeicherten personenbezogenen Daten,
                      deren Herkunft und Empfänger
                    </p>
                    <p className="m-0">
                      und den Zweck der Datenverarbeitung und ggf. ein Recht auf
                      Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
                      weiteren Fragen zum Thema personenbezogene Daten können
                      Sie sich
                    </p>
                    <p className="m-0">jederzeit an uns wenden.</p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[0.98rem] flex items-center shrink-0">
                Recht auf Einschränkung der Verarbeitung
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Sie haben das Recht, die Einschränkung der Verarbeitung
                      Ihrer personenbezogenen Daten zu verlangen. Hierzu können
                      Sie sich jederzeit an uns wenden. Das Recht auf
                      Einschränkung der
                    </p>
                    <p className="m-0">
                      Verarbeitung besteht in folgenden Fällen:
                    </p>
                  </span>
                </div>
                <ul>
                  <li>
                    <p>
                      Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                      personenbezogenen Daten bestreiten, benötigen wir in der
                      Regel Zeit, um dies zu überprüfen. Für die Dauer der
                      Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                      personenbezogenen Daten zu verlangen.
                    </p>
                  </li>
                  <li>
                    <p>
                      Wenn die Verarbeitung Ihrer personenbezogenen Daten
                      unrechtmäßig geschah/geschieht, können Sie statt der Löschung
                      die Einschränkung der Datenverarbeitung verlangen.
                    </p>
                  </li>
                  <li>
                    <p>
                      Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
                      eingelegt haben, muss eine Abwägung zwischen Ihren und
                      unseren Interessen vorgenommen werden. Solange noch
                      nicht feststeht,
                      wessen Interessen überwiegen, haben Sie das Recht, die
                      Einschränkung der Verarbeitung Ihrer personenbezogenen
                      Daten zu verlangen.
                    </p>
                  </li>
                  <li>
                    <p>
                      Wenn wir Ihre personenbezogenen Daten nicht mehr
                      benötigen, Sie sie jedoch zur Ausübung, Verteidigung
                      oder Geltendmachung von Rechtsansprüchen benötigen,
                      haben Sie das Recht, statt
                      der Löschung die Einschränkung der Verarbeitung Ihrer
                      personenbezogenen Daten zu verlangen.
                    </p>
                  </li>
                  <li>
                    <p>
                      Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                      eingeschränkt haben, dürfen diese Daten – von ihrer
                      Speicherung abgesehen – nur mit Ihrer Einwilligung oder
                      zur Geltendmachung,
                      Ausübung oder Verteidigung von Rechtsansprüchen oder zum
                      Schutz der Rechte einer anderen natürlichen oder
                      juristischen Person oder aus Gründen eines wichtigen
                      öffentlichen Interesses der
                      Europäischen Union oder eines Mitgliedstaats verarbeitet
                      werden.
                    </p>
                  </li>
                </ul>
              </div>
              <b className="self-stretch relative text-[0.98rem] flex items-center shrink-0">
                SSL- bzw. TLS-Verschlüsselung
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Diese Seite nutzt aus Sicherheitsgründen und zum Schutz
                      der Übertragung vertraulicher Inhalte, wie zum Beispiel
                      Bestellungen oder Anfragen, die Sie an uns als
                      Seitenbetreiber senden, eine SSL-
                    </p>
                    <p className="m-0">
                      bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
                      erkennen Sie daran, dass die Adresszeile des Browsers von
                      „http://“ auf „https://“ wechselt und an dem
                      Schloss-Symbol in Ihrer
                    </p>
                    <p className="m-0">Browserzeile.</p>
                  </span>
                </div>
              </div>
              <div className="self-stretch relative flex items-center shrink-0">
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
                Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
                werden.
              </div>
              <b className="self-stretch relative text-[0.98rem] flex items-center shrink-0">
                Widerspruch gegen Werbe-E-Mails
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Der Nutzung von im Rahmen der Impressumspflicht
                      veröffentlichten Kontaktdaten zur Übersendung von nicht
                      ausdrücklich angeforderter Werbung und
                      Informationsmaterialien wird hiermit
                    </p>
                    <p className="m-0">
                      widersprochen. Die Betreiber der Seiten behalten sich
                      ausdrücklich rechtliche Schritte im Falle der unverlangten
                      Zusendung von Werbeinformationen, etwa durch Spam-E-Mails,
                      vor.
                    </p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[1.25rem] flex items-center shrink-0">
                4. Datenerfassung auf dieser Website
              </b>
              <b className="self-stretch relative text-[0.98rem] flex items-center shrink-0">
                Server-Log-Dateien
              </b>
              <div className="self-stretch relative flex items-center shrink-0">
                Der Provider der Seiten erhebt und speichert automatisch
                Informationen in so genannten Server-Log-Dateien, die Ihr
                Browser automatisch an uns übermittelt. Dies sind:
              </div>
              <div className="self-stretch flex flex-col py-[0rem] px-[2.5rem] box-border items-start justify-start gap-[0.06rem]">
                <div className="relative flex items-center shrink-0">
                  Browsertyp und Browserversion
                </div>
                <div className="relative flex items-center shrink-0">
                  verwendetes Betriebssystem
                </div>
                <div className="relative text-[0.88rem] flex items-center shrink-0">
                  Referrer URL
                </div>
                <div className="relative flex items-center shrink-0">
                  Hostname des zugreifenden Rechners
                </div>
                <div className="relative flex items-center shrink-0">
                  Uhrzeit der Serveranfrage
                </div>
                <div className="relative flex items-center shrink-0">
                  IP-Adresse
                </div>
              </div>
              <div className="self-stretch relative flex items-center shrink-0">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
                nicht vorgenommen.
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Die Erfassung dieser Daten erfolgt auf Grundlage von Art.
                      6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
                      berechtigtes Interesse an der technisch fehlerfreien
                      Darstellung und der Optimierung
                    </p>
                    <p className="m-0">
                      seiner Website – hierzu müssen die Server-Log-Files
                      erfasst werden.
                    </p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[1.05rem] flex items-center shrink-0">
                Kontaktformular
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                      werden Ihre Angaben aus dem Anfrageformular inklusive der
                      von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                      der
                    </p>
                    <p className="m-0">
                      Anfrage und für den Fall von Anschlussfragen bei uns
                      gespeichert. Diese Daten geben wir nicht ohne Ihre
                      Einwilligung weiter.
                    </p>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Die Verarbeitung dieser Daten erfolgt auf Grundlage von
                      Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                      Erfüllung eines Vertrags zusammenhängt oder zur
                      Durchführung vorvertraglicher
                    </p>
                    <p className="m-0">
                      Maßnahmen erforderlich ist. In allen übrigen Fällen beruht
                      die Verarbeitung auf unserem berechtigten Interesse an der
                      effektiven Bearbeitung der an uns gerichteten Anfragen
                      (Art. 6 Abs. 1 lit. f
                    </p>
                    <p className="m-0">
                      DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
                      DSGVO) sofern diese abgefragt wurde; die Einwilligung ist
                      jederzeit widerrufbar.
                    </p>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Die von Ihnen im Kontaktformular eingegebenen Daten
                      verbleiben bei uns, bis Sie uns zur Löschung auffordern,
                      Ihre Einwilligung zur Speicherung widerrufen oder der
                      Zweck für die
                    </p>
                    <p className="m-0">
                      Datenspeicherung entfällt (z. B. nach abgeschlossener
                      Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
                      Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben
                      unberührt.
                    </p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[0.98rem] flex items-center shrink-0">
                Anfrage per E-Mail, Telefon oder Telefax
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Wenn Sie uns per E-Mail, Telefon oder Telefax
                      kontaktieren, wird Ihre Anfrage inklusive aller daraus
                      hervorgehenden personenbezogenen Daten (Name, Anfrage) zum
                      Zwecke der Bearbeitung
                    </p>
                    <p className="m-0">
                      Ihres Anliegens bei uns gespeichert und verarbeitet. Diese
                      Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Die Verarbeitung dieser Daten erfolgt auf Grundlage von
                      Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                      Erfüllung eines Vertrags zusammenhängt oder zur
                      Durchführung vorvertraglicher
                    </p>
                    <p className="m-0">
                      Maßnahmen erforderlich ist. In allen übrigen Fällen beruht
                      die Verarbeitung auf unserem berechtigten Interesse an der
                      effektiven Bearbeitung der an uns gerichteten Anfragen
                      (Art. 6 Abs. 1 lit. f
                    </p>
                    <p className="m-0">
                      DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
                      DSGVO) sofern diese abgefragt wurde; die Einwilligung ist
                      jederzeit widerrufbar.
                    </p>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Die von Ihnen an uns per Kontaktanfragen übersandten Daten
                      verbleiben bei uns, bis Sie uns zur Löschung auffordern,
                      Ihre Einwilligung zur Speicherung widerrufen oder der
                      Zweck für die
                    </p>
                    <p className="m-0">
                      Datenspeicherung entfällt (z. B. nach abgeschlossener
                      Bearbeitung Ihres Anliegens). Zwingende gesetzliche
                      Bestimmungen – insbesondere gesetzliche
                      Aufbewahrungsfristen – bleiben unberührt.
                    </p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[1.25rem] flex items-center shrink-0">
                5. Analyse-Tools und Werbung
              </b>
              <b className="self-stretch relative text-[1.05rem] flex items-center shrink-0">
                Matomo
              </b>
              <div className="self-stretch relative flex items-center shrink-0">
                Diese Website benutzt den Open Source Webanalysedienst Matomo.
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Mit Hilfe von Matomo sind wir in der Lage Daten über die
                      Nutzung unserer Website durch die Websitebesucher zu
                      erfassen und zu analysieren. Hierdurch können wir u. a.
                      herausfinden, wann
                    </p>
                    <p className="m-0">
                      welche Seitenaufrufe getätigt wurden und aus welcher
                      Region sie kommen. Außerdem erfassen wir verschiedene
                      Logdateien (z. B. IP-Adresse, Referrer, verwendete Browser
                      und Betriebssysteme)
                    </p>
                    <p className="m-0">
                      und können messen, ob unsere Websitebesucher bestimmte
                      Aktionen durchführen (z. B. Klicks, Käufe u. Ä.).
                    </p>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von
                      Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
                      berechtigtes Interesse an der Analyse des
                      Nutzerverhaltens, um sowohl sein
                    </p>
                    <p className="m-0">
                      Webangebot als auch seine Werbung zu optimieren. Sofern
                      eine entsprechende Einwilligung abgefragt wurde, erfolgt
                      die Verarbeitung ausschließlich auf Grundlage von Art. 6
                      Abs. 1 lit. a DSGVO
                    </p>
                    <p className="m-0">
                      und § 25 Abs. 1 TTDSG, soweit die Einwilligung die
                      Speicherung von Cookies oder den Zugriff auf Informationen
                      im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
                      Sinne des TTDSG
                    </p>
                    <p className="m-0">
                      umfasst. Die Einwilligung ist jederzeit widerrufbar.
                    </p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative flex items-center shrink-0">
                Hosting
              </b>
              <div className="self-stretch relative flex items-center shrink-0">
                Wir hosten Matomo ausschließlich auf unseren eigenen Servern,
                sodass alle Analysedaten bei uns verbleiben und nicht
                weitergegeben werden.
              </div>
              <b className="self-stretch relative text-[1.25rem] flex items-center shrink-0">
                6. Newsletter
              </b>
              <b className="self-stretch relative text-[0.98rem] flex items-center shrink-0">
                Newsletter­daten
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Wenn Sie den auf der Website angebotenen Newsletter
                      beziehen möchten, benötigen wir von Ihnen eine
                      E-Mail-Adresse sowie Informationen, welche uns die
                      Überprüfung gestatten, dass Sie der
                    </p>
                    <p className="m-0">
                      Inhaber der angegebenen E-Mail-Adresse sind und mit dem
                      Empfang des Newsletters einverstanden sind. Weitere Daten
                      werden nicht bzw. nur auf freiwilliger Basis erhoben.
                      Diese Daten
                    </p>
                    <p className="m-0">
                      verwenden wir ausschließlich für den Versand der
                      angeforderten Informationen und geben diese nicht an
                      Dritte weiter.
                    </p>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-[0.88rem]">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Die Verarbeitung der in das Newsletteranmeldeformular
                      eingegebenen Daten erfolgt ausschließlich auf Grundlage
                      Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die
                      erteilte Einwilligung zur
                    </p>
                    <p className="m-0">
                      Speicherung der Daten, der E-Mail-Adresse sowie deren
                      Nutzung zum Versand des Newsletters können Sie jederzeit
                      widerrufen, etwa über den „Austragen“-Link im Newsletter.
                      Die
                    </p>
                    <p className="m-0">
                      Rechtmäßigkeit der bereits erfolgten
                      Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
                    </p>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns
                      hinterlegten Daten werden von uns bis zu Ihrer Austragung
                      aus dem Newsletter bei uns bzw. dem
                      Newsletterdiensteanbieter gespeichert
                    </p>
                    <p className="m-0">
                      und nach der Abbestellung des Newsletters oder nach
                      Zweckfortfall aus der Newsletterverteilerliste gelöscht.
                      Wir behalten uns vor, E-Mail-Adressen aus unserem
                      Newsletterverteiler nach eigenem
                    </p>
                    <p className="m-0">
                      Ermessen im Rahmen unseres berechtigten Interesses nach
                      Art. 6 Abs. 1 lit. f DSGVO zu löschen oder zu sperren.
                    </p>
                  </span>
                </div>
              </div>
              <div className="self-stretch relative flex items-center shrink-0">
                Daten, die zu anderen Zwecken bei uns gespeichert wurden,
                bleiben hiervon unberührt.
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Nach Ihrer Austragung aus der Newsletterverteilerliste
                      wird Ihre E-Mail-Adresse bei uns bzw. dem
                      Newsletterdiensteanbieter ggf. in einer Blacklist
                      gespeichert, sofern dies zur Verhinderung
                    </p>
                    <p className="m-0">
                      künftiger Mailings erforderlich ist. Die Daten aus der
                      Blacklist werden nur für diesen Zweck verwendet und nicht
                      mit anderen Daten zusammengeführt. Dies dient sowohl Ihrem
                      Interesse als auch
                    </p>
                    <p className="m-0">
                      unserem Interesse an der Einhaltung der gesetzlichen
                      Vorgaben beim Versand von Newslettern (berechtigtes
                      Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die
                      Speicherung in der Blacklist ist
                    </p>
                    <p className="m-0">
                      <span>{`zeitlich nicht befristet. `}</span>
                      <b className="font-inter">
                        Sie können der Speicherung widersprechen, sofern Ihre
                        Interessen unser berechtigtes Interesse überwiegen.
                      </b>
                    </p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[1.31rem] flex items-center shrink-0">
                7. Plugins und Tools
              </b>
              <b className="self-stretch relative text-[0.98rem] flex items-center shrink-0">
                OpenStreetMap
              </b>
              <div className="self-stretch relative flex items-center shrink-0">
                Wir nutzen den Kartendienst von OpenStreetMap (OSM).
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Wir binden das Kartenmaterial von OpenStreetMap auf dem
                      Server der OpenStreetMap Foundation, St John’s Innovation
                      Centre, Cowley Road, Cambridge, CB4 0WS, Großbritannien,
                      ein.
                    </p>
                    <p className="m-0">
                      Großbritannien gilt als datenschutzrechtlich sicherer
                      Drittstaat. Das bedeutet, dass Großbritannien ein
                      Datenschutzniveau aufweist, das dem Datenschutzniveau in
                      der Europäischen Union
                    </p>
                    <p className="m-0">
                      entspricht. Bei der Nutzung der OpenStreetMap-Karten wird
                      eine Verbindung zu den Servern der
                      OpenStreetMap-Foundation hergestellt. Dabei können u. a.
                      Ihre IP-Adresse und weitere
                    </p>
                    <p className="m-0">
                      Informationen über Ihr Verhalten auf dieser Website an die
                      OSMF weitergeleitet werden. OpenStreetMap speichert hierzu
                      unter Umständen Cookies in Ihrem Browser oder setzt
                      vergleichbare
                    </p>
                    <p className="m-0">Wiedererkennungstechnologien ein.</p>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Die Nutzung von OpenStreetMap erfolgt im Interesse einer
                      ansprechenden Darstellung unserer Online-Angebote und
                      einer leichten Auffindbarkeit der von uns auf der Website
                      angegebenen Orte.
                    </p>
                    <p className="m-0">
                      Dies stellt ein berechtigtes Interesse im Sinne von Art. 6
                      Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende
                      Einwilligung abgefragt wurde, erfolgt die Verarbeitung
                      ausschließlich auf Grundlage
                    </p>
                    <p className="m-0">
                      von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG,
                      soweit die Einwilligung die Speicherung von Cookies oder
                      den Zugriff auf Informationen im Endgerät des Nutzers
                      (z. B. Device-
                    </p>
                    <p className="m-0">
                      Fingerprinting) im Sinne des TTDSG umfasst. Die
                      Einwilligung ist jederzeit widerrufbar.
                    </p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[1.05rem] flex items-center shrink-0">
                Friendly Captcha
              </b>
              <div className="self-stretch relative flex items-center shrink-0">
                Wir nutzen Friendly Captcha (im Folgenden „Friendly Captcha“)
                auf dieser Website. Anbieter ist die Friendly Captcha GmbH, Am
                Anger 3-5, 82237 Woerthsee, Deutschland.
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Mit Friendly Captcha soll überprüft werden, ob die
                      Dateneingabe auf dieser Website (z. B. in einem
                      Kontaktformular) durch einen Menschen oder durch ein
                      automatisiertes Programm erfolgt.
                    </p>
                    <p className="m-0">
                      Hierzu analysiert Friendly Captcha das Verhalten des
                      Websitebesuchers anhand verschiedener Merkmale. Zur
                      Analyse wertet Friendly Captcha verschiedene Informationen
                      aus (z. B. anonymisierte
                    </p>
                    <p className="m-0">
                      <span>{`IP-Adresse, Referrer, Besuchszeit etc.). Weitere Informationen hierzu finden Sie unter: `}</span>
                      <span className="[text-decoration:underline] text-blue">
                        https://friendlycaptcha.com/legal/privacy-end-users/
                      </span>
                      <span className="text-black">.</span>
                    </p>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Die Speicherung und Analyse der Daten erfolgt auf
                      Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                      Websitebetreiber hat ein berechtigtes Interesse daran,
                      seine Webangebote vor missbräuchlicher
                    </p>
                    <p className="m-0">
                      automatisierter Ausspähung und vor SPAM zu schützen.
                      Sofern eine entsprechende Einwilligung abgefragt wurde,
                      erfolgt die Verarbeitung ausschließlich auf Grundlage von
                      Art. 6 Abs. 1 lit. a
                    </p>
                    <p className="m-0">
                      DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die
                      Speicherung von Cookies oder den Zugriff auf Informationen
                      im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
                      Sinne des
                    </p>
                    <p className="m-0">
                      TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                    </p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[0.88rem] flex items-center shrink-0">
                Auftragsverarbeitung
              </b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Wir haben einen Vertrag über Auftragsverarbeitung (AVV)
                      zur Nutzung des oben genannten Dienstes geschlossen.
                      Hierbei handelt es sich um einen datenschutzrechtlich
                      vorgeschriebenen Vertrag,
                    </p>
                    <p className="m-0">
                      der gewährleistet, dass dieser die personenbezogenen Daten
                      unserer Websitebesucher nur nach unseren Weisungen und
                      unter Einhaltung der DSGVO verarbeitet.
                    </p>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <span>{`Quelle: `}</span>
                    <span className="[text-decoration:underline] text-blue">
                      https://www.e-recht24.de
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
        <Sidebar/>
      </div>
    </div>
  );
};

export default Dsgvo;
