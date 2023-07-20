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
import SidePageHeader from "../components/side-page-header";
import Footer from "../components/footer";

const Buchung: NextPage = () => {
  const [
    formControlInputStyle1DateTimePickerValue,
    setFormControlInputStyle1DateTimePickerValue,
  ] = useState<string | null>(null);
  const router = useRouter();

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

  const onSendButtonContainerClick = useCallback(() => {
    router.push("/buchung");
  }, [router]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
            <Footer
              footerPosition="unset"
              footerWidth="unset"
              footerPadding="3rem"
              footerGap="0.5rem"
              footerAlignSelf="stretch"
              companyDetailsSocialMediaGap="1rem"
              familiencampRgenFontSize="2.5rem"
              rgenGrundstcksGbRFontSize="0.88rem"
              rgenGrundstcksGbRWidth="20rem"
              familienurlaubAmStrandFontSize="1.13rem"
              familienurlaubAmStrandWidth="20rem"
              seasonsGap="0.5rem"
              hauptsaison0106FontSize="1rem"
              nebensaison0103FontSize="1rem"
              linksGap="0.5rem"
              unterknfteFontSize="1rem"
              buchungFontSize="1rem"
              lageFontSize="1rem"
              datenschutzFontSize="1rem"
              impressumFontSize="1rem"
              copyrightHeight="1rem"
              rgenGrundstcksGbRFontSize1="0.81rem"
              onUnterknfteClick={onUnterknfteClick}
              onBuchungClick={onBuchungClick}
              onLageClick={onLageClick}
              onDatenschutzClick={onDatenschutzClick}
              onImpressumClick={onImpressumClick}
            />
          </div>
          <div className="self-stretch w-[12.5rem] overflow-hidden shrink-0 lg:hidden" />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Buchung;
