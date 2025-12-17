export default function BindingArrayCollectionComponent()
{
    var products=[
        {Name:'Super Pumped',Price:56000.98},
        {Name:'Legend of Cobratate',Price:100000.99}
    ]
    return(
        <div className="container">
            <h2>documentary</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>
                            <tr>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}