const color = {
  primary: {
    "10": "#17082E",
    "20": "#200945",
    "30": "#7128E8",
    "40": "#D1B5FF",
  },
  grey: {
    "10": "#000000",
    "20": "#0F0F13",
    "30": "#23232D",
    "40": "#525264",
    "50": "#76768D",
    "60": "#9494A8",
    "70": "#B2B2BD",
    "80": "#CCCCD3",
    "90": "#E4E4E9",
    "100": "#F0F0F9",
  },
  colorScale: {
    red: "#D11818",
  },
} as const;

const typo = {} as const;

export const theme = {
  color,
  typo,
} as const;
