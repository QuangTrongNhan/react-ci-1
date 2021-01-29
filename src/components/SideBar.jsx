import "../css/SideBar.css";
import React from "react";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-sidebar">
          
        <div className="sidebar-header">
          <div className="sidebar-header-title">

            <div className="sidebar-header-img">
              <img
                src="https://cdn.dribbble.com/users/420317/screenshots/6195864/friend.jpg"
                alt="icon app chat"
              />
            </div>

            <h1>MindX</h1>
          </div>

          <div className="sidebar-header-searchbar">
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="sidebar-body">
           <div className="sidebar-display-user">
               <img src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg" alt="icon user"/>
               
               <div className="sidebar-display-user-detail">
                   <h3>Thái Sơn</h3>
                   <p>Online 8 minutes ago</p>
               </div>
           </div>

           <div className="sidebar-display-user">
               <img src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg" alt="icon user"/>
               
               <div className="sidebar-display-user-detail">
                   <h3>Thái Sơn</h3>
                   <p>Online 8 minutes ago</p>
               </div>
           </div>

           <div className="sidebar-display-user">
               <img src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg" alt="icon user"/>
               
               <div className="sidebar-display-user-detail">
                   <h3>Thái Sơn</h3>
                   <p>Online 8 minutes ago</p>
               </div>
           </div>

           <div className="sidebar-display-user">
               <img src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg" alt="icon user"/>
               
               <div className="sidebar-display-user-detail">
                   <h3>Thái Sơn</h3>
                   <p>Online 8 minutes ago</p>
               </div>
           </div>

           <div className="sidebar-display-user">
               <img src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg" alt="icon user"/>
               
               <div className="sidebar-display-user-detail">
                   <h3>Thái Sơn</h3>
                   <p>Online 8 minutes ago</p>
               </div>
           </div>
        </div>
      </div>
    );
  }
}

export { SideBar };
