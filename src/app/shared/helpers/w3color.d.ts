interface RGB {
    r: number;
    g: number;
    b: number;
    a: number;
}

interface HSL {
    h: number;
    s: number;
    l: number;
    a: number;
}

interface HWB {
    h: number;
    w: number;
    b: number;
    a: number;
}

interface CMYK {
    c: number;
    m: number;
    y: number;
    k: number;
    a: number;
}

interface NCOL {
    ncol: number;
    w: number;
    b: number;
    a: number;
}

interface IColor {
    red: number;
    green: number;
    blue: number;
    hue: number;
    sat: number;
    lightness: number;
    whiteness: number;
    blackness: number;
    cyan: number;
    magenta: number;
    yellow: number;
    black: number;
    ncol: number;
    opacity: number;
    valid: number;
}

interface w3color extends IColor {
    (color: string): w3color;
    toRgbString(): string;
    toRgbaString(): string;
    toHwbString(): string;
    toHwbStringDecimal(): string;
    toHwbaString(): string;
    toHslString(): string;
    toHslStringDecimal(): string;
    toHslaString(): string;
    toCmykString(): string;
    toCmykStringDecimal(): string;
    toNcolString(): string;
    toNcolStringDecimal(): string;
    toNcolaString(): string;
    toName(): string;
    toHexString(): string;
    toRgb(): RGB;
    toHsl(): HSL;
    toHwb(): HWB;
    toCmyk(): CMYK;
    toNcol(): NCOL;
    isDark(base?: number): boolean;
    lighter(percent: number): void;
    darker(percent: number): void;
    attachValues(color: IColor);
}

declare module "w3color" {
    export = w3color;
}

declare var w3color: w3color;