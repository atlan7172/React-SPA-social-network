import * as React from "react";
import Paginator from "./Paginator";
import User from "./User";

let Users = (props) => {
    return (
        <div>
            <Paginator currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       pageSize={props.pageSize}
                       totalUsersCount={props.totalUsersCount}/>
            {
                props.users.map(user => <User user={user}
                                              followingInProgress={props.followingInProgress}
                                              follow={props.follow}
                                              unfollow={props.unfollow}/>)
            }
        </div>
    )
}

export default Users