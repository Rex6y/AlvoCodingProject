import React from 'react';
import { Row, Col, Typography, Image } from 'antd';

const { Title, Paragraph } = Typography;

export default function Mission() {
    return (
        <div style={{ backgroundColor: '#e0f2f1', padding: '20px' }}>
            <Row gutter={[24, 24]} align="top">
                <Col xs={24} md={16} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Title level={2} style={{ color: 'black', marginBottom: '20px' }}>
                        SỨ MỆNH CỦA ALVO MANG ĐẾN
                    </Title>
                    <div style={{
                        backgroundColor: '#4caf50',
                        padding: '20px',
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 85%)',
                        opacity: '0.8'
                    }}>
                        <Paragraph style={{ color: 'black', textAlign: 'right', opacity: '1', fontSize: '24px' }}>
                            ALVO PROJECT là dự án hướng đến việc nâng cao khả năng tư duy logic và kiến thức về thuật toán cho học sinh và người học, nhằm trang bị cho họ những kỹ năng cần thiết để thành công trong các kỳ thi học sinh giỏi cũng như phỏng vấn xin việc trong lĩnh vực công nghệ thông tin và toán học. Với sứ mệnh cung cấp một nền tảng học tập toàn diện, ALVO PROJECT cung cấp các tài liệu học tập chất lượng cao, bài tập thực hành phong phú và các phương pháp giảng dạy hiệu quả để giúp người học hiểu sâu về thuật toán và cách tư duy phân tích vấn đề. Dự án không chỉ giúp học sinh chuẩn bị tốt cho các kỳ thi lập trình thi đấu mà còn tạo ra cơ hội cho các ứng viên phát triển kỹ năng giải quyết vấn đề, qua đó mở ra cơ hội nghề nghiệp rộng lớn trong ngành công nghệ và toán học.
                        </Paragraph>
                    </div>
                </Col>
                <Col xs={24} md={8}>
                    <Image
                        preview={false}
                        src="/img/width_413.webp"
                        alt="Team of tourist, programming competition champions"
                        style={{ width: '100%', borderRadius: '8px' }}
                    />
                    <Paragraph style={{ marginTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>
                        Team của tourist, nhà vô địch lập trình thi đấu, ăn mừng trong chiến thắng tại kì thi ICPC đánh giá
                    </Paragraph>
                </Col>
            </Row>
        </div>
    )
}
