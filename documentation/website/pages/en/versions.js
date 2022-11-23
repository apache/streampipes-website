
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
const CompLibrary = require('../../core/CompLibrary');
const Container = CompLibrary.Container;
const CWD = process.cwd();

const siteConfig = require(`${CWD}/siteConfig.js`);
const versions = require(`${CWD}/versions.json`);

function Versions(props) {
  const latestVersion = versions[0];
  const repoUrl = `https://github.com/apache/streampipes`;
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer versionsContainer">
        <div className="post">
          <header className="postHeader">
            <h1>{siteConfig.title} Versions</h1>
          </header>
          <p>New versions of this project are released every so often.</p>
          <h3 id="latest">Current version (Stable)</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  <a href={`${siteConfig.baseUrl}docs/user-guide-introduction`}>&#x1F4DA; Documentation</a>
                </td>
                <td>
                  <a href={`${repoUrl}/releases/tag/release/${latestVersion}`}>&#x1F5DE; Release Notes</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            This is the version that is configured automatically when you first
            install this project.
          </p>
          <h3 id="rc">Pre-release versions</h3>
          <p>The current development status can be found in our dev-branch on GitHub.<br/>
            Please note that the software is still under development, which means that features may still change or disappear or behave error-prone until the next release.<br/>
            If you have ideas for new features, you can discuss them on the mailing list or create an entry in the issue tracker.</p>
          <table className="versions">
            <tbody>
              <tr>
                <td>
                  <a href="https://github.com/apache/streampipes/tree/dev">&#128421; Development Branch</a>
                </td>
                <td>
                  <a href="https://streampipes.apache.org/docs/docs/next/user-guide-introduction">&#x1F6A7; Documentation</a>
                </td>
                <td>
                  <a href="https://streampipes.apache.org/mailinglists.html">&#x1F4EF; Mailing list</a>
                </td>
                <td>
                  <a href="https://issues.apache.org/jira/projects/STREAMPIPES/issues/">&#x1F4A1; Issue Tracker</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p></p>
          <h3 id="archive">Past Versions</h3>
          <table className="versions">
            <tbody>
              {versions.map(
                version =>
                  version !== latestVersion && !version.includes("pre-asf") && (
                    <tr>
                      <th>{version}</th>
                      <td>
                        <a href={`${siteConfig.baseUrl}docs/${version}/user-guide-introduction`}>&#x1F4DA; Documentation</a>
                      </td>
                      <td>
                        <a href={`${repoUrl}/releases/tag/release/${version}`}>&#x1F5DE; Release Notes</a>
                      </td>
                    </tr>
                  ),
              )}
              {versions.map(
                  version =>
                      version !== latestVersion && version.includes("pre-asf") && (
                          <tr>
                            <th>{version}</th>
                            <td>
                              <a href={`${siteConfig.baseUrl}docs/${version}/user-guide-introduction`}>&#x1F4DA; Documentation</a>
                            </td>
                            <td>
                              <a href={`${repoUrl}/releases/tag/${version.replace("-pre-asf", "")}`}>&#x1F5DE; Release Notes</a>
                            </td>
                          </tr>
                      ),
              )}
            </tbody>
          </table>
          <p>
            You can find past versions of this project on{' '}
            <a href={`${repoUrl}/releases`}>GitHub</a>
          </p>
        </div>
      </Container>
    </div>
  );
}

module.exports = Versions;
