"use client";
import { useState } from "react";
import Ref from "../assests/ref.svg"
import Image from "next/image";
import { motion } from "framer-motion";


const CelebratePopUp = () => {

    const [refresh, setRefresh] = useState(0);

    const handleRefresh = () => {
        setRefresh(prev => prev + 1);
    };

    return (
        <>
            <div key={refresh} className="container mx-auto h-full">

                <motion.div
                    className="bg-cover bg-no-repeat bg-center h-full" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/7fbd/b783/9ed9db18a902ff680f1fe60991f7e251?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E90P8ecgNPpGOwOkXe-uDzC9SXENgC3mLVjqyuobfOZFBCKlSnNGSlPqMSmoswASeV2FMLDkWRspywSLLZQPAkzgj2XQnTot-Yv9dOo5qiSlkYVueM4IebchQLjMHqu0zV-4ck9Kh7D7n5wistQ9~5RrCgTl9pFZ0Aj3gor33ZfH1hNy1Z4iTaXkaWKdLcKkwvdlZIzbhQHH-pwU54BFsOkcf2LGoXzDgBLKRWHD7ablCmGO7EPpJ3niKFJkt8UgCGQB073v84fWay2czb4zoq33I~RKlltO-jYT91vct4-QU-YgWeNXrUEZoxSXVA9T80MpMOfQf-~aol~1JK-5ZA__)' }}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >

                    <motion.h1
                        className="font-black text-center bg-clip-text text-transparent lg:text-6xl lg:pt-6 lg:pb-4 sm:text-4xl sm:pt-2 sm:pb-3"
                        style={{
                            backgroundImage: 'linear-gradient(120deg, rgba(255, 244, 192, 1), rgba(255, 224, 2, 1))',
                            textShadow: '1px 1px 20px #F3BA2F'
                        }}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        LEVEL UP
                    </motion.h1>

                    <motion.img
                        src="https://s3-alpha-sig.figma.com/img/34b6/5f64/95fdc3ebfaf1721c17a5038e7c2da0a2?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nk6nbXnFzY3~ZO8am6mqL7Rwo103JMEQO5MsLeRP5MoHf-86mR1q7DiwD-Y3iB3yzDHnsUmYxEXrk~xUA2Su25amE3Ki6KP~d-qxqetrtC4wDUycvKhbVBq1WpVKCbD18LvN~tYIrlOvPpcJG0gkwg7PaJVS0chTG363hULsxFz2lBOdMTifRwzl2lVa2D4~nziLOn8KD8AeTMytekDVWs1eb7Vc6g8hRBctboGGUVb4pzXgmoPCefBQ5-vZYfM82pnmUS6UFFG-XHKIoBcZj-aW6tOwQ-EIjjtcbYjoAFD-pCvGBJzOtya38P~ot4CmmWOMYwJFuunaZlU09sarDA__"
                        className="mx-auto w-2/12 h-1/12"
                        initial={{ scale: 0, rotate: -360 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    />

                    <motion.h3
                        className="text-yellow-950 font-bold text-center pt-5 lg:text-4xl sm:text-2xl"
                        style={{
                            textShadow: '1px 1px 4px #834C30'
                        }}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        Corporal
                    </motion.h3>

                    <motion.div
                        className="container mx-auto w-5/12 grid grid-cols-2"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.3 }}
                    >
                        <motion.p
                            className="grid justify-items-start text-slate-200 font-normal lg:text-lg sm:text-xs"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.3 }}
                        >
                            XP: 14,500
                        </motion.p>

                        <motion.p
                            className="grid justify-items-end text-amber-400 font-normal lg:text-lg sm:text-xs"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.3 }}
                        >
                            50,000
                        </motion.p>

                    </motion.div>

                    <motion.div
                        className="container mx-auto w-5/12"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.3 }}
                    >
                        <motion.div
                            className="absolute bg-black opacity-50 lg:h-6 sm:h-3"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1, delay: 1.3 }}
                        />
                        <motion.div
                            className=" relative left-2 lg:h-4 lg:top-1 sm:h-2 sm:top-0.5 sm:left-1"
                            style={{ background: 'linear-gradient(180deg, #FFFF00 0%, #FBB03B 22.6%, #F7931E 47.24%, #F37830 64.12%, #F16A3A 76%, #F37433 84.61%, #F79020 99.46%, #F7931E 100.65%)' }}
                            initial={{ width: '0%' }}
                            animate={{ width: '30%' }}
                            transition={{ duration: 1, delay: 1.6 }}
                        />
                    </motion.div>

                    <motion.div
                        className="container mx-auto w-full text-center w-auto"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 2 }}
                    >
                        <button style={{
                            backgroundImage:
                                'linear-gradient(180deg, #FFFFFF 0%, #F7C891 8.5%, #F3AC59 12.75%, #EC6615 77%, #944617 100%)'
                        }}

                            className="font-bold text-amber-950 border-2 border-[#35241C] rounded-md lg:mt-8 lg:px-8 lg:py-3 lg:font-bold lg:text-lg sm:mt-4 sn:px-4 py-2 sm:text-xs"
                        >
                            Claim NFT Badge
                        </button>
                        <h4 className="text-stone-900 font-bold lg:text-xl pt-4 sm:text-sm sm:pt-2">You’ve leveled up and earned a new badge!</h4>
                        <p className="font-thin text-slate-300 lg:pt-2 lg:text-base sm:pt-1 sm:text-sm">Claim your <span className="text-amber-400 font-bold lg:text-lg sm:text-sm">NFT badge</span> now, or retrieve it later from your Inventory.</p>
                        <p className="font-thin text-slate-300 pt-4 pb-8 lg:text-sm sm:text-xs">To claim your new badge, you'll need to transfer your previous badge from your wallet for it to be burned in exchange for the new one.<br></br> If there's insufficient gas in your wallet, the transaction will be canceled. You can always visit your Inventory and claim your badge at any time.</p>
                    </motion.div>
                </motion.div>
            </div>
            <button className="flex p-4 mx-auto align-center"
                onClick={handleRefresh}>
                <Image width={35} height={35} priority src={Ref} />
            </button>
            
        </>
    );
};
export default CelebratePopUp