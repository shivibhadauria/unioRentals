import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button,  Form, Input } from 'antd';
import {Link} from "react-router-dom";
import './login.css';
import logo from './unio.png';



export default function Login() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
  return (
    
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70vh'}}>
    <img src={logo} style={{width: 560,
height: 450,
top: 77,
left: 270,

zIndex:-1,
position:'absolute'
}} alt="Logo" />
    <div className="card card-container" style={{width:300 , padding:15,zIndex:4}}>
    <div style={{marginBottom:20}}><h3>LOGIN</h3></div>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
         <p style={{marginTop:10}}><Link to={"/register"}>New to UNIO? Create an Account</Link></p>
      </Form.Item>
      <Form.Item>
      <Button type="primary">
      <a className="login-form-forgot" href="">
          Request OTP
        </a>
     </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
    
  )
}
