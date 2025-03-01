import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import PropTypes from "prop-types"
const { Header, Footer, Sider, Content } = Layout;
import {
  AppstoreOutlined,
  DashboardOutlined,
  UserOutlined,
  BarcodeOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

function AdminLayout({children}) {
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "DashBoard",
      path: "/admin",
      onClick: () => {
        navigate("/admin");
      },
    },
    {
      key: "2",
      icon: <AppstoreOutlined />,
      label: "Category",
      path: "/admin/category",
      children: [
        {
          key: "2-1",
          icon: <AppstoreOutlined />,
          label: "Add Category",
          path: "/admin/categories/create",
          onClick: () => {
            navigate("/admin/categories/create");
          },
        },
        {
          key: "2-2",
          icon: <AppstoreOutlined />,
          label: "Category List",
          path: "/admin/categories",
          onClick: () => {
            navigate("/admin/categories");
          },
        },
      ],
    },
    {
      key: "3",
      icon: <ShoppingOutlined />,
      label: "Product",
      path: "/admin/product",
      children: [
        {
          key: "3-1",
          icon: <ShoppingOutlined />,
          label: "Add Product",
          path: "/admin/products/create",
          onClick: () => {
            navigate("/admin/products/create");
          },
        },
        {
          key: "3-2",
          icon: <ShoppingOutlined />,
          label: "Product List",
          path: "/admin/products",
          onClick: () => {
            navigate("/admin/products");
          },
        },
      ],
    },
    {
      key: "4",
      icon: <UserOutlined />,
      label: "User",
      path: "/admin/user",
      children: [
        {
          key: "4-1",
          icon: <UserOutlined />,
          label: "Add User",
          path: "/admin/users/create",
          onClick: () => {
            navigate("/admin/users/create");
          },
        },
        {
          key: "4-2",
          icon: <UserOutlined />,
          label: "User List",
          path: "/admin/users",
          onClick: () => {
            navigate("/admin/users");
          },
        },
      ],
    },
    {
      key: "5",
      icon: <BarcodeOutlined />,
      label: "Coupon",
      path: "/admin/coupon",
      children: [
        {
          key: "5-1",
          icon: <BarcodeOutlined />,
          label: "Add Coupon",
          path: "/admin/coupons/create",
          onClick: () => {
            navigate("/admin/coupons/create");
          },
        },
        {
          key: "5-2",
          icon: <BarcodeOutlined />,
          label: "Coupon List",
          path: "/admin/coupons",
          onClick: () => {
            navigate("/admin/coupons");
          },
        },
      ],
    },
  ];
  return (
    <>
      <div className="admin-layout">
        <Layout style={{ minHeight: "100vh" }}>
          <Sider width="20%" style={{ color: "white" }}>
            <Menu
              mode="inline"
              theme="dark"
              items={items}
              style={{ width: "100" }}
            />
          </Sider>
          <Layout>
            <Header style={{ color: "white" }}>Header</Header>
            <Content style={{padding:"30px"}}>{children}</Content>
            <Footer style={{}}>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
}

export default AdminLayout;

AdminLayout.propTypes = {
  children : PropTypes.node
}