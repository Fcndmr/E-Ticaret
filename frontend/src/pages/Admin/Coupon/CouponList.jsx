import { Table, Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CouponList() { 
    const [dataList, setDataList] = useState([]);
    const navigate = useNavigate();

    const columns = [
        {
          title: "Code",
          dataIndex: "code",
          key:"code"
        },
        {
          title: "Discount",
          dataIndex: "discount",
          key: "discount"
        },
        {
            title: "Expire",
            dataIndex: "expire",
            key:"expire"
        },
        {
            title: "Count",
            dataIndex: "count",
            key:"count"
        },
        {
          title: "Process",
          key: "process",
          render: (record) => (
              <>
                  <Button color="cyan" variant="solid" onClick={() => navigate(`/admin/coupons/update/${record._id}`)} style={{margin:"5px"}}>Update</Button>
                  <Button color="danger" variant="solid" onClick={() => deleteCoupon(record._id)}>Delete</Button>
              </>
          )
        }
      ];
    
    const onChange = (pagination, filters, sorter, extra) => {
        console.log("params", pagination, filters, sorter, extra);
    };

    const getCoupons = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/coupons");
          if (response.ok) {
            const data = await response.json();
            setDataList(data);
          } else {
            console.log("Kuponları getirirken bir sorun oluştu...");
          }
        } catch (error) {
          console.log("Sunucu hatası...", error);
        }
      };
    
      const deleteCoupon = async (couponId) => {
        try {
          const response = await fetch(`http://localhost:5000/api/coupons/${couponId}`, {
            method : "DELETE",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify({_id : couponId})
          });
          if(response.ok){
            console.log("Kupon başarıyla silindi...");
            navigate("/admin/coupons");
          }
        } catch (error) {
          console.log("Sunucu hatası...", error);
        }
      }

    useEffect(() => {
        getCoupons();
    }, [deleteCoupon]);

  return (
    <>
      <h1>Coupon List</h1>
      <br /><hr /><br />
      <Table columns={columns} dataSource={dataList} onChange={onChange} />
    </>
  )
}

export default CouponList
