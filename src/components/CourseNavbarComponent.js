import React from "react";
import {Link} from "react-router-dom";

export default class CourseNavbarComponent extends React.Component {

    state = {
        title: "New Course"
    }

    render() {
        return (
            <div>
                <nav className="justify-content-start navbar navbar-expand-sm  fixed-top">
                    <em className="fa fa-bars fa-3x wbdv-field wbdv-hamburger d-block text-dark"></em>
                    <a className="navbar-brand col-2 d-none d-lg-block d-xl-block" href="#">Course Manager</a>
                    <form>
                        <input type ="text" id="title-fld" className="input-large"  onChange={(e) => {
                            const newTitle = e.target.value
                            this.setState({title: newTitle})
                        }} placeholder="Enter Course"/>







                    </form>
                    <button className="btn btn-success " onClick={() => this.props.addCourse(this.state.title)} type="button">
                        +
                    </button>
                    <Link to="/">
                        <i className="fas fa-2x fa-home float-right"></i>
                    </Link>
                </nav>



                <button className="btn btn-success"
                        style={{position: "fixed", bottom: 0, right: 0}}
                        onClick={() => this.props.addCourse(this.state.title)}><i className="fa fa-plus-circle"/></button>

            </div>

        )
    }

}