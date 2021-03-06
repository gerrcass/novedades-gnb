import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-rainbow-components/components/Card';
import Chart from 'react-rainbow-components/components/Chart';
import Badge from 'react-rainbow-components/components/Badge';
import Dataset from 'react-rainbow-components/components/Dataset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default class ChartsSection extends PureComponent {
    render() {
        const {
            chartsData,
            successfulyOrdersAmount,
            totalUsers,
            followersActive,
        } = this.props;
        return (
            <section className="react-rainbow-admin-dashboard_section rainbow-align-content_space-between rainbow-p-top_large">
                <Card className="react-rainbow-admin-dashboard_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="rainbow-flex rainbow-justify_spread">
                        <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-bottom_medium">ZODI <strong>Anzoategui</strong>     {/* +{chartsData.successfulyOrders.value.reduce((acc,cur) => acc+cur,0) }*/}</h1>
                        <Badge variant="brand" className="react-rainbow-admin-dashboard_badge--success">
                            <FontAwesomeIcon icon={faArrowUp} pull="left" />
                        20.5%
                        </Badge>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                    Total de Novedades
                    </p>
                    <Chart className="rainbow-p-top_x-small" showLegend={false} labels={['Enero','Febrero','Marzo','Abril','Mayo']} type="line">
                        <Dataset values={chartsData.successfulyOrders.value} backgroundColor="#1de9b6" borderColor="#1de9b6" />
                    </Chart>
                </Card>

                <Card className="react-rainbow-admin-dashboard_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="rainbow-flex rainbow-justify_spread">
                        <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-bottom_medium">ZODI <strong>Monagas</strong></h1>
                        <Badge variant="brand" className="react-rainbow-admin-dashboard_badge--error">
                            <FontAwesomeIcon icon={faArrowDown} pull="left" />
                        32.5%
                        </Badge>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                    Total de Novedades
                    </p>
                    <Chart className="rainbow-p-top_x-small" showLegend={false} labels={chartsData.totalUsers.labels} type="line">
                        <Dataset values={[52,27,47,62,87]} backgroundColor="#01b6f5" borderColor="#01b6f5" />
                    </Chart>
                </Card>

                <Card className="react-rainbow-admin-dashboard_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="rainbow-flex rainbow-justify_spread">
                        <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-bottom_medium">Comparación</h1>
                        <Badge variant="brand" className="react-rainbow-admin-dashboard_badge--success">
                            <FontAwesomeIcon icon={faArrowUp} pull="left" />
                        24.5%
                        </Badge>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                    Total de Novedades (ultima semana)
                    </p>
                    <Chart className="rainbow-p-top_x-small" labels={['LUN','MAR','MIE','JUE','VIE','SAB','DOM']} type="line">
                        <Dataset title="ZODI SUCRE" values={chartsData.followersActive.googleValue} backgroundColor="#fe4849" borderColor="#fe4849" />
                        <Dataset title="FAJA" values={chartsData.followersActive.facebookValue} backgroundColor="#3c5997" borderColor="#3c5997" />
                    </Chart>
                </Card>
            </section>
        );
    }
}

ChartsSection.propTypes = {
    chartsData: PropTypes.object.isRequired,
    successfulyOrdersAmount: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number,
    ]).isRequired,
    totalUsers: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number,
    ]).isRequired,
    followersActive: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number,
    ]).isRequired,
};
