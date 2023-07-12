import type { FC } from 'react';
import React from 'react';
import Layout from '@theme/Layout';
import PageHeader from '../../components/PageHeader';
import PageSection from '../../components/PageSection';


const GetInvolved: FC = () => (
  <Layout title={'Get involved'}>
    <PageHeader title={'Get involved'}></PageHeader>
    <PageSection backgroundClass={"background-white"} sectionTitle={"Contributing"}>
      <div>
        <b>We welcome contributors!</b>
        <p>There are many ways to help. Become part of a highly motivated community and help growing
          StreamPipes:</p>
        <ul>
          <li><i className="fas fa-check sp-color-green"></i> Submit a bug report on <a
            href="https://github.com/apache/streampipes/issues">GitHub</a></li>
          <li><i className="fas fa-check sp-color-green"></i> Subscribe to our <a href="/mailinglists.html">mailing
            lists</a></li>
          <li><i className="fas fa-check sp-color-green"></i> Create a pull request on Github</li>
        </ul>
      </div>
    </PageSection>
    <PageSection backgroundClass={"background-primary-light"} sectionTitle={"Source Code"} alignCenter alignContentCenter>
      <b>Currently, the following source code repositories are available on Github:</b>
      <div>
        <table className="table" style={{marginTop: '30px'}}>
          <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Link</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>streampipes</td>
            <td>StreamPipes Core, Extensions, UI</td>
            <td><a href="https://www.github.com/apache/streampipes">Link</a></td>
          </tr>
          <tr>
            <td>streampipes-website</td>
            <td>StreamPipes Website + Docs</td>
            <td><a href="https://www.github.com/apache/streampipes-website">Link</a></td>
          </tr>
          <tr>
            <td>streampipes-examples</td>
            <td>StreamPipes Examples</td>
            <td><a href="https://www.github.com/apache/streampipes-examples">Link</a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </PageSection>
  </Layout>
)


export default GetInvolved;
