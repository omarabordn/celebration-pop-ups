"use client";
import { motion } from "framer-motion";
import Ref from "../assests/ref.svg"
import Image from "next/image";
import XP from "../assests/xp.png";
import Reward from "../assests/reward.png"
import { useState } from "react";



const RewardPopUp = () => {

    const [refresh, setRefresh] = useState(0);

    const handleRefresh = () => {
        setRefresh(prev => prev + 1);
    };

    return (
        <>
            <div key={refresh} className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    exit={{ opacity: 0 }}
                    className="inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
                >
                    <motion.div
                        className="shadow-lg relative p-6"
                        style={{
                            backgroundImage: `url('https://s3-alpha-sig.figma.com/img/fda8/ac45/e5388d934b42637d009b02dd3a61d15f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I0SSZ8i4kllX1JAFf96vWMkzV-unc3T4tvotC7iXzpqff1lg9TExrhxFz0n~mYxXiBNoxQPmFW07mThFWYyiTlsE1JO1AM36WOvGErM-OtL1UTBca3yutWVr4EDQ8T3E1mVAoCl6--cbrnw4~X2XA4mDaiBtu9zKPT9N65h5VXX8nNH~vSpk4sajd0V1xtf3HL-ZEkhvrWvlNUeXXOQ198~sWDWuLKaVGX4w~2lqCa7QoJMkrxMqIvq685y9djo-DrbTpQkYI1qxfe0iXnv5Q8Eo-eaYnJjoTzDeE4LLWF6CZVovHg9D8JAyZ9-FBtez-pDixeRAIVHDdDRbMHy8qA__')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <button
                            className="absolute top-2 right-2 text-white border border-1 rounded-md"
                        >
                            ✖️
                        </button>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                        >
                            <h2
                                className="text-yellow-400 font-bold lg:pb-4 lg:text-5xl sm:text-3xl am:pb-2"
                            >
                                Congratulations!
                            </h2>
                            <p className="text-yellow-300 font-medium mt-1 lg:pb-8 lg:text-4xl sm:text-2xl lg:pb-4">
                                Command completed Successfully!
                            </p>
                        </motion.div>

                        <motion.div
                            className="text-gray-300 lg:mt-4 sm:mt-3 text-center"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 1.2 }}
                        >
                            <p className="font-thin text-slate-300 pt-2 lg:text-lg sm:text-sm">
                                You have successfully completed a command! Here are your
                                well-earned rewards. Keep<br></br> exploring the Command Center for even more
                                exciting missions and bigger rewards!
                            </p>
                            <p className="font-thin text-slate-300 pt-2 lg:text-lg sm:text-sm">You have gained:</p>
                        </motion.div>

                        <motion.div className="lg:mt-6 sm:mt-3"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5, duration: 0.7 }}
                        >
                            <div className="flex flex-row justify-center items-center gap-4">
                                <div className="h-0.5 w-1/4 bg-slate-200 lg:mb-4 sm:mb-2"></div>
                                <h3 className="text-yellow-500 text-center font-semibold lg:text-3xl lg:mb-4 sm:text-2xl sm:mb-2">Rewards</h3>
                                <div className="h-0.5 w-1/4 bg-slate-200 lg:mb-4 sm:mb-2"></div>
                            </div>

                            <div className="flex flex-row justify-center items-center gap-16">
                                <motion.div className="flex flex-col items-center"
                                    initial={{ scale: 1, opacity: 0 }}
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: 1,
                                        rotate: [0, 10, -10, 0]
                                    }} // Animation state
                                    transition={{
                                        delay: 1.8,
                                        duration: 1.2,
                                        ease: "easeInOut",
                                        repeat: 2,
                                        repeatType: "reverse"
                                    }}
                                >
                                    <Image
                                        src={XP}
                                        alt="XP Icon"
                                        width={110}
                                        height={110}
                                        className="mb-2 border-double border-4 border-yellow-500 border-b-8 rounded-md p-2"
                                    />
                                    <p className="text-yellow-300 text-md">20 XP</p>
                                </motion.div>

                                <motion.div className="flex flex-col items-center"
                                    initial={{ scale: 1, opacity: 0 }}
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: 1,
                                        rotate: [0, 10, -10, 0]
                                    }}
                                    transition={{
                                        delay: 1.8,
                                        duration: 1.2,
                                        ease: "easeInOut",
                                        repeat: 2,
                                        repeatType: "reverse"
                                    }}
                                >
                                    <Image
                                        src={Reward}


                                        alt="Reward Icon"
                                        width={110}
                                        height={110}
                                        className="object-contain mb-2 border-double border-4 border-yellow-500 border-b-8 rounded-md p-2"
                                    />
                                    <p className="text-yellow-300 text-md">250,000,000</p>

                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div >
            <button className="flex p-4 mx-auto align-center"
                onClick={handleRefresh}>
                <Image width={35} height={35} priority src={Ref} />
            </button>
        </>
    )
}

export default RewardPopUp