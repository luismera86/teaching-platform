import { CssBaseline, createTheme } from '@mui/material'

import { ThemeProvider } from '@emotion/react'
import { themePalette } from '@/models/enum'

type ThemeProp = {
	children: JSX.Element
}

export const ThemeConfig = ({ children }: ThemeProp) => {
	const { BG, PRIMARY } = themePalette
	const theme = createTheme({
		palette: {
			mode: 'light',
			background: {
				default: BG, // Color de fondo por defecto toda la app
            },
            primary: {
                main: PRIMARY // Color principal que tiene el relleno de los botones por ejemplo
            }
        },
        components: { // Modificamos los estilos de los componentes de manera base para toda la app
            MuiButton: { // Componente de botón
                defaultProps: {
                    style: { // Se colocan los estilos personalizado
                        textTransform: 'none'
                    }
                }
            }
        }
	})
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}
