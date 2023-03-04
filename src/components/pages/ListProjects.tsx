import { FC, useEffect, useState } from "react";
import dataProjects from "../../data/data.json";
import CardProject from "../ui/CardProject";
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

    console.log('json ', jsonProjects);
    return (
        <div>
            {dataProjects.map((item)=>{
                return <CardProject key={item.id} {...item} />
            })}
        </div>
    )
}

export default ListProjects