import React from 'react'
import Nav from '../../components/Nav'
import { connect } from 'react-redux'
import { getCategories } from '../../actions'

class NavContainer extends React.Component {
    componentDidMount(){
        this.props.getCategories()
    }
    render () {
        const {categories} = this.props
        return (
            <Nav  categories={categories}/>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories.categories
})

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer)