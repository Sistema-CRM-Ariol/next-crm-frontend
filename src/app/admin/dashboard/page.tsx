import { getClientsStats } from '@/modules/clients';
import { NewClientsChart } from '../../../modules/clients/components/charts/NewClientsChart';

export default async function DashboardPage() {

    const { data } = await getClientsStats('monthly')

    return (

        <div>
            <h1>Hello Page</h1>
            {/* <div id="chart"></div> */}
            <NewClientsChart dates={ data!.dates } numberOfClients={data!.numberOfClients}></NewClientsChart>
        </div>
    );
}