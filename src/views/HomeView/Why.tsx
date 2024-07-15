import React from 'react';
import { Col, Image, Row, Typography } from 'antd';
const { Title, Paragraph } = Typography;

export default function Why() {
    return (
        <div style={{
            position: 'relative',
            height: '100vh',
            overflow: 'hidden',
            backgroundColor: '#f0f0f0',
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.3,
            }}>
                <Image
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
                            style={{ width: '100%', height: 'auto' }}
                            preview={false}
                            src="/img/screen-shot-2017-09-27-at-6-33-59-pm.webp"
                        />
                    </Col>
                    <Col xs={24} md={10}>
                        <Title level={2} style={{ color: '#4CAF50', marginBottom: '20px' }}>
                            VÌ SAO THUẬT TOÁN QUAN TRỌNG
                        </Title>
                        <Paragraph>
                            Thuật toán ứng dụng ngày càng quan trọng trong cuộc sống hiện đại.
                        </Paragraph>
                        <Paragraph>
                            Từ tìm đường trên Google Maps, mở khóa điện thoại bằng nhận diện khuôn mặt, đến mua sắm trực tuyến và xem phim trên các nền tảng như Netflix.
                        </Paragraph>
                        <Paragraph>
                            Trong y tế, thuật toán giúp chẩn đoán bệnh chính xác hơn và theo dõi sức khỏe cá nhân.
                        </Paragraph>
                        <Paragraph>
                            Ngành tài chính dùng thuật toán để phân tích thị trường, dự đoán kinh tế và bảo mật thông tin.
                        </Paragraph>
                        <Paragraph>
                            Mạng xã hội như Facebook, Instagram cá nhân hóa nội dung và bảo vệ môi trường mạng.
                        </Paragraph>
                    </Col>
                </Row>
            </div>
        </div>
    );
}