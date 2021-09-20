import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';



const layout = {
  wrapperCol: {
    span: 24,
  },
};

function Login() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
  alert("Some Error occurred");
  };

  return (
    <div className="_midCenter _flex _justCenter h100_vh">
         <Form {...layout}  className="loginContainer _midCenter _flex _justCenter _flex_d_C"  name="basic"   initialValues={{ remember: true,}}  onFinish={onFinish}  onFinishFailed={onFinishFailed} >
          
         <h1 className="LoginH1">Sign In To Villa</h1>

          <Form.Item name="username" rules={[ { required: true, message: 'Please input your username!',}, ]} >
            <Input placeholder="Username"/>
          </Form.Item>

          <Form.Item  name="password" rules={[ { required: true,message: 'Please input your password!', }, ]} >
            <Input.Password placeholder="password"/>
          </Form.Item>

          <Form.Item {...layout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item className="a-right">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
    </div>
  );
}

export default Login;