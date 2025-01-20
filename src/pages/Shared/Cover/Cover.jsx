
import { Banner } from "flowbite-react";
import { RxDividerHorizontal, RxDotFilled } from "react-icons/rx";
const Cover = ({subHeading, heading}) => {


  return (
    
    <Banner>
      <div className='flex justify-center -mt-96'>
        <div className="absolute">
          <div className='flex justify-center items-center'>
              <div className="flex items-center">
                  <RxDividerHorizontal className="font-bold text-5xl text-pcolor" />
                  <RxDotFilled className="text-pcolor -ml-2" />
              </div>
                  <p className="text-white text-xl text-center">{subHeading}</p>
              <div className="flex items-center">
                  <RxDotFilled className="text-pcolor -mr-2" />
                  <RxDividerHorizontal className="font-bold text-5xl text-pcolor" />
              </div>
          </div>
          <h3 className='pb-10 text-white font-bold text-3xl uppercase text-center'>{heading}</h3>
        </div>
      </div>
    </Banner>

  );
}

export default Cover;