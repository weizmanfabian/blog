import React from 'react';
import ImageSelect from '../components/ImageSelect';

const UploadImage = ({ user }) => {

  return (
    <div className='container'>
      <div className="row text-center align-items-center justify-content-center">
        <ImageSelect />
      </div>
    </div>
  );
}

export default UploadImage;