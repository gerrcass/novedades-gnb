import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Spinner from 'react-rainbow-components/components/Spinner';
import {
    ShoppingCartIcon,
    UsersIcon,
    LikeIcon,
    ErrorIcon,
} from '../../components/icons';
import ListCard from './listCard';
import ChartsSection from './chartsSection';
import LastMessagesList from './lastMessagesList';
import NewUsersList from './newUsersList';
import PageHeader from '../../components/PageHeader';
import Tile from '../../components/Tile';
import fetchDashboardData from '../../redux/actions/dashboard';
import './styles.css';

import gmvaa from '../../images/gmavv.jpg';

function ContentPage(props) {
    const {
        totals: {
            orders,
            users,
            followers,
            errors,
            successfulyOrdersAmount,
            totalUsers,
            followersActive,
        },
        chartsData,
        lastMessages,
        newUsers,
        isLoading,
    } = props;

    if (isLoading) {
        return <Spinner size="large" />;
    } return (
        <div>
            <section className="react-rainbow-admin-dashboard_section rainbow-align-content_space-between rainbow-p-top_large">
                <Tile
                    title="Novedades"
                    label={873}
                    icon={<i class="fa fa-bell" style={{fontSize:'40px',color:'#1DE9B6'}}></i>} />

                <Tile
                    title="GMAVV"
                    label={126}
                    icon={<img src={gmvaa} alt="GMAVV" style={{width:'40px'}}/>} />
                <Tile
                    title="Orden Público"
                    label={67}
                    icon={<i class="fa fa-bullhorn" style={{fontSize:'40px',color:'#F7076A'}}></i>} />

                <Tile
                    title="Fuerza de Choque"
                    label={11}
                    icon={<i class="fa fa-plug" style={{fontSize:'40px',color:'#FE4849'}}></i>} />
            </section>

            <ChartsSection
                chartsData={chartsData}
                successfulyOrdersAmount={successfulyOrdersAmount}
                totalUsers={totalUsers}
                followersActive={followersActive} />

            <section style={{alignItems:'flex-start'}} className="react-rainbow-admin-dashboard_section rainbow-align-content_space-between rainbow-p-top_large">
                <ListCard
                    title="Últimas novedades"
                    component={<LastMessagesList lastMessages={lastMessages} />}
                    footerLink={(
                        <Link className="react-rainbow-admin-dashboard_list-card--footer-link rainbow-color_brand" to="/messages">
                            Ver todos los mensajes
                        </Link>
                    )} />

                <ListCard
                    title="Últimas incautaciones"
                    component={<NewUsersList newUsers={newUsers} />}
                    footerLink={(
                        <Link className="react-rainbow-admin-dashboard_list-card--footer-link rainbow-color_brand" to="/pages/users">
                            Ver todas las incautaciones
                        </Link>
                    )} />
            </section>
        </div>
    );
}

ContentPage.propTypes = {
    totals: PropTypes.object.isRequired,
    chartsData: PropTypes.object.isRequired,
    lastMessages: PropTypes.array.isRequired,
    newUsers: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

class Dashboard extends Component {
    componentDidMount() {
        const { fetchDashboardData } = this.props;
        fetchDashboardData();
    }

    render() {
        return (
            <div className="react-rainbow-admin-dashboard_view-port">
                <PageHeader
                    title="Tablero de Control"
                    description="Sistema de Gestión de Novedades en tiempo real - REDIOR." />
                <ContentPage {...this.props} />
            </div>
        );
    }
}

Dashboard.propTypes = {
    fetchDashboardData: PropTypes.func.isRequired,
};

function stateToProps(state) {
    return state.dashboard;
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        fetchDashboardData,
    }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(Dashboard);
