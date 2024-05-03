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
  InsertSandpack,
  MultipleChoiceToggleGroup,
  InsertTable,
  SandpackConfig,
} from '@mdxeditor/editor';

const defaultSnippetContent = `
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
`.trim();

const simpleSandpackConfig: SandpackConfig = {
  defaultPreset: 'react',
  presets: [
    {
      label: 'React',
      name: 'react',
      meta: 'live react',
      sandpackTemplate: 'react',
      sandpackTheme: 'light',
      snippetFileName: '/App.js',
      snippetLanguage: 'jsx',
      initialSnippetContent: defaultSnippetContent,
    },
  ],
};

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
        sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <BlockTypeSelect />
              <InsertCodeBlock />
              <InsertThematicBreak />
              <InsertTable />
              {/* <UndoRedo /> */}
              {/* <InsertSandpack /> */}
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
