import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

function CreateCoupon() {
    const [form] = Form.useForm();
    const formLayout = "vertical";
    const navigate = useNavigate();

    const createCoupon = async (values) => {
        try {
            const response = await fetch("http://localhost:5000/api/coupons", {
                method : "POST",
                headers : { "Content-Type" : "application/json"},
                body : JSON.stringify(values)
            });
            if(response.ok){
                console.log("Kupon başarıyla oluşturuldu...");
                navigate("/admin/coupons");
            }else{
                console.log("Kupon oluşturulurken bir hata oluştu...");
            }
        } catch (error) {
            console.log("Sunucu hatası...", error);
        }
      };
    
  return (
    <>
      <h1>Create Coupon Panel</h1>
    <br /><hr /><br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={createCoupon}
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
          <Button type="primary" htmlType="submit">Create</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default CreateCoupon
