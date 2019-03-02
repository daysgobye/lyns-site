import React, { Component } from 'react';
import Content from '../Content/Content'
import { Parallax, Background } from 'react-parallax';
import "./laxheader.sass"
class LaxHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="hero">
                <Parallax
                    blur={0}
                    bgImage={this.props.bgimg}
                    bgImageAlt="the cat"
                    strength={300}
                >
                    <div className="tint">
                        <Content>
                            {this.props.children}
                        </Content>
                    </div>
                </Parallax>


            </div >

        );
    }
}

export default LaxHeader;