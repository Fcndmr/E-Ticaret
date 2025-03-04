import { Button, Checkbox, Form, Input, InputNumber, Select } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
    const [categories, setCategories] = useState([]);
    const [form] = Form.useForm();
  const formLayout = "vertical";
  const navigate = useNavigate();

  const colorOptions = ["Red", "Blue", "Green", "White", "Black", "Brown"];
  const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];

  const getCategories = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/categories");
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          console.log("Kategorileri getirirken bir sorun oluştu...");
        }
      } catch (error) {
        console.log("Sunucu hatası...", error);
      }
  }

  const createProduct = async (values) => {
    const imageLinks = values.images.split("\n").map(link => link.trim());
    const { colors, sizes, ...restValue} = values;
    try {
        const response = await fetch("http://localhost:5000/api/products", {
            method : "POST",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify({
                ...values, colors, sizes, images : imageLinks
            })
        });
        if(response.ok){
            console.log("Ürün başarıyla oluşturuldu...");
            form.resetFields();
            navigate("/admin/products");
            console.log(restValue)
        }else{
            console.log("Ürün oluşturulurken bir hata oluştu...");
        }
    } catch (error) {
        console.log("Sunucu hatası...", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, [])
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
        onFinish={createProduct}
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
        <Form.Item label="Product Sizes" name="sizes" rules={[{required : true, message : "Select product sizes..."}]}>
          <Checkbox.Group options={sizeOptions}/>
        </Form.Item>
        <Form.Item label="Product Stock Code" name="stockCode" rules={[{required : true, message : "Product Stock Code enter..."}]}>
          <Input placeholder="Product Stock Code enter..." />
        </Form.Item>
        <Form.Item label="Category" name="category" rules={[{required : true, message : "Select Category..."}]}>
            <Select>
            {
                categories.map(category => (<Select.Option key={category._id} value={category._id}>{category.name}</Select.Option>))
            }
            </Select>
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
