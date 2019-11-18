/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function docUrl(doc, language) {
    return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

class Help extends React.Component {
    render() {
        return (
            <div className="pageContainer">
                <Container className="community">
                    <h1>Where To Get Support</h1>
                    <p>
                        <strong>StreamPipes</strong> is a new open source tool. We want interested users to try the tool
                        and are dedicated to help with any problems in this rather early stage. If you have any feedback feel free
                        to contact us directly or use one of the following channels to get help:
                    </p>
                    <h2>Mail</h2>
                    <p>
                        Just drop us an email at {" "}
                        <a href="mailto:feedback@streampipes.org">
                            feedback@streampipes.org
                        </a> to ask any questions!
                    </p>
                    <h2>Github</h2>
                    <p>
                        If you found a bug or if you'd like to see a new feature, add an issue at {" "}
                        <a href="https://github.com/streampipes/streampipes">
                            https://github.com/streampipes/streampipes
                        </a>.
                    </p>
                    <h2>Slack</h2>
                    <p>
                        We'll also be glad to answer your questions, discuss use cases and exchange feedback through our Slack channel! Join us on {" "}
                        <a href="https://slack.streampipes.org">
                            https://slack.streampipes.org
                        </a>.
                    </p>
                    <h2>Twitter</h2>
                    <p>
                        For the latest news about StreamPipes,{" "}
                        <a href="https://twitter.com/streampipes">
                            follow <strong>@streampipes</strong> on Twitter
                        </a>.
                    </p>
                </Container>
            </div>
        );
    }
}
Help.defaultProps = {
    language: "en"
};
module.exports = Help;