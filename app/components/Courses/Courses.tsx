"use client"
import * as React from "react";
import { useState } from "react";
import { GlobeAltIcon, DevicePhoneMobileIcon, CircleStackIcon, CloudIcon } from '@heroicons/react/24/outline';

interface Name {
    course: string;
    imageSrc: string;
    profession: string;
    price: string;
    category: 'digitalmarketing';
}

const names: Name[] = [
    {
        course: 'AI for Digital Marketing',
        imageSrc: '/assets/courses/img1.jpg',
        profession: 'Harness the power of AI in your marketing strategies',
        price: '50',
        category: 'digitalmarketing'
    },
    {
        course: 'Social Media Marketing with AI',
        imageSrc: '/assets/courses/img4.jpg',
        profession: 'Leverage AI to enhance your social media presence',
        price: '45',
        category: 'digitalmarketing'
    },
    {
        course: 'SEO Optimization using AI',
        imageSrc: '/assets/courses/img3.jpg',
        profession: 'Boost your SEO efforts with AI tools',
        price: '60',
        category: 'digitalmarketing'
    },
    {
        course: 'AI-Driven Email Marketing',
        imageSrc: '/assets/courses/img10.jpg',
        profession: 'Enhance email campaigns with AI',
        price: '40',
        category: 'digitalmarketing'
    },
    {
        course: 'AI in Content Marketing',
        imageSrc: '/assets/courses/img2.jpg',
        profession: 'Create better content using AI',
        price: '55',
        category: 'digitalmarketing'
    },
    {
        course: 'AI Analytics for Marketing',
        imageSrc: '/assets/courses/img6.jpg',
        profession: 'Utilize AI for advanced marketing analytics',
        price: '65',
        category: 'digitalmarketing'
    },
    {
        course: 'AI in Influencer Marketing',
        imageSrc: '/assets/courses/img7.jpg',
        profession: 'Find and manage influencers using AI',
        price: '70',
        category: 'digitalmarketing'
    },
    {
        course: 'AI-Powered Marketing Automation',
        imageSrc: '/assets/courses/img8.jpg',
        profession: 'Automate your marketing tasks with AI',
        price: '80',
        category: 'digitalmarketing'
    }
];

const NamesList = () => {
    const [selectedButton, setSelectedButton] = useState<'digitalmarketing'>('digitalmarketing');

    const digitalMarketing = names.filter((name) => name.category === 'digitalmarketing');

    let selectedNames: Name[] = [];

    if (selectedButton === 'digitalmarketing') {
        selectedNames = digitalMarketing;
    }

    const nameElements = selectedNames.map((name, index) => (
        <div key={index}>
            <div className="text-lg sm:text-sm py-5 lg:py-0">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <img
                        src={name.imageSrc}
                        alt={name.imageSrc}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className='flex justify-between'>
                    <div className="mt-6 block font-normal text-gray-900">
                        {name.course}
                    </div>
                    <div className="mt-6 block text-lg font-semibold text-green border-solid border-2 border-green rounded-md px-1">
                        ${name.price}
                    </div>
                </div>
                <p aria-hidden="true" className="mt-2 mb-5 text-2xl font-semibold ">
                    {name.profession}
                </p>
                <div className='flex justify-between border-solid border-2 border-grey500 rounded-md p-2'>
                    <p>12 Classes</p>
                    <div className='flex flex-row space-x-4'>
                        <div className='flex'>
                            <img src={'/assets/courses/account.svg'} alt="circle" />
                            <p className='text-lightgrey ml-1'>120</p>
                        </div>
                        <div className='flex'>
                            <img src={'/assets/courses/Star.svg'} alt="star" />
                            <p className='ml-1'>4.5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            <div id='courses-section' className="mx-auto max-w-2xl py-16 px-4 sm:py-26 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className='sm:flex justify-between items-center pb-12'>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Popular Courses</h2>
                    <div>
                        {/* <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-purple hover:border-transparent rounded">
                            Explore Classes
                        </button> */}
                    </div>
                </div>

                <div className='flex nowhitespace space-x-5 rounded-xl bg-white p-1 overflow-x-auto'>
                    {/* FOR DESKTOP VIEW */}
                    <button onClick={() => setSelectedButton('digitalmarketing')} className={"bg-white " + (selectedButton === 'digitalmarketing' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Digital Marketing</button>

                    {/* FOR MOBILE VIEW */}
                    <GlobeAltIcon onClick={() => setSelectedButton('digitalmarketing')} width={70} height={70} className={"bg-white " + (selectedButton === 'digitalmarketing' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                </div>

                <div>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-12">
                            <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                                {nameElements.length > 0 ? (
                                    nameElements
                                ) : (
                                    <p>No data to show</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NamesList;
