import { useState } from "react";
import { Encoder } from "@/core/encoder";
import { Decoder } from "@/core/decoder";

export default function HomePage() {
  const [inputValue, setInputValue] = useState<string>("");
  const [outputValue, setOutputValue] = useState<string>("");
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const value = Encoder.encode(inputValue);
          setOutputValue(value);
        }}
      >
        加密
      </button>
      <button
        onClick={() => {
          const value = Decoder.decode(inputValue);
          setOutputValue(value);
        }}
      >
        解密
      </button>
      <div>{outputValue}</div>
    </div>
  );
}
