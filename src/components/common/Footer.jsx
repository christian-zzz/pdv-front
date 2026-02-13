import React from 'react';
import footerBg from '../../assets/footer.png';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="relative overflow-hidden text-white">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${footerBg})` }}
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#001a6b]/85" aria-hidden="true" />

            <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-10">
                <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
                    {/* Left */}
                    <div className="text-sm leading-relaxed text-white/90">
                        <p>
                            Somos más que viajes, planificamos experiencias únicas para cada uno
                            de nuestros viajeros.
                        </p>
                        <p className="mt-3">
                            Son 9 años impulsando los principales lugares turísticos de Venezuela
                            brindando el mejor servicio a través de la asesoría excepcional de
                            nuestro equipo.
                        </p>
                    </div>

                    {/* Center */}
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center gap-2">
                            <img src={logo} alt="Plan de Viaje" className="h-10 w-auto" />
                            <div className="text-left">
                                <p className="text-lg font-bold uppercase tracking-wide">Plan de Viaje</p>
                                <p className="text-xs italic text-white/80">Más que viajar</p>
                            </div>
                        </div>
                        <p className="mt-3 text-sm font-semibold italic">
                            ¡Planifica tu próximo viaje desde donde estés!
                        </p>
                        <button
                            type="button"
                            className="mt-4 rounded-full bg-[#ed6f00] px-6 py-2 text-sm font-semibold text-white shadow-md transition-transform duration-200 hover:scale-[1.02]"
                        >
                            Contáctanos
                        </button>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-start gap-4">
                            <div className="flex flex-col gap-3 pt-1 text-white/90">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 6.075-9 12-9 12S3 16.075 3 10a9 9 0 1 1 18 0Z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.81.33 1.6.62 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.72-1.14a2 2 0 0 1 2.11-.45c.76.29 1.55.5 2.36.62A2 2 0 0 1 22 16.92Z" />
                                    </svg>
                                </span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
                                    </svg>
                                </span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm10.2 2.4a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2ZM12 7.2a4.8 4.8 0 1 1-4.8 4.8A4.8 4.8 0 0 1 12 7.2Zm0 2a2.8 2.8 0 1 0 2.8 2.8A2.8 2.8 0 0 0 12 9.2Z" />
                                    </svg>
                                </span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                        <path d="M13 9h3l.5-3H13V4.5A1.5 1.5 0 0 1 14.5 3H16V0h-2a4 4 0 0 0-4 4v2H7v3h3v12h3V9Z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="text-sm font-semibold leading-relaxed">
                                <p>PLAN DE VIAJE C.A.</p>
                                <p>J-40793626-3</p>
                                <p>RTN: 2029 / VT: 3251</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
