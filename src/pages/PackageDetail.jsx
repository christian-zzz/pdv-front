import React from 'react';
import { useParams } from 'react-router-dom';
import DetailBanner from '../components/detail/DetailBanner';
import DetailHero from '../components/detail/DetailHero';
import PackageInfo from '../components/detail/PackageInfo';
import BookingForm from '../components/detail/BookingForm';
import LocationMap from '../components/detail/LocationMap';
import PromoCardCarousel from '../components/home/PromoCardCarousel';
import cardimg from '../assets/card.jpg';
import detail1 from '../assets/detail1.jpg';
import detail2 from '../assets/detail2.jpg';
import detail3 from '../assets/detail3.jpg';
import detail4 from '../assets/detail4.jpg';
import detail5 from '../assets/detail5.jpg';
import detail6 from '../assets/detail6.jpg';

// ── Demo data (will come from API later) ──────────────────────────────────────
const DEMO_PACKAGE = {
    title: 'Escapada Tropical en Isla de Margarita',
    price: '$250',
    priceLabel: '/ persona',
    badges: [
        { icon: '📍', text: 'Isla de Margarita, Venezuela' },
        { icon: '⭐', text: '4' },
    ],
    images: [detail1, detail2, detail3, detail4, detail5, detail6],
    details: {
        accommodation: 'Hesperia Isla Margarita',
        days: '4 Días / 3 Noches',
        guestType: 'Pareja / Familiar',
        boardType: 'Todo Incluido',
        description: 'Disfruta de una experiencia inolvidable en la perla del Caribe. Este paquete exclusivo incluye estancia en habitación de lujo con vista al mar, acceso ilimitado a restaurantes gourmet, bebidas nacionales e internacionales, y actividades recreativas diarias. Ideal para quienes buscan relax y diversión en un entorno paradisíaco. Ubicado en una de las zonas más exclusivas de la isla, el hotel ofrece piscinas infinity, acceso directo a la playa y un servicio excepcional de primera clase.',
        amenities: [
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" /></svg>, label: 'WiFi Libre' },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>, label: 'Piscina' },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>, label: 'Spa' },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>, label: 'Gimnasio' },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>, label: 'Bar' },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>, label: 'Servicio 24h' },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>, label: 'Aire Acondicionado' },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>, label: 'Habitaciones Dobles' },
        ],
    },
};

const PackageDetail = () => {
    const { id } = useParams();

    // In future: fetch package by `id` from the API
    const pkg = DEMO_PACKAGE;

    return (
        <div className="pb-6">
            <DetailBanner />

            <DetailHero
                title={pkg.title}
                badges={pkg.badges}
                images={pkg.images}
            />

            <section className="mx-auto w-full max-w-7xl px-6 sm:px-10 mt-8">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                    {/* Left side: Information (7/12 approx) */}
                    <div className="lg:w-8/12">
                        <PackageInfo {...pkg.details} />
                    </div>

                    {/* Right side: Booking form (5/12 approx) */}
                    <div className="lg:w-4/12">
                        <BookingForm
                            price={pkg.price}
                            priceLabel={pkg.priceLabel}
                        />
                    </div>
                </div>
            </section>

            <LocationMap query={`${pkg.details.accommodation}, Isla de Margarita, Venezuela`} />

            {/* ── Related Packages ──────────────────────────────── */}
            <section className="px-4 sm:px-6 py-10">
                <PromoCardCarousel
                    title="Otros paquetes en Margarita"
                    subtitle="Descubre más opciones en este destino"
                    verMasHref="/packages"
                    items={[
                        {
                            id: 2,
                            image: cardimg,
                            title: 'Relax en Playa El Agua',
                            subtitle: 'Todo incluido con vista al mar en la playa más famosa',
                            priceLabel: 'Desde',
                            priceValue: '$180',
                            ctaLabel: 'Ver Paquete',
                            onCtaClick: () => { },
                        },
                        {
                            id: 3,
                            image: cardimg,
                            title: 'Aventura en Macanao',
                            subtitle: 'Excursiones ecológicas y paseos en la península',
                            priceLabel: 'Desde',
                            priceValue: '$145',
                            ctaLabel: 'Ver Paquete',
                            onCtaClick: () => { },
                        },
                        {
                            id: 4,
                            image: cardimg,
                            title: 'Escapada Romántica',
                            subtitle: 'Cena en la playa y spa de lujo para parejas',
                            priceLabel: 'Desde',
                            priceValue: '$320',
                            ctaLabel: 'Ver Paquete',
                            onCtaClick: () => { },
                        },
                        {
                            id: 5,
                            image: cardimg,
                            title: 'Familia en Margarita',
                            subtitle: 'Paquete familiar con actividades para niños',
                            priceLabel: 'Desde',
                            priceValue: '$210',
                            ctaLabel: 'Ver Paquete',
                            onCtaClick: () => { },
                        },
                        {
                            id: 6,
                            image: cardimg,
                            title: 'Buceo en Los Roques',
                            subtitle: 'Excursión de un día desde Margarita con equipo incluido',
                            priceLabel: 'Desde',
                            priceValue: '$275',
                            ctaLabel: 'Ver Paquete',
                            onCtaClick: () => { },
                        },
                        {
                            id: 7,
                            image: cardimg,
                            title: 'Weekend playa',
                            subtitle: 'Fin de semana con traslados y desayuno incluido',
                            priceLabel: 'Desde',
                            priceValue: '$99',
                            ctaLabel: 'Ver Paquete',
                            onCtaClick: () => { },
                        },
                    ]}
                />
            </section>
        </div>
    );
};

export default PackageDetail;
