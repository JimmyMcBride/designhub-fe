import gql from 'graphql-tag';

const projectPhotos = gql`
  query Project_photos($projectId: Int!) {
    projectphotos(projectId: $projectId) {
      id
      projectId
      url
      description
      title
      created_at
    }
  }
`;

export default projectPhotos;
