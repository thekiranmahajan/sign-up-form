import { Button, Checkbox, Form, Input } from "antd";
import leftImg from "./images/left-img.svg";
import logo from "./images/logo.svg";

const App = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="h-screen w-full flex">
      <div className="h-full w-1/2 ">
        <img
          className="grayscale h-full w-full object-cover"
          src={leftImg}
          alt="left-img"
        />
      </div>
      <div className="h-full w-1/2 flex justify-center ">
        <div className=" mt-14  w-[85%] h-3/4 flex flex-col justify-between">
          <div className="flex flex-col h-full  justify-between pb-10">
            <img className="h-10 w-14" src={logo} alt="logo" />
            <div className="flex items-center justify-between px-10">
              <h2 className="text-2xl font-bold">Sign Up</h2>
              <h5 className="text-[#17B582] font-semibold">
                <span className="text-black">Or</span> Sign In
              </h5>
            </div>
          </div>
          <Form
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className=" w-full py-4 px-10  flex flex-col"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                className="rounded-full h-10 w-full px-4 py-3 border border-[#C4C4C4 outline-none]"
                placeholder="Email"
              />
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
              <Input.Password
                className="rounded-full h-10 w-full px-4 py-3 border border-[#C4C4C4 outline-none]"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="re-enter-password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                className="rounded-full h-10 w-full px-4 py-3 border border-[#C4C4C4 outline-none]"
                placeholder="Re-enter your Password"
              />
            </Form.Item>

            <Form.Item className="w-full">
              <div className="flex items-center justify-between  text-sm">
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox className="text-[#696969]">Remember me</Checkbox>
                </Form.Item>
                <Form.Item className="text-[#696969]">
                  Forgot Password?
                </Form.Item>
              </div>
              <Form.Item className="mt-5 mb-0">
                <Button
                  htmlType="submit"
                  className="bg-[#17B582] h-12 outline-none text-base font-semibold w-full mb-0"
                  type="primary"
                  shape="round"
                  size="small"
                >
                  Log In
                </Button>
              </Form.Item>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default App;
