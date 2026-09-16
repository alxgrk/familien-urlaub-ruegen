import type { NextPage } from "next";
import { TextField } from "@mui/material";

type PeopleSelectorProps = {
  numErwachsene: number;
  numKinder: number;
  onErwachseneChange: (value: number) => void;
  onKinderChange: (value: number) => void;
};

type StepperFieldProps = {
  value: number;
  label: string;
  onChange: (value: number) => void;
};

const stepperButtonClassName =
  "w-[1.5rem] h-[1.5rem] shrink-0 rounded-full box-border border-[1px] border-solid border-rectangle-805 bg-light-text-color text-rectangle-805 flex items-center justify-center cursor-pointer select-none";

const MinusIcon = () => (
  <svg width="1rem" height="1rem" viewBox="0 0 24 24" fill="none">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const PlusIcon = () => (
  <svg width="1rem" height="1rem" viewBox="0 0 24 24" fill="none">
    <path d="M12 5V19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M5 12H19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const StepperField: NextPage<StepperFieldProps> = ({value, label, onChange}) => {
  return (
    <div className="flex flex-row items-center justify-center gap-[0.25rem] min-w-[5rem]">
      <button
        type="button"
        className={stepperButtonClassName}
        aria-label={`${label} verringern`}
        onClick={() => onChange(Math.max(0, value - 1))}
      >
        <MinusIcon />
      </button>
      <TextField
          className="w-[0.7rem] relative leading-[125%]"
          style={{ textAlign: 'end' }}
          value={value}
          variant="standard"
          onChange={(v: any) => {
            const next = Number(v.target.value);
            if (Number.isNaN(next) || next < 0) return;
            onChange(next);
          }}
      />
      <button
        type="button"
        className={stepperButtonClassName}
        aria-label={`${label} erhöhen`}
        onClick={() => onChange(value + 1)}
      >
        <PlusIcon />
      </button>
      <div className="relative leading-[125%]">{label}</div>
    </div>
  );
};

const PeopleSelector: NextPage<PeopleSelectorProps> = ({numErwachsene, numKinder, onErwachseneChange, onKinderChange}) => {
  return (
    <div className="min-w-[17rem] flex flex-row items-center justify-center gap-[0.5rem] text-[1rem] text-dimgray-200">
      <StepperField value={numErwachsene} label="Erw." onChange={onErwachseneChange}/>
      <div className="relative leading-[125%]">-</div>
      <StepperField value={numKinder} label="Kinder" onChange={onKinderChange}/>
    </div>
  );
};

export default PeopleSelector;