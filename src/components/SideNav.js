import React, { Component } from "react";

class SideBarNav extends Component {
    render () {
        return (
            <>
            <nav class="flex-column bg-light">
                <div class="container-fluid">
                    <p class="nav-link active placeholder bg-secondary">PlaceholderNav</p>
                    <p class="nav-link placeholder bg-secondary">PlaceholderNav</p>
                    <p class="nav-link placeholder bg-secondary">PlaceholderNav</p>
                </div>
            </nav>
            </>
        )
    }
}

export default SideBarNav;