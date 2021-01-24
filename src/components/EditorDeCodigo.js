import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
  console.log("change", newValue);
}

const EditorDeCodigo = () => {
  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      width="100%"
      height="90vh"
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
      }}
    />
  );
};

export default EditorDeCodigo;
