function Cardprops(props){
    return (
        <h5>{props.movie}</h5>,
        <h6>{props.description}</h6>
    );
};

function Cardcontent(){
    const movies = ["Inside Out 2", "Godzilla", "Titanic 2"];
    const description = ["Riley learns new emotions", "Another movie about a giant lizard", "Jack's revenge (there was enough space for him)"]
    return (
        <div className="container">
            <div className="card">
                <img></img>
                <div className="card-title">
                    <h5>{movies.map((tit)=><Cardprops movie={tit}/>)}</h5>
                </div>
                <div className="card-description">
                    <h6>{description.map((des) => <Cardprops description={des} />)}</h6>
                </div>
            </div>
        </div>
    )
}