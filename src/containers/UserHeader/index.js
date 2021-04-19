import React from 'react';
import { LogoutButton } from '../../components';
import { useAuth } from '../../hooks';
import { Container, WelcomeLabel, UserLabel } from './styles';

export default function UserHeader() {
  const { user } = useAuth();

  return (
    <Container>
      {user?.shortName && (
        <WelcomeLabel>
          Bem-vindo,&nbsp;
          <UserLabel>{user.shortName}</UserLabel>
        </WelcomeLabel>
      )}
      <LogoutButton />
    </Container>
  );
}
