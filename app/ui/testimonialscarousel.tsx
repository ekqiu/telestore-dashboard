'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AcademicCapIcon, SparklesIcon } from '@heroicons/react/24/solid';

const testimonials = [
    {
        img: '/user1.jpg',
        alt: 'User testimonial 1',
        text: '“Telestore made launching my Telegram shop effortless. The AI insights helped me double my sales in just two months!”',
        name: 'Alexei, Digital Merchant',
    },
    {
        img: '/user2.jpg',
        alt: 'User testimonial 2',
        text: '“The Telegram integration is seamless and my customers love the experience. Highly recommended!”',
        name: 'Maria, Boutique Owner',
    },
    {
        img: '/user3.jpg',
        alt: 'User testimonial 3',
        text: '“I was able to set up my store in minutes. The platform is intuitive and support is fantastic.”',
        name: 'Ivan, Store Owner',
    },
];

export default function TestimonialsCarousel() {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev: number) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const prev = () =>
        setIndex((prev: number) => (prev - 1 + testimonials.length) % testimonials.length);
    const next = () =>
        setIndex((prev: number) => (prev + 1) % testimonials.length);

    return (
        <div className="relative w-full max-w-3xl flex flex-col items-center">
            {/* Testimonial Box */}
            <div className="animate-slidein bg-white rounded-2xl shadow-xl px-8 py-10 flex flex-col items-center border border-blue-100 transition-all duration-500 w-full">
                <Image
                    src={testimonials[index].img}
                    alt={testimonials[index].alt}
                    width={64}
                    height={64}
                    className="rounded-full mb-4 border-4 border-blue-200 shadow"
                />
                <p className="text-lg text-gray-700 text-center mb-4">
                    {testimonials[index].text}
                </p>
                <span className="font-semibold text-blue-600">
                    — {testimonials[index].name}
                </span>
                {/* Decorative floating icons */}
                <span className="absolute -top-6 -left-6 animate-float">
                    <AcademicCapIcon className="h-8 w-8 text-blue-500 opacity-70" />
                </span>
                <span className="absolute -bottom-6 -right-6 animate-float-reverse">
                    <SparklesIcon className="h-8 w-8 text-yellow-500 opacity-70" />
                </span>
            </div>
            {/* Controls outside the box */}
            <div className="flex items-center justify-center gap-4 mt-6 w-full">
                <button
                    aria-label="Previous testimonial"
                    onClick={prev}
                    className="bg-white rounded-full shadow p-2 hover:bg-blue-50 transition"
                >
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        className="text-blue-400"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                {/* Dots */}
                <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full ${
                                i === index ? 'bg-blue-500' : 'bg-blue-200'
                            } transition`}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
                <button
                    aria-label="Next testimonial"
                    onClick={next}
                    className="bg-white rounded-full shadow p-2 hover:bg-blue-50 transition"
                >
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        className="text-blue-400"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}