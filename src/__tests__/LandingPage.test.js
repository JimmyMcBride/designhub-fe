import React from 'react';
import LandingPage from '../views/LandingPage/LandingPage';
import { useAuth0 } from '../utilities/auth-wrapper';
import rendererWithRouter from '../__testHelpers__/rendererWithRouter';


const user = {
  email: 'johndoe@me.com',
  email_verified: true,
  sub: 'google-oauth2|2147627834623744883746',
}

jest.mock('../utilities/auth-wrapper');
describe('<LandingPage />', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      user,
      loginWithRedirect: jest.fn()
    })
  })

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouter(
        <LandingPage history={{ location: { pathname: '/' } }} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
})
