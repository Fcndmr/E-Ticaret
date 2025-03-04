import { Button, Checkbox, Form, Input, InputNumber } from "antd";
//import { useNavigate } from "react-router-dom";

function CreateProduct() {
    const [form] = Form.useForm();
  const formLayout = "vertical";
  //const navigate = useNavigate();

  const colorOptions = ["Red", "Blue", "Green", "White", "Black", "Brown"];
  const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];
  return (
    <>
      <h1>Create Product Panel</h1>
      <br />
      <hr />
      <br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
          colors : ["Black", "White"],
          sizes : ["S", "M"]
        }}
        // onFinish={createCategory}
      >
        <Form.Item label="Product Name" name="name" rules={[{required : true, message : "Product name enter..."}]}>
          <Input placeholder="Product name enter..." />
        </Form.Item>
        <Form.Item label="Product Images" name="images" rules={[{required : true, message : "Product images enter..."}]}>
          <Input.TextArea placeholder="Product images enter..." rows={5}/>
        </Form.Item>
        <Form.Item label="Product Price" name="price" rules={[{required : true, message : "Product price enter..."}]}>
          <InputNumber/>
        </Form.Item>
        <Form.Item label="Product Description" name="description" rules={[{required : true, message : "Product description enter..."}]}>
          <Input.TextArea placeholder="Product description enter..." rows={5}/>
        </Form.Item>
        <Form.Item label="Product Stock" name="stock" rules={[{required : true, message : "Product stock enter..."}]}>
          <InputNumber/>
        </Form.Item>
        <Form.Item label="Product Discount" name="discount" rules={[{required : true, message : "Product discount enter..."}]}>
          <InputNumber/>
        </Form.Item>
        <Form.Item label="Product Colors" name="colors" rules={[{required : true, message : "Product colors enter..."}]}>
          <Checkbox.Group options={colorOptions}/>
        </Form.Item>
        <Form.Item label="Product Sizes" name="sizes" rules={[{required : true, message : "Product sizes enter..."}]}>
          <Checkbox.Group options={sizeOptions}/>
        </Form.Item>
        <Form.Item label="Product Stock Code" name="stockCode" rules={[{required : true, message : "Product Stock Code enter..."}]}>
          <Input placeholder="Product Stock Code enter..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateProduct;
