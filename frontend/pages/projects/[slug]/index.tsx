import type { GetStaticProps, GetStaticPaths } from 'next'
import { InferGetStaticPropsType } from 'next'
import { client } from '../../../src/services/apollo-client';

import styles from './style.module.css'
import { getProjectBySlugQuery } from '../../../src/queries/projects';
import type { Project } from '../../../src/types/project';
import { availablePageBlocks } from '../../../src/components/PageBlock';

const Project = ({ project }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("🚀 ~ Project ~ project:", project)
  if (!project) {
    return (<p>Loading...</p>)
  }
  return (
    <div className={styles.container1290}>
      <section>
        <h3 className={styles.projectTitle}>
          {project.ProjectName}
        </h3>
        <div className={styles.grid}>
          <div>
            <h2 className={styles.slogan}>
              {project.Slogan}
            </h2>  
            <div>
              <p>{project.Short_description}</p>  
            </div>  
          </div>  
          <div>
            <p>Role</p>
            <p>{project.Role}</p>
            <p>Duration</p>
            <p>{project.Duration}</p>
          </div>
        </div>
      </section>
      {project.PageBlocks.map((block) => availablePageBlocks(block))}
      
    </div>
  )
}

export const getStaticProps: GetStaticProps<{ project: Project }> = (async ({ params }) => {
  try {
    const { data } = await client.query({
      query: getProjectBySlugQuery,
      variables: {
        slug: params?.slug,
      },
    });

    const project = data?.project?.data || {};

    return {
      props: {
        project: {
          id: project?.id,
          ...project.attributes
        }
      },
    };

  } catch (error) {
    console.error("Error fetching project data:", error);
  }

  return {
    props: {
      project: null,
    },
  };
})

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export default Project
