import Head from "next/head";

import SidebarLayout from "../components/SideBarLayout";
import EventsComponent from "../components/Events";

const Events = () => {
  return (
    <>
      <Head>
        <title>Eventos - Portal Tricordiano</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <SidebarLayout currentPage="Eventos">
        <EventsComponent />
      </SidebarLayout>
    </>
  );
};

export default Events;
