import React from 'react';
import footerBg from '../../assets/footer.png';
import logox from '../../assets/logox.png';
import { MapPinIcon, PhoneCallIcon, EnvelopeIcon, InstagramLogoIcon, FacebookLogoIcon } from '@phosphor-icons/react';

const Footer = () => {
    return (
        <footer className="relative overflow-hidden content-center text-white">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${footerBg})` }}
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#001a6b]/85" aria-hidden="true" />

            <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-10">
                <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
                    {/* Left */}
                    <div className="text-sm leading-relaxed content-center text-white/90">
                        <p className='text-center'>
                            Somos más que viajes, planificamos experiencias únicas para cada uno
                            de nuestros viajeros.
                        </p>
                        <p className="mt-3 text-center">
                            Son 9 años impulsando los principales lugares turísticos de Venezuela
                            brindando el mejor servicio a través de la asesoría excepcional de
                            nuestro equipo.
                        </p>
                    </div>

                    {/* Center */}
                    <div className="flex flex-col items-center content-center text-center">
                        <div className="flex items-center gap-2">
                            <img src={logox} alt="Plan de Viaje" className="h-12 w-auto" />
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
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col gap-3 pt-1 text-[#ec6e00]">
                                <MapPinIcon className="h-6 w-6" />
                                <PhoneCallIcon className="h-6 w-6" />
                                <EnvelopeIcon className="h-6 w-6" />
                                <InstagramLogoIcon weight="fill" className="h-6 w-6" />
                                <FacebookLogoIcon weight="fill" className="h-6 w-6" />
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
