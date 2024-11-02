import React from 'react';
import {RichTextCustomLeaf} from "@payloadcms/richtext-slate";

export const HighlightedText: RichTextCustomLeaf = {
    name: 'highlight', // The name of the custom element
    Button: ({ isActive, editor }) => (
        <button
            type="button"
            className={`leaf-btn ${isActive ? 'active' : ''}`}
            onClick={() => {
                editor.addMark('highlight'); // Adds the highlight mark
            }}
        >
            Highlight
        </button>
    ),
    Leaf: ({ attributes, children, leaf }) => {
        if (leaf.highlight) {
            return (
                <span style={{ backgroundColor: 'gold' }} {...attributes}>
          {children}
        </span>
            );
        }
        return <span {...attributes}>{children}</span>;
    },
};