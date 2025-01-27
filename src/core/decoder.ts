import {
  EncodingChar,
  MultiradixChar,
  MultiradixString,
  START_CHAR,
} from "./interface";

const JOIN_CHAR = ",";

class DecoderImpl {
  public decode(text: string): string {
    const fixedText = text.replace(
      new RegExp(`[^阿巴嘎哈${JOIN_CHAR}]`, "g"),
      ""
    );
    const encodingArr = fixedText.split(JOIN_CHAR);

    const charArr: string[] = [];
    for (const encodingText of encodingArr) {
      const binaryText = encodingText
        .split("")
        .slice(START_CHAR.length)
        .map((t) => this._encodingCharToMultiradix(t as EncodingChar))
        .join("");
      const charCode = this._multiradixToDecimal(binaryText);
      const char = String.fromCharCode(charCode);
      charArr.push(char);
    }

    return charArr.join("");
  }

  private _multiradixToDecimal(
    multiradixNumber: MultiradixString,
    radix = 4
  ): number {
    return parseInt(multiradixNumber, radix);
  }

  private _encodingCharToMultiradix(
    encodingChar: EncodingChar
  ): MultiradixChar {
    switch (encodingChar) {
      case "阿":
        return "0";
      case "巴":
        return "1";
      case "嘎":
        return "2";
      case "哈":
        return "3";
      default:
        return "3";
    }
  }
}

export const Decoder = new DecoderImpl();
