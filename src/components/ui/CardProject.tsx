import { FC } from 'react';
import { Card } from 'antd';
import { GithubOutlined, LaptopOutlined, GlobalOutlined } from '@ant-design/icons';

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

const CardProject: FC<CardProjectInterface> = ({title, logo, repo, live, mentor, tools}) => {
  const handleClick = (url: string) : void => {
    window.open(url, '_blank');
  }
  
  return (
    <Card
      cover={
        <img
          alt={title}
          src={logo}
        />
      }
      actions={[
        <GithubOutlined key="github" onClick={() => handleClick(repo)} />,
        <LaptopOutlined key="laptop" onClick={() => handleClick(live)} />,
        <GlobalOutlined key="global" onClick={() => handleClick(mentor)} />
      ]}
      style={{marginBottom: '20px;'}}
    >
      <Meta
        title={title}
        description={tools.join(' ')}
      />
    </Card>
  )
}

export default CardProject