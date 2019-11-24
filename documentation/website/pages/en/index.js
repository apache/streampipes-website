/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

const React = require('react');
const classNames = require('classnames');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
    return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
    return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
    return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
    render() {
        return (
            <div className="pluginWrapper buttonWrapper">
                <a className="button sp-button" href={this.props.href} target={this.props.target}>
                    {this.props.children}
                </a>
            </div>
        );
    }
}

Button.defaultProps = {
    target: '_self',
};

class HomeSplash extends React.Component {
    render() {
        return (
            <div className="padding-50 margin-top-100">
                <div className="center">
                    <h1>Apache <span className="sp-green">S</span><span
                        className="sp-blue">tream</span><span className="sp-green">P</span><span
                        className="sp-blue">ipes</span> (incubating) Documentation</h1>

                    <h3>Here are some things to get started:</h3>
                </div>
                <SpDocsLinks/>
            </div>
        );
    }
}


class SpDocsLinks extends React.Component {
    render() {
        const elements = [
            {
                content: 'Get an overview of the features',
                title: 'Tour',
                bg: '#39b54a',
                bgBorder: 'lightgreen',
                icon: "fas fa-eye fa-7x",
                link: '/docs/docs/user-guide-tour'
            },
            {
                content: 'Install StreamPipes in your own infrastructure',
                title: 'Installation',
                bg: "#39b54a",
                bgBorder: 'lightgreen',
                icon: "fas fa-cloud-download-alt fa-7x",
                link: '/docs/docs/user-guide-installation'
            },
            {
                content: 'Learn how to use StreamPipes',
                title: 'First Steps',
                bg: "#39b54a",
                bgBorder: 'lightgreen',
                icon: "fas fa-graduation-cap fa-7x",
                link: '/docs/docs/user-guide-first-steps'
            },
            {
                content: 'Learn how to extend StreamPipes',
                title: 'Developer Guide',
                bg: "#39b54a",
                bgBorder: 'lightgreen',
                icon: "fas fas fa-book fa-7x",
                link: '/docs/docs/dev-guide-introduction'
            }
        ];

        return (
            <div className="container" style={{"margin": '50px'}}>
                <div className="wrapper">
                    <div className="gridBlock">
                        {elements.map((value, index) => {
                            return <SpDocsLink key={index} settings={value}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

class SpDocsLink extends React.Component {
    render() {
        return (
            <div className="blockElement alignCenter fourByGridBlock" style={{'background': this.props.settings.bg, 'color': 'white'}}>
                <a href={this.props.settings.link} style={{'color': 'white'}}>
                    <i className={this.props.settings.icon}></i>
                    <h2>{this.props.settings.title}</h2>
                    <h4>{this.props.settings.content}</h4>
                </a>
            </div>
        )
    }
}

class Index extends React.Component {
    render() {
        return (
            <div>
                <HomeSplash/>
            </div>
        );
    }
}

module.exports = Index;
