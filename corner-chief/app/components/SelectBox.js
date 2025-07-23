"use client";

import { useState, useRef, useEffect } from "react";

export default function SelectBox({ label, options = [], onChange, value }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleOpen = () => setIsOpen((prev) => !prev);

    const selected = options.find((o) => o.value === value);

    const handleSelect = (value) => {
        setIsOpen(false);
        if (onChange) onChange(value);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="custom-select" ref={dropdownRef}>
            <div
                className={`select-trigger ${isOpen ? "active" : ""}`}
                onClick={toggleOpen}
            >
                <span className="selected-text">
                    {selected ? selected.text : label}
                </span>
                <div className="icon-wrap select-arrow">
                    <svg
                        className={`${isOpen ? "rotated" : ""}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                    >
                        <path
                            d="M11 1.33398L6.01071 6.33395L1.00009 1.33398"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>

            {isOpen && (
                <div className="select-dropdown show">
                    <div
                        className={`select-option placeholder ${
                            value === "" ? "selected" : ""
                        }`}
                        onClick={() => handleSelect("")}
                    >
                        {label}
                    </div>

                    {options.map((opt) => (
                        <div
                            className={`select-option ${
                                value === opt.value ? "selected" : ""
                            }`}
                            key={opt.value}
                            onClick={() => handleSelect(opt.value)}
                        >
                            {opt.text}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
