import type { NextPage } from "next";
import { useState, useCallback } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Link from "next/link";
import { useRouter } from "next/router";

const Buchung: NextPage = () => {
  const [
    formControlInputStyle1DateTimePickerValue,
    setFormControlInputStyle1DateTimePickerValue,
  ] = useState<string | null>(null);
  const router = useRouter();

  const onSendButtonContainerClick = useCallback(() => {
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
      <div className="relative rounded-2xl bg-light-text-color w-full overflow-hidden flex flex-col items-center justify-start text-left text-[1rem] text-light-text-color font-title-2">
        <div className="self-stretch h-[20.81rem] flex flex-col items-center justify-start bg-[url(/sidepage-header@3x.png)] bg-cover bg-no-repeat bg-[top] lg:w-[75rem] lg:max-w-[75rem] md:self-stretch md:w-auto md:max-w-[60rem] sm:self-stretch sm:w-auto sm:flex-col sm:gap-[0rem] sm:items-center sm:justify-between sm:rounded-none">
          <div className="self-stretch h-[5.63rem] flex flex-row py-[0.63rem] px-[1rem] box-border items-center justify-between lg:w-auto lg:[align-self:unset] lg:flex-row lg:gap-[15rem] lg:items-center lg:justify-center md:self-stretch md:w-auto md:flex-row md:gap-[0rem] md:items-center md:justify-between md:pl-[0.63rem] md:pr-[0.63rem] md:box-border sm:w-auto sm:[align-self:unset] sm:flex-row sm:gap-[0rem] sm:items-center sm:justify-between sm:pl-[0.5rem] sm:pr-[1rem] sm:box-border">
            <div className="h-[3.75rem] flex flex-row items-center justify-start lg:w-auto lg:[align-self:unset] md:w-auto md:[align-self:unset] md:flex-col md:items-start md:justify-center sm:flex-col sm:items-start sm:justify-center sm:pl-[0.5rem] sm:pr-[1rem] sm:box-border">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[2.5rem] leading-[100%] font-belleza text-light-text-color text-left inline-block [backdrop-filter:blur(4px)] sm:text-[2rem]">
                Familienurlaub Rügen
              </button>
            </div>
            <div className="h-[3.75rem] flex flex-row items-center justify-start gap-[3.31rem] lg:flex lg:w-auto lg:[align-self:unset] lg:gap-[3.31rem] md:hidden md:items-end md:justify-center sm:hidden">
              <div className="relative leading-[125%] font-medium">Start</div>
              <div className="relative leading-[125%] font-medium">
                Unterkünfte
              </div>
              <div className="relative leading-[125%] font-medium">Buchung</div>
              <div className="relative leading-[125%] font-medium">Lage</div>
              <div className="relative leading-[125%] font-medium">
                Impressum
              </div>
            </div>
            <div className="flex-1 h-[3.75rem] hidden flex-col items-end justify-center md:flex md:w-auto md:[align-self:unset] md:flex-col md:gap-[0.63rem] md:items-end md:justify-center">
              <img
                className="w-[1.49rem] h-[1.5rem] overflow-hidden shrink-0 md:flex sm:flex"
                alt=""
                src="/notification1.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch [background:linear-gradient(180deg,_#fff5eb,_#fff_50.52%,_#fff5eb)] flex flex-row items-center justify-start text-center text-[3.5rem] text-black">
          <div className="self-stretch w-[12.5rem] overflow-hidden shrink-0 lg:hidden" />
          <div className="flex-1 flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-col py-[6rem] px-[0.5rem] items-center justify-start gap-[0.5rem]">
                <b className="self-stretch relative leading-[125%]">
                  Unsere Verfügbarkeiten
                </b>
                <div className="self-stretch relative text-[1.25rem] leading-[125%] font-medium text-dimgray-100">
                  Klicken Sie auf die An- und Abreisedaten in der jeweiligen
                  Kategorie.
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[43.75rem] shrink-0 object-cover"
                  alt=""
                  src="/calendar-11@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row py-[4rem] px-[0.5rem] items-center justify-center text-[2rem] text-darkslategray sm:flex-col sm:items-center sm:justify-between sm:gap-[0rem]">
                <img
                  className="self-stretch relative max-h-full w-[21.88rem] overflow-hidden shrink-0 object-cover sm:hidden sm:w-[26.25rem] sm:flex-1 sm:min-w-[18.75rem] sm:max-w-[26.25rem]"
                  alt=""
                  src="/cover@2x.png"
                />
                <div className="self-stretch bg-light-text-color overflow-hidden flex flex-col py-[1.5rem] px-[3.13rem] box-border items-center justify-start gap-[2.5rem] min-w-[31.25rem] max-w-[37.5rem]">
                  <b className="relative leading-[125%]">Kontaktformular</b>
                  <form className="self-stretch rounded-[1px] bg-light-text-color overflow-hidden flex flex-col items-start justify-start gap-[0.63rem]">
                    <div className="self-stretch h-[5.25rem] flex flex-col items-start justify-start gap-[0.63rem]">
                      <div className="self-stretch relative text-[0.88rem] tracking-[0.2px] leading-[1.5rem] font-semibold font-link text-darkslategray text-left">
                        Name *
                      </div>
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
                      />
                    </div>
                    <div className="self-stretch h-[5.25rem] flex flex-col items-start justify-start gap-[0.63rem]">
                      <div className="self-stretch relative text-[0.88rem] tracking-[0.2px] leading-[1.5rem] font-semibold font-link text-darkslategray text-left">
                        Email-Adresse *
                      </div>
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
                      />
                    </div>
                    <div className="self-stretch h-[5.25rem] flex flex-col items-start justify-start gap-[0.63rem]">
                      <div className="self-stretch relative text-[0.88rem] tracking-[0.2px] leading-[1.5rem] font-semibold font-link text-darkslategray text-left">
                        Telefonnummer
                      </div>
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch"
                        color="primary"
                        variant="standard"
                        type="tel"
                        label="Telefonnummer"
                        placeholder="0171 12345678"
                        size="medium"
                        margin="none"
                      />
                    </div>
                    <div className="self-stretch h-[5.25rem] flex flex-col items-start justify-start gap-[0.63rem]">
                      <div className="self-stretch relative text-[0.88rem] tracking-[0.2px] leading-[1.5rem] font-semibold font-link text-darkslategray text-left">
                        Anzahl Erwachsene *
                      </div>
                      <FormControl
                        className="self-stretch"
                        variant="standard"
                        required
                      >
                        <InputLabel color="primary">
                          Anzahl Erwachsene
                        </InputLabel>
                        <Select
                          color="primary"
                          defaultValue="2"
                          size="medium"
                          label="Anzahl Erwachsene"
                        />
                        <FormHelperText />
                      </FormControl>
                    </div>
                    <div className="self-stretch h-[5.25rem] flex flex-col items-start justify-start gap-[0.63rem]">
                      <div className="self-stretch relative text-[0.88rem] tracking-[0.2px] leading-[1.5rem] font-semibold font-link text-darkslategray text-left">
                        Anzahl Kinder *
                      </div>
                      <FormControl
                        className="self-stretch"
                        variant="standard"
                        required
                      >
                        <InputLabel color="primary">Anzahl Kinder</InputLabel>
                        <Select
                          color="primary"
                          defaultValue="0"
                          size="medium"
                          label="Anzahl Kinder"
                        />
                        <FormHelperText />
                      </FormControl>
                    </div>
                    <div className="self-stretch h-[5.25rem] flex flex-col items-start justify-start gap-[0.63rem]">
                      <div className="self-stretch relative text-[0.88rem] tracking-[0.2px] leading-[1.5rem] font-semibold font-link text-darkslategray text-left">
                        Geburtstag Kind 1 *
                      </div>
                      <div className="self-stretch">
                        <DatePicker
                          label="Geburtstag Kind 1"
                          value={formControlInputStyle1DateTimePickerValue}
                          onChange={(newValue: any) => {
                            setFormControlInputStyle1DateTimePickerValue(
                              newValue
                            );
                          }}
                          components={{
                            OpenPickerIcon: () => (
                              <Icon>calendar_today_sharp</Icon>
                            ),
                          }}
                          slotProps={{
                            textField: {
                              variant: "standard",
                              size: "medium",
                              required: true,
                              color: "primary",
                            },
                          }}
                        />
                      </div>
                    </div>
                    <textarea
                      className="[border:none] bg-[transparent] font-semibold font-link text-[0.88rem] self-stretch flex flex-col items-start justify-start"
                      placeholder="Buchungswunsch"
                    />
                  </form>
                  <div
                    className="rounded-45xl bg-rectangle-805 h-[2.75rem] flex flex-row py-[0rem] px-[1.25rem] box-border items-center justify-start cursor-pointer text-left text-[1.13rem] text-light-text-color"
                    onClick={onSendButtonContainerClick}
                  >
                    <b className="relative leading-[1.5rem]">Abschicken</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col p-[3rem] items-center justify-start gap-[0.5rem] text-[1rem] text-gray-200">
              <div className="self-stretch flex flex-row items-start justify-between md:flex-row md:gap-[0.63rem] md:items-start md:justify-center sm:flex-col sm:gap-[3rem] sm:items-start sm:justify-center">
                <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[1rem] text-left text-[2.5rem] text-dimgray-100 sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch flex flex-row items-start justify-start text-black font-belleza">
                    <div className="flex-1 relative leading-[100%] [backdrop-filter:blur(4px)]">
                      Familiencamp Rügen
                    </div>
                  </div>
                  <div className="relative text-[0.88rem] leading-[125%] inline-block w-[20rem]">
                    Rügen Grundstücks GbR
                  </div>
                  <div className="relative text-[1.13rem] leading-[125%] inline-block w-[20rem]">
                    Familienurlaub am Strand von Rügen
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-center justify-center gap-[0.5rem] sm:items-start sm:justify-center sm:flex-[unset] sm:self-stretch">
                  <div className="relative leading-[125%]">
                    Hauptsaison: 01.06. - 31.08
                  </div>
                  <div className="relative leading-[125%]">{`Nebensaison:   01.03. - 31.05. & 01.09. - 31.10.`}</div>
                </div>
                <div className="flex-1 flex flex-col items-end justify-center gap-[0.5rem] sm:items-start sm:justify-center sm:flex-[unset] sm:self-stretch">
                  <Link
                    className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit]"
                    href="/unterkuenfte"
                    onClick={onUnterknfteClick}
                  >
                    Unterkünfte
                  </Link>
                  <Link
                    className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit]"
                    href="/buchung"
                    onClick={onBuchungClick}
                  >
                    Buchung
                  </Link>
                  <Link
                    className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit]"
                    href="/lage"
                    onClick={onLageClick}
                  >
                    Lage
                  </Link>
                  <Link
                    className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit]"
                    href="/d-s-g-v-o"
                    onClick={onDatenschutzClick}
                  >
                    Datenschutzerklärung
                  </Link>
                  <Link
                    className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit]"
                    href="/impressum"
                    onClick={onImpressumClick}
                  >
                    Impressum
                  </Link>
                </div>
              </div>
              <div className="self-stretch h-[1rem] flex flex-col items-center justify-between text-left text-[0.81rem] text-dimgray-300">
                <div className="relative leading-[125%]">
                  © Rügen Grundstücks GbR 2023. Alle Rechte vorbehalten.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch w-[12.5rem] overflow-hidden shrink-0 lg:hidden" />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Buchung;
