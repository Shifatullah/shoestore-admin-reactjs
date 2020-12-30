import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 4 },
  };

  const { TextArea } = Input;

  const tailLayout = {
    wrapperCol: { offset: 4, span: 4 },
  };

function Products(){

    return (<div>
        <Form {...layout}>        
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="code" label="Code" rules={[{ required: true }]} wrapperCol={{ ...layout.wrapperCol, span: 2 }}>
                <Input/>
            </Form.Item>
            <Form.Item name="shortDescription" label="Short Description" rules={[{ required: true }]}>
                <Input/>
            </Form.Item>
            <Form.Item name="longDescription" label="Long Description" rules={[{ required: true }]}>
                <TextArea autoSize={{ minRows: 4, maxRows: 6 }}/>
            </Form.Item>
            <Form.Item name="cost" label="Cost" rules={[{ required: true }]}>
                <InputNumber/>
            </Form.Item>
            <Form.Item name="stock" label="Stock" rules={[{ required: true }]}>
                <InputNumber/>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" shape="round">Save</Button>                
                <Button shape="round">Cancel</Button>
            </Form.Item>
        </Form>        
    </div>);
}

export default Products;