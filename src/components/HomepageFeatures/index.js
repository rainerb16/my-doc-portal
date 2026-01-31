import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Interactive API Documentation',
    Svg: require('@site/static/img/undraw_programming_j1zw.svg').default,
    description: (
      <>
       I specialize in transforming static OpenAPI/Swagger specifications into 
        dynamic, interactive API explorers. By integrating live sandboxes, 
        I allow developers to test endpoints directly from the documentation.
      </>
    ),
  },
  {
    title: 'Documentation Engineering',
    Svg: require('@site/static/img/undraw_process_0wew.svg').default,
    description: (
      <>
        I build and maintain documentation as code using Docusaurus. 
        This includes managing complex build pipelines, versioning, and 
        extensible plugin architectures to ensure docs scale with the product.
      </>
    ),
  },
  {
    title: 'Developer Experience (DX)',
    Svg: require('@site/static/img/undraw_vibe-coding_mjme.svg').default,
    description: (
      <>
        My focus is on creating tools that engineers actually enjoy using. 
        I bridge the gap between complex backend logic and clear, 
        actionable communication to reduce developer friction.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
