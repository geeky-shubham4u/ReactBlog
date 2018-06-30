import React, {Component} from 'react'


class Header extends Component {
  render(){
    return(
      <div>
        <header className="masthead">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>{this.props.title}</h1>
                  <span className="subheading">{this.props.subtitle}</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

Header.defaultProps = {
  title: 'Blog',
  subtitle: 'A blog coded with React js'
}


export default Header;
