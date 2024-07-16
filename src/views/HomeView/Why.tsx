import React from 'react';
import { Col, Image, Row, Typography } from 'antd';
const { Title, Paragraph } = Typography;

export default function Why() {
    return (
        <div style={{
            position: 'relative',
            height: '100vh',
            overflow: 'hidden',
            backgroundColor: 'rgb(204 204 204)',
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100vh',
                opacity: 0.7,
            }}>
                <Image
                    style={{ height: '100vh', objectFit: 'none' }}
                    preview={false}
                    src="/img/abstractelement-blue-yellow-8bit.png"
                />
            </div>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: '1200px',
                zIndex: 10,
            }}>
                <Row gutter={[24, 24]} align="middle">
                    <Col xs={24} md={14}>
                        <Image
                            style={{ width: '100%', height: 'auto', border: '1rem solid white', borderRadius: `1rem` }}
                            preview={false}
                            src="/img/screen-shot-2017-09-27-at-6-33-59-pm.webp"
                        />
                    </Col>
                    <Col xs={24} md={10}>
                        <Title level={2} style={{ color: '#4CAF50', marginBottom: '20px', padding: '5px', backgroundColor: 'white', border: '2px solid black' }}>
                            VÌ SAO THUẬT TOÁN QUAN TRỌNG
                        </Title>
                        <Paragraph style={{ textAlign: 'center', fontSize: '1.2rem' }}>
                            Thuật toán ứng dụng ngày càng quan trọng trong cuộc sống hiện đại.
                        </Paragraph>
                        <Paragraph style={{ textAlign: 'center', fontSize: '1.2rem' }}>
                            Từ tìm đường trên Google Maps, mở khóa điện thoại bằng nhận diện khuôn mặt, đến mua sắm trực tuyến và xem phim trên các nền tảng như Netflix.
                        </Paragraph>
                        <Paragraph style={{ textAlign: 'center', fontSize: '1.2rem' }}>
                            Trong y tế, thuật toán giúp chẩn đoán bệnh chính xác hơn và theo dõi sức khỏe cá nhân.
                        </Paragraph>
                        <Paragraph style={{ textAlign: 'center', fontSize: '1.2rem' }}>
                            Ngành tài chính dùng thuật toán để phân tích thị trường, dự đoán kinh tế và bảo mật thông tin.
                        </Paragraph>
                        <Paragraph style={{ textAlign: 'center', fontSize: '1.2rem' }}>
                            Mạng xã hội như Facebook, Instagram cá nhân hóa nội dung và bảo vệ môi trường mạng.
                        </Paragraph>
                    </Col>
                </Row>
            </div>
        </div>
    );
}