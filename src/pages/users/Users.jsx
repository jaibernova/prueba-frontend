import React from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import UsersTable from "../../components/UsersTable";
import ModalCreateUsers from "../../components/ModalCreateUsers";

const Users = () => {
  return (
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
            <div className="d-sm-flex align-items-center justify-content-left mb-4">
              <h1 className="h3 mb-0 text-gray-800">
                Usuarios &nbsp;
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalFormUsuarios"
                >
                  <i className="fas fa-plus-circle" aria-hidden="true"></i>{" "}
                  Nuevo{" "}
                </button>
              </h1>
            </div>

            <UsersTable />

            {/* Content page */}
            <ModalCreateUsers></ModalCreateUsers>
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
        {/* <!-- End of Main Content --> */}
      </div>
      {/* <!-- End of Content Wrapper --> */}
    </div>
  );
};

export default Users;
