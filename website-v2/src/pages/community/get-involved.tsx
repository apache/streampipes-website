import type { FC } from 'react';
import React from 'react';
import Layout from '@theme/Layout';
import PageHeader from '../../components/PageHeader';
import PageSection from '../../components/PageSection';

const repositories = [
  {
    name: 'streampipes',
    description: 'Core platform, extension services, backend components, and the main UI application.',
    link: 'https://github.com/apache/streampipes'
  },
  {
    name: 'streampipes-website',
    description: 'Website, product pages, and user and developer documentation.',
    link: 'https://github.com/apache/streampipes-website'
  },
  {
    name: 'streampipes-examples',
    description: 'Example projects, sample extensions, and reference material for contributors.',
    link: 'https://github.com/apache/streampipes-examples'
  }
];

const GetInvolved: FC = () => (
  <Layout title={'Get involved'}>
    <PageHeader
      title={'Get involved'}
      subtitle={'Contribute code, docs, ideas, and feedback to Apache StreamPipes'}
    ></PageHeader>

    <PageSection
      backgroundClass={'background-white'}
      sectionTitle={'Contributing'}
      sectionSubtitle={'A practical path from first contact to first contribution'}
    >
      <div className="community-intro">
        <p className="community-lead">
          StreamPipes grows through community contributions. You do not need to start with a large
          feature or a major architectural change. Bug reports, documentation improvements, testing,
          UI refinements, example updates, and small code fixes all help move the project forward.
        </p>
      </div>

      <div className="community-contribution-grid">
        <div className="community-card">
          <span className="community-card-icon">
            <i className="fas fa-comments"></i>
          </span>
          <h3>Start with a discussion</h3>
          <p>
            If you want feedback on an idea, need product context, or want to understand whether work
            is already in progress, start with the community channels before opening a larger pull
            request.
          </p>
          <p>
            The best places are the <a href="/community/mailing-lists">mailing lists</a> and{' '}
            <a href="https://github.com/apache/streampipes/discussions">GitHub Discussions</a>.
          </p>
        </div>

        <div className="community-card">
          <span className="community-card-icon">
            <i className="fas fa-bug"></i>
          </span>
          <h3>Pick an issue or report one</h3>
          <p>
            Contributions often begin with an issue. You can report bugs, propose improvements, or
            look for an existing task that matches your area of interest.
          </p>
          <p>
            Browse the issue tracker at{' '}
            <a href="https://github.com/apache/streampipes/issues">github.com/apache/streampipes/issues</a>.
          </p>
        </div>

        <div className="community-card">
          <span className="community-card-icon">
            <i className="fas fa-code-branch"></i>
          </span>
          <h3>Open a pull request</h3>
          <p>
            Once you have a concrete change, open a pull request against the relevant repository and
            describe the motivation, scope, and any follow-up work clearly.
          </p>
          <p>
            Smaller, focused pull requests are usually easier to review and integrate than broad,
            multi-topic changes.
          </p>
        </div>
      </div>

      <div className="community-steps-card">
        <h3>Typical contribution flow</h3>
        <p>
          A good default workflow is to discuss the change briefly, align on scope, implement the
          update in the correct repository, and then open a focused pull request with enough context
          for reviewers. This keeps review cycles short and makes it easier for the community to help
          you quickly.
        </p>
      </div>
    </PageSection>

    <PageSection
      backgroundClass={'background-primary-light'}
      sectionTitle={'Community Channels'}
      sectionSubtitle={'Choose the right place depending on the type of contribution'}
    >
      <div className="community-channel-grid">
        <div className="community-channel-card">
          <h3>Mailing lists</h3>
          <p>
            Use the project mailing lists for design discussions, contributor questions, and
            community-visible decisions that should be easy to reference later.
          </p>
          <a className="sp-button sp-button-medium sp-button-blue" href="/community/mailing-lists">
            Open mailing lists
          </a>
        </div>

        <div className="community-channel-card">
          <h3>GitHub Discussions</h3>
          <p>
            GitHub Discussions are a good entry point for questions, ideas, and early feedback when
            you want a lower-friction conversation around a possible contribution.
          </p>
          <a
            className="sp-button sp-button-medium sp-button-blue"
            href="https://github.com/apache/streampipes/discussions"
          >
            Open discussions
          </a>
        </div>

        <div className="community-channel-card">
          <h3>GitHub Issues</h3>
          <p>
            Use issues for actionable bugs, feature requests, and work items that should be tracked
            explicitly in the project backlog.
          </p>
          <a
            className="sp-button sp-button-medium sp-button-blue"
            href="https://github.com/apache/streampipes/issues"
          >
            Browse issues
          </a>
        </div>
      </div>
    </PageSection>

    <PageSection
      backgroundClass={'background-white'}
      sectionTitle={'Source Code'}
      sectionSubtitle={'The main repositories for code, documentation, and examples'}
    >
      <div className="community-repo-table-wrap">
        <table className="table community-repo-table">
          <thead>
            <tr>
              <th scope="col">Repository</th>
              <th scope="col">What it contains</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            {repositories.map(repo => (
              <tr key={repo.name}>
                <td>{repo.name}</td>
                <td>{repo.description}</td>
                <td>
                  <a href={repo.link}>Open repository</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageSection>
  </Layout>
);

export default GetInvolved;
