import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

function UpdateCategory() {
    const [form] = Form.useForm();
  const formLayout = "vertical";
  const navigate = useNavigate();
  
  const createCategory = async (values) => {
    try {
        const response = await fetch("http://localhost:5000/api/categories", {
            method : "POST",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify(values)
        });
        if(response.ok){
            console.log("Kategori başarıyla oluşturuldu...");
            navigate("/admin/categories");
        }else{
            console.log("Kategori oluşturulurken bir hata oluştu...");
        }
    } catch (error) {
        console.log("Sunucu hatası...", error);
    }
  };

  return (
    <>
    <h1>Update Category Panel</h1>
    <br /><hr /><br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={createCategory}
      >
        <Form.Item label="Category Name" name="name">
          <Input placeholder="Category name enter..." />
        </Form.Item>
        <Form.Item label="Category Image" name="img">
          <Input placeholder="Category image enter..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Update</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default UpdateCategory
