import { User } from 'config/generated-sdk';

type Props = {
  user: User;
};

const UserCard: React.FC<Props> = ({ user }) => {
  const { isManager, isDeveloper, fullName } = user;

  return (
    <div>
      <h2>{fullName}</h2>
      {isManager && <h4>Manager</h4>}
      {isDeveloper && <h4>Developer</h4>}
    </div>
  );
};

export default UserCard;
