import type { NextPage } from "next";
import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer: NextPage = () => {
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

  return (
    <div className="relative w-[1520px] flex flex-col p-12 box-border items-center justify-start gap-[8px] text-center text-base text-gray-200 font-title-2">
      <div className="self-stretch flex flex-row items-start justify-between md:flex-row md:gap-[10px] md:items-start md:justify-center sm:flex-col sm:gap-[48px] sm:items-start sm:justify-center">
        <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[16px] text-left text-21xl text-dimgray-100 sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch flex flex-row items-start justify-start text-black font-belleza">
            <div className="flex-1 relative leading-[100%] [backdrop-filter:blur(4px)]">
              Familiencamp Rügen
            </div>
          </div>
          <div className="relative text-sm leading-[125%] inline-block w-80">
            Rügen Grundstücks GbR
          </div>
          <div className="relative text-lg leading-[125%] inline-block w-80">
            Familienurlaub am Strand von Rügen
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-center justify-center gap-[8px] sm:items-start sm:justify-center sm:flex-[unset] sm:self-stretch">
          <div className="relative leading-[125%]">
            Hauptsaison: 01.06. - 31.08
          </div>
          <div className="relative leading-[125%]">{`Nebensaison:   01.03. - 31.05. & 01.09. - 31.10.`}</div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-center gap-[8px] sm:items-start sm:justify-center sm:flex-[unset] sm:self-stretch">
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
      <div className="self-stretch h-4 flex flex-col items-center justify-between text-left text-smi text-dimgray-300">
        <div className="relative leading-[125%]">
          © Rügen Grundstücks GbR 2023. Alle Rechte vorbehalten.
        </div>
      </div>
    </div>
  );
};

export default Footer;
