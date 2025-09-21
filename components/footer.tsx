'use client'
import Link from 'next/link'

export default function Footer() {
    const footerLinks = [
        {
            name: "FAQ",
            link: "/faq"
        },
        {
            name: "Proof",
            link: "/proof"
        },
        {
            name: "Terms",
            link: "/terms"
        },
    ]

    return (
        <footer className="bg-neutral-900 text-white py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-neutral-400">
                            © 2024 Spells Mystical Services. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        {footerLinks.map((link, idx) => (
                            <Link 
                                key={idx} 
                                href={link.link}
                                className="text-sm text-neutral-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
