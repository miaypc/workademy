import { createMuiTheme } from '@material-ui/core/styles';


export const theme = createMuiTheme({
    palette: {
        primary: { main: "#253858" },
        secondary: { main: "#FCB536" },
        action: {
            disabledBackground: "#7D8799",
            disabled: "#7D8799"

        },
        text: {
            secondary: "#7D8799",
            disabled: "#7D8799"
        },
    },
    status: {
        danger: 'orange',
    }
});
