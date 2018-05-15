import React from 'react';
import { connect } from "react-redux";
import {  Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        const nav = this.props.nav.nav.map((nav, i) => {
            return (
                <Link 
                    onClick={() => this.props.switchNav(nav.nav)}
                    to={nav.url} key={i}>

                    <h1 
                        className={this.props.nav.active === nav.nav ? "active" : null }
                    >{nav.nav}</h1>
                    
                </Link>
            )
        })
        return (
            <header>
                {nav}
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nav: state.nav
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        switchNav(nav) {
            dispatch({ type: 'ACTIVE_NAV', payload: nav })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
