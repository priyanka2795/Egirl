import { useState } from "react";
import TokenPrimary from "./svg/tokenprimary.svg";
import TokenSmall from "./svg/token2.svg";
import CloseIcon from "./svg/xmark.svg";
import BackIcon from "./svg/arrow-left.svg";
import { Modal } from "@components/modal/modal";
interface subscription {
    modalState?: any;

  }
const TokenUser = ({modalState}:subscription) => {
    const [tokenPrice, setTokenPrice] = useState('$9.99');
    // const [closeState, setCloseState] = useState(true);
    return (
        <>

            <Modal
                open={true}
                modalClassName={`w-full h-full rounded-2xl max-w-[400px] max-h-[506px] relative bg-[#1A1A1A] rounded-[20px]`}
                closeModal={() => modalState(false)}
                modalOverlayStyle='!bg-black/80'
            >
                {/* <div className='bg-[#1A1A1A] w-full h-full max-w-[400px] max-h-[506px] rounded-[20px]'> */}
                    <div className="flex justify-between items-center p-5 border-[#ffffff27] border-b ">
                        <div className="flex items-center gap-2">
                            <BackIcon />
                            <p className="text-white">Token uses</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                                <div className=""><TokenSmall /></div>
                                <p>50</p>
                            </div>
                            <button onClick={() => modalState(false)}>
                            <CloseIcon />
                            </button>
                        </div>
                    </div>

                    <div className="p-6 flex flex-col gap-5">
                        <div className="flex flex-col gap-2 border-b-2 border-[#363636] pb-4">
                            <div className="flex items-center gap-3">
                                <h5 className="text-[22px] font-bold">Messages</h5>
                                <div className='bg-[#5848BC52] flex items-center gap-2 rounded-lg px-2 py-1 '><TokenPrimary /> 1</div>
                            </div>
                            <p className="text-[14px] text-[#979797]">Enjoy 5% earnings based on user spending, no referrals required</p>
                        </div>

                        <div className="flex flex-col gap-2 border-b-2 border-[#363636] pb-4">
                            <div className="flex items-center gap-3">
                                <h5 className="text-[22px] font-bold">Gifts</h5>
                                <div className='bg-[#5848BC52] flex items-center gap-2 rounded-lg px-2 py-1 '><TokenPrimary /> 10</div>
                            </div>
                            <p className="text-[14px] text-[#979797]">Level up to 10% earnings by referring 100 people</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <h5 className="text-[22px] font-bold">Image requests</h5>
                                <div className='bg-[#5848BC52] flex items-center gap-2 rounded-lg px-2 py-1 '><TokenPrimary /> 10</div>
                            </div>
                            <p className="text-[14px] text-[#979797]">Reach the pinnacle of 15% earnings by referring 1000 people</p>
                        </div>


                        <button className='mt-4 w-full rounded-[14px] bg-[#5848BC] py-5 py-[13px] font-bold'>
                            Get more tokens
                        </button>
                    {/* </div> */}
                </div>

            </Modal>
        </>
    );
};
export default TokenUser;