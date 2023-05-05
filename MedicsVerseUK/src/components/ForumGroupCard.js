import "../assets/demo/category.css"
import Row from "./ForumGroupRow"

function CategoriesCard(props) {
    console.log(props.groups);
    return (
        <div className="block block--category">
            <div class="block-container">
                <h2 class="block-header">
                    <a href="/#public-figure-gossip.1">Groups</a>
                </h2>
                <div class="block-body">
                    {
                        props.groups != undefined &&
                        props.groups.Items.map(row => <Row data={row}/> )
                    }
                </div>
            </div>
        </div>
    )
}
export default CategoriesCard;