import React, { useState, useEffect, useRef } from 'react';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import MUIRichTextEditor from 'mui-rte';

import { EditorState, Editor, convertFromHTML, ContentState, convertToRaw } from 'draft-js';

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
    // const [summary, setSummary] = useState(() => EditorState.createEmpty());
    const [summary, setSummary] = useState('');
    // // 1. Convert the HTML
    // const contentHTML = convertFromHTML(summary);

    // // 2. Create the ContentState object
    // const state = ContentState.createFromBlockArray(contentHTML.contentBlocks, contentHTML.entityMap);

    // // 3. Stringify `state` object from a Draft.Model.Encoding.RawDraftContentState object
    // const content = JSON.stringify(convertToRaw(state));

    // // const handleChange = (event) => {
    // //     // event.preventDefault();
    // //     setSummary(event.target.defaultValue || '');
    // // };
    useEffect(() => {
        console.log('Text', summary);
    });
    // const ref = useRef(null);

    // const handleSave = (data: string) => {
    //     setSummary(data);
    //     console.log('UPDATED SUMMARY', content);
    // };

    // const change = (state: EditorState) => {
    //     // More info about EditorState object at
    //     // https://draftjs.org/docs/api-reference-editor-state
    //     //
    //     // Get current selection
    //     // console.log('SELECTION', state.getSelection());
    //     // // Get current content
    //     console.log('CONTENT', JSON.stringify(convertToRaw(state.getCurrentContent())));
    //     // // Get current text

    //     console.log('TEXT', state.getCurrentContent().getPlainText());

    //     setSummary(state.getCurrentContent().getPlainText());
    //     // Check if editor is empty
    //     if (!state.getCurrentContent().hasText()) {
    //         console.log('empty');
    //     }
    // };

    const blur = () => {
        console.log('Blur, focus lost on MUIRichTextEditor');
    };

    return (
        <>
            <MuiThemeProvider theme={defaultTheme}>
                <MUIRichTextEditor
                    defaultValue={summary}
                    // value={summary}
                    // onChange={setSummary}
                    // ref={ref}
                    label='Write a summary of the event here. You must provide at least one source.'
                />
            </MuiThemeProvider>
        </>
    );
};

export default TextEdit;
