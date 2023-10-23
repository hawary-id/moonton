import PropType from "prop-types";

PrimaryButton.propType = {
    type: PropType.oneOf(['button', 'submit', 'reset']),
    className: PropType.string,
    varian: PropType.oneOf(['primary', 'warning', 'danger','light-outline','white-outline']),
    disabled: PropType.bool,
    children: PropType.node
};

export default function PrimaryButton({
    className = '',
    variant = 'primary',
    disabled,
    children,
    ...props }) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl py-[13px] text-center w-full
                ${disabled && 'opacity-25'} btn-${variant}` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
