import '@passageidentity/passage-elements/passage-register';

export function Register(){
    return (
        <div>
            <passage-register app-id={process.env.REACT_APP_PASSAGE_APP_ID}></passage-register>
        </div>
    )
}