//needs testing against data

import gql from 'graphql-tag';

const getInviteCount = gql`
  query Invite($id: ID!) {
    getinvitecount(id: $id) {
      id
      activeUserId
      invitedUserId
      starredProjectsId
      commentsId
      projectId
      projectName
      imageId
      activeUserAvatar
      mainImgUrl
      commentText
      activeUserName
      teamId
      followersId
      type
      message
      unread
      created_at
    }
  }
`;

export default getInviteCount;
