import { FC, useEffect, useState } from "react";
import dataProjects from "../../data/data.json";
import CardProject from "../ui/CardProject";

import { Col, Row } from 'antd';

interface ProjectInterface {
    id    : number,
    title : string,
    logo  : string,
    tools : string[],
    mentor: string,
    live  : string,
    repo  : string
};

type ProjectListInterface = ProjectInterface[];

const ListProjects: FC = () => {
    const [jsonProjects, setJsonProjects] = useState<ProjectListInterface>(dataProjects);
    
    return (
        <div style={{ background: 'linear-gradient(to top, #fafafa, #ffffff)', 
                      padding: '30px', minHeight: '100vh' }}>
            <Row gutter={[16, 16]} justify="center">
                {dataProjects.map((item)=>{
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