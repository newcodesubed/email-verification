import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";

export const EmailVerificationPage = () => {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputRef = useRef([]);
    const navigate = useNavigateate();
    const isLoading = false; 
    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            if (value && index < code.length - 1) {
                inputRef.current[index + 1].focus();
            }
        }
    };
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRef.current[index - 1].focus();
        }
    };
  return (
    <div>EmailVerificationPage</div>
  )
}
