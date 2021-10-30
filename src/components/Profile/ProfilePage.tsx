import React from 'react';
import { Redirect } from 'react-router-dom';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ROUTS } from '@constants/routs';
import Account from './Profile/Profile';
import { ProfilePageWrapper } from './ProfilePageStyle';

const ProfilePage: React.FC = () => {
  const { signInUser } = useTypesSelector((state) => state.signIn);
  if (!signInUser) return <Redirect to={ROUTS.SIGNIN_FORM} />;
  return (
    <ProfilePageWrapper>
      <Account />
    </ProfilePageWrapper>
  );
};

export default ProfilePage;
