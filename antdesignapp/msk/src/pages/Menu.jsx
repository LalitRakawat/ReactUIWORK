import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';



const { SubMenu } = Menu;

//Variables ...
let t = [];
let menuStack = [];

// submenu keys of first level
const rootSubmenuKeys = ['101', '107'];

const Sider = () => {

  const [openKeys, setOpenKeys] = React.useState(['101']);

  //Set Menu Key Open-Close
  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  //Menu Object
  let MenuObj = [
    {   menuId : 101, menuText : "Cloth", parentMenu : 0 ,hasChild : 1},
    {   menuId : 102, menuText : "Men",   parentMenu : 101 ,hasChild : 1},
    {   menuId : 103, menuText : "Woman", parentMenu : 101 ,hasChild : 0},
    {   menuId : 104, menuText : "Child", parentMenu : 101 ,hasChild : 0},
    {   menuId : 105, menuText : "T-shirt",parentMenu : 102 ,hasChild : 0},
    {   menuId : 106, menuText : "Gens",parentMenu : 102 ,hasChild : 1},
    {   menuId : 107, menuText : "Electronics",parentMenu : 0 ,hasChild : 1},
    {   menuId : 108, menuText : "Keyboard",parentMenu : 107 ,hasChild : 0},
    {   menuId : 109, menuText : "Mouse",parentMenu : 107 ,hasChild : 0},
    {   menuId : 110, menuText : "Indian Gens",parentMenu : 106 ,hasChild : 1},
    {   menuId : 111, menuText : "Non-Indian Gens",parentMenu : 106 ,hasChild : 0},
    {   menuId : 112, menuText : "SLM",parentMenu : 110 ,hasChild : 0},
    {   menuId : 113, menuText : "MLS",parentMenu : 110 ,hasChild : 0},
  ];

  //Organize The Menu Data In Form Of Parent-Child Form
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

  //Function Calling To Organize Menu Data To Create Menu
  fnMenuArray(MenuObj);

  //subMenuElement-Componet
  const subMenuElement = (dataitm) => { 
    return dataitm.hasChild === 0 
    ? (    <Menu.Item  key={dataitm.menuId} id={"mnu" + dataitm.menuId}>  {dataitm.menuText} </Menu.Item>  ) 
    : (
           <SubMenu key={dataitm.menuId} id={"sub"+ dataitm.menuId} title={dataitm.menuText}>
              {
                  dataitm.children ? (dataitm.children.map((itm) => { return <>{subMenuElement(itm)}</>; })) 
                                  : (<Menu.Item key={dataitm.menuId} id={"mnu" + dataitm.menuId}> {dataitm.menuText} </Menu.Item>)
              }
           </SubMenu>
      );         
  }

  //CreateMenu-Componet
  const CreateMenu = () =>{
                return (
                  menuStack.children.map((itm) =>{
                      if(itm.hasChild){ return subMenuElement(itm); }
                      else{ return(<Menu.Item key={itm.menuId} id={"mnu" + itm.menuId}>{itm.menuText}</Menu.Item>);}
                  })
                );
  }


  return (
    <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 ,height: "100vh"}} theme="dark">
        <CreateMenu/>
    </Menu>
  );
};

export default Sider
