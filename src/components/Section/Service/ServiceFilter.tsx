'use client'

import React, { useState } from 'react'
import ServiceItem from '../../Service/ServiceItem'
import { ServiceType } from '@/type/ServiceType'
import { motion } from 'framer-motion'

interface Props {
    data: Array<ServiceType>
}

const ServiceFilter: React.FC<Props> = ({ data }) => {
    const [activeTab, setActiveTab] = useState<string>('financial planning')

    const handleTabClick = (item: string) => {
        setActiveTab(item)
    }

    return (
        <>
            <div className="service-block lg:py-[100px] sm:py-16 py-10">
                <div className="container flex flex-col items-center">
                    <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl">
                        {['cryptocurrency financial', 'payment solution', 'financial planning', 'blockchain', 'online banking', 'personal finance'].map((item, index) => (
                            <div
                                key={index}
                                className={`tab-item relative text-secondary text-button-sm py-2 px-5 cursor-pointer duration-500 hover:text-black ${activeTab === item ? 'active' : ''}`}
                                onClick={() => handleTabClick(item)}
                            >
                                {activeTab === item && (
                                    <motion.div layoutId='active-pill' className='absolute inset-0 rounded-2xl bg-white'></motion.div>
                                )}
                                <span className='relative text-button-sm white-space-nowrap capitalize z-[1] active:text-black'>
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="list-service grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-8 gap-y-10 md:mt-10 mt-6">
                        {data.filter(item => item.category === activeTab).slice(0, 8).map((item, index) => (
                            <ServiceItem data={item} style='style-four' number={index} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceFilter