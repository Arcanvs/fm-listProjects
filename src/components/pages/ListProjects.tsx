import { FC, useEffect, useState } from "react";
import dataProjects from "../../data/data.json";

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
    const [jsonProjects, setJsonProjects] = useState<ProjectListInterface>([]);

    useEffect(() => {
        setJsonProjects(dataProjects);
    }, []);
    

    return (
        <div>
            { jsonProjects && 'Listado Proyectos' }
        </div>
    )
}

export default ListProjects