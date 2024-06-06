import { Button, Form, Input } from "antd";
import leftImg from "./images/left-img.svg";
import logo from "./images/logo.svg";

const App = () => (
  <div className="h-screen w-full flex">
    <div className="h-full w-1/2 bg-black">
      <img
        className="grayscale h-full w-full object-cover"
        src={leftImg}
        alt="left-img"
      />
    </div>
    <div className="h-full w-1/2 flex justify-center ">
      <div className=" mt-14 bg-gray-500 w-[85%] h-2/3 flex flex-col justify-between">
        <img className="h-10 w-14" src={logo} alt="logo" />
        <Form className=" w-full py-4 px-10 bg-red-400 flex flex-col">
          <Form.Item>
            <Input
              className="rounded-full h-10 w-full px-4 py-3 border border-[#C4C4C4 outline-none]"
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item>
            <Input.Password
              className="rounded-full h-10 w-full px-4 py-3 border border-[#C4C4C4 outline-none]"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Input.Password
              className="rounded-full h-10 w-full px-4 py-3 border border-[#C4C4C4 outline-none]"
              placeholder="Re-enter your Password"
            />
          </Form.Item>

          <Button
            className="bg-[#17B582] h-8 outline-none"
            type="primary"
            shape="round"
            size="small"
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  </div>
);

export default App;
