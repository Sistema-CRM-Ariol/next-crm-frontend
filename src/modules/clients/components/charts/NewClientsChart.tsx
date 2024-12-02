"use client"
import Chart from 'react-apexcharts';
import { formatDate } from '../../../../lib/format-date';

interface Props {
    dates: string[];
    numberOfClients: number[]
}


export const NewClientsChart = ({ dates, numberOfClients }: Props) => {

    const datesFormat = [];

    dates.map(dates => {
        datesFormat.push([...])
    })

    const options: ApexCharts.ApexOptions = {
        chart: {
            id: "new-clients-chart",
        },
        xaxis: {
            categories: dates, // Fechas dinámicas desde el servidor
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100],
            },
        },
    };

    const series = [
        {
            name: "Nuevos Usuarios",
            data: numberOfClients, // Datos directamente desde el servidor
        },
    ];

    return (
        <div className='bg-white p-4 rounded-md max-w-md'>

            <Chart
                options={options}
                series={series}
                type="area"
            />
        </div>
    )
}
