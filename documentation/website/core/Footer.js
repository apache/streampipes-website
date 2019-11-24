/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
    docUrl(doc, language) {
        const baseUrl = this.props.config.baseUrl;
        return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
    }

    pageUrl(doc, language) {
        const baseUrl = this.props.config.baseUrl;
        return baseUrl + (language ? language + '/' : '') + doc;
    }

    render() {
        const currentYear = new Date().getFullYear();
        return (
            <div>
                <footer className="nav-footer" id="footer">
                    <section className="sitemap">
                        <a href={this.props.config.baseUrl} className="nav-home">
                            {this.props.config.footerIcon && (
                                <img
                                    src={this.props.config.baseUrl + this.props.config.footerIcon}
                                    alt={this.props.config.title}
                                    width="66"
                                />
                            )}
                        </a>
                        <div>
                            <h5>Docs</h5>
                            <a href={this.props.config.baseUrl + 'docs/user-guide-introduction'}>
                                User Guide
                            </a>
                            <a href={this.props.config.baseUrl + 'docs/dev-guide-introduction'}>
                                Developer Guide
                            </a>
                            <a href={this.props.config.baseUrl + 'docs/faq-common-problems'}> 
                                Frequently Asked Questions
                            </a>
                        </div>
                        <div>
                            <h5>Community</h5>
                            <a
                                href="http://stackoverflow.com/questions/tagged/streampipes"
                                target="_blank"
                                rel="noreferrer noopener">
                                Stack Overflow
                            </a>
                            <a
                                href="https://twitter.com/streampipes"
                                target="_blank"
                                rel="noreferrer noopener">
                                Twitter
                            </a>
                            <a
                                href="https://github.com/apache/incubator-streampipes"
                                target="_blank"
                                rel="noreferrer noopener">
                                Github
                            </a>
                            <a
                                href="https://hub.docker.com/u/streampipes"
                                target="_blank"
                                rel="noreferrer noopener">
                                Docker Hub
                            </a>
                        </div>
                        <div>
                            <h5>More</h5>
                            <a href={this.props.config.baseUrl + 'blog'}>Blog</a>
                            <a href="https://streampipes.apache.org.org">Website</a>
                            <a
                                className="github-button"
                                href={this.props.config.repoUrl}
                                data-icon="octicon-star"
                                data-count-href="/streampipes/streampipes/stargazers"
                                data-show-count={true}
                                data-count-aria-label="# stargazers on GitHub"
                                aria-label="Star this project on GitHub">
                                Star
                            </a>
                        </div>
                    </section>

                    <section className="copyright">{this.props.config.copyright}</section>
                </footer>
            </div>

        );
    }

}

module.exports = Footer;
