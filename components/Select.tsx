"use client";

import { useState } from "react";

import { BsChevronDown as ChevronIcon } from "react-icons/bs";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  value: Option;
  onChange: (value: Option) => void;
}

const Select = ({ options, value, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue: Option) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* SELECT */}
      <div className="select_input" onClick={handleToggle}>
        <div className="flex items-center justify-between">
          <span className="mr-2">{value.label}</span>
          <ChevronIcon
            className={`h-4 w-4 transition-transform delay-100 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {/* OPTIONS */}
      {isOpen && (
        <div className="select_dropdown">
          {options.map((option) => (
            <div
              key={option.value}
              className="select_option"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;

{
  /* <div className="flex items-center">
          <span className="mr-2">{value.label}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path
              fillRule="evenodd"
              d="M6.293 8.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div> */
}
