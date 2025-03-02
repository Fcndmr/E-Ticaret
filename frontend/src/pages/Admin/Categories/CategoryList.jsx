import { Table, Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function CategoryList() {
  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate();

  const columns = [
    {
      title: "Image",
      dataIndex: "img",
      width: "25%",
      render: (img, record) => (<img alt={`/${record.img}`} src={`/${record.img}`} />)
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Process",
      key: "process",
      render: (record) => (
          <>
              <Button color="cyan" variant="solid" onClick={() => navigate(`/admin/categories/update/${record._id}`)} style={{margin:"5px"}}>Update</Button>
              <Button color="danger" variant="solid" onClick={() => deleteCategory(record._id)}>Delete</Button>
          </>
      )
    }
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const getCategories = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/categories");
      if (response.ok) {
        const data = await response.json();
        setDataList(data);
      } else {
        console.log("Kategorileri getirirken bir sorun oluştu...");
      }
    } catch (error) {
      console.log("Sunucu hatası...", error);
    }
  };

  const deleteCategory = async (categoryId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/categories/${categoryId}`, {
        method : "DELETE",
        headers : { "Content-Type" : "application/json"},
        body : JSON.stringify({_id : categoryId})
      });
      if(response.ok){
        console.log("Kategori başarıyla silindi...");
        navigate("/admin/categories");
      }
    } catch (error) {
      console.log("Sunucu hatası...", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, [deleteCategory]);

  return (
    <>
      <h1>Category List</h1>
      <br /><hr /><br />
      <Table columns={columns} dataSource={dataList} onChange={onChange} />
    </>
  );
}

export default CategoryList;
