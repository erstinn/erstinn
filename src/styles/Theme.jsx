export const colorTokens = {
    primary: {
        green: '#D6E9CE',
        lightBlue: '#C3D9D3',
        blue: '#8EBCB1', //text for dark
        darkBlue: '#9FB5B2',
        lightYellow: "#F7E2BC", //light theme
        yellow: '#EBE098', //card header text color //darktheme
        darkYellow: '#BF9159', //normal text color in dark theme
        orange: '#FBCBAC',
        lightPink: '#F4D9D8',
        pink: "#F7BDA3",
        darkPink: "#BE9396",
        // purple: '#C6B7E4', //bg luightmdoe
        darkPurple : "#A594AA", //header txt color
    },
    neutral: {
        cream: '#FBF2E7', //header, lightmode?
        darkCream: '#F0E9D6', //header, lightmode? :darkmode
        black: "#4F4541",
        // lightBg: "#D8D3CF",
        altText: '#655C6B',
        darkPurple : "#8E685B", //header txt color
        lightBg: "#C6B7E4",
        // darkBg: "#3d435b",
        darkBg: "#2E333E",
        darkBgAlt: "#262B33",
    },
};

// mui theme settings
export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "light"
                ? {
                    // palette values for light mode
                    primary: {
                        dark: colorTokens.primary['darkPurple'],
                        main: colorTokens.primary['purple'],
                        light: colorTokens.primary['yellow'],
                    },
                    neutral: {
                        dark: colorTokens.neutral['darkCream'],
                        light: colorTokens.neutral['cream'],
                        // main: colorTokens.grey[200],
                        // mediumMain: colorTokens.grey[300],
                        // medium: colorTokens.grey[400],
                        // light: colorTokens.grey[700],
                    },
                    background: {
                        default: colorTokens.neutral['lightBg'],
                        alt: colorTokens.grey[800],
                    },
                }
                : {
                    // palette values for dark mode
                    primary: {
                        dark: colorTokens.primary['darkBlue'],
                        main: colorTokens.primary['darkPink'],
                        light: colorTokens.primary['yellow'],
                    },
                    neutral: {
                        // dark: colorTokens.grey[700],
                        // main: colorTokens.grey[500],
                        // mediumMain: colorTokens.grey[400],
                        // medium: colorTokens.grey[300],
                        // light: colorTokens.grey[50],
                    },
                    background: {
                        default: colorTokens.neutral['darkBg'],
                        alt: colorTokens.neutral['darkBgAlt'],
                    },
                }),
        },
        typography: {
            fontFamily: ["BIZ UDMincho", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["BIZ UDMincho", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["BIZ UDMincho", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["BIZ UDMincho", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["BIZ UDMincho", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["BIZ UDMincho", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["BIZ UDMincho", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};
