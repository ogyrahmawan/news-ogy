import React, { Component, useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const FormArticle  = ({setFormInput, formInput}) => {
  const [body, setBody] = useState('')
  useEffect(() => {
    setFormInput({...formInput, body: body})
  }, [body])
  return (
    <div>
      <CKEditor
        editor={ ClassicEditor }
        data={body}
        // onReady={ editor => {
        //     // You can store the "editor" and use when it is needed.
        //     console.log( 'Editor is ready to use!', editor );
        // } }
        onChange={ ( event, editor ) => {
            const data = editor.getData();
            setBody(data)
        } }
        // onBlur={ ( event, editor ) => {
        //     console.log( 'Blur.', editor ,);
        // } }
        // onFocus={ ( event, editor ) => {
        //     console.log( 'Focus.', editor );
        // } }
      />
    </div>
  );
}

export default FormArticle