import React from 'react';
import { Button, Flex, Image, Row, Col, Typography } from 'antd';
const { Title } = Typography;

export default function Intro() {
    return (
        <div
            style={{
                height: 'calc(100vh - 80px)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    background: 'linear-gradient(to bottom right, rgb(127 174 148), rgb(69 150 136))',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                <img
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                    src="/img/math-transparent-background-1.png"
                    alt="Background"
                />
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    textAlign: 'center',
                    zIndex: 10,
                    color: 'white', // Set text color here
                }}
            >
                <Flex align='center' justify='center'>
                    <Title className='Main-title' style={{ color: "white", margin: 0, fontWeight: 'bold', fontSize: '5rem' }}>HỌC THUẬT TOÁN CÙNG</Title>
                    <Title className='Main-title Special-title' style={{ color: 'rgb(92 218 149)', margin: '0 1rem', fontStyle: 'italic', fontWeight: 'bold', fontSize: '5rem' }}>ALVO</Title>
                </Flex>
                <Button className='Join-button' type="primary" style={{ fontWeight: 'bold', height: '4rem', width: '13rem', fontSize: '1.2rem', marginTop: '2rem', backgroundColor: 'rgb(92 218 149)', border: '5px solid #fff', borderRadius: '1rem' }}>THAM GIA NGAY</Button>
            </div>
        </div>
    );
}
