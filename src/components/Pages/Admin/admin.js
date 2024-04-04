import * as React from "react";
import { Admin, Resource } from "react-admin";
import { ListProducts, editProduct, CreateProduct } from "./categories";
import { AppBar, Layout } from "react-admin";
import { useNavigate } from "react-router-dom";
import { dataProvider } from "./dataProvider";


export default function AdminPage() {
  const navigate = useNavigate();

  const MyAppBar = () => (
    <AppBar position="absolute">
      <div
        onClick={() => {
          localStorage.removeItem("user");
          alert("Bạn đã đăng xuất");
          navigate("/login");
        }}
        className="float-right px-4 py-2 rounded-lg bg-white text-cyan-700 hover:bg-cyan-100 hover:cursor-grab"
      >
        Logout
      </div>
    </AppBar>
  );

  const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;
  return (
    <div>
      <Admin
        basename="/admin"
        dataProvider={dataProvider}
        layout={MyLayout}
      >
        <Resource
          name="employees"
          list={ListProducts}
          edit={editProduct}
          create={CreateProduct}
        />
      </Admin>
    </div>
  );
}
