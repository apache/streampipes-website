import type { FC } from 'react';
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';
import PageHeader from '../../components/PageHeader';
import PageSection from '../../components/PageSection';


const MailingLists: FC = () => (
  <Layout title={'Mailing Lists'}>
    <PageHeader title={'Mailing Lists'}></PageHeader>
    <PageSection backgroundClass={"background-white"} sectionTitle={"Users"} alignCenter alignContentCenter>

      <b className={"text-center"}>You are using StreamPipes and have problems, questions or feature requests? Then the
        community is happy
        to answer you on the user list.</b>
      <div>
        <table className="table" style={{marginTop: '30px'}}>
          <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Subscribe</th>
            <th scope="col">Unsubscribe</th>
            <th scope="col">Post</th>
            <th scope="col">Archive</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>users@streampipes.apache.org</td>
            <td><a href="mailto:users-subscribe@streampipes.apache.org">Subscribe</a></td>
            <td><a href="mailto:users-subscribe@streampipes.apache.org">Unsubscribe</a></td>
            <td><a href="mailto:users@streampipes.apache.org">Post</a></td>
            <td><a href="http://mail-archives.apache.org/mod_mbox/streampipes-users/">Archive</a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </PageSection>
    <PageSection backgroundClass={"background-primary-light"} sectionTitle={"Developers"} alignCenter alignContentCenter>
      <b>If you are interested in contributing to StreamPipes, subscribe to our developer-oriented lists!</b>
      <div>
        <table className="table" style={{marginTop: '30px'}}>
          <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Subscribe</th>
            <th scope="col">Unsubscribe</th>
            <th scope="col">Post</th>
            <th scope="col">Archive</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>dev@streampipes.apache.org</td>
            <td><a href="mailto:dev-subscribe@streampipes.apache.org">Subscribe</a></td>
            <td><a href="mailto:dev-unsubscribe@streampipes.apache.org">Unsubscribe</a></td>
            <td><a href="mailto:dev@streampipes.apache.org">Post</a></td>
            <td><a href="http://mail-archives.apache.org/mod_mbox/streampipes-dev/">Archive</a></td>
          </tr>
          <tr>
            <td>commits@streampipes.apache.org</td>
            <td><a href="mailto:commits-subscribe@streampipes.apache.org">Subscribe</a></td>
            <td><a href="mailto:commits-unsubscribe@streampipes.apache.org">Unsubscribe</a></td>
            <td><a href="mailto:commits@streampipes.apache.org">Post</a></td>
            <td><a href="http://mail-archives.apache.org/mod_mbox/streampipes-commits/">Archive</a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </PageSection>
  </Layout>
)


export default MailingLists;
