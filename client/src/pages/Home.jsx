import { useState, useTransition } from 'react';

// import { Navigate } from "react-router-dom";
// import Auth from "../utils/auth";

// import { useQuery } from "@apollo/client";

//import stylesheet
import './Home.css';

//import logo
import koi from '../assets/images/logoblue.png';

import TabButton from '../components/Hometabs/TabButton.jsx';
import AboutTab from '../components/Hometabs/AboutTab.jsx';
import ContactTab from '../components/Hometabs/ContactTab.jsx';
import TeamTab from '../components/Hometabs/TeamTab.jsx';

const Home = () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <main>
      <div className="d-flex justify-content-center">
        <img src={koi} className="icon"></img>{' '}
      </div>
      <div className="d-flex flex-column justify-content-center">
        <div className="d-flex justify-content-center gap-3 mt-5">
          <TabButton
            isActive={tab === 'about'}
            onClick={() => selectTab('about')}>
            What is KOI?
          </TabButton>
          <TabButton
            isActive={tab === 'team'}
            onClick={() => selectTab('team')}>
            Meet the Team
          </TabButton>
          <TabButton
            isActive={tab === 'signup'}
            onClick={() => selectTab('signup')}>
            Sign-Up Here
          </TabButton>
        </div>
        <hr />
        {tab === 'about' && <AboutTab />}
        {tab === 'team' && <TeamTab />}
        {tab === 'signup' && <ContactTab />}
      </div>
    </main>
  );
  // if (!Auth.loggedIn()) {
  //   return <Navigate to="/login" />;
  // }

  // return (
  //   <main className="background">
  //     <div className=" d-flex justify-content-center">
  //       <img src={koi}></img>
  //     </div>
  //     <div>
  //       <ul class="nav nav-tabs">
  //         <li class="nav-item">
  //           <a class="nav-link active" href="#">
  //             What is KOI?
  //           </a>
  //         </li>
  //         <li class="nav-item">
  //           <a class="nav-link" href="#">
  //             Meet the Team
  //           </a>
  //         </li>
  //         <li class="nav-item">
  //           <a class="nav-link" href="#">
  //             Sign-Up
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //   </main>
  // );
};

export default Home;
