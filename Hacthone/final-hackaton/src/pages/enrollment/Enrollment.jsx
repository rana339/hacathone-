import React from 'react';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Button, message } from 'antd';
import './Enrollment.css'
// import { Link } from 'react-router-dom';
import { auth } from '../../firebase/Config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from '../../firebase/Config';
import { doc, setDoc } from "firebase/firestore";
import Navbar from '../../components/navbar/Navbar';

const Enrollment = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {

    const { username, email, password } = values;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const useruid = user.uid;
        localStorage.setItem('currentuser', useruid)
        setDoc(doc(db, "users", user.uid), {
          username,
          email
        });
        message.success('Successfully account created');
        navigate('/home')
      })
      .catch((error) => {
        const errorMessage = error.message;
        message.error(errorMessage);
      });
  };

  return (
  <> <Navbar /> <div className='signup'>
  <Form name="normal_signup" className="signup-form" onFinish={onFinish} >
    <h1 className='heading-signup' id='sign-heading-signup' > Welcome to SMIT </h1>
    <Form.Item name="username"
      rules={[
        {
          required: true,
          message: 'Please input your Username!',
        },
      ]}
    >
      <Input className='input-signup input-here' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    </Form.Item>

    <Form.Item name="email"
      rules={[
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },
      ]}
    >
      <Input className='input-signup input-here' prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
    </Form.Item>

    <Form.Item name="password" className='input-signup'
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
      hasFeedback
    >
      <Input.Password className='input-here' prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
    </Form.Item>

    <Form.Item name="confirm" dependencies={['password']} hasFeedback className='input-signup'
      rules={[
        {
          required: true,
          message: 'Please confirm your password!',
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }

            return Promise.reject(new Error('The two passwords that you entered do not match!'));
          },
        }),
      ]}
    >
      <Input.Password className='input-here' prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Confirm Password" />
    </Form.Item>

    <Form.Item >
      <Button type="danger" htmlType="submit">
        Register
      </Button>
      <br /> <br />
     
    </Form.Item>
  </Form>
</div></>
  )
}
export default Enrollment;