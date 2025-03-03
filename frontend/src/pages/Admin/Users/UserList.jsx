import { Table, Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserList() {
    const [dataList, setDataList] = useState([]);
    const navigate = useNavigate();

    const columns = [
        {
          title: "Username",
          dataIndex: "username",
          key: "username"
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email"
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role"
        },
        {
            title: "Password",
            dataIndex: "password",
            key: "password"
        },
        {
          title: "Process",
          key: "process",
          render: (record) => (
              <>
                  <Button color="cyan" variant="solid" onClick={() => navigate(`/admin/users/update/${record._id}`)} style={{margin:"5px"}}>Update</Button>
                  <Button color="danger" variant="solid" onClick={() => deleteUser(record.email)}>Delete</Button>
              </>
          )
        }
      ];
      const onChange = (pagination, filters, sorter, extra) => {
        console.log("params", pagination, filters, sorter, extra);
      };

      const getUsers = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/users");
          if (response.ok) {
            const data = await response.json();
            setDataList(data);
          } else {
            console.log("Kullanıcıları getirirken bir sorun oluştu...");
          }
        } catch (error) {
          console.log("Sunucu hatası...", error);
        }
      };

      const deleteUser = async (userEmail) => {
        try {
          const response = await fetch(`http://localhost:5000/api/users/${userEmail}`, {
            method : "DELETE",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify({email : userEmail})
          });
          if(response.ok){
            console.log("Kullanıcı başarıyla silindi...");
            navigate("/admin/users");
          }
        } catch (error) {
          console.log("Sunucu hatası...", error);
        }
      }

      useEffect(() => {
        getUsers();
      }, [deleteUser]);
    
  return (
    <>
      <h1>User List</h1>
      <br /><hr /><br />
      <Table columns={columns} dataSource={dataList} onChange={onChange} />
    </>
  )
}

export default UserList
