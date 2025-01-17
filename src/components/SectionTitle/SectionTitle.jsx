import { RxDividerHorizontal, RxDotFilled} from "react-icons/rx";

const SectionTitle = ({subHeading, heading}) => {
    return (
            <div className='md:w-5/12 mx-auto pt-10'>
                <div className='flex justify-center items-center'>
                    <div className="flex items-center">
                        <RxDividerHorizontal className="font-bold text-5xl text-pcolor" />
                        <RxDotFilled className="text-pcolor -ml-2" />
                    </div>
                        <p className="text-black text-xl text-center">{subHeading}</p>
                    <div className="flex items-center">
                        <RxDotFilled className="text-pcolor -mr-2" />
                        <RxDividerHorizontal className="font-bold text-5xl text-pcolor" />
                    </div>
                </div>
                <h3 className='pb-10 text-3xl uppercase text-center'>{heading}</h3>
            </div>
    );
};

export default SectionTitle;