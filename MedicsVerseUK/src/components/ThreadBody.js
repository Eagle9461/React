import "../assets/demo/category.css"
import ThreadRow from "./ThreadRow";


function BlogBody(props) {
    console.log(props);
    return (
        <div class="p-body">
            <div class="p-body-inner">
                <ul class="p-breadcrumbs " itemscope="" itemtype="https://schema.org/BreadcrumbList">
                    <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                        <a href="/" itemprop="item">
                            <span itemprop="name">Forums</span>
                        </a>
                        <meta itemprop="position" content="1"/>
                    </li>
                    <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                        <a href="/#public-figure-gossip.1" itemprop="item">
                            <span itemprop="name">Groups</span>
                        </a>
                        <meta itemprop="position" content="2"/>
                    </li>
                </ul>
                <noscript>
                    <div class="blockMessage blockMessage--important blockMessage--iconic u-noJsOnly">JavaScript is disabled.
                        For a better experience, please enable JavaScript in your browser before proceeding.</div>
                </noscript>
                <div class="p-body-header">
                    <div class="p-title ">
                        <h1 class="p-title-value">Families
                        </h1>
                    </div>
                </div>
                <div class="p-body-main  ">
                    <div class="p-body-content">
                        <div class="p-body-pageContent">
                            <div class="block" data-xf-init="" data-type="thread" data-href="/inline-mod/">
                                <div class="block-outer"></div>
                                <div class="block-container">
                                    <div class="block-body">
                                        <div class="structItemContainer">
                                        {
                                            props.threads.Items.map(thread => <ThreadRow thread={thread}/>)
                                        }
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <ul class="p-breadcrumbs p-breadcrumbs--bottom" itemscope="" itemtype="https://schema.org/BreadcrumbList">
                    <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                        <a href="/" itemprop="item">
                            <span itemprop="name">Forums</span>
                        </a>
                        <meta itemprop="position" content="1"/>
                    </li>
                    <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                        <a href="/#public-figure-gossip.1" itemprop="item">
                            <span itemprop="name">Groups</span>
                        </a>
                        <meta itemprop="position" content="2"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default BlogBody;