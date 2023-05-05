

const ThreadReplies = (props) => {
    return(
        <article class="message message--post js-post js-inlineModContainer  "
        data-author="MrsOgre" data-content="post-14404536" id="js-post-14404536">
        <span class="u-anchorTarget" id="post-14404536"></span>
        <div class="message-inner">
            {
                props.replies.Items != undefined &&
                props.replies.Items.map( reply => (
                    <div>
                        <div class="message-cell message-cell--user">
                            <section itemscope="" itemtype="https://schema.org/Person"
                                class="message-user">
                                <div class="message-avatar">
                                    <div class="message-avatar-wrapper">
                                        <a href="/members/mrsogre.50225/" class="avatar avatar--m"
                                            data-user-id="50225">
                                            <img loading="lazy"
                                                src="https://media3.tattle.life/data/avatars/m/50/50225.jpg?1651232266"
                                                srcset="https://media3.tattle.life/data/avatars/l/50/50225.jpg?1651232266 2x"
                                                alt="MrsOgre" class="avatar-u50225-m" itemprop="image"/>
                                        </a>
                                    </div>
                                </div>
                                <div class="message-userDetails">
                                    <h4 class="message-name"><a href="/members/mrsogre.50225/"
                                            class="username " dir="auto" data-user-id="50225"
                                            itemprop="name">{reply.title}</a></h4>
                                    <h5 class="userTitle message-userTitle" dir="auto"
                                        itemprop="jobTitle"><a
                                            href="/threads/ptwm-172-full-of-tripe-and-fillers.38032/post-14404536"
                                            class="u-concealed" rel="nofollow">
                                            <time class="u-dt" dir="auto"
                                                datetime="2023-03-17T00:14:47+0000"
                                                data-time="1679012087" data-date-string="Mar 17, 2023"
                                                data-time-string="12:14 AM"
                                                title="Mar 17, 2023 at 12:14 AM">Today at 12:14
                                                AM</time></a></h5>
                                </div>
                            </section>
                        </div>
                        <div class="message-cell message-cell--main">
                            <div class="message-main js-quickEditTarget">
                                <div class="message-content js-messageContent">
                                    <div class="message-userContent lbContainer js-lbContainer "
                                        data-lb-id="post-14404536"
                                        data-lb-caption-desc="MrsOgre · Mar 17, 2023 at 12:14 AM">
                                        <article class="message-body js-selectToQuote">
                                            <div class="bbWrapper">
                                                <blockquote
                                                    class="bbCodeBlock bbCodeBlock--expandable bbCodeBlock--quote">
                                                    <div class="bbCodeBlock-title">
                                                        {/* <a href="/goto/post?id=14404269"
                                                            class="bbCodeBlock-sourceJump"
                                                            data-xf-click="attribution"
                                                            data-content-selector="#post-14404269">x12x12x
                                                            said:</a> */}
                                                    </div>
                                                    <div class="bbCodeBlock-content">
                                                        <div class="bbCodeBlock-expandContent ">
                                                            {reply.description}
                                                        </div>
                                                        {/* <div class="bbCodeBlock-expandLink"><a>Click to
                                                                expand...</a></div> */}
                                                    </div>
                                                </blockquote>
                                            </div>
                                            <div class="js-selectToQuoteEnd">&nbsp;</div>
                                        </article>
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
                                        <strong>4</strong>
                                    </div>
                                    <div class="js-historyTarget message-historyTarget toggleTarget"
                                        data-href="trigger-href"></div>
                                </footer>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </article>
    )
}

export default ThreadReplies;