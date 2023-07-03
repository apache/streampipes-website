import type { FC } from 'react';
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';
import PageHeader from '../../components/PageHeader';
import PageSection from '../../components/PageSection';
import Slideshare from '../../components/Slideshare';
import Youtube from '../../components/Youtube';


const SlidesAndVideos: FC = () => (
  <Layout title={'Slides & Videos'}>
    <PageHeader title={'Slides & Videos'}></PageHeader>
    <PageSection sectionTitle={"Slides"} backgroundClass={"background-white"}>
            <div className="row">
                  <Slideshare
                    title={"ApacheCon @Home 2020"}
                    talkTitle={"Apache StreamPipes – Flexible Industrial IoT Management"}
                    url={"//www.slideshare.net/streampipes/apache-streampipes-flexible-industrial-iot-management"}
                    slideshowUrl={"//www.slideshare.net/slideshow/embed_code/key/ft2kr7YEN28kBs"}>
                  </Slideshare>
              <Slideshare
                title={"ApacheCon North America 2019"}
                talkTitle={"Self-Service IoT Data Analytics with StreamPipes"}
                url={"//www.slideshare.net/streampipes/selfservice-iot-data-analytics-with-streampipes"}
                slideshowUrl={"//www.slideshare.net/slideshow/embed_code/key/3p8BjRumH6ciac"}>
              </Slideshare>
              <Slideshare
                title={"Flink Forward Europe 2019"}
                talkTitle={"Flink for Everyone: Self-Service Data Analytics with StreamPipes"}
                url={"//www.slideshare.net/streampipes/flink-for-everyone-selfservice-data-analytics-with-streampipes"}
                slideshowUrl={"//www.slideshare.net/slideshow/embed_code/key/2plin5oBtYekaL"}>
              </Slideshare>
            </div>
    </PageSection>

    <PageSection sectionTitle={"Videos"} backgroundClass={"background-primary-light"}>
            <div className="row">
              <Youtube title={"SF Big Analytics Meetup 2020"} url={"https://www.youtube.com/embed/FdyrJQboqHs"}></Youtube>
              <Youtube title={"ApacheCon @Home 2020"} url={"https://www.youtube.com/embed/pfLfVv5EyLs"}></Youtube>
              <Youtube title={"ApacheCon @Home 2020"} url={"https://www.youtube.com/embed/SzWu7ab1gCI"}></Youtube>
              <Youtube title={"Flink Forward Europe 2019"} url={"https://www.youtube.com/embed/mlbPYBjXosA"}></Youtube>
              <Youtube title={"Webinar pragmatic industries (in german)"} url={"https://www.youtube.com/embed/YdROZ0C6Qd0"}></Youtube>
            </div>
    </PageSection>
  </Layout>
)


export default SlidesAndVideos;
