import Greetings from "./Greetings";

type greetingArrayProps = {
    peopleToGreet: string []
}

export default function GreetingsArray(props: greetingArrayProps){
    return(
        <div>
            {props.peopleToGreet.map((toGreet:string) =>{
                return (<div> <Greetings greetMe={toGreet}/></div>
                )
            }
            ) }
        </div>
    )
}
