import { QueryID, QueryAll } from "../../hooks/usePost";
export const Home = () => {

    const id = 1; //replace with id from 

    const {data,isLoading} = QueryID(id)

    return (
        <div className="home">
            { isLoading ? 'Content is loading' : 
            "activity: " + data.activity
            +  " type: " + data.type}
        </div>

    );
}
