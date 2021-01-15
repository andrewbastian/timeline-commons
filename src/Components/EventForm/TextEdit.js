import React from 'react';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import MUIRichTextEditor from 'mui-rte';

const defaultTheme = createMuiTheme();

Object.assign(defaultTheme, {
    overrides: {
        MUIRichTextEditor: {
            root: {
                backgroundColor: '#ebebeb',
            },
            container: {
                display: 'flex',
                flexDirection: 'column-reverse',
            },
            editor: {
                backgroundColor: '#ebebeb',
                padding: '20px',
                height: '600px',
                maxHeight: '600px',
                overflow: 'auto',
            },
            toolbar: {
                borderTop: '1px solid gray',
                backgroundColor: '#ebebeb',
            },
            placeHolder: {
                backgroundColor: '#ebebeb',
                paddingLeft: 20,
                width: 'inherit',
                position: 'absolute',
                top: '20px',
            },
            anchorLink: {
                color: '#333333',
                textDecoration: 'underline',
            },
        },
    },
});

const TextEdit = () => {
    return (
        <>


                <MuiThemeProvider theme={defaultTheme}>
                    <MUIRichTextEditor label='Write a summary of the event here. You must provide at least one source.' />
                </MuiThemeProvider>

        </>
    );
};

export default TextEdit;
