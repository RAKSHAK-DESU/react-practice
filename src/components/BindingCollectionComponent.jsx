export default function BindingCollectionComponent(){
    var categories= ["Anime","Horror","Sitcom"];
    return (
        <div className="container">
            <h2>Categories</h2>
            <ol>
                {
                    categories.map(function(category){
                        return(
                            <li key={category}>{category}</li>
                        )
                    }
                    ) 
                }
            </ol>
            <h2>Select Category</h2>
            <select>
                {
                    categories.map(category=>
                        <option key={category} value={category} >{category}</option>
                    )
                }
            </select>
        </div>

    )
}