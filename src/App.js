import React from 'react';
import './App.css';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

function App() {
	const [editorState, setEditorState] = React.useState(() =>
		EditorState.createEmpty(),
	);
	return (
		<div className='App'>
			{/* <CKEditor
				editor={ClassicEditor}
				data='<p>Hello from CKEditor 5!</p>'
				// config={{
				// 	plugins: [CodeBlock],
				// 	toolbar: [CodeBlock],
				// }}
				onInit={(editor) => {
					// You can store the "editor" and use when it is needed.
					console.log('Editor is ready to use!', editor);
				}}
				onChange={(event, editor) => {
					const data = editor.getData();
					console.log({ event, editor, data });
				}}
				onBlur={(event, editor) => {
					console.log('Blur.', editor);
				}}
				onFocus={(event, editor) => {
					console.log('Focus.', editor);
				}}
			/> */}
			<Editor editorState={editorState} onChange={setEditorState} />;
		</div>
	);
}

export default App;
