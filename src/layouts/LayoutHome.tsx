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
                <Image src='/img/logo.png' preview={false}
                    style={{ objectFit: 'cover', height: '4.5rem', paddingRight: '48px' }}
                />
                <Radio.Group value='large' defaultValue="home">
                    <Radio.Button style={{ backgroundColor: 'rgb(92 218 149)' }} value="home"><p style={{ padding: 0, margin: 0, fontWeight: 'bold' }}>Trang chủ</p></Radio.Button>
                    <Radio.Button value="lectures"><p style={{ padding: 0, margin: 0, fontWeight: 'bold' }}>Bài giảng</p></Radio.Button>
                    <Radio.Button value="exercises"><p style={{ padding: 0, margin: 0, fontWeight: 'bold' }}>Bài tập</p></Radio.Button>
                    <Radio.Button value="contests"><p style={{ padding: 0, margin: 0, fontWeight: 'bold' }}>Cuộc thi</p></Radio.Button>
                    <Radio.Button value="contact"><p style={{ padding: 0, margin: 0, fontWeight: 'bold' }}>Liên hệ</p></Radio.Button>
                </Radio.Group>
                <Flex >
                    <Button type="link" style={{ color: 'white', padding: 0 }}>Đăng ký |</Button>
                    <Button type="link" style={{ color: 'rgb(92 218 149)', padding: 0 }}>Đăng nhập</Button>
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
                padding: '20px 50px'

            }}>
                <Row justify="space-between" align="middle">
                    <Col xs={24} sm={8}>
                        <Menu mode="vertical" theme="dark" style={{ border: 'none', backgroundColor: 'transparent' }}>
                            <Menu.Item key="home">Trang chủ</Menu.Item>
                            <Menu.Item key="lessons">Bài giảng</Menu.Item>
                            <Menu.Item key="exercises">Bài tập</Menu.Item>
                            <Menu.Item key="contests">Cuộc thi</Menu.Item>
                            <Menu.Item key="contact">Liên hệ</Menu.Item>
                        </Menu>
                    </Col>

                    <Col xs={24} sm={8}>
                        <div>
                            <h3>Liên hệ với chúng tôi:</h3>
                            <Space size="large">
                                <YoutubeOutlined style={{ fontSize: '24px', color: '#ff0000' }} />
                                <MessageOutlined style={{ fontSize: '24px', color: '#ff00ff' }} />
                                <FacebookOutlined style={{ fontSize: '24px', color: '#4267B2' }} />
                            </Space>
                        </div>
                    </Col>

                    <Col xs={24} sm={8} style={{ textAlign: 'right' }}>
                        <Image src="/img/logo.png" alt="ALVO" style={{ height: '240px' }} preview={false} />
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
