import React from 'react'
import { Link, NavLink } from 'react-router-dom'

class SideNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuList: [
        {
          hasSubMenu: false,
          fatherMenu: {
            href:'/',
            menuContent: '首页'
          },
          menuLogo: 'dashboard'
        },
        {
          hasSubMenu: true,
          fatherMenu: {
            href:'/product',
            menuContent: '商品'
          },
          menuLogo: 'list',
          subMenu: [
            {
              href:'/product',
              menuContent: '商品管理'
            },
            {
              href:'/product-category',
              menuContent: '品类管理'
            }
          ]
        },
        {
          hasSubMenu: true,
          fatherMenu: {
            href:'/order',
            menuContent: '订单'
          },
          menuLogo: 'check-square-o',
          subMenu: [
            {
              href:'/order',
              menuContent: '订单管理'
            }
          ]
        },
        {
          hasSubMenu: true,
          fatherMenu: {
            href:'/user',
            menuContent: '用户'
          },
          menuLogo: 'user-o',
          subMenu: [
            {
              href:'/user',
              menuContent: '用户管理'
            }
          ]
        }
      ]
    }
  }
  render() {
    return (
      <nav className="navbar-default navbar-side">
        <div className="sidebar-collapse">
          <ul className="nav">
          {this.state.menuList.map((menuItem, index) => {
            if(!menuItem.hasSubMenu) {
              return (
                <li key={index}>
                  <NavLink exact activeClassName="active-menu" to={menuItem.fatherMenu.href}>
                    <i className={`fa fa-${menuItem.menuLogo}`}></i>
                    <span>{menuItem.fatherMenu.menuContent}</span>
                  </NavLink>
                </li>
              )
            } else {
              return (
                <li key={index}>
                  <Link to={menuItem.fatherMenu.href}>
                    <i className={`fa fa-${menuItem.menuLogo}`}></i>
                    <span>{menuItem.fatherMenu.menuContent}</span>
                    <span className="fa arrow"></span>
                  </Link>
                  <ul className="nav nav-second-level collapse in">
                    {menuItem.subMenu.map((subMenu, index) => {
                      return (
                        <li key={index}>
                          <NavLink to={subMenu.href} activeClassName="active-menu">{subMenu.menuContent}</NavLink>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            }
          })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default SideNav