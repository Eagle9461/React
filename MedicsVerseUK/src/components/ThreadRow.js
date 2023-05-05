const ThreadRow  = (props) => {
    return(
        <div class="structItemContainer-group js-threadList">
            <div class="structItem structItem--thread js-trendingThreadItem js-inlineModContainer js-threadListItem-36607"
                data-author="{props.thread.poster}">
                <div class="structItem-cell structItem-cell--icon">
                    <div class="structItem-iconContainer">
                        <a href="/threads/daddy-to-triplet-girls-mumma-to-triplet-girls-10.36607/"
                            class="avatar avatar--s">
                            <img loading="lazy"
                            src="https://media3.tattle.life/data/avatars/s/31/31907.jpg?1625947737"
                            alt={props.thread.poster} class="avatar-u31907-s"/>
                        </a>
                    </div>
                </div>
                <div class="structItem-cell structItem-cell--main"
                    data-xf-init="touch-proxy">
                        
                    <div class="structItem-title">
                        
                        <a href={"/forumdetail/"+props.thread.id}
                            class="" data-tp-primary="on" data-xf-init="preview-tooltip"
                            data-preview-url="/threads/daddy-to-triplet-girls-mumma-to-triplet-girls-10.36607/preview"
                            id="js-XFUniqueId50">
                            {
                                props.thread.title
                            }  
                            </a>
                    </div>
                    <div class="structItem-minor">
                        {
                            props.thread.description
                        }  
                        <ul class="structItem-parts">
                            <li><a href="/members/ratherbeskiing.272619/" class="username "
                                    dir="auto" data-user-id="272619">{props.thread.poster}</a></li>
                            <li class="structItem-startDate"><a
                                    href="/threads/daddy-to-triplet-girls-mumma-to-triplet-girls-10.36607/"
                                    rel="nofollow">
                                        <time class="u-dt" dir="auto"
                                        datetime="2023-01-12T07:11:54+0000"
                                        data-time="1673507514"
                                        data-date-string="Jan 12, 2023"
                                        data-time-string="7:11 AM"
                                        title="Jan 12, 2023 at 7:11 AM">
                                        {props.thread.created}
                                        </time></a></li>
                        </ul>
                        {/* <span class="structItem-pageJump">
                            <a
                                href="/threads/daddy-to-triplet-girls-mumma-to-triplet-girls-10.36607/page-9">9</a>
                            <a
                                href="/threads/daddy-to-triplet-girls-mumma-to-triplet-girls-10.36607/page-10">10</a>
                            <a
                                href="/threads/daddy-to-triplet-girls-mumma-to-triplet-girls-10.36607/page-11">11</a>
                        </span> */}
                        <ul class="structItem-parts">
                        </ul>
                    </div>
                </div>
                <div class="structItem-cell structItem-cell--meta"
                    title="First message reaction score: 0">
                    <dl class="pairs pairs--justified">
                        <dt>Replies</dt>
                        <dd>{props.thread.replies}</dd>
                    </dl>
                    <dl class="pairs pairs--justified structItem-minor">
                        <dt>Views</dt>
                        <dd>{props.thread.views}</dd>
                    </dl>
                </div>
                <div class="structItem-cell structItem-cell--latest">
                    <a href="/threads/daddy-to-triplet-girls-mumma-to-triplet-girls-10.36607/latest"
                        rel="nofollow"><time class="structItem-latestDate u-dt" dir="auto"
                            datetime="2023-03-13T18:20:41+0000" data-time="1678731641"
                            data-date-string="Mar 13, 2023" data-time-string="6:20 PM"
                            title="Mar 13, 2023 at 6:20 PM"></time></a>
                    <div class="structItem-minor">
                        <a href="/members/blond3g1rl.31907/" class="username " dir="auto"
                            data-user-id="31907">{props.thread.lastreplier}</a>
                    </div>
                </div>
                <div class="structItem-cell structItem-cell--icon structItem-cell--iconEnd">
                    <div class="structItem-iconContainer">
                        <a href="/members/blond3g1rl.31907/" class="avatar avatar--xxs"
                            data-user-id="31907">
                            <img loading="lazy"
                                src="https://media3.tattle.life/data/avatars/s/31/31907.jpg?1625947737"
                                alt={props.thread.lastreplier} class="avatar-u31907-s"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreadRow;