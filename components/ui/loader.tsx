"use client";

import React, { useState, useEffect } from 'react'

interface LoaderProps {
    onLoadComplete: () => void;
}

const Loader = ({ onLoadComplete }: LoaderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isExiting, setIsExiting] = useState(false)

    const names = [
        { text: 'Yash', language: 'English' },
        { text: 'யாஷ்', language: 'Tamil' },
        { text: 'यश', language: 'Hindi' },
        { text: 'ਯਸ਼', language: 'Punjabi' },
        { text: 'യാഷ്', language: 'Malayalam' },
        { text: 'यश्', language: 'Sanskrit' }

        // Creating transliterations for Yash
    ]

    useEffect(() => {
        if (currentIndex < names.length) {
            // Speed up the cycle to 150ms per name
            const timer = setTimeout(() => {
                setCurrentIndex(prev => prev + 1)
            }, 180)
            return () => clearTimeout(timer)
        } else {
            const exitTimer = setTimeout(() => {
                setIsExiting(true)
                setTimeout(() => {
                    onLoadComplete()
                }, 800) // Slightly faster exit
            }, 100)
            return () => clearTimeout(exitTimer)
        }
    }, [currentIndex, names.length, onLoadComplete])

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#48816d] transition-opacity duration-700 ease-in-out ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            {/* Subtle Glow to add depth to the flat color */}
            <div className="absolute inset-0 blur-3xl opacity-20">
                <div className="w-64 h-64 md:w-96 md:h-96 rounded-full animate-pulse mx-auto bg-emerald-900/40"></div>
            </div>

            <div className="relative z-10 text-center px-4 w-full">
                <div className="h-40 md:h-56 flex items-center justify-center">
                    {names.map((name, index) => (
                        <div
                            key={index}
                            className={`absolute transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) ${index === currentIndex
                                ? 'opacity-100 scale-100 blur-0 translate-y-0'
                                : index < currentIndex
                                    ? 'opacity-0 scale-90 blur-sm -translate-y-12'
                                    : 'opacity-0 scale-110 blur-sm translate-y-12'
                                }`}
                        >
                            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter font-custom drop-shadow-sm text-[#050505]">
                                {name.text}
                            </h1>
                        </div>
                    ))}
                </div>

                {/* Progress Line */}
                <div className="mt-12 w-32 md:w-48 h-1.5 bg-black/20 rounded-full mx-auto overflow-hidden relative backdrop-blur-sm">
                    <div
                        className="absolute top-0 left-0 h-full transition-all duration-150 ease-out bg-black"
                        style={{ width: `${((currentIndex + 1) / names.length) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Loader
