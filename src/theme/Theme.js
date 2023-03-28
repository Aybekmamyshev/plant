import {createTheme} from "@material-ui/core";

export const  tokens = (mode:string) => ({
     ...(mode === 'dark' ? {
          accent : {
               DEFAUALT: '#000000',
               50: '#5C5C5C',
               100: '#525252',
               200: '#3D3D3D',
               300: '#292929',
               400: '#141414',
               500: '#000000',
               600: '#000000',
               700: '#000000',
               800: '#000000',
               900: '#000000'
          }
     } : {
          light: {
               DEFAULT: '#FFFFFF',
               50: '#FFFFFF',
               600: '#E3E3E3',
               700: '#C7C7C7',
               800: '#ABABAB',
               900: '#8F8F8F'
          }
     })
})

export  const ThemeSittings = (mode:string) => {
     const colors = tokens(mode)
     return {
          palette: {
               mode:mode,
               ...(mode === 'dark' ? {
                    black:{
                         main :colors.accent.DEFAUALT
                    },
                    darkSecond:{
                         main: colors.accent["200"]
                    }
               } : {
                    white: {
                         main:colors.light.DEFAUALT
                    },
                    lightSecond : {
                         main:colors.light["800"]
                    }
               })
          }
     }
}