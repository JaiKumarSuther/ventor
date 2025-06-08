import React from "react";

interface CustomToggleSwitchProps {
  id: string;
  checked: boolean;
  onChange: () => void;
}

const CustomToggleSwitch: React.FC<CustomToggleSwitchProps> = ({
  id,
  checked,
  onChange,
}) => {
  return (
    <div className="checkbox-wrapper-14">
      <input
        id={id}
        type="checkbox"
        className="switch"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} />

      <style jsx>{`
        @supports (-webkit-appearance: none) or (-moz-appearance: none) {
          .checkbox-wrapper-14 input[type=checkbox] {
            --active: #526FFF; /* On color */
            --active-inner: #fff;
            --focus: 2px rgba(82, 111, 255, 0.3);
            --border: #6A7A8C; /* Off color */
            --border-hover: #526FFF;
            --background: #fff;
            --disabled: #F6F8FF;
            --disabled-inner: #E1E6F9;
            -webkit-appearance: none;
            -moz-appearance: none;
            height: 21px;
            outline: none;
            display: inline-block;
            vertical-align: top;
            position: relative;
            margin: 0;
            cursor: pointer;
            border: 1px solid var(--bc, var(--border));
            background: var(--b, var(--background));
            transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
          }
          .checkbox-wrapper-14 input[type=checkbox]:after {
            content: "";
            display: block;
            left: 0;
            top: 0;
            position: absolute;
            transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s);
          }
          .checkbox-wrapper-14 input[type=checkbox]:checked {
            --b: var(--active);
            --bc: var(--active);
            --d-o: .3s;
            --d-t: .6s;
            --d-t-e: cubic-bezier(.2, .85, .32, 1.2);
          }
          .checkbox-wrapper-14 input[type=checkbox]:disabled {
            --b: var(--disabled);
            cursor: not-allowed;
            opacity: 0.9;
          }
          .checkbox-wrapper-14 input[type=checkbox]:disabled:checked {
            --b: var(--disabled-inner);
            --bc: var(--border);
          }
          .checkbox-wrapper-14 input[type=checkbox]:disabled + label {
            cursor: not-allowed;
          }
          .checkbox-wrapper-14 input[type=checkbox]:hover:not(:checked):not(:disabled) {
            --bc: var(--border-hover);
          }
          .checkbox-wrapper-14 input[type=checkbox]:focus {
            box-shadow: 0 0 0 var(--focus);
          }
          .checkbox-wrapper-14 input[type=checkbox].switch {
            width: 38px;
            border-radius: 11px;
          }
          .checkbox-wrapper-14 input[type=checkbox].switch:after {
            left: 2px;
            top: 2px;
            border-radius: 50%;
            width: 17px;
            height: 17px;
            background: var(--ab, var(--border));
            transform: translateX(var(--x, 0));
          }
          .checkbox-wrapper-14 input[type=checkbox].switch:checked {
            --ab: var(--active-inner);
            --x: 17px;
          }
          .checkbox-wrapper-14 input[type=checkbox].switch:disabled:not(:checked):after {
            opacity: 0.6;
          }
        }

        .checkbox-wrapper-14 * {
          box-sizing: inherit;
        }
        .checkbox-wrapper-14 *:before,
        .checkbox-wrapper-14 *:after {
          box-sizing: inherit;
        }
      `}</style>
    </div>
  );
};

export default CustomToggleSwitch;
