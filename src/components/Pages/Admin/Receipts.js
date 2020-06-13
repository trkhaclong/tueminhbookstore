import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as AdminActions from '../../../store/actions/adminActions';
import TableView from '../../Common/TableView;'

const columns = [
    {label: 'ID', name: 'id'},
    {label: 'Total', name: 'total'}
]

class Receipts extends Component {

    componentDidMount(){
        this.props.getReceipts(this.props.auth.token);
    }
    render(){
        const receipts = this.props.admin.receipts;

        return (
            <div>
                <h1>Recepits</h1>
                <TableView
                    columns={columns}
                    rows={receipts}
                    link='receipts'
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        admin: state.admin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getReceipts: (token) => {
            dispatch(AdminActions.getReceipts(token));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Receipts);