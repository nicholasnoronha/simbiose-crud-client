const Table = (props) => {
    return (
        <table>
            <thead>
                <tr>{props.mappedThs}</tr>
            </thead>
            <tbody>
                {props.mappedTrs}
            </tbody>
        </table>
    )
}

export default Table