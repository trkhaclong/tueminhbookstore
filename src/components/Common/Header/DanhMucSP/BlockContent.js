import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class BlockContent extends Component {
    render() {
        return(
            <li className="parant dropdown aligned-left">
                <span className="open-child hidden-md hidden-lg">(open)</span>
                <Link to={this.props.link} className="dropdown-toggle" title="" data-toggle="dropdown" data-clickable="1">
                    <span className="menu-title">{this.props.name}</span>
                    <b className="caret"></b>
                </Link>
                <div className="dropdown-menu">
                    <div className="dropdown-menu-inner">
                        <div className="row">
                            <div className="mega-col col-sm-3" data-colwidth="3">
                                <div className="mega-col-inner">
                                    <div className="ves-widget">
                                        <div className="widget-html">
                                            <div className="widget-inner">
                                                <h3>
                                                    <span>
                                                        <strong>
                                                            <Link to={this.props.link0} className="content-childrens">
                                                                <span>{this.props.cate0}</span>
                                                            </Link>
                                                        </strong>
                                                    </span>
                                                </h3>
                                                <ul className="nav-links">
                                                    <li>
                                                        <Link to={this.props.clink0}>
                                                            {this.props.child0}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink1}>
                                                            {this.props.child1}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink2}>
                                                            {this.props.child2}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink3}>
                                                            {this.props.child3}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <em>
                                                                <Link to={this.props.link0}>
                                                                    <span style={{color: '#ff9800'}}>{this.props.child4}</span>
                                                                </Link>
                                                            </em>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mega-col col-sm-3" data-colwidth="3">
                                <div className="mega-col-inner">
                                    <div className="ves-widget">
                                        <div className="widget-html">
                                            <div className="widget-inner">
                                                <h3>
                                                    <span>
                                                        <strong>
                                                            <Link to={this.props.link1} className="content-childrens">
                                                                <span>{this.props.cate1}</span>
                                                            </Link>
                                                        </strong>
                                                    </span>
                                                </h3>
                                                <ul className="nav-links">
                                                    <li>
                                                        <Link to={this.props.clink10}>
                                                            {this.props.child10}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink11}>
                                                            {this.props.child11}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink12}>
                                                            {this.props.child12}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink13}>
                                                            {this.props.child13}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <em>
                                                                <Link to={this.props.link1}>
                                                                    <span  style={{color: '#ff9800'}}>{this.props.child14}</span>
                                                                </Link>
                                                            </em>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mega-col col-sm-3" data-colwidth="3">
                                <div className="mega-col-inner">
                                    <div className="ves-widget">
                                        <div className="widget-html">
                                            <div className="widget-inner">
                                                <h3>
                                                    <span>
                                                        <strong>
                                                            <Link to={this.props.link2} className="content-childrens">
                                                                <span>{this.props.cate2}</span>
                                                            </Link>
                                                        </strong>
                                                    </span>
                                                </h3>
                                                <ul className="nav-links">
                                                    <li>
                                                        <Link to={this.props.clink20}>
                                                            {this.props.child20}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink21}>
                                                            {this.props.child21}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink22}>
                                                            {this.props.child22}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink23}>
                                                            {this.props.child23}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <em>
                                                                <Link to={this.props.link2}>
                                                                    <span  style={{color: '#ff9800'}}>{this.props.child24}</span>
                                                                </Link>
                                                            </em>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                            
                            <div className="mega-col col-sm-3" data-colwidth="3">
                                <div className="mega-col-inner">
                                    <div className="ves-widget">
                                        <div className="widget-html">
                                            <div className="widget-inner">
                                                <h3>
                                                    <span>
                                                        <strong>
                                                            <Link to={this.props.link3} className="content-childrens">
                                                                <span>{this.props.cate3}</span>
                                                            </Link>
                                                        </strong>
                                                    </span>
                                                </h3>
                                                <ul className="nav-links">
                                                    <li>
                                                        <Link to={this.props.clink30}>
                                                            {this.props.child30}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink31}>
                                                            {this.props.child31}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink32}>
                                                            {this.props.child32}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink33}>
                                                            {this.props.child33}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <em>
                                                                <Link to={this.props.link3}>
                                                                    <span style={{color: '#ff9800'}}>{this.props.child34}</span>
                                                                </Link>
                                                            </em>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                            
                            <div className="mega-col col-sm-3" data-colwidth="3">
                                <div className="mega-col-inner">
                                    <div className="ves-widget">
                                        <div className="widget-html">
                                            <div className="widget-inner">
                                                <h3>
                                                    <span>
                                                        <strong>
                                                            <Link to={this.props.link4} className="content-childrens">
                                                                <span>{this.props.cate4}</span>
                                                            </Link>
                                                        </strong>
                                                    </span>
                                                </h3>
                                                <ul className="nav-links">
                                                    <li>
                                                        <Link to={this.props.clink40}>
                                                            {this.props.child40}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink41}>
                                                            {this.props.child41}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink42}>
                                                            {this.props.child42}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink43}>
                                                            {this.props.child43}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <span  style={{color: '#ff6600'}}>
                                                            <em>
                                                                <Link to={this.props.link4}>
                                                                    <span style={{color: '#ff9800'}}>{this.props.child44}</span>
                                                                </Link>
                                                            </em>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                            
                            <div className="mega-col col-sm-3" data-colwidth="3">
                                <div className="mega-col-inner">
                                    <div className="ves-widget">
                                        <div className="widget-html">
                                            <div className="widget-inner">
                                                <h3>
                                                    <span>
                                                        <strong>
                                                            <Link to={this.props.link5} className="content-childrens">
                                                                <span>{this.props.cate5}</span>
                                                            </Link>
                                                        </strong>
                                                    </span>
                                                </h3>
                                                <ul className="nav-links">
                                                    <li>
                                                        <Link to={this.props.clink50}>
                                                            {this.props.child50}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink51}>
                                                            {this.props.child51}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink52}>
                                                            {this.props.child52}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink53}>
                                                            {this.props.child53}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <em>
                                                                <Link to={this.props.link5}>
                                                                    <span style={{color: '#ff9800'}}>{this.props.child54}</span>
                                                                </Link>
                                                            </em>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mega-col col-sm-3" data-colwidth="3">
                                <div className="mega-col-inner">
                                    <div className="ves-widget">
                                        <div className="widget-html">
                                            <div className="widget-inner">
                                                <h3>
                                                    <span>
                                                        <strong>
                                                            <Link to={this.props.link6} className="content-childrens">
                                                                <span>{this.props.cate6}</span>
                                                            </Link>
                                                        </strong>
                                                    </span>
                                                </h3>
                                                <ul className="nav-links">
                                                    <li>
                                                        <Link to={this.props.clink60}>
                                                            {this.props.child60}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink61}>
                                                            {this.props.child61}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink62}>
                                                            {this.props.child62}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink63}>
                                                            {this.props.child63}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <em>
                                                                <Link to={this.props.link6}>
                                                                    <span style={{color: '#ff9800'}}>{this.props.child64}</span>
                                                                </Link>
                                                            </em>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                            <div className="mega-col col-sm-3" data-colwidth="3">
                                <div className="mega-col-inner">
                                    <div className="ves-widget">
                                        <div className="widget-html">
                                            <div className="widget-inner">
                                                <h3>
                                                    <span>
                                                        <strong>
                                                            <Link to={this.props.link7} className="content-childrens">
                                                                <span>{this.props.cate7}</span>
                                                            </Link>
                                                        </strong>
                                                    </span>
                                                </h3>
                                                <ul className="nav-links">
                                                    <li>
                                                        <Link to={this.props.clink70}>
                                                            {this.props.child70}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink71}>
                                                            {this.props.child71}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink72}>
                                                            {this.props.child72}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={this.props.clink73}>
                                                            {this.props.child73}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <em>
                                                                <Link to={this.props.link7}>
                                                                    <span style={{color: '#ff9800'}}>{this.props.child74}</span>
                                                                </Link>
                                                            </em>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
export default BlockContent;