import React from 'react';
import {
    WifiHigh,
    SwimmingPool,
    Sparkle,
    Barbell,
    ForkKnife,
    Wine,
    Clock,
    Fan,
    TennisBall,
    Car,
    Sun,
    Baby,
    Bus,
    WashingMachine,
    Vault,
    Television,
    PhoneCall,
    Elevator,
    CheckCircle
} from '@phosphor-icons/react';

/**
 * Maps a feature icon key (string stored in DB) to a Phosphor Icons component.
 * Usage: featureIcons['wifi'] => <WifiHigh />
 *
 * Available keys:
 * wifi, pool, spa, gym, restaurant, bar, clock, ac, tennis,
 * parking, beach, kids, shuttle, laundry, safe, tv, phone, elevator
 */
const featureIcons = {
    wifi: <WifiHigh />,
    pool: <SwimmingPool />,
    spa: <Sparkle />,
    gym: <Barbell />,
    restaurant: <ForkKnife />,
    bar: <Wine />,
    clock: <Clock />,
    ac: <Fan />,
    tennis: <TennisBall />,
    parking: <Car />,
    beach: <Sun />,
    kids: <Baby />,
    shuttle: <Bus />,
    laundry: <WashingMachine />,
    safe: <Vault />,
    tv: <Television />,
    phone: <PhoneCall />,
    elevator: <Elevator />,
};

/**
 * Returns the SVG icon for a given key, or a default circle icon if not found.
 * @param {string} key
 * @returns {JSX.Element}
 */
export const getFeatureIcon = (key) =>
    featureIcons[key] ?? <CheckCircle />;

export default featureIcons;
