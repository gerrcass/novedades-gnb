import React from 'react';
import PropTypes from 'prop-types';
import { PersonIcon } from '../../components/icons';
import Message from './message';

export default function LastMessagesList({ lastMessages }) {
    return lastMessages.map((message, index) => {
        if (index >3) return
        const key = `message-${index}`;
        const lastItemIndex = (lastMessages.length - 1);
        const hasDivider = (index !== lastItemIndex);
        const {
            avatar,
            userName,
            date,
            content,
            avatarTitle,
        } = message;
        return (
            <Message
                key={key}
                avatarIcon={<PersonIcon />}
                avatarSrc={avatar}
                userName={userName}
                date={date}
                content={'El 01SEP19, se recibió información del CZGNB52, notificando comisión integrada por cuatro (4) efectivos de Tropa Profesional adscritos Desur-52, al mando del TTE Vivas Andrés, en labores de Patrullaje de Seguridad Ciudadana, en el sector El Viñedo, Parroquia San Cristóbal, Municipio Simón Bolívar, Estado Anzoátegui, efectuaron la recuperación de un (01) vehículo marca Kia, modelo Opirus, Placa XYZ-123, el cual había estaba reportado como robado.'}
                avatarTitle={avatarTitle}
                hasDivider={hasDivider} />
        );
    });
}

LastMessagesList.propTypes = {
    lastMessages: PropTypes.array.isRequired,
};
