import { Oval } from 'react-loader-spinner';

import '../Loader/Loader.css';

export const Loader = () => {
  return (
    <div className='overlay'>
      <Oval
        className='loader'
        height={80}
        width={80}
        color='#3f51b5'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor='#3f51b5'
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};