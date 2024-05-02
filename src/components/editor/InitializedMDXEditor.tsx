'use client';
// InitializedMDXEditor.tsx
import type { ForwardedRef } from 'react';
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  toolbarPlugin,
  type MDXEditorMethods,
  type MDXEditorProps,
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  ChangeAdmonitionType,
  tablePlugin,
  linkDialogPlugin,
  linkPlugin,
  InsertCodeBlock,
  ConditionalContents,
  diffSourcePlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
  InsertThematicBreak,
  sandpackPlugin,
  ShowSandpackInfo,
} from '@mdxeditor/editor';

// Only import this to the next file
export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return (
    <MDXEditor
      plugins={[
        // Example Plugin Usage
        headingsPlugin(),
        listsPlugin(),
        linkDialogPlugin(),
        linkPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        tablePlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: 'js' }),
        codeMirrorPlugin({
          codeBlockLanguages: {
            '': 'None',
            js: 'JavaScript',
            css: 'CSS',
            html: 'HTML',
            jsx: 'JavaScript React',
            tsx: 'TypeScript React',
            ts: 'TypeScript',
            bash: 'Bash',
            javascript: 'JavaScript',
            typescript: 'TypeScript',
            json: 'JSON',
            py: 'Python',
            java: 'Java',
            ruby: 'Ruby',
            go: 'Go',
            yaml: 'YAML',
            sh: 'Shell',
            sql: 'SQL',
            md: 'Markdown',
            xml: 'XML',
            php: 'PHP',
          },
        }),
        diffSourcePlugin({
          diffMarkdown: props.markdown,
          viewMode: 'rich-text',
        }),
        sandpackPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <BlockTypeSelect />
              <InsertCodeBlock />
              <InsertThematicBreak />
              {/* <ShowSandpackInfo /> */}
            </>
          ),
        }),
      ]}
      {...props}
      ref={editorRef}
    />
  );
}
