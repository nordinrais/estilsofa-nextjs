'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function WhatsAppFloat() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button after a short delay for better UX
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const whatsappUrl = "https://wa.me/34677481926?text=Hola,%20me%20gustaría%20más%20información.";

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className={`
        fixed bottom-6 right-6 z-[10000]
        w-14 h-14 md:w-16 md:h-16
        bg-[#25d366] rounded-full
        flex items-center justify-center
        shadow-lg hover:shadow-xl
        transition-all duration-300
        hover:scale-110
        animate-float
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
        >
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                width={32}
                height={32}
                className="w-8 h-8 md:w-9 md:h-9"
                unoptimized
            />
        </a>
    );
}
