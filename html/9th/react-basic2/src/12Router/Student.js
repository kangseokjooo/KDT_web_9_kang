import { useParams,useSearchParams } from "react-router-dom";

export default function Student(){
    const {name}=useParams();
    const [searchParams,setSearchParams]=useSearchParams();
    const keyword=searchParams.get('name')

    return <div>학생이름은 <span style={{color:'green'}}>{name}</span>
        {keyword !==null && <div>실제 이름은<span>{keyword}</span></div>}
    </div>
}