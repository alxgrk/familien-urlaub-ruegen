import type { NextPage } from "next";
import {useState, useCallback, useMemo, useEffect} from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  FormHelperText,
  Select,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useRouter } from "next/router";
import SidePageHeader from "../components/side-page-header";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";
import {BaseRouter} from "next/dist/shared/lib/router/router";
import Link from "next/link";
import Timeline, {Range} from "../components/timeline";

function parseQueryParam(router: BaseRouter, key: string, defaultValue: number) {
  const rawValue = router.query[key];
  if (rawValue === undefined) {
    return defaultValue;
  }
  const value = Array.isArray(rawValue) ? rawValue[0] : rawValue;
  return Number.parseInt(value);
}

const Buchung: NextPage = () => {
  const router = useRouter();

  const formSubmittedSuccessfully = router.query["erfolg"] !== undefined && Boolean(router.query["erfolg"]) === true;

  const [numErwachsene, setNumErwachsene] = useState(parseQueryParam(router, "numErwachsene", 2));
  const [numKinder, setNumKinder] = useState(parseQueryParam(router, "numKinder", 0));

  const birthdayBoxes = useMemo(() => Array.from(Array(numKinder).keys()), [numKinder]);

  const [
    birthdaysChildren,
    setBirthdaysChildren,
  ] = useState<Date[]>([]);

  const anreiseTag = router.query["anreise"] ? new Date(router.query["anreise"] as string) : undefined;
  const abreiseTag = anreiseTag
      ? (router.query["abreise"] ? new Date(router.query["abreise"] as string) : new Date(anreiseTag.getTime() + 7 * 24 * 60 * 60 * 1000))
      : undefined;
  const initialRange = anreiseTag ? {start: anreiseTag!, end: abreiseTag!} : undefined;
  const [selectedTimeRangeSmall, setSelectedTimeRangeSmall] = useState<Range | undefined>(initialRange);
  const [selectedTimeRangeBig, setSelectedTimeRangeBig] = useState<Range | undefined>(undefined);

  return (
      <div className="relative bg-light-text-color w-full overflow-hidden flex flex-col items-center justify-start text-center text-[3.5rem] text-black font-title-2">
        <SidePageHeader
          sidePageHeaderPosition="unset"
          sidePageHeaderWidth="unset"
          sidePageHeaderHeight="20.81rem"
          sidePageHeaderAlignSelf="stretch"
          sidePageHeaderHeight1="5.63rem"
          sidePageHeaderPadding="0.63rem 1rem"
        />
        <div className="self-stretch [background:linear-gradient(180deg,_#fff5eb,_#fff_50.52%,_#fff5eb)] flex flex-row items-center justify-start">
          <Sidebar/>
          <div className="flex-1 flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-col pt-[6rem] px-[0.5rem] items-center justify-start gap-[0.5rem]">
                <b className="self-center relative leading-[125%] sm:text-[2rem]">
                  Unsere Verfügbarkeiten
                </b>
                <div className="self-center relative text-[1.25rem] leading-[125%] font-medium text-dimgray-100 sm:text-[1rem]">
                  Klicken Sie auf die An- und Abreisedaten in der jeweiligen
                  Kategorie.
                </div>
                <Timeline initialSelection={initialRange} onSelect={({small, big}) => {
                  setSelectedTimeRangeSmall(small)
                  setSelectedTimeRangeBig(big)
                }}/>
              </div>
              <div className="self-center flex flex-row items-center justify-center text-[2rem] text-darkslategray
              border-[1px] border-solid border-slate-200
              md:flex-col sm:flex-col sm:py-[0.5rem]">
                <img
                  className="self-stretch relative max-w-[21.88rem] overflow-hidden shrink-0 object-cover
                  md:hidden sm:hidden"
                  alt=""
                  src="/cover@2x.png"
                />
                <div className="self-stretch bg-light-text-color overflow-hidden flex flex-col py-[1.5rem] px-[3.13rem] box-border
                items-center justify-start gap-[2.5rem] min-w-[31.25rem] max-w-[37.5rem] sm:min-w-[10rem] sm:px-[1rem]">
                  <b className="relative leading-[125%]">Kontaktformular</b>
                  { !formSubmittedSuccessfully
                      ? <form data-netlify="true"
                          data-netlify-honeypot="bot-field"
                          name="contact-form"
                          method="POST"
                          action="/buchung?erfolg=true"
                          className="self-stretch rounded-[1px] bg-light-text-color overflow-hidden flex flex-col items-start justify-start gap-[0.63rem]">
                        <input type="hidden" name="form-name" value="contact-form" />
                        <div className={`self-stretch h-[4.25rem] flex flex-col items-start justify-start gap-[0.63rem] ${!selectedTimeRangeSmall ? 'hidden' : ''}`}>
                          <TextField
                              className="[border:none] bg-[transparent] self-stretch"
                              color="primary"
                              hidden={selectedTimeRangeSmall === undefined}
                              variant="standard"
                              type="text"
                              label="Zeitraum Kleines Haus"
                              size="medium"
                              margin="none"
                              required
                              value={`Anreise: ${selectedTimeRangeSmall?.start.toLocaleDateString() ?? '-'} - Abreise: ${selectedTimeRangeSmall?.end.toLocaleDateString() ?? '-'}`}
                              inputProps={{readOnly: true, className: "sm:text-[0.8rem]", name: "kleinesHausZeitraum"}}
                          />
                        </div>
                        <div className={`self-stretch h-[4.25rem] flex flex-col items-start justify-start gap-[0.63rem] ${!selectedTimeRangeBig ? 'hidden' : ''}`}>
                          <TextField
                              className="[border:none] bg-[transparent] self-stretch"
                              color="primary"
                              variant="standard"
                              type="text"
                              label="Zeitraum Großes Haus"
                              size="medium"
                              margin="none"
                              required
                              value={`Anreise: ${selectedTimeRangeBig?.start.toLocaleDateString() ?? '-'} - Abreise: ${selectedTimeRangeBig?.end.toLocaleDateString() ?? '-'}`}
                              inputProps={{readOnly: true, className: "sm:text-[0.8rem]", name: "großesHausZeitraum"}}
                          />
                        </div>
                        <div className="self-stretch h-[4.25rem] flex flex-col items-start justify-start gap-[0.63rem]">
                          <TextField
                            className="[border:none] bg-[transparent] self-stretch"
                            color="primary"
                            variant="standard"
                            type="text"
                            label="Name"
                            placeholder="Vor- und Nachname"
                            size="medium"
                            margin="none"
                            required
                            inputProps={{name: "name"}}
                          />
                        </div>
                        <div className="self-stretch h-[4.25rem] flex flex-col items-start justify-start gap-[0.63rem]">
                          <TextField
                            className="[border:none] bg-[transparent] self-stretch"
                            color="primary"
                            variant="standard"
                            type="email"
                            label="Email-Adresse"
                            placeholder="example@web.de"
                            size="medium"
                            margin="none"
                            required
                            inputProps={{name: "email"}}
                          />
                        </div>
                        <div className="self-stretch h-[4.25rem] flex flex-col items-start justify-start gap-[0.63rem]">
                          <TextField
                            className="[border:none] bg-[transparent] self-stretch"
                            color="primary"
                            variant="standard"
                            type="tel"
                            label="Telefonnummer"
                            placeholder="0171 12345678"
                            size="medium"
                            margin="none"
                            inputProps={{name: "telefon"}}
                          />
                        </div>
                        <div className="self-stretch h-[4.25rem] flex flex-col items-start justify-start gap-[0.63rem]">
                          <FormControl
                            className="self-stretch"
                            variant="standard"
                            required
                          >
                            <TextField
                                type="number"
                                color="primary"
                                size="medium"
                                label="Anzahl Erwachsene"
                                className="self-stretch relative leading-[125%]"
                                value={numErwachsene}
                                variant="standard"
                                onChange={(v: any) => {
                                  const value = v.target.value;
                                  if (value < 0 ) return;
                                  setNumErwachsene(value)
                                }}
                                inputProps={{name: "anzahlErwachsene"}}
                            />
                            <FormHelperText />
                          </FormControl>
                        </div>
                        <div className="self-stretch h-[4.25rem] flex flex-col items-start justify-start gap-[0.63rem]">
                          <FormControl
                            className="self-stretch"
                            variant="standard"
                            required
                          >
                            <TextField
                                type="number"
                                color="primary"
                                size="medium"
                                label="Anzahl Kinder"
                                className="self-stretch relative leading-[125%]"
                                value={numKinder}
                                variant="standard"
                                onChange={(v: any) => {
                                  const value = v.target.value;
                                  if (value < 0 ) return;
                                  setNumKinder(Number.parseInt(value))
                                }}
                                inputProps={{name: "anzahlKinder"}}
                            />
                            <FormHelperText />
                          </FormControl>
                        </div>
                        {
                          birthdayBoxes.map(index =>
                              (<div
                                  className="self-stretch h-[4.25rem] flex flex-col items-start justify-start gap-[0.63rem]">
                                <DatePicker
                                    className="self-stretch"
                                    label={`Geburtstag Kind ${index+1}`}
                                    value={birthdaysChildren[index] ?? new Date()}
                                    onChange={(newValue: any) => {
                                      const copy = [...birthdaysChildren];
                                      copy[index] = newValue;
                                      setBirthdaysChildren(copy);
                                    }}
                                    slotProps={{
                                      textField: {
                                        name: `geburtstagKind${index+1}`,
                                        variant: "standard",
                                        size: "medium",
                                        required: true,
                                        color: "primary",
                                      },
                                    }}
                                />
                              </div>))
                        }
                        <p className="hidden">
                          <input type="text" name="Geburtstage der Kinder" readOnly={true}
                                 value={birthdaysChildren.map(b => b.toLocaleDateString('de')).join()} />
                        </p>
                        <textarea
                          name="buchungswunsch"
                          className="[border:none] bg-[transparent] font-semibold font-link text-[0.88rem] self-stretch flex flex-col items-start justify-start"
                          placeholder="Buchungswunsch"
                        />
                        <p className="hidden">
                          <label>
                            Don’t fill this out if you’re human: <input name="bot-field"/>
                          </label>
                        </p>
                        <button
                            className="self-center rounded-45xl bg-rectangle-805 h-[2.75rem] flex flex-row py-[0rem] px-[1.25rem] box-border items-center justify-start cursor-pointer
                        text-left text-[1.13rem] text-light-text-color"
                            type="submit"
                        >
                          <b className="relative leading-[1.5rem]">Abschicken</b>
                        </button>
                      </form>
                    : <div>
                        <h1>Anfrage erhalten!</h1>
                        <p>Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglichst bei Ihnen.</p>
                        <p><Link href="/">Zurück zur Startseite</Link></p>
                      </div>
                  }
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

export default Buchung;
