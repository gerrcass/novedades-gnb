import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dataset from 'react-rainbow-components/components/Dataset';
import Spinner from 'react-rainbow-components/components/Spinner';
import ChartCard from './chartCard';
import {
    BellIcon,
    SalesIcon,
    CompletedTasksIcon,
    IncompletedTasksIcon,
} from '../../components/icons';

export default class ContentPage extends PureComponent {
    render() {
        const {
            isLoading,
            lineCharts,
            areaCharts,
            barCharts,
            horizontalBarCharts,
            radarCharts,
            polarAreaCharts,
            pieCharts,
            doughnutCharts,
        } = this.props;

        if (isLoading) {
            return <Spinner size="large" />;
        } return (
            <div>
                <section className="react-rainbow-admin-charts_section rainbow-p-top_large">
                    <ChartCard
                        title="Gran Misión A Toda Vida Venezuela"
                        subtitle="Criminalidad y Seguridad Ciudadana"
                        chartTitle="Abatidos Vs Detenidos"
                        chartLabels={['Enero','Febrero','Marzo','Abril','Mayo','Junio']}
                        chartType="line"
                        maintainAspectRatio={false}
                        type="line"
                        className="react-rainbow-admin-charts_chart-card"
                        chartClassName="react-rainbow-admin-charts_chart">
                        <Dataset
                            title="Abatidos"
                            values={lineCharts.dataSet[0].values}
                            borderColor="#fe4849"
                            backgroundColor="#fe4849" />
                        <Dataset
                            title="Detenidos"
                            values={lineCharts.dataSet[1].values}
                            borderColor="#01b6f5"
                            backgroundColor="#01b6f5" />
                    </ChartCard>
                </section>
                <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                    <ChartCard
                        title="Vehículos Solicitados"
                        subtitle="Total / mes"
                        chartTitle="Novedades Asociadas"
                        icon={<BellIcon />}
                        chartLabels={['Enero','Febrero','Marzo','Abril','Mayo','Junio']}
                        chartType="line">
                        <Dataset
                            title="Yellow"
                            values={lineCharts.dataSet[0].values}
                            borderColor="#f2c302"
                            backgroundColor="#ffcc00"
                            type="line" />
                    </ChartCard>
                    <ChartCard
                        title="Vehículos Recuperados"
                        subtitle="Total / mes"
                        chartTitle="Novedades Asociadas"
                        icon={<SalesIcon />}
                        chartLabels={['Enero','Febrero','Marzo','Abril','Mayo','Junio']}
                        chartType="line"
                        chartDisableCurves>
                        <Dataset
                            title="Green"
                            values={areaCharts.dataSet[0].values}
                            borderColor="#8ef4da"
                            backgroundColor="rgba(142,244,218,0.65)"
                            type="line"
                            fill />
                    </ChartCard>
                </section>
                <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                    <ChartCard
                        title="Orden público"
                        subtitle="Actividad pública y clima político"
                        chartTitle="NOVEDADES ASOCIADAS"
                        icon={<CompletedTasksIcon />}
                        chartLabels={['Enero','Febrero','Marzo','Abril','Mayo','Junio']}
                        chartType="bar">
                        <Dataset
                            key="Red"
                            title="Manifestaciones"
                            values={barCharts.dataSet[0].values}
                            backgroundColor="#fe4849" />
                        <Dataset
                            key="Orange"
                            title="Saqueos"
                            values={barCharts.dataSet[1].values}
                            backgroundColor="#ff6837" />
                        <Dataset
                            key="Yellow"
                            title="Protestas Violentas"
                            values={barCharts.dataSet[2].values}
                            backgroundColor="#ffcc00" />
                        <Dataset
                            key="Green"
                            title="Solicitud de Apoyo"
                            values={barCharts.dataSet[3].values}
                            backgroundColor="#1ad1a3" />
                    </ChartCard>
                    <ChartCard
                        title="GMAS"
                        subtitle="Apoyo Alimentos y Medicinas"
                        chartTitle="NOVEDADES ASOCIADAS"
                        icon={<IncompletedTasksIcon />}
                        chartLabels={['Enero','Febrero','Marzo','Abril','Mayo','Junio']}
                        chartType="horizontalBar">
                        <Dataset
                            key="Red"
                            title="Alimentos"
                            values={horizontalBarCharts.dataSet[0].values}
                            backgroundColor="#fe4849" />
                        <Dataset
                            key="Green"
                            title="Medicinas"
                            values={horizontalBarCharts.dataSet[1].values}
                            backgroundColor="#1ad1a3" />
                    </ChartCard>
                </section>
                <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                    <ChartCard
                        title="Novedades Ordinarias y Especiales"
                        subtitle="Cantidades en perspectiva"
                        chartTitle="NOVEDADES"
                        chartLabels={['Enero','Febrero','Marzo','Abril','Mayo','Junio']}
                        chartType="radar"
                        chartLegendPosition="right">
                        <Dataset
                            key="Yellow"
                            title="ROE"
                            values={radarCharts.dataSet[0].values}
                            backgroundColor="rgba(255, 214, 51, 0.44)"
                            fill />
                        <Dataset
                            key="Blue"
                            title="ROD"
                            values={radarCharts.dataSet[1].values}
                            backgroundColor="rgba(1,182,245,0.55)"
                            fill />
                    </ChartCard>
                    <ChartCard
                        title="Ilustración Ejemplo"
                        subtitle="Total XYZ"
                        chartTitle="GRAFICA AREA"
                        chartType="polarArea"
                        chartLabels={polarAreaCharts.labels}
                        chartLegendPosition="right">
                        <Dataset
                            title="Red"
                            values={polarAreaCharts.dataSet[0].values}
                            backgroundColor={['#ffcc00', '#00a6e0', '#1ad1a3', '#fe4849', '#ff6837']} />
                    </ChartCard>
                </section>
                <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                    <ChartCard
                        title="Ilustración Ejemplo"
                        subtitle="Total XYZ"
                        chartTitle="GRAFICA DE INCENDIOS"
                        chartLabels={['DOMESTICOS','INDUSTRIALES','FORESTALES']}
                        chartType="pie"
                        chartLegendPosition="right">
                        <Dataset
                            key="Red"
                            title={pieCharts.dataSet[0].title}
                            values={pieCharts.dataSet[0].values}
                            backgroundColor={['#ffcc00', '#1ad1a3', '#fe4849', '#ff6837']} />
                    </ChartCard>
                    <ChartCard
                        title="Ilustración Ejemplo"
                        subtitle="Total XYZ"
                        chartTitle="GRAFICA GMAVV"
                        chartLabels={['ROBOS','INCAUTACIONES','DETENCIONES','HOMICIDIOS']}
                        chartType="doughnut"
                        chartLegendPosition="right">
                        <Dataset
                            key="Red"
                            title="Red"
                            values={doughnutCharts.dataSet[0].values}
                            backgroundColor={['#ffcc00', '#1ad1a3', '#fe4849', '#ff6837']} />
                    </ChartCard>
                </section>
            </div>
        );
    }
}

ContentPage.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    lineCharts: PropTypes.object.isRequired,
    areaCharts: PropTypes.object.isRequired,
    barCharts: PropTypes.object.isRequired,
    horizontalBarCharts: PropTypes.object.isRequired,
    radarCharts: PropTypes.object.isRequired,
    polarAreaCharts: PropTypes.object.isRequired,
    pieCharts: PropTypes.object.isRequired,
    doughnutCharts: PropTypes.object.isRequired,
};
