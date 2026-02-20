import React from 'react';
import { Link } from 'react-router-dom';

const DAYS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

/**
 * ConsultasChart — Pure SVG bar chart for weekly consultations.
 * @param {number[]} data - Array of 7 values (Mon–Sun)
 * @param {string}   to   - Link for the arrow CTA
 */
const ConsultasChart = ({ data = [4, 7, 5, 9, 6, 12, 8], to = '#' }) => {
    const max = Math.max(...data);
    const CHART_HEIGHT = 55;
    const BAR_WIDTH = 22;
    const GAP = 18;
    const CHART_WIDTH = DAYS.length * (BAR_WIDTH + GAP) - GAP;

    return (
        <div className="flex items-center gap-6 rounded-2xl px-6 py-5 bg-white border border-[#ed6f00] shadow-sm hover:shadow-md transition-shadow duration-200 min-h-[130px]">
            <p className="text-sm font-semibold text-[#001f6c] shrink-0 w-32 leading-snug">
                Consultas<br />Realizadas
            </p>

            <div className="flex-1 flex items-end">
                <svg
                    width="100%"
                    viewBox={`0 0 ${CHART_WIDTH + 4} ${CHART_HEIGHT + 22}`}
                    preserveAspectRatio="xMidYMid meet"
                    aria-label="Gráfico de consultas semanales"
                >
                    {data.map((val, i) => {
                        const barH = max > 0 ? (val / max) * CHART_HEIGHT : 0;
                        const x = i * (BAR_WIDTH + GAP);
                        const y = CHART_HEIGHT - barH;
                        return (
                            <g key={DAYS[i]}>
                                <rect
                                    x={x}
                                    y={y}
                                    width={BAR_WIDTH}
                                    height={barH}
                                    rx={5}
                                    fill="#001f6c"
                                    opacity="0.85"
                                />
                                <text
                                    x={x + BAR_WIDTH / 2}
                                    y={CHART_HEIGHT + 15}
                                    textAnchor="middle"
                                    fontSize="8"
                                    fill="#8898aa"
                                    fontFamily="Poppins, sans-serif"
                                >
                                    {DAYS[i]}
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>

            <Link to={to} className="text-[#001f6c]/40 hover:text-[#ed6f00] transition-colors shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
                </svg>
            </Link>
        </div>
    );
};

export default ConsultasChart;
