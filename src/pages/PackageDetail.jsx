import React from 'react';
import { useParams } from 'react-router-dom';
import DetailBanner from '../components/detail/DetailBanner';
import DetailHero from '../components/detail/DetailHero';
import PackageInfo from '../components/detail/PackageInfo';
import BookingForm from '../components/detail/BookingForm';
import LocationMap from '../components/detail/LocationMap';
import PromoCardCarousel from '../components/home/PromoCardCarousel';
import mgtathmb from '../assets/mgtathmb.jpg';
import canthmb from '../assets/canthmb.jpg';
import merthmb from '../assets/merthmb.jpg';
import lrqthmb from '../assets/lrqthmb.jpg';
import cocthmb from '../assets/cocthmb.jpg';
import detail1 from '../assets/detail1.jpg';
import detail2 from '../assets/detail2.jpg';
import detail3 from '../assets/detail3.jpg';
import detail4 from '../assets/detail4.jpg';
import detail5 from '../assets/detail5.jpg';
import detail6 from '../assets/detail6.jpg';

import { MapPinIcon, StarIcon } from '@phosphor-icons/react';

// ── Demo data (will come from API later) ──────────────────────────────────────
const DEMO_PACKAGE = {
    title: 'Escapada Tropical en Isla de Margarita',
    price: '$250',
    priceLabel: '/ persona',
    badges: [
        {
            icon: <MapPinIcon className="w-5 h-5" />,
            text: 'Isla de Margarita, Venezuela'
        },
        {
            icon: <StarIcon weight="fill" className="w-5 h-5 text-amber-500" />,
            text: '4'
        },
    ],
    images: [detail1, detail2, detail3, detail4, detail5, detail6],
    details: {
        accommodation: 'Hesperia Isla Margarita',
        days: '4 Días / 3 Noches',
        guestType: 'Pareja / Familiar',
        boardType: 'Todo Incluido',
        description: 'Disfruta de una experiencia inolvidable en la perla del Caribe. Este paquete exclusivo incluye estancia en habitación de lujo con vista al mar, acceso ilimitado a restaurantes gourmet, bebidas nacionales e internacionales, y actividades recreativas diarias. Ideal para quienes buscan relax y diversión en un entorno paradisíaco. Ubicado en una de las zonas más exclusivas de la isla, el hotel ofrece piscinas infinity, acceso directo a la playa y un servicio excepcional de primera clase.',
        amenities: [
            { icon: 'wifi', label: 'WiFi Libre' },
            { icon: 'pool', label: 'Piscina' },
            { icon: 'spa', label: 'Spa' },
            { icon: 'gym', label: 'Gimnasio' },
            { icon: 'restaurant', label: 'Bar y Restaurante' },
            { icon: 'clock', label: 'Servicio 24h' },
            { icon: 'ac', label: 'Aire Acondicionado' },
            { icon: 'beach', label: 'Acceso Directo a la Playa' },
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
                    {/* Left side: Information (8/12 approx) */}
                    <div className="lg:w-8/12">
                        <PackageInfo {...pkg.details} />
                    </div>

                    {/* Right side: Booking form (4/12 approx) */}
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
                    title="Otros paquetes populares"
                    subtitle="Descubre más destinos increíbles"
                    verMasHref="/packages"
                    items={[
                        {
                            id: 2,
                            image: canthmb,
                            title: 'Aventura en Canaima',
                            subtitle: 'Explora majestuosos tepuyes y el Salto Ángel',
                            priceLabel: 'Desde',
                            priceValue: '$320',
                            ctaLabel: 'Ver Paquete',
                            onCtaClick: () => { },
                        },
                        {
                            id: 3,
                            image: merthmb,
                            title: 'Magia en Mérida',
                            subtitle: 'Descubre los Andes y su clima encantador',
                            priceLabel: 'Desde',
                            priceValue: '$165',
                            ctaLabel: 'Ver Paquete',
                            onCtaClick: () => { },
                        },
                        {
                            id: 4,
                            image: lrqthmb,
                            title: 'Paraíso Los Roques',
                            subtitle: 'Playas de arena blanca y aguas cristalinas',
                            priceLabel: 'Desde',
                            priceValue: '$450',
                            ctaLabel: 'Ver Paquete',
                            onCtaClick: () => { },
                        },
                        {
                            id: 5,
                            image: cocthmb,
                            title: 'Relax en Coche',
                            subtitle: 'Desconéctate en un ambiente de total tranquilidad',
                            priceLabel: 'Desde',
                            priceValue: '$80',
                            ctaLabel: 'Ver Paquete',
                            onCtaClick: () => { },
                        },
                        {
                            id: 6,
                            image: mgtathmb,
                            title: 'Aventura en Margarita',
                            subtitle: 'Disfruta de la Perla del Caribe al máximo',
                            priceLabel: 'Desde',
                            priceValue: '$190',
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
