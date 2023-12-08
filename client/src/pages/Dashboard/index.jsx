import Header from '../../components/Header';
import InvoiceCard from '../../components/InvoiceCard';
import Auth from '../../utils/auth';
import './style.css';

import { useQuery } from '@apollo/client';
import {QUERY_INVOICES_BY_BUSINESS} from '../../utils/queries';

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_INVOICES_BY_BUSINESS);
  const invoices = data?.invoices || [];

  console.log(invoices);

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  return (
    <main className="min-vh-100 min-vw-100 bg-light">
      <Header />
      <div className="container">
        <InvoiceCard />
      </div>
    </main>
  );
};

export default Dashboard;
