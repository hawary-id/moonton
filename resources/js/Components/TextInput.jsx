import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({
    type = 'text',
    className = '',
    isFocused = false,
    defaultValue,
    variant = 'primary',
    isError,
    ...props
}, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                `rounded-2xl bg-form-bg py-[13px] px-7 w-full
                ${isError && 'input-error'} input-${variant} ${className}`
            }
            ref={input}
        />
    );
});

