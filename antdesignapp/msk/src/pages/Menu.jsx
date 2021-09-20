// import React, { useState } from 'react';
// import { Menu } from 'antd';

// const { SubMenu } = Menu;

// // submenu keys of first level
// const rootSubmenuKeys = ['101', '107'];

// const Sider = () => {
//   const [openKeys, setOpenKeys] = React.useState(['sub1']);



//   const onOpenChange = keys => {
//     const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
//     if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
//       setOpenKeys(keys);
//     } else {
//       setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
//     }
//   };



//   //As a templete menu
// let MenuObj = [
//   {   menuId : 101, menuText : "Cloth", parentMenu : 0 ,hasChild : 1,level:1},
//   {   menuId : 102, menuText : "Men",   parentMenu : 101 ,hasChild : 1,level:2},
//   {   menuId : 103, menuText : "Woman", parentMenu : 101 ,hasChild : 0,level:2},
//   {   menuId : 104, menuText : "Child", parentMenu : 101 ,hasChild : 0,level:2},
//   {   menuId : 105, menuText : "T-shirt",parentMenu : 102 ,hasChild : 0,level:3},
//   {   menuId : 106, menuText : "Gens",parentMenu : 102 ,hasChild : 1,level:3},
//   {   menuId : 107, menuText : "Electronics",parentMenu : 0 ,hasChild : 1,level:1},
//   {   menuId : 108, menuText : "Keyboard",parentMenu : 107 ,hasChild : 0,level:2},
//   {   menuId : 109, menuText : "Mouse",parentMenu : 107 ,hasChild : 0,level:2},
//   {   menuId : 110, menuText : "Indian Gens",parentMenu : 106 ,hasChild : 0,level:4},
//   {   menuId : 111, menuText : "Non-Indian Gens",parentMenu : 106 ,hasChild : 0,level:4},
// ];

// let t = [];
// const fnMenuArray = async (MenuObj) => {

//   const rslt = await itm.forEach((o, ind) => {
//     Object.assign((t[o.menuId] = t[o.menuId] || {}), o);
//     t[o.parentMenu] = t[o.parentMenu] || {};
//     t[o.parentMenu].children = t[o.parentMenu].children || [];
//     t[o.parentMenu].children.push(t[o.menuId]);
//   })
    
// };


// const DATA = data === undefined ? [] : data.userMenu;
// const [activeMenuName, setActiveMenuName] = useState(undefined);
// const [menuData, setMenuData] = useState([]);

// //Call Menu For Excection...
// fnMenuArray(d.userMenu);


// //This is for submenu creation...
// const subMenuElement = (dataitm, ind) => {
//   return dataitm.parentmenuid !== 0 && !dataitm.children ? (
//     <Menu.Item
//       key={dataitm.menuid}
//       icon={
//         <span
//           style={{ minWidth: 20 }}
//           role="img"
//           aria-label={dataitm.icon}
//           className="anticon ant-menu-item-icon"
//         >
//           <i className={dataitm.icon} style={{ marginRight: "5px" }}></i>
//         </span>
//       }
//       id={"mnu" + dataitm.menuid}
//       onClick={() => {
//         setActiveMenuName({
//           ...dataitm,
//           activeMenu: dataitm.name,
//         });
//         CurrentActiveMenu(dataitm);
//         // return <Redirect to={dataitm.path} />;
//       }}
//       data-icon={dataitm.icon}
//     >
//       <Link to={dataitm.path}> {dataitm.name}</Link>
//     </Menu.Item>
//   ) : (
//     <SubMenu
//       className={""}
//       key={dataitm.menuid}
//       icon={
//         <span
//           style={{ minWidth: 20 }}
//           role="img"
//           aria-label={dataitm.icon}
//           className="anticon ant-menu-item-icon"
//         >
//           <i className={dataitm.icon} style={{ marginRight: "5px" }}></i>
//         </span>
//       }
//       title={dataitm.name}
//       id={"mnu" + dataitm.menuid}
//       data-icon={dataitm.icon}
//     >
//       {dataitm.children ? (
//         dataitm.children.map((itm, inds) => {
//           return <>{subMenuElement(itm, 1000 + inds)}</>;
//         })
//       ) : (
//         <Menu.Item
//           key={dataitm.menuid}
//           icon={
//             <span
//               style={{ minWidth: 20 }}
//               role="img"
//               aria-label={dataitm.icon}
//               className="anticon ant-menu-item-icon"
//             >
//               <i className={dataitm.icon} style={{ marginRight: "5px" }}>
//                 {" "}
//               </i>
//             </span>
//           }
//           onClick={() => {
//             setActiveMenuName({
//               ...dataitm,
//               activeMenu: dataitm.name,
//             });
//             CurrentActiveMenu(dataitm);
//           }}
//           id={"mnu" + dataitm.menuid}
//           data-icon={dataitm.icon}
//           data-name={dataitm.name}
//         >
//           {dataitm.name}
//         </Menu.Item>
//       )}
//     </SubMenu>
//   );
// };


// return (
//   <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 ,height: "100%"}} theme="dark">
//     {menuData.map((itm, ind) => {
//           return itm.menutypeid === 3 && itm.parentmenuid === 0 ? (
//             <Menu.Item
//               key={itm.menuid}
//               icon={
//                 <span
//                   style={{ minWidth: 20 }}
//                   role="img"
//                   aria-label={itm.icon}
//                   className="anticon ant-menu-item-icon"
//                 >
//                   <i className={itm.icon} style={{ marginRight: "5px" }}></i>
//                 </span>
//               }
//               onClick={() => {
//                 setActiveMenuName({
//                   ...itm,
//                   activeMenu: itm.name,
//                 });
//                 CurrentActiveMenu(itm);
//               }}
//               data-icon={itm.icon}
//             >
//               <Link to={itm.path}> {itm.name}</Link>
//             </Menu.Item>
//           ) : itm.children ? (
//             <>{subMenuElement(itm, ind)}</>
//           ) : null;
//         })}
//   </Menu>
// );
// };


// export default Sider;


import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['Sub101', 'Sub107'];

const Sider = () => {
  const [openKeys, setOpenKeys] = React.useState(['Sub101']);



  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

let MenuObj = [
  {   menuId : 101, menuText : "Cloth", parentMenu : 0 ,hasChild : 1,level:1},
  {   menuId : 102, menuText : "Men",   parentMenu : 101 ,hasChild : 1,level:2},
  {   menuId : 103, menuText : "Woman", parentMenu : 101 ,hasChild : 0,level:2},
  {   menuId : 104, menuText : "Child", parentMenu : 101 ,hasChild : 0,level:2},
  {   menuId : 105, menuText : "T-shirt",parentMenu : 102 ,hasChild : 0,level:3},
  {   menuId : 106, menuText : "Gens",parentMenu : 102 ,hasChild : 1,level:3},
  {   menuId : 107, menuText : "Electronics",parentMenu : 0 ,hasChild : 1,level:1},
  {   menuId : 108, menuText : "Keyboard",parentMenu : 107 ,hasChild : 0,level:2},
  {   menuId : 109, menuText : "Mouse",parentMenu : 107 ,hasChild : 0,level:2},
  {   menuId : 110, menuText : "Indian Gens",parentMenu : 106 ,hasChild : 0,level:4},
  {   menuId : 111, menuText : "Non-Indian Gens",parentMenu : 106 ,hasChild : 0,level:4},
];


let t = [];
let menuStack = [];
// let count = 0;
const fnMenuArray = (itm) => {

    itm.forEach((o, ind) => {
      Object.assign((t[o.menuId] = t[o.menuId] || {}), o);
       t[o.parentMenu] = t[o.parentMenu] || {};
       t[o.parentMenu].children = t[o.parentMenu].children || [];
       t[o.parentMenu].children.push(t[o.menuId]);
    })

    menuStack = t[0];
    t = [];
};


fnMenuArray(MenuObj);

// const ChildMenu=(menu)=>{
//       // return(
//       //     menu.mc.map((itm,ind)=>{
            
//       //           if(itm.hasChild){
//       //             console.log('N'+itm.menuId)
//       //             return(
//       //                   <SubMenu key={"Sub"+itm.menuId} title={itm.menuText}>
//       //                      <ChildMenu mc={itm.children}/>
//       //                   </SubMenu>
//       //             );
//       //           }else{
//       //             console.log('M'+itm.menuId)
//       //             return(<Menu.Item key={itm.menuId}>{itm.menuText}</Menu.Item>);
//       //           }
//       //     })
//       // );

//       return !menu.mc.children?()

// }


const subMenuElement = (dataitm, ind) => { 
  return !dataitm.children 
  ? (
      <Menu.Item
        key={dataitm.menuid}
        id={"mnu" + dataitm.menuid}>
          {dataitm.menuText}
      </Menu.Item>
    ) 
  : (
      <SubMenu
        className={""}
        key={dataitm.menuid}
      >
        {dataitm.children ? (
          dataitm.children.map((itm, inds) => {
            return <>{subMenuElement(itm, 1000 + inds)}</>;
          })
        ) : (
          <Menu.Item
            key={dataitm.menuid}
            id={"mnu" + dataitm.menuid}
          >
            {dataitm.menuText}
          </Menu.Item>
        )}
      </SubMenu>
    );         
}

function CreateMenu(){

       return (
                      menuStack.children.map((itm, index) =>{
                          if(itm.hasChild){
                            console.log("Main"+itm.menuId);
                            return subMenuElement(itm.children,index);
                          }else{
                            console.log("Sub"+itm.menuId);
                            return(<Menu.Item key={itm.menuId}>{itm.menuText}</Menu.Item>);
                          }
                      })
      );
}






  return (
    <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
        <CreateMenu/>
    </Menu>
  );
};

export default Sider