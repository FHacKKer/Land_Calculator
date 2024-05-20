const unitConversions = {
  sarsai: 30.25, // 1 sarsai = 30.25 sq. ft.
  marla: 272.25, // 1 marla = 272.25 sq. ft.
  kanal: 5445, // 1 kanal = 5445 sq. ft.
  acre: 43560, // 1 acre = 43560 sq. ft.
};
export const calculateArea = (unit, length, width) => {
  let areaInSquareFeet = 0;
  if (unit === "feet") {
    areaInSquareFeet = length * width;
  } else {
    areaInSquareFeet = length * width * unitConversions[unit];
  }
  console.log(`The Area In Square Feet is : ${areaInSquareFeet}`);
  const results = {
    totalSquareFeet:areaInSquareFeet,
    acres: Math.floor(areaInSquareFeet / unitConversions.acre),
    kanals: Math.floor(
      (areaInSquareFeet % unitConversions.acre) / unitConversions.kanal
    ),
    marlas: Math.floor(
      (areaInSquareFeet % unitConversions.kanal) / unitConversions.marla
    ),
    sarsai: Math.floor(
      (areaInSquareFeet % unitConversions.marla) / unitConversions.sarsai
    ),
    feet: areaInSquareFeet % unitConversions.sarsai,
  };
  return results;
};

export const toggleLanguage = (language, setLanguage) => {
  setLanguage((prevLanguage) => (prevLanguage === "en" ? "ur" : "en"));
};

export const text = {
  en: {
    title: "Land Calculator",
    unitLabel: "Unit of Measure:",
    lengthLabel: "Length:",
    widthLabel: "Width:",
    calculateButton: "Calculate",
    results: {
      acres: "Area in Acres",
      kanals: "Area in Kanals",
      marlas: "Area in Marlas",
      sarsai: "Area in Sarsai/Karam",
      feet: "Area in Feet",
    },
  },
  ur: {
    totalSquareFeet:"کل مربع فٹ",
    title: "زمین کیلکولیٹر",
    unitLabel: "پیمائش کی اکائی:",
    lengthLabel: "لمبائی:",
    widthLabel: "چوڑائی:",
    calculateButton: "نتیجہ نکالیں",
    results: {
      acres: "ایکڑ میں رقبہ",
      kanals: "کنال میں رقبہ",
      marlas: "مرلہ میں رقبہ",
      sarsai: "سرسائی/کرم میں رقبہ",
      feet: "فٹ میں رقبہ",
    },
  },
};
