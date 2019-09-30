/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Input, ButtonIcon } from 'react-rainbow-components/components';
import {
    SearchIcon,
    ArrowUp,
    Attach,
    Emoji,
    Microphone,
    PhotoCamera,
    Picture,
} from '../../components/icons';
import Contacts from './contacts';
import filter from './filter';
import ChatMessages from './chatMessages';
import SelectedContact from './selectedContact';
import './styles.css';

const mensaje = "El 01SEP19, se recibió información del CZGNB52, notificando comisión integrada por cuatro (4) efectivos de Tropa Profesional adscritos Desur-52, al mando del TTE Vivas Andrés, en labores de Patrullaje de Seguridad Ciudadana, en el sector El Viñedo, Parroquia San Cristóbal, Municipio Simón Bolívar, Estado Anzoátegui, efectuaron la recuperación de un (01) vehículo marca Kia, modelo Opirus, Placa XYZ-123, el cual había estaba reportado como robado."
const contacts = [
    {
        name: 'Saray',
        lastSeenDate: '8:30 am',
        lastMessage: `${mensaje}`,
        photoUrl: '/assets/images/user2.jpg',
        isOnline: true,
    },
    {
        name: 'Leo',
        lastSeenDate: '5:30 pm',
        lastMessage: `${mensaje}`,
        photoUrl: '/assets/images/user1.jpg',
        isOnline: true,
    },
    {
        name: 'Rey',
        lastSeenDate: '10:15 pm',
        lastMessage: `${mensaje}`,
        photoUrl: '/assets/images/user3.jpg',
    },
    {
        name: 'Jose',
        lastSeenDate: '8:45 am',
        lastMessage: `${mensaje}`,
        isOnline: true,
    },
    {
        name: 'Juan',
        lastSeenDate: 'yesterday',
        lastMessage: `${mensaje}`,
    },
    {
        name: 'Tahimi',
        lastSeenDate: 'yesterday',
        lastMessage: `${mensaje}`,
    },
    {
        name: 'Pepe',
        lastSeenDate: 'yesterday',
        lastMessage: `${mensaje}`,
    },
];

const messages = [
    {
        photoUrl: '/assets/images/user2.jpg',
        text: 'Terminado patrullaje en la zona. Cambio',
        sentDate: '1:06 PM',
    },
    {
        photoUrl: '/assets/images/user4.jpg',
        text: 'En cuenta',
        isUser: true,
        isChecked: true,
        sentDate: '1:07 PM',
    },
    {
        photoUrl: '/assets/images/user2.jpg',
        text: '12 Abatidos, zona en control.',
        sentDate: '1:19 PM',
    },
    {
        photoUrl: '/assets/images/user4.jpg',
        text: 'ok',
        isUser: true,
        sentDate: '1:22 PM',
    },
];

export default class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            selectedContactIndex: 0,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    getContacts() {
        const { searchTerm } = this.state;
        return filter(searchTerm, contacts);
    }

    getSelectedContact() {
        const { selectedContactIndex } = this.state;
        return contacts[selectedContactIndex];
    }

    handleOnChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    handleOnClick(selectedIndex) {
        this.setState({ selectedContactIndex: selectedIndex });
    }

    render() {
        const { searchTerm, selectedContactIndex } = this.state;
        const {
            photoUrl,
            name,
            isOnline,
        } = this.getSelectedContact();
        return (
            <div className="react-rainbow-admin-messages">
                <div className="react-rainbow-admin-messages_contacts-container">
                    <Input
                        className="react-rainbow-admin-messages_contacts-search"
                        label="Find contact"
                        type="search"
                        hideLabel
                        placeholder="Encontrar contacto"
                        value={searchTerm}
                        onChange={this.handleOnChange}
                        icon={<SearchIcon />} />
                    <div className="react-rainbow-admin-messages_contacts">
                        <Contacts
                            contacts={this.getContacts()}
                            onClick={this.handleOnClick}
                            selectedContactIndex={selectedContactIndex} />
                    </div>
                </div>
                <div className="react-rainbow-admin-messages_body">
                    <SelectedContact
                        photoUrl={photoUrl}
                        name={name}
                        isOnline={isOnline} />
                    <span className="react-rainbow-admin-messages_body--divider" />
                    <div className="react-rainbow-admin-messages_body-messages">
                        <ChatMessages messages={messages} />
                    </div>
                    <div className="react-rainbow-admin-messages_input-container">
                        <div className="react-rainbow-admin-messages_input-options">
                            <ButtonIcon size="large" icon={<Emoji />} variant="border-filled" />
                            <ButtonIcon size="large" icon={<Attach />} variant="border-filled" />
                            <ButtonIcon size="large" icon={<Picture />} variant="border-filled" />
                            <ButtonIcon size="large" icon={<PhotoCamera />} variant="border-filled" />
                            <ButtonIcon size="large" icon={<Microphone />} variant="border-filled" />
                        </div>
                        <Input
                            className="react-rainbow-admin-messages_input"
                            label="Say something"
                            hideLabel
                            placeholder="Comentar algo"
                            icon={<ArrowUp />}
                            iconPosition="right" />
                    </div>
                </div>
            </div>
        );
    }
}
