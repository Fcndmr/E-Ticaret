import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateCoupon() {
    const [form] = Form.useForm();
    const formLayout = "vertical";
    const params = useParams();
    const navigate = useNavigate();
    const couponId = params.id;

    const getCouponById = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/coupons/${couponId}`);
            if(response.ok){
                const data = await response.json();
                if(data){
                    form.setFieldsValue({
                        code : data.code,
                        discount : data.discount,
                        expire : data.expire,
                        count : data.count,
                        _id : couponId
                    })
                    console.log(form.getFieldsValue())
                }
            }          
        } catch (error) {
            console.log("Sunucu hatası...", error);
        }
    }

    useEffect(() => {
        getCouponById()
    });

    const updateCoupon = async (values) => {
        try {
            const response = await fetch(`http://localhost:5000/api/coupons/${couponId}`, {
                method : "PUT",
                headers : { "Content-Type" : "application/json"},
                body : JSON.stringify(values)
            });
            if(response.ok){
                console.log("Kupon başarıyla güncellendi...");
                navigate("/admin/coupons");
            }else{
                console.log("Kupon güncellenirken bir hata oluştu...");
            }
        } catch (error) {
            console.log("Sunucu hatası...", error);
        }
    };
  return (
    <>
      <h1>Update Coupon Panel</h1>
    <br /><hr /><br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={updateCoupon}
      >
        <Form.Item label="Coupon Code" name="code">
          <Input placeholder="Coupon code enter..." />
        </Form.Item>
        <Form.Item label="Coupon Discount" name="discount">
          <Input placeholder="Coupon discount enter..." />
        </Form.Item>
        <Form.Item label="Coupon Expire" name="expire">
          <Input placeholder="Coupon expire enter..." />
        </Form.Item>
        <Form.Item label="Coupon Count" name="count">
          <Input placeholder="Coupon count enter..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Update</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default UpdateCoupon


