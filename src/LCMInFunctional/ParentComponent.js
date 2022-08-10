import UseCaseOne from "./UseCaseOne"
import ChildComponent from "./UseCaseOne"
import UseCaseThree from "./UseCaseThree"

const ParentComponent=(props)=>{
    return(
        <div>
            <UseCaseThree msg='child component' validity='1 hour'></UseCaseThree>
        </div>
    )
}
export default ParentComponent