import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProp = {
    children: JSX.Element;
}

export enum themePalette {
    BG = "#ffffff",
    LIME = "#C8FA5F",
    FONT_GLOBAL = "'JetBrains Mono', monospace",
    ERROR_MAIN = "#f44336",
    BG_ERROR_MAIN = "rgba(244,67,57,0.1)",
    SUCCESS_MAIN = "#66bb6a",
<<<<<<< HEAD
    BG_SUCCESS_MAIN = "rgba(102,187,106,0.1)",
    BG_APPBAR_MAIN = "#000000"
=======
    BG_SUCCESS_MAIN = "rgba(102,187,106,0.1)"
>>>>>>> 3994dd20317eb4e5a2328fba3659ce2813b6b149
}
const theme = createTheme(
    {
        palette: {
            mode: "dark",
            background:{
                default:themePalette.BG
            },
            primary:{
                main: themePalette.LIME
            }
        },
        typography:{
           fontFamily: themePalette.FONT_GLOBAL
        },
        components:{
            MuiButton:{
                defaultProps:{
                    style:{
                        textTransform: "none",
                        boxShadow: "none",
                        borderRadius: "0.5em",
                        border: "1px solid white",
                        color: "white"
                    }
                }
            },
            MuiAlert:{
                defaultProps:{
                    style:{
                        borderRadius: "0.8em",
                        fontSize: "1em"
                    }
                },
                styleOverrides:{
                    standardError:{
                        border: `1px solid ${themePalette.ERROR_MAIN}`,
                        background: themePalette.BG_ERROR_MAIN
                    },
                    standardSuccess:{
                        border: `1px solid ${themePalette.SUCCESS_MAIN}`,
                        background: themePalette.BG_SUCCESS_MAIN
                    }
                }
            },
            MuiAppBar:{
                defaultProps:{
                    style:{
                        boxShadow: "none"
                    }
                },
                styleOverrides:{
                    colorPrimary:{
                        backgroundColor: themePalette.BG_APPBAR_MAIN,
                        backgroundImage: "none"
                    }
                }
            },
            MuiAlert:{
                defaultProps:{
                    style:{
                        borderRadius: "0.8em",
                        fontSize: "1em"
                    }
                },
                styleOverrides:{
                    standardError:{
                        border: `1px solid ${themePalette.ERROR_MAIN}`,
                        background: themePalette.BG_ERROR_MAIN
                    },
                    standardSuccess:{
                        border: `1px solid ${themePalette.SUCCESS_MAIN}`,
                        background: themePalette.BG_SUCCESS_MAIN
                    }
                }
            }
        }
    }
)

export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
    return (
        <ThemeProvider theme={theme}><CssBaseline /> {children}</ThemeProvider>
    )
};