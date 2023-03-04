import { FC } from 'react';
import { Card, Button } from 'antd';
import { GithubOutlined, LaptopOutlined } from '@ant-design/icons';

const { Meta } = Card;

interface CardProjectInterface {
  id    : number,
  title : string,
  logo  : string,
  tools : string[],
  mentor: string,
  live  : string,
  repo  : string
};

const CardProject: FC<CardProjectInterface> = ({title, logo, repo}) => {
  const handleClick = (url: string) : void => {
    window.open(url, '_blank');
  }
  
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src={logo}
        />
      }
      actions={[
        <GithubOutlined key="github" onClick={() => handleClick(repo)} />,
        <LaptopOutlined key="laptop" />
      ]}
    >
      <Meta
        title={title}
        description="This is the description"
      />
    </Card>
  )
}

export default CardProject