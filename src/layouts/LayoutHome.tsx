import React, { ReactNode } from 'react'
import { Button, Col, Flex, Layout, Menu, Radio, Row, Space, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import { Image } from 'antd';
import { YoutubeOutlined, MessageOutlined, FacebookOutlined } from '@ant-design/icons';

export default function LayoutHome({ children }: { children: ReactNode }) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{
                display: 'flex', alignItems: 'center', background: 'black', height: '5rem',
                justifyContent: 'space-between'
            }}>
                <Image src='/img/logo.png' preview={false} className='Header-logo'
                    style={{ objectFit: 'cover', height: '4.5rem', paddingRight: '5vw' }}
                />
                <Radio.Group value='large' defaultValue="home" className='Radio-group'>
                    <Radio.Button className='Radio-button' style={{ backgroundColor: 'rgb(92 218 149)' }} value="home"><p style={{ padding: 0, margin: 0, fontWeight: 'bold' }}>Trang chủ</p></Radio.Button>
                    <Radio.Button className='Radio-button' value="lectures"><p style={{ padding: 0, margin: 0, fontWeight: 'bold' }}>Bài giảng</p></Radio.Button>
                    <Radio.Button className='Radio-button' value="exercises"><p style={{ padding: 0, margin: 0, fontWeight: 'bold' }}>Bài tập</p></Radio.Button>
                    <Radio.Button className='Radio-button' value="contests"><p style={{ padding: 0, margin: 0, fontWeight: 'bold' }}>Cuộc thi</p></Radio.Button>
                    <Radio.Button className='Radio-button' value="contact"><p style={{ padding: 0, margin: 0, fontWeight: 'bold' }}>Liên hệ</p></Radio.Button>
                </Radio.Group>
                <Flex >
                    <Button className='Account-button Register-button' type="link" style={{ color: 'white', paddingLeft: '5vw' }}>Đăng ký |</Button>
                    <Button className='Account-button Login-button' type="link" style={{ color: 'rgb(92 218 149)', padding: 0 }}>Đăng nhập</Button>
                </Flex>
            </Header>
            <Content>
                <div
                    style={{
                        background: colorBgContainer,
                        // minHeight: 280,
                        // padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer style={{
                backgroundColor: '#000000',
                color: '#ffffff',
                padding: '0px 50px',
                position: 'relative'

            }}>

                <Row justify="space-between" align="middle">
                    <Col xs={12} sm={3}>
                        <Menu mode="vertical" theme="dark" style={{ border: 'none', backgroundColor: 'transparent' }}>
                            <Menu.Item key="home">Trang chủ</Menu.Item>
                            <Menu.Item key="lessons">Bài giảng</Menu.Item>
                            <Menu.Item key="exercises">Bài tập</Menu.Item>
                            <Menu.Item key="contests">Cuộc thi</Menu.Item>
                            <Menu.Item key="contact">Liên hệ</Menu.Item>
                        </Menu>
                    </Col>

                    <Col xs={12} sm={4}>
                        <div>
                            <h3 style={{ marginBottom: '1rem' }}>Liên hệ với chúng tôi:</h3>
                            <Space size="large">
                                <YoutubeOutlined style={{ fontSize: '4rem', color: '#ff0000' }} />
                                <MessageOutlined style={{ fontSize: '4rem', color: '#ff00ff' }} />
                                <FacebookOutlined style={{ fontSize: '4rem', color: '#4267B2' }} />
                            </Space>
                        </div>
                    </Col>
                    <Col xs={3} sm={3} style={{ display: 'flex', justifyContent: 'center' }} >
                        <div style={{
                            height: '230px', width: '200px', backgroundColor: 'white',
                            clipPath: 'polygon(0 0, 50% 0, 100% 100%, 50% 100%)'
                        }} />
                    </Col >
                    <Col xs={24} sm={8} style={{ textAlign: 'right' }}>
                        <div style={{
                            overflow: 'hidden',
                            height: '100px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'end',
                        }}>
                            <Image src="/img/logo.png" alt="ALVO" style={{ height: '240px' }} preview={false} />
                        </div>
                        <p style={{ marginTop: '10px', fontSize: '16px' }}>
                            Dự án đem thuật toán đến gần hơn cho học sinh, sinh viên và lập trình viên tại Việt Nam và Thế Giới
                        </p>
                    </Col>
                </Row>
                {/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
            </Footer>
        </Layout >
    )
}
