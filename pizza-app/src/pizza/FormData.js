export default function UserList(props) {
    const { tList } = props;
    console.log('array', tList);
        return(
        <div>{
            tList.map((tMember, id) => (
            <div key={id}>
                <h2>{tMember.name}</h2>
                <h2>{tMember.email}</h2>
                <h2>{tMember.pizzaSize}</h2>
                {/* add topping and special info */}
            </div>
        ))
    }</div>
    )
}

