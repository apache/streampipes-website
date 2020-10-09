
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
                            <a href="https://streampipes.apache.org">Website</a>
                            <a href="https://www.apache.org/foundation/policies/privacy.html">Privacy</a>
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

                    <section className="copyright">{this.props.config.copyright}<p style={{marginBottom:'0px', marginLeft:'20px', marginRight:'20px'}}>Disclaimer: Apache StreamPipes (incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.</p></section>
                </footer>
            </div>

        );
    }

}

module.exports = Footer;
