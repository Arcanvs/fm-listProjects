import { FC } from "react";
import dataProjects from "../../data/data.json";
import CardProject from "../ui/CardProject";

import { Col, Row, Typography } from 'antd';

const ListProjects: FC = () => {
    return (
        <div style={{ background: 'linear-gradient(to top, #fafafa, #ffffff)', 
                      padding: '30px', minHeight: '100vh' }}
        >
            <Row gutter={[16, 16]} justify="center">
                <Typography.Title level={1} style={{ margin: '60px 0 60px 0', textAlign: 'center' }}>
                    <a href="https://www.frontendmentor.io/profile/Arcanvs" target="_blank">
                        <img height={25} src="./images/frontmentor.jpg" />
                    </a>
                    <br />
                    My challenges
                </Typography.Title>
            </Row>
            <Row gutter={[30, 30]} justify="center">
                { dataProjects.map((item)=>{
                    return (
                        <Col xs={{ span: 20 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                            <CardProject key={item.id} {...item} />    
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default ListProjects