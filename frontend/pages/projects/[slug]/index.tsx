import type { GetStaticProps, GetStaticPaths } from 'next'
import { InferGetStaticPropsType } from 'next'
import { client } from '../../../src/services/apollo-client';

import styles from './style.module.css'
import { getProjectBySlugQuery } from '../../../src/queries/projects';

interface InfoBlock {
  id: string
  Title: string
  Description: string
}

interface OrderedList {
  id: string
  ListItem: string
}

interface Action {
  id: string
  Title: string
  Description: string
  InfoBlock: InfoBlock[]
  OrderedList: OrderedList[]
}

interface Project {
  id: string
  ProjectName: string
  Period: string
  Slogan: string
  Short_description: string
  Role: string
  Duration: string
  Actions: Action[]
}

const Project = ({ project }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      
      <section>
        {project.Actions.map((action) => {
          if (action.OrderedList.length > 0) {
            return (
              <ol>
                {action.OrderedList.map((item) => (
                  <li key={`OrderedListItem-${item.id}`}>
                    {item.ListItem}
                  </li>
                ))}
              </ol>
            )
          }

          if (action.InfoBlock.length > 0) {
            return (
              <ul>
                {action.InfoBlock.map((infoBlock) => (
                  <li key={`InfoBlockItem-${infoBlock.id}`}>
                    {infoBlock.Title} - {infoBlock.Description}
                  </li>
                ))}
              </ul>
            )
          }

          return (
            <div key={`action-${action.id}`} className={styles.grid}>
              <div>{action.Title}</div>
              <div>{action.Description}</div>
            </div>
          )
        })}
      </section>
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
