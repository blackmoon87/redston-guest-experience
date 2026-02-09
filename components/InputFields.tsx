
import React from 'react';

interface RadioGroupProps {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ label, options, value, onChange, required }) => (
  <div className="space-y-4">
    <label className="block text-lg font-medium text-[#1C1C1C]">{label}{required && <span className="text-[#9E1B1F] mx-1">*</span>}</label>
    <div className="space-y-2">
      {options.map((opt) => (
        <label key={opt} className="flex items-center space-x-3 cursor-pointer group">
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${
            value === opt ? 'border-[#9E1B1F]' : 'border-gray-300 group-hover:border-[#9E1B1F]'
          }`}>
            {value === opt && <div className="w-2.5 h-2.5 rounded-full bg-[#9E1B1F]" />}
          </div>
          <input
            type="radio"
            className="hidden"
            name={label}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
          />
          <span className="text-[#1C1C1C] font-normal leading-tight">{opt}</span>
        </label>
      ))}
    </div>
  </div>
);

interface ScaleInputProps {
  label: string;
  minLabel: string;
  maxLabel: string;
  range: number;
  value: number;
  onChange: (val: number) => void;
  startAtZero?: boolean;
}

export const ScaleInput: React.FC<ScaleInputProps> = ({ label, minLabel, maxLabel, range, value, onChange, startAtZero = false }) => {
  const points = Array.from({ length: range + (startAtZero ? 1 : 0) }, (_, i) => i + (startAtZero ? 0 : 1));
  return (
    <div className="space-y-4">
      <label className="block text-lg font-medium text-[#1C1C1C]">{label}</label>
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-end pb-2 overflow-x-auto no-scrollbar gap-2">
          {points.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => onChange(p)}
              className={`min-w-[40px] h-10 rounded-full border-2 flex items-center justify-center font-medium transition-all ${
                value === p ? 'bg-[#9E1B1F] border-[#9E1B1F] text-white' : 'border-gray-300 text-gray-500 hover:border-[#9E1B1F] hover:text-[#9E1B1F]'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <div className="flex justify-between text-xs text-[#6E6A65] uppercase tracking-wider font-semibold px-1">
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>
      </div>
    </div>
  );
};

interface CheckboxGroupProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (val: string[]) => void;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ label, options, selected, onChange }) => {
  const toggle = (opt: string) => {
    if (selected.includes(opt)) {
      onChange(selected.filter(item => item !== opt));
    } else {
      onChange([...selected, opt]);
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-lg font-medium text-[#1C1C1C]">{label}</label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {options.map((opt) => (
          <label key={opt} className="flex items-center space-x-3 cursor-pointer group">
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all flex-shrink-0 ${
              selected.includes(opt) ? 'bg-[#9E1B1F] border-[#9E1B1F]' : 'border-gray-300 group-hover:border-[#9E1B1F]'
            }`}>
              {selected.includes(opt) && (
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <input
              type="checkbox"
              className="hidden"
              checked={selected.includes(opt)}
              onChange={() => toggle(opt)}
            />
            <span className="text-[#1C1C1C] leading-tight">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
