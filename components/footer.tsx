import type { NextPage } from "next";
import {useCallback, useMemo} from "react";
import Link from "next/link";
import CSS, { Property } from "csstype";
import {useRouter} from "next/router";

type FooterType = {
  /** Style props */
  footerPosition?: Property.Position;
  footerWidth?: Property.Width;
  footerGap?: Property.Gap;
  companyDetailsSocialMediaGap?: Property.Gap;
  familiencampRgenFontSize?: Property.FontSize;
  rgenGrundstcksGbRFontSize?: Property.FontSize;
  rgenGrundstcksGbRWidth?: Property.Width;
  familienurlaubAmStrandFontSize?: Property.FontSize;
  familienurlaubAmStrandWidth?: Property.Width;
  seasonsGap?: Property.Gap;
  hauptsaison0106FontSize?: Property.FontSize;
  nebensaison0103FontSize?: Property.FontSize;
  linksGap?: Property.Gap;
  unterknfteFontSize?: Property.FontSize;
  buchungFontSize?: Property.FontSize;
  lageFontSize?: Property.FontSize;
  datenschutzFontSize?: Property.FontSize;
  impressumFontSize?: Property.FontSize;
  copyrightHeight?: Property.Height;
  rgenGrundstcksGbRFontSize1?: Property.FontSize;

  /** Action props */
  onUnterknfteClick?: () => void;
  onBuchungClick?: () => void;
  onLageClick?: () => void;
  onDatenschutzClick?: () => void;
  onImpressumClick?: () => void;
};

const defaultProps = {
  footerPosition: "unset",
  footerWidth: "unset",
  footerGap: "0.5rem",
  companyDetailsSocialMediaGap: "1rem",
  familiencampRgenFontSize: "2.5rem",
  rgenGrundstcksGbRFontSize: "0.88rem",
  rgenGrundstcksGbRWidth: "20rem",
  familienurlaubAmStrandFontSize: "1.13rem",
  familienurlaubAmStrandWidth: "20rem",
  seasonsGap: "0.5rem",
  hauptsaison0106FontSize: "1rem",
  nebensaison0103FontSize: "1rem",
  linksGap: "0.5rem",
  unterknfteFontSize: "1rem",
  buchungFontSize: "1rem",
  lageFontSize: "1rem",
  datenschutzFontSize: "1rem",
  impressumFontSize: "1rem",
  copyrightHeight: "1rem",
  rgenGrundstcksGbRFontSize1: "0.81rem",
}

const Footer: NextPage<FooterType> = (props) => {

  const {
    footerPosition,
    footerWidth,
    footerGap,
    companyDetailsSocialMediaGap,
    familiencampRgenFontSize,
    rgenGrundstcksGbRFontSize,
    rgenGrundstcksGbRWidth,
    familienurlaubAmStrandFontSize,
    familienurlaubAmStrandWidth,
    seasonsGap,
    hauptsaison0106FontSize,
    nebensaison0103FontSize,
    linksGap,
    unterknfteFontSize,
    buchungFontSize,
    lageFontSize,
    datenschutzFontSize,
    impressumFontSize,
    copyrightHeight,
    rgenGrundstcksGbRFontSize1,
  } = Object.assign({}, defaultProps, props);

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
    router.push("/dsgvo");
  }, [router]);

  const onImpressumClick = useCallback(() => {
    router.push("/impressum");
  }, [router]);

  const footerStyle: CSS.Properties = useMemo(() => {
    return {
      position: footerPosition,
      width: footerWidth,
      gap: footerGap,
    };
  }, [footerPosition, footerWidth, footerGap]);

  const companyDetailsSocialMediaStyle: CSS.Properties = useMemo(() => {
    return {
      gap: companyDetailsSocialMediaGap,
    };
  }, [companyDetailsSocialMediaGap]);

  const familiencampRgenStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: familiencampRgenFontSize,
    };
  }, [familiencampRgenFontSize]);

  const rgenGrundstcksGbRStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: rgenGrundstcksGbRFontSize,
      width: rgenGrundstcksGbRWidth,
    };
  }, [rgenGrundstcksGbRFontSize, rgenGrundstcksGbRWidth]);

  const familienurlaubAmStrandStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: familienurlaubAmStrandFontSize,
      width: familienurlaubAmStrandWidth,
    };
  }, [familienurlaubAmStrandFontSize, familienurlaubAmStrandWidth]);

  const seasonsStyle: CSS.Properties = useMemo(() => {
    return {
      gap: seasonsGap,
    };
  }, [seasonsGap]);

  const hauptsaison0106Style: CSS.Properties = useMemo(() => {
    return {
      fontSize: hauptsaison0106FontSize,
    };
  }, [hauptsaison0106FontSize]);

  const nebensaison0103Style: CSS.Properties = useMemo(() => {
    return {
      fontSize: nebensaison0103FontSize,
    };
  }, [nebensaison0103FontSize]);

  const linksStyle: CSS.Properties = useMemo(() => {
    return {
      gap: linksGap,
    };
  }, [linksGap]);

  const unterknfte1Style: CSS.Properties = useMemo(() => {
    return {
      fontSize: unterknfteFontSize,
    };
  }, [unterknfteFontSize]);

  const buchung1Style: CSS.Properties = useMemo(() => {
    return {
      fontSize: buchungFontSize,
    };
  }, [buchungFontSize]);

  const lage1Style: CSS.Properties = useMemo(() => {
    return {
      fontSize: lageFontSize,
    };
  }, [lageFontSize]);

  const datenschutzStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: datenschutzFontSize,
    };
  }, [datenschutzFontSize]);

  const impressum1Style: CSS.Properties = useMemo(() => {
    return {
      fontSize: impressumFontSize,
    };
  }, [impressumFontSize]);

  const copyrightStyle: CSS.Properties = useMemo(() => {
    return {
      height: copyrightHeight,
    };
  }, [copyrightHeight]);

  const rgenGrundstcksGbR1Style: CSS.Properties = useMemo(() => {
    return {
      fontSize: rgenGrundstcksGbRFontSize1,
    };
  }, [rgenGrundstcksGbRFontSize1]);

  return (
    <div
      className="flex flex-col py-[2rem] px-[0.5rem] box-border items-center justify-start gap-[8px] text-center text-base text-gray-200 font-title-2
      md:self-stretch lg:self-stretch xl:self-stretch"
      style={footerStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-between md:flex-row md:gap-[10px] md:items-start md:justify-center sm:flex-col sm:gap-[48px] sm:items-start sm:justify-center">
        <div
          className="self-stretch flex-1 flex flex-col items-start justify-center gap-[16px] text-left text-21xl text-dimgray-100 sm:flex-[unset] sm:self-stretch"
          style={companyDetailsSocialMediaStyle}
        >
          <div className="self-stretch flex flex-row items-start justify-start text-black font-belleza">
            <div
              className="flex-1 relative leading-[100%] [backdrop-filter:blur(4px)]"
              style={familiencampRgenStyle}
            >
              Familiencamp Rügen
            </div>
          </div>
          <div
            className="relative text-sm leading-[125%] inline-block w-80"
            style={rgenGrundstcksGbRStyle}
          >
            Rügen Grundstücks GbR
          </div>
          <div
            className="relative text-lg leading-[125%] inline-block w-80"
            style={familienurlaubAmStrandStyle}
          >
            Familienurlaub am Strand von Rügen
          </div>
        </div>
        <div
          className="self-stretch flex-1 flex flex-col items-center justify-center gap-[8px] sm:items-start sm:justify-center sm:flex-[unset] sm:self-stretch"
          style={seasonsStyle}
        >
          <div className="relative leading-[125%]" style={hauptsaison0106Style}>
            Hauptsaison: 01.06. - 31.08
          </div>
          <div
            className="relative leading-[125%]"
            style={nebensaison0103Style}
          >{`Nebensaison:   01.03. - 31.05. & 01.09. - 31.10.`}</div>
        </div>
        <div
          className="flex-1 flex flex-col items-end justify-center gap-[8px] sm:items-start sm:justify-center sm:flex-[unset] sm:self-stretch"
          style={linksStyle}
        >
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit]"
            href="/unterkuenfte"
            onClick={onUnterknfteClick}
            style={unterknfte1Style}
          >
            Unterkünfte
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit]"
            href="/buchung"
            onClick={onBuchungClick}
            style={buchung1Style}
          >
            Buchung
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit]"
            href="/lage"
            onClick={onLageClick}
            style={lage1Style}
          >
            Lage
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit]"
            href="/dsgvo"
            onClick={onDatenschutzClick}
            style={datenschutzStyle}
          >
            Datenschutzerklärung
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit]"
            href="/impressum"
            onClick={onImpressumClick}
            style={impressum1Style}
          >
            Impressum
          </Link>
        </div>
      </div>
      <div
        className="self-stretch h-4 flex flex-col items-center justify-between text-left text-smi text-dimgray-300"
        style={copyrightStyle}
      >
        <div
          className="relative leading-[125%]"
          style={rgenGrundstcksGbR1Style}
        >
          © Rügen Grundstücks GbR 2023. Alle Rechte vorbehalten.
        </div>
      </div>
    </div>
  );
};

export default Footer;
