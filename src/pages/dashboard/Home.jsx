import React from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import DeveloperTeam from "./img/programmers.svg";
const Home = () => {
  return (
    <React.Fragment>
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <SideBar />
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <TopBar />
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">
                  Proyecto
                </h1>
              </div>

              {/* Content page */}
              {/* <!-- Content Row --> */}
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="card shadow-lg border-0 rounded-lg">
                    <div className="card-header">
                      <h4
                        className="
                        mb-0
                        m-0
                        text-primary
                      "
                      >
                        Alcance
                      </h4>
                    </div>
                    <div className="card-body">
                      <p>
                        Aplicacion de gestion de tareas
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card shadow-lg border-0 rounded-lg">


                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
    </React.Fragment>
  );
};

export default Home;
