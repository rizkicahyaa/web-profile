import React from "react";

const certificates = [
    {
        title: "Laboratory Assistant: Programming",
        issuer: "Forum Asisten",
        year: "2025",
        credentialUrl: "https://drive.google.com/file/d/1yWmBjqg4NtldOGrMVI1SW2LxcBBgXfn9/view?usp=sharing",
    },
    {
        title: "Laboratory Assistant: Web Programming",
        issuer: "Forum Asisten",
        year: "2025",
        credentialUrl: "https://drive.google.com/file/d/15p2aV_32nGxI_Tuahj3CY3tXk9ftcfys/view?usp=sharing",
    },
    {
        title: "Laboratory Assistant: Advanced Programming",
        issuer: "Forum Asisten",
        year: "2025",
    },
    {
        title: "Code Generation and Optimization Using IBM Granite",
        issuer: "IBM, Hacktiv8",
        year: "2025",
        credentialUrl: "https://drive.google.com/file/d/1DOc5Qd518RZNcmmZJZu2KMn9PbRnsLtf/view?usp=sharing",
    },
    {
        title: "Unlocking the Power of Data: Practical Introduction to Machine Learning",
        issuer: "Dibimbing",
        year: "2025",
        credentialUrl: "https://drive.google.com/file/d/1PbD1WNdOtXSMwj0NLQyLweorCMJ9u2YM/view?usp=sharing",
    },
    {
        title: "Workshop Full Stack Developer HIMASI x BPC Amikom",
        issuer: "HIMASI x BPC Amikom",
        year: "2025",
        credentialUrl: "https://drive.google.com/file/d/1KsYEpeYrGSXXKjwnbjGQBt1aTGhydO22/view?usp=sharing",
    },
    {
        title: 'Seminar Inovasi Teknologi "Pemanfaatan AI PC Untuk Creator dan Gamer"',
        issuer: "AMD",
        year: "2025",
        credentialUrl: "https://drive.google.com/file/d/121g7uiIsBYLM0-u8Z5r9-CTW0wKVMmXB/view?usp=sharing",
    },
    {
        title: 'Seminar Kreator "Behind The Scene: Membuat Konten Viral Berkualitas"',
        issuer: "ASUS x Intel",
        year: "2025",
        credentialUrl: "https://drive.google.com/file/d/1PYoqbMpcma1o0bDp8c-kosqVOldzYUy5/view?usp=sharing",
    },
    {
        title: "Seminar Nasional Informatika 2025",
        issuer: "MSV Cinema, Universitas Amikom Yogyakarta",
        year: "2025",
        credentialUrl: "https://drive.google.com/file/d/1fdw94rSwWXatKyb_tw_DueBwH-rdvbAt/view?usp=sharing",
    },
];

export default function Certificate() {
    return (
        <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6 font-['Poppins']" data-aos="fade-down">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Certificate</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
                </div>

                <ul className="space-y-6" data-aos="fade-up" data-aos-delay="100">
                    {certificates.map((certificate) => (
                        <li key={certificate.title} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-purple-100">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 font-['Inter']">{certificate.title}</h3>
                                <p className="text-sm text-gray-500 font-medium font-['Inter']">{certificate.issuer}</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-sm px-3 py-1 rounded-full bg-purple-50 text-purple-600 font-medium font-['Inter']">{certificate.year}</span>

                                <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 font-semibold font-['Inter']">
                                    View
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10m0-10h10v10" />
                                    </svg>
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
