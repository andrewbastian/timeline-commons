import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import gfm from 'remark-gfm';

export default function SyntaxMarkdown() {
    // const renderers = {
    //     code: ({ language, value }) => {
    //         return <SyntaxHighlighter style={coy} language={language} children={value} />;
    //     },
    // };
    const markdown = `

***

Begin a new block of text.

		--- 
		(Alt-N)

***

Begin a block of text with a heading. Use this to divide large entries.

		--- heading ---
		(Alt-H)
***

Begin a bulleted list item

		--- \* ---
		(Alt-L)

***

Breaks out of a bulleted list
		
		--- NS ---

***

Mark the end of the body of the timeline entry. The only code that should follow this are references to participating entities.

		======


***

Create a reference ID# that links to an existing source. DO NOT delete or edit any citations that contain an ID#, UNLESS you want to delete the citation completely.

		{{642723850-3724}}

***

Creates a citation for a NEW source. DO NOT EDIT CITATIONS THAT HAVE AN ID#, e.g., {{642723850-3724}}. Citations should be listed at the bottom of each block of text.

		[[ Washington Post | 5/24/2005 ]]

		(Alt-C)

***

Create a citation (with a reference to the cited page) for a NEW source. DO NOT EDIT CITATIONS THAT HAVE AN ID#, e.g., {{642723850-3724}}. Citations should be listed at the bottom of each block of text.

		[[ Washington Post | 5/24/2005 | 55, 66-67 ]]

		(Alt-P)

***

Create a link to another event in the database. Use these whenever you refer to other events in the database.

		(see [[ hurricane_katrina_2999 ]])

		(Alt-E)

***

Establishe a "participant" relationship between the entity and the event. The easiest method to do this is to use the “Add Entities” tab. When attaching entities to events, a +, -, or @ should precede the entity name, to specify whether the entity was is an "active participant," a "passive participant," or an observer, respectively. Participating entities are ALWAYS listed AFTER the end of the body of the entry , i.e., after the "======"

		((+ Joe Bloggs))

***

This links an entity to a block of text as a source. Use this when you want to use a person as the source for a block of text. References to entities that are sources are always included at the end of text blocks, NOT after the end of the entry.

		(( Joe Bloggs ))

***

The intelligence is irrelevant--the decision has been made.

		-- = —

***

Italicizes the text, “Schmeiser v. Monsanto”

		''Schmeiser v. Monsanto''


`;
    return (
        <React.Fragment>
            <ReactMarkdown plugins={[gfm]} children={markdown} />
        </React.Fragment>
    );
}
