import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-rainbow-components';
import {
    CalendarIcon,
    FollowerIcon,
    BellIcon,
    UsersIcon,
    TimelineIcon,
    GalleryIcon,
    PuzzleIcon
} from '../../components/icons';
import PageHeader from '../../components/PageHeader';
import './styles.css';

const pages = [
    { name: 'Visualizaciones', icon: <GalleryIcon />, href: '/pages/orders' },
    { name: 'Usuarios', icon: <UsersIcon />, href: '/pages/users' },
    { name: 'Conexiones', icon: <PuzzleIcon style={{height:'60px',width:'60px'}} />, href: '/pages/followers' },
    { name: 'Linea de Tiempo', icon: <TimelineIcon />, href: '/comingSoon' },
    { name: 'Calendario', icon: <CalendarIcon />, href: '/comingSoon' },
    { name: 'Notificaciones', icon: <BellIcon style={{height:'60px',width:'60px'}} />, href: '/comingSoon' },
];

function Cards() {
    return pages.map((page, index) => {
        const { name, icon, href } = page;
        const key = `card-${index}`;
        return (
            <Link key={key} className="react-rainbow-admin-pages_anchor" to={href}>
                <Card className="react-rainbow-admin-pages_card" footer={name}>
                    <span className="react-rainbow-admin-pages_card-image">
                        {icon}
                    </span>
                </Card>
            </Link>
        );
    });
}
export default function Pages() {
    return (
        <div className="react-rainbow-admin-pages_container">
            <PageHeader
                title="REDIOR"
                description="Panel de configuración y ajuste de características" />
            <div className="react-rainbow-admin-pages_body">
                <Cards />
            </div>
        </div>
    );
}
