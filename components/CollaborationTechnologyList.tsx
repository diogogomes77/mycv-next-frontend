import { CollaborationTechnology } from 'config/generated-sdk/models/collaboration-technology';
import CollaborationTechnologyCard from './CollaborationTechnologyCard';

type Props = {
  technologies: CollaborationTechnology[];
};

const CollaborationTechnologyList: React.FC<Props> = ({ technologies }) => {
  return (
    <ul>
      {technologies.map(collabTech => (
        <li key={`collaboration-${collabTech.technologyId}`}>
          <CollaborationTechnologyCard collabTech={collabTech} />
        </li>
      ))}
    </ul>
  );
};

export default CollaborationTechnologyList;
