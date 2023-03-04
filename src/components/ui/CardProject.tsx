import { FC } from 'react';
import { Card } from 'antd';

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

const CardProject: FC<CardProjectInterface> = ({title, logo}) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src={logo}
        />
      }
    >
      <Meta
        title={title}
        description="This is the description"
      />
    </Card>
  )
}

export default CardProject