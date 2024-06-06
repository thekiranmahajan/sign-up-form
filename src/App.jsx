import { Button, Checkbox, Form, Input } from "antd";
import leftImg from "./images/leftImg.jpg";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const App = () => (
  <div className="flex justify-center items-center w-[1440px] h-[1024px] ">
    <img
      className="grayscale object-contain h-[1147px] w-[856px]"
      src={leftImg}
      alt="leftImg"
    />

    <div className="w-[689px] h-[1024px] p-20">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Sign Up</h2>
        <h3 className="text-lg font-bold text-[#17B582]">
          <span className="text-black">or</span> Sign In
        </h3>
      </div>

      <div className="w-[626px] h-[465.84px] mt-20">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 626,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Re-Enter the password" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" shape="round">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  </div>
);
export default App;
