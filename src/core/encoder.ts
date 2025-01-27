import {
  EncodingChar,
  JOIN_CHAR,
  MultiradixChar,
  MultiradixString,
} from "./interface";

const START_CHAR = "阿";

class EncoderImpl {
  public encode(text: string): string {
    const encodingCharArr: string[] = [];
    for (const char of text) {
      const charCode = char.charCodeAt(0);
      const charBinary = this._decimalToMultiradix(charCode);
      const encodingText = charBinary
        .split("")
        .map((t) => this._multiradixToEncodingChar(t as MultiradixChar))
        .join("");
      encodingCharArr.push(START_CHAR + encodingText);
    }

    return encodingCharArr.join(JOIN_CHAR);
  }

  private _decimalToMultiradix(
    decimalNumber: number,
    radix = 4
  ): MultiradixString {
    return decimalNumber.toString(radix);
  }

  private _multiradixToEncodingChar(
    multiradixChar: MultiradixChar
  ): EncodingChar {
    switch (multiradixChar) {
      case "0":
        return "阿";
      case "1":
        return "巴";
      case "2":
        return "嘎";
      case "3":
        return "哈";
      default:
        return "哈";
    }
  }
}

export const Encoder = new EncoderImpl();
