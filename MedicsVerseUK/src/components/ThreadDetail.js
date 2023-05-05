import "../assets/demo/category.css"
import ThreadReplies from "./ThreadReplies"

function BlogDetail(props) {
    console.log(props.thread);
return (
        <div class="p-body">
            <div class="p-body-inner">
                {
                    props.thread.Items != undefined && 
                    <div>
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

                            <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                                <a href="/forums/families.3/" itemprop="item">
                                    <span itemprop="name">{props.thread.Items[0].groupName}</span>
                                </a>
                                <meta itemprop="position" content="3"/>
                            </li>
                        </ul>

                        <div class="p-body-header">
                            <div class="p-title ">
                                <h1 class="p-title-value">{props.thread.Items[0].title}
                                </h1>
                            </div>
                            <div class="p-description">
                                <ul class="listInline listInline--bullet">
                                    <li>
                                        <span class="u-srOnly">Start date</span>
                                        <a href="/threads/ptwm-172-full-of-tripe-and-fillers.38032/" class="u-concealed">
                                            <time
                                                class="u-dt" dir="auto" datetime="2023-03-16T23:15:51+0000" data-time="1679008551"
                                                data-date-string="Mar 16, 2023" data-time-string="11:15 PM"
                                                title="Mar 16, 2023 at 11:15 PM">Yesterday at 11:15 PM
                                            </time>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="p-body-main  ">
                            <div class="p-body-content">
                                <div class="p-body-pageContent">
                                    <div class="block block--messages part-time-working-mummy " id="thread-38032" data-xf-init=""
                                        data-type="post" data-href="/inline-mod/">
                                        <div class="block-outer">
                                            <div class="block-outer-opposite">
                                                <div class="buttonGroup">
                                                    <a href="liked/" class="button--link button">Order Thread by Most Liked Posts</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="block-outer js-threadStatusField"></div>
                                        <div class="block-container lbContainer" data-xf-init="lightbox select-to-quote"
                                            data-message-selector=".js-post" data-lb-id="thread-38032" data-lb-universal="0">
                                            <div class="block-body js-replyNewMessageContainer">
                                                <article class="message message--post js-post js-inlineModContainer  "
                                                    data-author="DipsyDoodle" data-content="post-14404097" id="js-post-14404097">
                                                    <span class="u-anchorTarget" id="post-14404097"></span>
                                                    <div class="message-inner">
                                                        <div class="message-cell message-cell--user">
                                                            <section itemscope="" itemtype="https://schema.org/Person"
                                                                class="message-user">
                                                                <div class="message-avatar">
                                                                    <div class="message-avatar-wrapper">
                                                                        <a href="/members/dipsydoodle.22473/" class="avatar avatar--m"
                                                                            data-user-id="22473">
                                                                            <img loading="lazy"
                                                                                src="https://media3.tattle.life/data/avatars/m/22/22473.jpg?1570533717"
                                                                                srcset="https://media3.tattle.life/data/avatars/l/22/22473.jpg?1570533717 2x"
                                                                                alt="DipsyDoodle" class="avatar-u22473-m"
                                                                                itemprop="image"/>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="message-userDetails">
                                                                    <h4 class="message-name"><a href="/members/dipsydoodle.22473/"
                                                                            class="username " dir="auto" data-user-id="22473"
                                                                            itemprop="name">
                                                                            {
                                                                                props.thread.title
                                                                            }    
                                                                                </a></h4>
                                                                    <h5 class="userTitle message-userTitle" dir="auto"
                                                                        itemprop="jobTitle"><a
                                                                            href="/threads/ptwm-172-full-of-tripe-and-fillers.38032/post-14404097"
                                                                            class="u-concealed" rel="nofollow">
                                                                            <time class="u-dt" dir="auto"
                                                                                datetime="2023-03-16T23:15:51+0000"
                                                                                data-time="1679008551" data-date-string="Mar 16, 2023"
                                                                                data-time-string="11:15 PM"
                                                                                title="Mar 16, 2023 at 11:15 PM">Yesterday at 11:15
                                                                                PM</time></a></h5>
                                                                </div>
                                                            </section>
                                                        </div>
                                                        <div class="message-cell message-cell--main">
                                                            <div class="message-main js-quickEditTarget">
                                                                <div class="message-content js-messageContent">
                                                                    <div class="message-userContent lbContainer js-lbContainer "
                                                                        data-lb-id="post-14404097"
                                                                        data-lb-caption-desc="DipsyDoodle · Mar 16, 2023 at 11:15 PM">
                                                                        <article class="message-body js-selectToQuote">
                                                                            <div class="bbWrapper">
                                                                                {
                                                                                    props.thread.Items[0].description
                                                                                }
                                                                            </div>
                                                                            <div class="js-selectToQuoteEnd">&nbsp;</div>
                                                                        </article>
                                                                        <section class="message-attachments">
                                                                            <h4 class="block-textHeader">Attachments</h4>
                                                                            <ul class="attachmentList">
                                                                                <li class="attachment">
                                                                                    {/* <div class="attachment-icon attachment-icon--img">
                                                                                        <a href={props.thread.Items[0].file}
                                                                                            target="_blank" class="js-lbImage">
                                                                                            <img src={props.thread.Items[0].file}
                                                                                                alt="332241280_1415877465917809_8684454164620774113_n.jpg"/>
                                                                                        </a>
                                                                                    </div> */}
                                                                                    <div class="attachment-name">
                                                                                        <a href={props.thread.Items[0].file}
                                                                                            target="_blank"
                                                                                            title="332241280_1415877465917809_8684454164620774113_n.jpg"><span>2033136</span>332241280_1415877465917809_8684454164620774113_n.jpg</a>
                                                                                    </div>
                                                                                    {/* <div class="attachment-details">
                                                                                        <span class="attachment-details-size">91.7
                                                                                            KB</span>
                                                                                        <span class="attachment-details-views"></span>
                                                                                    </div> */}
                                                                                </li>
                                                                            </ul>
                                                                        </section>
                                                                    </div>
                                                                </div>
                                                                <footer class="message-footer">
                                                                    <div class="reactionsBar js-reactionsList is-active">
                                                                        <ul class="reactionSummary">
                                                                            <li><span class="reaction reaction--small reaction--1"
                                                                                    data-reaction-id="1"><i aria-hidden="true"></i><img
                                                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                                                        class="reaction-sprite js-reaction" alt="Like"
                                                                                        title="Like"/></span></li>
                                                                            <li><span class="reaction reaction--small reaction--2"
                                                                                    data-reaction-id="2"><i aria-hidden="true"></i><img
                                                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                                                        class="reaction-sprite js-reaction" alt="Heart"
                                                                                        title="Heart"/></span></li>
                                                                        </ul>
                                                                        <span class="u-srOnly">Reactions:</span>
                                                                        <strong>18</strong>
                                                                    </div>
                                                                    <div class="js-historyTarget message-historyTarget toggleTarget"
                                                                        data-href="trigger-href"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                {
                                                    <ThreadReplies replies={props.replies}/>
                                                }
                                            </div>
                                        </div>
                                        <div class="block-outer block-outer--after">
                                            <div class="block-outer-opposite">
                                                <a href="/login/" class="button--link button" data-xf-click="overlay"><span
                                                        class="button-text">
                                                        You must log in or register to reply here.
                                                    </span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="blockMessage blockMessage--none">
                                        <div class="shareButtons shareButtons--iconic" data-xf-init="share-buttons" data-page-url=""
                                            data-page-title="" data-page-desc="">
                                            <span class="shareButtons-label">Share:</span>
                                            <div class="shareButtons-buttons">
                                                <a class="shareButtons-button shareButtons-button--brand shareButtons-button--facebook"
                                                    data-href="https://www.facebook.com/sharer.php?u={url}" id="js-XFUniqueId1">
                                                    <i aria-hidden="true"></i>
                                                    <span>Facebook</span>
                                                </a>
                                                <a class="shareButtons-button shareButtons-button--brand shareButtons-button--twitter"
                                                    data-href="https://twitter.com/intent/tweet?url={url}&amp;text={title}"
                                                    id="js-XFUniqueId2">
                                                    <i aria-hidden="true"></i>
                                                    <span>Twitter</span>
                                                </a>
                                                <a class="shareButtons-button shareButtons-button--brand shareButtons-button--reddit"
                                                    data-href="https://reddit.com/submit?url={url}&amp;title={title}"
                                                    id="js-XFUniqueId3">
                                                    <i aria-hidden="true"></i>
                                                    <span>Reddit</span>
                                                </a>
                                                <a class="shareButtons-button shareButtons-button--brand shareButtons-button--pinterest"
                                                    data-href="https://pinterest.com/pin/create/bookmarklet/?url={url}&amp;description={title}&amp;media={image}"
                                                    id="js-XFUniqueId4">
                                                    <i aria-hidden="true"></i>
                                                    <span>Pinterest</span>
                                                </a>
                                                <a class="shareButtons-button shareButtons-button--brand shareButtons-button--tumblr"
                                                    data-href="https://www.tumblr.com/widgets/share/tool?canonicalUrl={url}&amp;title={title}"
                                                    id="js-XFUniqueId5">
                                                    <i aria-hidden="true"></i>
                                                    <span>Tumblr</span>
                                                </a>
                                                <a class="shareButtons-button shareButtons-button--brand shareButtons-button--whatsApp"
                                                    data-href="https://api.whatsapp.com/send?text={title}&nbsp;{url}"
                                                    id="js-XFUniqueId6">
                                                    <i aria-hidden="true"></i>
                                                    <span>WhatsApp</span>
                                                </a>
                                                <a class="shareButtons-button shareButtons-button--email"
                                                    data-href="mailto:?subject={title}&amp;body={url}" id="js-XFUniqueId7">
                                                    <i aria-hidden="true"></i>
                                                    <span>Email</span>
                                                </a>
                                                <a class="shareButtons-button shareButtons-button--link" data-clipboard="{url}"
                                                    id="js-XFUniqueId8">
                                                    <i aria-hidden="true"></i>
                                                    <span>Link</span>
                                                </a>
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
                            <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                                <a href="/forums/families.3/" itemprop="item">
                                    <span itemprop="name">{props.thread.Items[0].groupName}</span>
                                </a>
                                <meta itemprop="position" content="3"/>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default BlogDetail;