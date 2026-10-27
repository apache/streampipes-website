import React from 'react';
import Layout from '@theme/Layout';
import {Button, Card, Container, PageIntro, Section} from '../../components/ui';
import {useCases} from '../../components/usecases/data';
import styles from '../../components/usecases/usecases.module.css';

export default function UseCases() {
  return <Layout title="Use cases" description="What teams build with Apache StreamPipes: condition monitoring with OPC UA, PLC data to Kafka and InfluxDB, MQTT and unified namespace, anomaly detection with Python, alarms and notifications.">
    <PageIntro eyebrow="Use cases" title="What people build with StreamPipes." lead="Five scenarios we see often. Each page lists the adapters, processors and sinks involved and links to the guide. All of it runs on a standard installation." actions={<><Button to="/docs/quick-start-guide/">Start with the quickstart</Button><Button to="/integrations/" variant="ghost">Browse integrations</Button></>} />
    <Section tone="light" className={styles.compact}>
      <Container>
        <div className={styles.index}>
          {useCases.map(u => <Card key={u.slug} to={`/use-cases/${u.slug}/`} media={{src: u.cover.src, alt: u.cover.alt}} title={u.title} link="Read the use case">{u.lead}</Card>)}
        </div>
      </Container>
    </Section>
  </Layout>;
}
